import {
  Card,
  Input,
  FormControl,
  FormLabel,
  useToast,
  Button,
} from '@chakra-ui/react';
import { useMutation } from '@tanstack/react-query';
import { useState } from 'react';
import { createUser } from '../../../lib/API/auth';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const toast = useToast();
  const navigate = useNavigate();
  const submitUser = useMutation({
    mutationFn: createUser,
    onSuccess: () => {
      toast({
        title: 'Welcome!',
        description: 'Your account has been created.',
        status: 'success',
        position: 'bottom-right',
        duration: 9000,
        isClosable: true,
      });
      navigate('/login');
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    submitUser.mutate({ email, password, name });
  };
  return (
    <Card padding={'3rem'}>
      <h1>Sign Up</h1>
      <FormControl as="form" onSubmit={handleSubmit}>
        <FormLabel>User name</FormLabel>
        <Input
          type="text"
          required
          value={name}
          onChange={({ target }) => setName(target.value)}
        />
        <FormLabel>Email address</FormLabel>
        <Input
          type="email"
          required
          value={email}
          onChange={({ target }) => setEmail(target.value)}
        />
        <FormLabel>Password</FormLabel>
        <Input
          type="password"
          required
          value={password}
          onChange={({ target }) => setPassword(target.value)}
        />
        <FormLabel>Confirm Password</FormLabel>
        <Input
          type="password"
          required
          value={confirmPassword}
          onChange={({ target }) => setConfirmPassword(target.value)}
        />
        <Button type="submit" isLoading={submitUser.isPending}>
          Create user
        </Button>
      </FormControl>
    </Card>
  );
};

export default SignUp;
