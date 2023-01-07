import { Formik } from 'formik';
import { string } from 'yup';
import { Button } from '../common/buttons/Button';
import { StyledForm } from './FormStyles';

export interface EmployeeFormValues {
  gender: string;
  hireDate: string;
  position: string;
  dob: string;
  department: string;
  supervisor: string;
  address1: string;
  address2: string;
  city: string;
  state: string;
  zip: string;
}

export const EmployeeInfoForm = (props: { initialValues: EmployeeFormValues; }) => (
  <div style={{ flex: 1 }}>
    <Formik
      initialValues={props.initialValues}
      // validate={values => {
      //   const errors = {};
      //   if (!values.email) {
      //     errors.email = 'Required';
      //   } else if (
      //     !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
      //   ) {
      //     errors.email = 'Invalid email address';
      //   }
      //   return errors;
      // }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        /* and other goodies */
      }) => {
        const touchedKeys = Object.keys(touched) as Array<keyof typeof touched>;
        const isUnedited = touchedKeys.reduce((prev, cur) => touched[cur] ? false : prev, true);
        return (
          <StyledForm onSubmit={handleSubmit}>
            <section>
              <input
                type="gender"
                name="gender"
                placeholder="Gender"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.gender}
              />
              {touched.gender && errors.gender}
              <input
                type="hireDate"
                name="hireDate"
                placeholder='Hire Date'
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.hireDate}
              />
              {touched.hireDate && errors.hireDate}
              <input
                type="position"
                name="position"
                placeholder='Position'
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.position}
              />
              {touched.position && errors.position}
            </section>


            <section>
              <input
                type="dob"
                name="dob"
                placeholder='DOB'
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.dob}
              />
              {touched.dob && errors.dob}
              <input
                type="department"
                name="department"
                placeholder='Department'
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.department}
              />
              {touched.department && errors.department}
              <input
                type="supervisor"
                name="supervisor"
                placeholder='Supervisor'
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.supervisor}
              />
              {touched.supervisor && errors.supervisor}
            </section>


            <section>
              <input
                type="address1"
                name="address1"
                placeholder='Address 1'
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.address1}
              />
              {touched.address1 && errors.address1}
              <input
                type="address2"
                name="address2"
                placeholder='Address 2'
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.address2}
              />
              {touched.address2 && errors.address2}
            </section>


            <section>
              <input
                type="city"
                name="city"
                placeholder='City'
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.city}
              />
              {touched.city && errors.city}
              <input
                type="state"
                name="state"
                placeholder='State'
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.state}
              />
              {touched.state && errors.state}
              <input
                type="zip"
                name="zip"
                placeholder='Zip Code'
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.zip}
              />
              {touched.zip && errors.zip}
            </section>


            <Button
              type="submit"
              disabled={isUnedited || isSubmitting}
              text='Submit'
              onClick={() => {console.log('action')}}
            />
          </StyledForm>
        );
      }}
    </Formik>
  </div>
);