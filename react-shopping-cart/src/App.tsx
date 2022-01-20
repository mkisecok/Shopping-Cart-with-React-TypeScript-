import { useState } from 'react';
import { useQuery } from 'react-query';
//component
import { Drawer, Grid, Badge, CircularProgress } from '@material-ui/core';
import { AddShoppingCart } from '@material-ui/icons';
import Product from './Product/Product';
//styles
import { StyledButton, Wrapper } from './App.styles';
import './App.css';

export type CartItemType={
  id:number;
  category:string;
  description:string;
  image:string;
  price:number;
  title:string;
  amount:number;
  // rating:number[];

}

const getProducts = async(): Promise <CartItemType[]> =>
  await (await fetch('https://fakestoreapi.com/products')).json();



function App() {
  const { data, isLoading, error }=useQuery<CartItemType[]>('products', getProducts );
  const [ cartOpen,setCartOpen ] = useState(false);
  const [cartProducts, setCartProducts] = useState([] as CartItemType[])
  console.log(data);

  const getTotalItems = (items:CartItemType[]) => null;

  const handleAddToCart = (clickedProduct:CartItemType) => null;

  const handleRemoveFromCart = () => null;

  if(isLoading) return < CircularProgress  />

  if(error) return <div> Something went wrong ...</div>
  
  return (
   <Wrapper>
     <Drawer anchor ='right' open ={cartOpen} onClose={()=> setCartOpen(false)}>
       Cart goes here
     </Drawer>
     <StyledButton onClick={()=> setCartOpen(true)}>
       <Badge badgeContent={getTotalItems(cartProducts)} color='error'>
         <AddShoppingCart/>
       </Badge>
     </StyledButton>
     <Grid container spacing={3}>
       {data?.map( product=>(
         <Grid item key={product.id} xs={ 12 } sm={ 4 } >
           <Product product={product} handleAddToCart={handleAddToCart}/>
         </Grid>
       ))}
     </Grid>
   </Wrapper>
  );
}

export default App;
