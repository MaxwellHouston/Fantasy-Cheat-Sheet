import {
  Card,
  Input,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from '@chakra-ui/react';

const SignUp = () => {
  return (
    <Card padding={'3rem'}>
    <h1>Sign Up</h1>
      <FormControl>
        <FormLabel>User Name</FormLabel>
        <Input type="text" />
        <FormLabel>Email address</FormLabel>
        <Input type="email" />
        <FormLabel>Password</FormLabel>
        <Input type="password" />
        <FormLabel>Confirm Password</FormLabel>
        <Input type="password" />
      </FormControl>
    </Card>
  );
};

export default SignUp;
