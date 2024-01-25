import {
  Card,
  Input,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Button,
} from '@chakra-ui/react';
import { useMutation } from '@tanstack/react-query';
import { useState } from 'react';
import { logIn } from '../../../lib/API/auth';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const logInMutation = useMutation({mutationFn: logIn, onSuccess: () => {
    navigate('/dashboard');
  }})

  const handleSubmit = (e) => {
    e.preventDefault();
    logInMutation.mutate({email, password})
  }
  return (
    <Card padding={'3rem'}>
      <h1>Log in</h1>
      <FormControl as='form' onSubmit={handleSubmit}>
        <FormLabel>Email address</FormLabel>
        <Input type="email" value={email} onChange={({target}) => setEmail(target.value)} />
        <FormLabel>Password</FormLabel>
        <Input type="password" value={password} onChange={({target}) => setPassword(target.value)} />
        <Button type='submit'>Log In</Button>
      </FormControl>
    </Card>
  );
};

export default Login;
