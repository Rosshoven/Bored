// import logo from './logo.svg';
// import './App.css';
// import bootstrap so can use the css file in bootstrap library
import 'bootstrap/dist/css/bootstrap.min.css'
// importing components from react-bootstrap
import { Container, InputGroup, FormControl, Button, Row, Card } from 'react-bootstrap'
import { useState, useEffect } from 'react';
import Activities from './Activities';
import "./index.css";


function App() {
  return <Activities />
}

export default App;
