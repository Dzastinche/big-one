import React from 'react';
import {Route} from 'react-router-dom'
import HomePage from './pages/homepage.jsx';

import './App.css';
  const Homepage=((props)=>{
    return (
    <div>
    {console.log(props)}
      <HomePage />
    </div>
  );
})
const Hats =(()=>{
  return( 
    <div>
    <h1>Hats</h1>
    </div> )
})

const Topiclist =((props)=>{
  return( 
    <div >
    {console.log(props)}
    <h1>Topiclist</h1>
    </div> )
})

class App extends React.Component {
  render() {
    return (
      <div  className='App'>
     <Route exact path='/' component={Homepage}/>
     <Route exact path='/hats' component={Hats}/>
     <Route path='/topiclist' component={Topiclist}/>
     </div>
    );
  }
}

export default App;
