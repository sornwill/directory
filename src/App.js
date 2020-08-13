import React from 'react';
import Header from './components/Header/index';
import Main from './components/Main/index';
import SortButtons from './components/SortButtons/SortButtons';
import characters from './characters.json';

function App() {
  return (
    <div>
      <Header/>
      <SortButtons/>
      
      {characters.map(characters => (
         <Main
         id={characters.id}
         name={characters.name}
         icon={characters.icon}
         game={characters.game}
         mainChar={characters.mainChar}
         />
      ))};
    </div>
  );
}

export default App;
