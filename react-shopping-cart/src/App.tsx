import { useState } from 'react';
import { useQuery } from 'react-query';
//component
import { Drawer, Grid, Badge, CircularProgress } from '@material-ui/core';
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
  console.log(data);

  const getTotalItems = (items:CartItemType[]) => 

    items.reduce((ack:number, item) => ack + item.amount, 0);
  

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

  const handleRemoveFromCart = () => null;

  if(isLoading) return < CircularProgress  />

  if(error) return <div> Something went wrong ...</div>
  
  return (
   <Wrapper>
     <Drawer anchor ='right' open ={cartOpen} onClose={()=> setCartOpen(false)}>
       <Cart 
       cartItems={cartProducts}
       addToCart={handleAddToCart}
       removeFromCart={handleRemoveFromCart}/>
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
