import React from 'react';
import './App.css';
import UserProfile from './components/UserProfile';
const App = () => {
  const user = {
    name: 'Giridharan S',
    email: 'giridharans.22it@kongu.edu',
    bio: 'Software developer with a passion for collaboration.',
    college:'Kongu Engineering College',
    avatarUrl: "../imgs/me.png"
  };

  return (
    <div className="App">
      <UserProfile 
        name={user.name} 
        email={user.email} 
        bio={user.bio} 
        college={user.college}
        avatarUrl={user.avatarUrl} 
      />
    </div>
  );
};

export default App;
