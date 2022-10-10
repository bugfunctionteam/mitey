import { h } from 'preact';
import { FormEvent, useState, useRef } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import {
  H1Row,
  InputRow,
  ExternalLink,
  ExternalLinkRow,
  DisclaimerRow,
} from './LoginStyles';
import { Column } from '~/components/common/layout/MainLayoutStyles';
import { MainLayout } from '~/components/common/layout/MainLayout';
import { Button } from '~/components/login/components/button';
import { HtmlLink } from './components/link';
import { NextPage } from 'next';
import { Input, PasswordInput } from './components/input';
import axios from 'axios';
import { GetTokenResponseData } from '~/api/Authenticate/handlers';
import { Form } from './components/form';

export const LoginPage: NextPage = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const {
    client_name: clientName,
    client_id: clientId,
    response_type: responseType,
    redirect_uri: redirectUri,
    scope,
    state,
  } = router.query;

  const login = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const body = {
      client_id: clientId,
      response_type: responseType,
      redirect_uri: redirectUri,
      grant_type: 'password',
      scope,
      state,
    };
    try {
      //TODO: wrap axios
      const response = await axios.post<GetTokenResponseData>(
        '/api/oauth2/authenticate',
        {
          ...body,
          username: emailRef.current?.value,
          password: passwordRef.current?.value,
        },
      );
      if (response?.status === 200) {
        router.push({
          pathname: '/authorize',
          query: {
            client_name: clientName,
            client_id: response?.data.client_id,
            response_type: response?.data.response_type,
            redirect_uri: response?.data.redirect_uri,
            scope: response?.data.scope,
            state: response?.data.state,
            // authenticated_userid: '', TODO: get this from IDP
          },
        });
      }
      setIsSubmitting(false);
    } catch (error) {
      //TODO: add a component to display error messages.
      setIsSubmitting(false);
    }
  };

  return (
    <MainLayout>
      <Column>
        <Image
          alt="Altruist logo"
          src="/images/main-logo.svg"
          height={52}
          width={176}
        />

        <H1Row>
          Log in to connect your account{' '}
          {clientName ? `with ${clientName}` : ''}
        </H1Row>
      </Column>

      <Column>
        <Form onSubmit={login}>
          <InputRow>
            <Input
              ref={emailRef}
              required
              type="email"
              aria-label="username"
              name="username"
              placeholder="Email"
              disabled={isSubmitting}
            />
          </InputRow>

          <InputRow>
            <PasswordInput ref={passwordRef} disabled={isSubmitting} />
          </InputRow>

          <Button type="submit" disabled={isSubmitting}>
            Log in
          </Button>
        </Form>
        
        <ExternalLinkRow>
          <ExternalLink href={process.env.FORGOT_PASSWORD_URL} target="_blank">
            Forgot password?
          </ExternalLink>
        </ExternalLinkRow>

        <DisclaimerRow>
          Investment management and advisory services are provided by Altruist
          LLC, an SEC registered investment adviser, and brokerage related
          products are provided by Altruist Financial LLC, a member of{' '}
          <HtmlLink
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.finra.org/"
          >
            FINRA
          </HtmlLink>
          /
          <HtmlLink
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.sipc.org/"
          >
            SIPC
          </HtmlLink>
          . By using this website, you understand the information being
          presented is provided for informational purposes only and agree to our{' '}
          <HtmlLink href="/terms">Terms of Use</HtmlLink> and{' '}
          <HtmlLink href="/privacy">Privacy Policy</HtmlLink>.
        </DisclaimerRow>
      </Column>
    </MainLayout>
  );
};
