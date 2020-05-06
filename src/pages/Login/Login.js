import React from "react";
import { Link } from "react-router-dom";

import LoginForm from "./LoginForm/LoginForm";
import AuthFormHeader from "../../components/shared/AuthForm/AuthFormHeader";

import AuthForm, { AuthFooter } from "../../styles/shared/AuthForm";
import GradientBackground from "../../styles/shared/GradientBackground";
import Card from "../../styles/shared/Card";

const Login = () => {
  return (
    <GradientBackground>
      <AuthForm>
        <Card width="100%">
          <AuthFormHeader
            title="Welcome back"
            subtitle="We're excited to see you again"
          />
          <LoginForm />
          <AuthFooter>
            Don't have an account yet? <Link to="/register">Create now!</Link>
          </AuthFooter>
        </Card>
      </AuthForm>
    </GradientBackground>
  );
};

export default Login;
