require('dotenv').config();

const yaml = require('js-yaml');
const axios = require('axios');
const path = require('path');
const fs = require('fs');
const { generateApi } = require('swagger-typescript-api');

const OUTPUT_PATH = './src/types/swagger';
const OUTPUT = path.resolve(process.cwd(), OUTPUT_PATH);
const INPUT_PATH = './public/Oauth2KongSpec.json';
const INPUT_PATH2 = './public/Oauth2KongSpec2.json';

const URLS = [
  ...new Set(
    Object.values(process.env).filter((envVar) => {
      try {
        return new URL(envVar).hostname === 'platform.dev1.altruistnet.tech';
      } catch {
        return false;
      }
    }),
  ),
];

const parseFile = (file) => {
  if (typeof file !== 'string') return file;

  try {
    return JSON.parse(file);
  } catch (e) {
    return yaml.load(file);
  }
};

const codegen = async (url) => {
  console.log('URL', url);
  const parts = url.split('/');
  const name = parts[parts.length - 1];
  const docs = `${url}/v2/api-docs`;

  try {
    const res = await axios.get(docs);
    const spec = parseFile(res.data);

    delete spec.info.termsOfService;

    try {
      await generateApi({
        name: `${name}.ts`,
        spec,
        output: OUTPUT,
        generateClient: true,
        httpClientType: 'axios',
        generateRouteTypes: true,
        silent: false,
      });

      console.log(`✅ ${docs} [${OUTPUT_PATH}/${name}.ts]`);
    } catch {
      console.log(`❌ ${docs} [FAILED CODEGEN]`);
    }
  } catch {
    console.log(`💀 ${docs} [FAILED FETCHING]`);
  }
};

const generateLocalCodegen = async () => {
  try {
    const filename = 'kong.ts';
    const rawdata = fs.readFileSync(INPUT_PATH);
    const spec = JSON.parse(rawdata);

    await generateApi({
      name: filename,
      spec,
      output: OUTPUT,
      generateClient: true,
      httpClientType: 'axios',
      generateRouteTypes: true,
      silent: false,
    });

    console.log(`✅ ${INPUT_PATH} [${OUTPUT_PATH}/${filename}]`);
  } catch (err) {
    console.log(`❌ ${INPUT_PATH} [FAILED CODEGEN LOCAL] ${err}`);
  }

  try {
    const filename = 'kong2.ts';
    const rawdata = fs.readFileSync(INPUT_PATH2);
    const spec = JSON.parse(rawdata);

    await generateApi({
      name: filename,
      spec,
      output: OUTPUT,
      generateClient: true,
      httpClientType: 'axios',
      generateRouteTypes: true,
      silent: false,
    });

    console.log(`✅ ${INPUT_PATH2} [${OUTPUT_PATH}/${filename}]`);
  } catch (err) {
    console.log(`❌ ${INPUT_PATH2} [FAILED CODEGEN LOCAL] ${err}`);
  }
};

Promise.all([...URLS.map(codegen), generateLocalCodegen()]);
