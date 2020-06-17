import React from 'react';
import logo from './logo.svg';
import './App.css';
import ProductTable from './components/ProductTable'
import './product1.js' 
import {menu} from './index.js'

// let product1={
//   Name: "Iphone",
//   Type: "Electronics",
//   Price:300,
// };
// let product2={
//   Name: "Hat",
//   Type: "Clothing",
//   Price: 50,
// };
// let productArray=[product1, product2];


function App() {
 
  return (
    <div className="App">
    <ProductTable Table={menu}/>
    </div>
  );
}

export default App;
