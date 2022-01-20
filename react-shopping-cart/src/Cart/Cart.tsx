import CartItem from "../CartItem/CartItem";
import  {Wrapped}  from './Cart.styles'
import { CartItemType } from "../App";

type Props={
    cartItems: CartItemType[];
    addToCart:(clickedProduct: CartItemType)=>void;
    removeFromCart:(id:number)=>void;
}
const Cart:React.FC<Props> =({cartItems, addToCart, removeFromCart}) =>{

    const calculateTotal=(items:CartItemType[])=>
        items.reduce((acc:number ,item)=> acc + item.amount*item.price,0);
    
    return(
        <Wrapped>
            <h2>Your Shopping Cart</h2>
            
              {  cartItems.length ===0 ? <p>No items in Cart.</p>:null }
              { cartItems.map(item=>(
                  <CartItem
                  key={item.id}
                  item={item}
                  addToCart={addToCart}
                  removeFromCart={removeFromCart}
                   />
              ))}
            <h2>Total: € {calculateTotal(cartItems).toFixed(2)}</h2>
        </Wrapped>
    )
}
export default Cart