import React from 'react';
import { useState } from 'react';
import Header from './components/Header/index';
import Main from './components/Main/index';
import SortButtons from './components/SortButtons/SortButtons';
import characters from './characters.json';

const Data = characters;

function App() {

  const[characters, sortChar] = useState(Data);

  const sortName = () => {
    const nameSorted = [...Data].sort(function(a,b) {
      let nameA = a.name.toUpperCase();
      let nameB = b.name.toUpperCase();

      if (nameA < nameB){
        return -1;
      }
      if (nameA > nameB){
        return 1;
      }
      return 0;
    });
    console.log("Names Sorted !");
    sortChar(nameSorted);
  }

  return (
    <div>
      <Header/>
      <SortButtons
        sortName={sortName}
      />
      
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
