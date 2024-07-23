import React from 'react';
import { useState } from 'react';

import * as Dialog from '@radix-ui/react-dialog';
import { Cross2Icon } from '@radix-ui/react-icons';
// import './App.css';
import Login from './Login';
import Signup from './Signup';

const DialogDemo = () => {

  const [isLogin, setIsLogin] = useState(true);
  const handleLoginClick = () => {
    setIsLogin(true);
  };

  const handleSignupClick = () => {
    setIsLogin(false);
  };

  return (
  <Dialog.Root>
    <Dialog.Trigger asChild>
      <button className="Button violet">Edit profile</button>
    </Dialog.Trigger>
    <Dialog.Portal>
      <Dialog.Overlay className="DialogOverlay" />
      
      
      <Dialog.Content className="DialogContent">

        <div className="flex justify-center items-center">
          <button onClick={handleLoginClick} type="button" class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Login</button>
          <button onClick={handleSignupClick} type="button" class="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Signup</button>
        </div>

        {isLogin?<Login/>:<Signup/>}


      </Dialog.Content>
    </Dialog.Portal>
  </Dialog.Root>
)
};

export default DialogDemo;