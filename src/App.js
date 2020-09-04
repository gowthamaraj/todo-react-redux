import React from 'react';
import './App.css';
import Input from './components/input'
import Header from './components/header'
import ListWrapper from './components/list/ListWrapper'


function App() {
  return (
    <div className="App">
      <Header />
      <Input />
      <ListWrapper />
    </div>
  );
}

export default (App);
