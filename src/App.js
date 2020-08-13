import React from 'react';
import Header from './components/Header/index';
import Main from './components/Main/index';
import SortButtons from './components/SortButtons/SortButtons';

function App() {
  return (
    <div>
      <Header/>
      <SortButtons/>
      <Main/>
    </div>
  );
}

export default App;
