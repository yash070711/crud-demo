import React from 'react';
//import { BrowserRouter, Routes  , Route } from 'react-router-dom';
import LoginPage from './LoginPage';
import SignupPage from './SignupPage';
import UserListPage from './UserListPage';
import CreateUserPage from './CreateUserPage';
import UpdateUserPage from './UpdateUserPage';
import DeleteComponent from './DeleteComponent ';

function App() {
  return (
    
      <>
        <LoginPage/>
        <SignupPage />
        <UserListPage />
        <CreateUserPage />
        <UpdateUserPage />
        <DeleteComponent/>
      </>
    
  );
}

export default App;

