import React from 'react';
import { useNavigate } from 'react-router-dom';
import { PassageUser } from '@passageidentity/passage-elements/passage-user';

const SignOutButton = () => {
  const navigate = useNavigate(); 
  const handleSignOut = async () => {
    try {
      const user = new PassageUser();
      const value = await user.signOut();
      if (value) {
        navigate('/'); 
        window.location.reload();
      }
    } catch (error) {
      console.error("Error while signing out:", error);
    }
  };

  return (
    <button onClick={handleSignOut}>Sign Out</button>
  );
};

export default SignOutButton;
