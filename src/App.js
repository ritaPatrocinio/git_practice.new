import React, {Fragment } from 'react';
import { FaReddit } from 'react-icons/fa';
import './App.css';
import PostList from './features/PostList/PostList.js';
import { SafeAreaView } from 'react-native';

function App() {
  return (
  <Fragment>
  <SafeAreaView style={{ flex: 0, backgroundColor: 'white' }} />
    <div className="App">
      <header className="App-header">
      <FaReddit style={{color: '#001ed8'}} size={30} className="reddit logo-icon" />
      <span style={{color: '#001ed8', display: 'inline'}} >Reddit</span><span style={{display: 'inline'}}>Minimal</span>
      </header>
      <PostList></PostList>
    </div>
    </Fragment>
  );
}

export default App;
