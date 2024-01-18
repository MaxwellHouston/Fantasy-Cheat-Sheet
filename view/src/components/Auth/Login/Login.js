import {
  Card,
  Input,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from '@chakra-ui/react';

const Login = () => {
  return (
    <Card padding={'3rem'}>
      <h1>Log in</h1>
      <FormControl>
        <FormLabel>Email address</FormLabel>
        <Input type="email" />
        <FormLabel>Password</FormLabel>
        <Input type="password" />
      </FormControl>
    </Card>
  );
};

export default Login;
