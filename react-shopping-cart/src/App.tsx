import { useState } from 'react';
import { useQuery } from 'react-query';
//component
import { Drawer, Grid, Badge, CircularProgress } from '@material-ui/core';
import { AddShoppingCart } from '@material-ui/icons';
import Product from './Product/Prduct';
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
  rating:number;

}

const getProducts = async(): Promise <CartItemType[]> =>
  await (await fetch('https://fakestoreapi.com/products')).json();



function App() {
  const { data, isLoading, error }=useQuery<CartItemType[]>('products', getProducts );
  console.log(data);

  const getTotalItems = () => null;

  const handleAddToCart = (clickedProduct:CartItemType) => null;

  const handleRemoveFromCart = () => null;

  if(isLoading) return < CircularProgress  />

  if(error) return <div> Something went wrong ..</div>
  
  return (
    <div className="App">
    Start
    </div>
  );
}

export default App;
