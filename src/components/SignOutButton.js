import React from 'react';
import { useNavigate } from 'react-router-dom'; // Updated import
import { PassageUser } from '@passageidentity/passage-elements/passage-user';
import useCurrentUser from '../hooks/useCurrectUser';


const SignOutButton = () => {
  const navigate = useNavigate(); // Use useNavigate to get the navigation function

   const result = useCurrentUser();
  // console.log(result);
  // console.log(result.isAuthorized);
  // (user.userInfo().then(val => console.log(val)));
  const handleSignOut = async () => {
    try {
      const user = new PassageUser();
      const value = await user.signOut();
      if (value) {
        console.log("Logged out");
        //result.logout();
        navigate('/'); // Navigate to the "/home" page
      }
    } catch (error) {
      console.error("Error while signing out:", error);
    }
  };

  return (
    // <button >Sign Out</button>
    <button onClick={handleSignOut}>Sign Out</button>
  );
};

export default SignOutButton;
