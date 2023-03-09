import React, { useState } from 'react';
import './App.css';
import List from './components/List';
import AddToList from './components/AddToList';

export interface Istate {
  people: {
    name: string;
    age: number;
    url: string;
    note?: string;
  }[]
}

function App() {

const [people, setPeople] = useState<Istate['people']>([
  {
  name: 'mano vardas',
  url: '',
  age: 34,
  note: 'kazkas parasyta'
},
{
  name: 'kitas vardas',
  url: '',
  age: 32,
},
])


  return (
    <div className="App">
     <h1>Zmoniu sarasas</h1>
     <List people = {people}/>
     <AddToList people={people} setPeople={setPeople} />
    </div>
  );
}

export default App;
