import React from "react";
import { Link } from "react-router-dom";

import RegisterForm from "./RegisterForm/RegisterForm";
import AuthFormHeader from "../../components/shared/AuthForm/AuthFormHeader";
import Alert from "../../components/Alert/Alert";

import AuthForm, { AuthFooter } from "../../styles/shared/AuthForm";
import GradientBackground from "../../styles/shared/GradientBackground";
import Card from "../../styles/shared/Card";

const Register = () => {
  return (
    <GradientBackground>
      <AuthForm>
        <Card width="100%" noHidden>
          <Alert />
          <AuthFormHeader
            title="Create new account"
            subtitle="Join now and connect with your friends."
          />
          <RegisterForm />
          <AuthFooter>
            Already have an account? <Link to="/login">Login now</Link>
          </AuthFooter>
        </Card>
      </AuthForm>
    </GradientBackground>
  );
};

export default Register;
