// LoginLogoutButton.tsx
import React, { FC } from 'react';
import { Button } from '@chakra-ui/react';

interface LoginLogoutButtonProps {
  isLoggedIn: boolean;
  onToggleLogin: () => void;
}

const LoginLogoutButton: FC<LoginLogoutButtonProps> = ({ isLoggedIn, onToggleLogin }) => {
  return (
    <Button onClick={onToggleLogin} colorScheme="blue">
      {isLoggedIn ? 'Logout' : 'Login'}
    </Button>
  );
};

export default LoginLogoutButton;
