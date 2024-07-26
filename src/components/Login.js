import { Formik, Field, Form } from 'formik';

const Login = () => (
  <div>
    
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
      }}
      onSubmit={async (values) => {
        await new Promise((r) => setTimeout(r, 500));
        alert(JSON.stringify(values, null, 2));
      }}
    >
      <Form className='form'>
      <h1 className='form'>Sign Up</h1>

      <div className='form-container'>
        <label htmlFor="firstName">First Name</label>
        <Field id="firstName" className="input-field" name="firstName" placeholder="Jane" />

        <label htmlFor="lastName">Last Name</label>
        <Field id="lastName" className="input-field" name="lastName" placeholder="Doe" />

        <label htmlFor="email">Email</label>
        <Field
          className="input-field"
          id="email"
          name="email"
          placeholder="jane@acme.com"
          type="email"
        />
        <label className='forget-p'><p>Forget password?</p> <p>Create a new account?</p></label>
        <button className='button' type="submit">Submit</button>
        </div>
      </Form>
    </Formik>
  </div>
);

export default Login;