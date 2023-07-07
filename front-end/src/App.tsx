import React from 'react';
import logo from './logo.svg';
import './App.css';
import Card from "./components/Card"
import Form from './components/Form';
function App() {
  return (
    <>
        <Card>
          <>
            <h1>URL Shorter</h1>
            <Form/>
          </>
        </Card>
    </>
  );
}

export default App;
