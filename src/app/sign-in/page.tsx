// src/app/sign-in/[...page].tsx
import { SignIn } from '@clerk/nextjs';

const SignInPage = () => (
  <div>
    <h1>Sign In</h1>
    <SignIn routing="path" path="/sign-in" />
  </div>
);

export default SignInPage;
