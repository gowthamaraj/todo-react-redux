import React, {useState} from 'react';
import './App.css';
import Input from './components/input'
import Header from './components/header'
import ListWrapper from './components/list/ListWrapper'

function App() {
  const data = [{key:Math.random(),content:"Buy some chocos"},{key:Math.random(),content:"Buy some fruits"}]
  const [items, update] = useState(data)
  return (
    <div className="App">
      <Header />
      <Input items={items} update={update}/>
      <ListWrapper items={items} update={update}/>
    </div>
  );
}

export default App;
