import { useState } from 'react';
import { useQuery } from 'react-query';
//component
import { Drawer, Grid, Badge, CircularProgress, Button } from '@material-ui/core';
import { AddShoppingCart } from '@material-ui/icons';
import Product from './Product/Product';
import Cart from './Cart/Cart';
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
  

  const getTotalItems = (items:CartItemType[]) => 

    items.reduce((acc:number, item) => acc + item.amount, 0);
  

  const handleAddToCart = (clickedProduct:CartItemType) => {
    setCartProducts(prev=>{
      // is the product already in the cart
      const isProductIn=prev.find(item=>  item.id===clickedProduct.id)
      if(isProductIn){
        return prev.map(item=>(
          item.id===clickedProduct.id
          ?
          {...item, amount:item.amount+1}
          :item
        ))
      }
      // first time the item is added
      return[...prev, {...clickedProduct,amount:1}];
    })
  };

  const handleRemoveFromCart = (id:number) => {
    setCartProducts(prev=>(
      prev.reduce((acc,item)=>{
        if(item.id === id){
          if(item.amount === 1) return acc;
          return [...acc, {...item, amount:item.amount-1}];

        }else{
          return [...acc,item]
        }
      },  [] as CartItemType[])
     
    
    ));
  };

  if(isLoading) return < CircularProgress  />

  if(error) return <div> Something went wrong ...</div>
  
  return (
   <Wrapper>
     <h1>Shopping Online </h1>
     <Drawer anchor ='right' open ={cartOpen} onClose={()=> setCartOpen(false)} >
       <Cart 
       cartItems={cartProducts}
       addToCart={handleAddToCart}
       removeFromCart={handleRemoveFromCart}/>
       <Button onClick={()=>setCartOpen(false)} variant="contained" color='primary' style={{width:'50%', margin:'20px', alignSelf:'flex-end' }} > GO SHOPPING</Button>
     </Drawer>
     
     <StyledButton onClick={()=> setCartOpen(true)}>
       <Badge badgeContent={getTotalItems(cartProducts)} color='error'>
         <AddShoppingCart color='primary' fontSize='large'/>
       </Badge>
     </StyledButton>
     <Grid container spacing={4}>
       {data?.map( product=>(
         <Grid item key={product.id} xs={ 12 } sm={ 6 } md={4} lg={3} >
           <Product product={product} handleAddToCart={handleAddToCart}/>
         </Grid>
       ))}
     </Grid>
   </Wrapper>
  );
}

export default App;
