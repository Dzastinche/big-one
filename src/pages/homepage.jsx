import React from 'react';
import '../pages/homepage.scss'
import Directory from '../components/directory/directory';
import '../components/directory/directory.scss'
const HomePage = () => (
    <div className='homepage'>
      <h1>Welcome to my Homepage</h1>
     <Directory className="directory-menu"/>
    </div>
  );
  
  export default HomePage;