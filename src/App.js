import React from 'react';
import { useState } from 'react';
import Header from './components/Header/index';
import Main from './components/Main/index';
import SortButtons from './components/SortButtons/SortButtons';
import SearchBar from './components/SearchBar/search';
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

  const sortGame = () => {
    const gameSorted = [...Data].sort(function(a,b) {
      let numA = a.keyNum;
      let numB = b.keyNum;

      return numA - numB;
    });

    sortChar(gameSorted);
  }

  const showMain = () => {
    const main = [...Data].filter(char => char.mainChar === true);
    sortChar(main);
  }

  const showSide = () => {
    const side = [...Data].filter(char => char.mainChar === false);
    sortChar(side);
  }
  
  //Revert to original.
  // const showAll = () => {
  //   const all = Data;

  //   console.log("Showing All");
  //   sortChar(all);
  // }

  //need to add searchBar when finished
  return (
    <div>
      <Header/>
     
      <SortButtons
        sName={sortName}
        sMain={showMain}
        sSide={showSide}
        sGame={sortGame}
      />
      
      {characters.map(characters => (
         <Main
         name={characters.name}
         icon={characters.icon}
         game={characters.game}
         trait={characters.trait}
         />
      ))};
    </div>
  );
}

export default App;
