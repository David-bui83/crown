import React from 'react';
import SingIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';

import './sign-in-and-sign-up.styles.scss';

const SignInAdnSignUpPage = () => (
  <div className="sign-in-and-sign-up">
    <SingIn />
    <SignUp />
  </div>
);

export default SignInAdnSignUpPage;