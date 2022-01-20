import { useState } from 'react';
import { useQuery } from 'react-query';
//component
import { Drawer, LinearProgress, Grid, Badge } from '@material-ui/core';
import { AddShoppingCart } from '@material-ui/icons';
//styles
import { Wrapper } from './App.styles';
import './App.css';

export type CartItemType={
  id:number;
  category:string;
  description:string;
  image:string;
  price:number;
  title:string;
  amount:number;

}

const getProducts = async()=>{
  await (await fetch('https://fakestoreapi.com/products')).json();
}


function App() {
  return (
    <div className="App">
    Start
    </div>
  );
}

export default App;
