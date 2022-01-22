import { Button } from "@material-ui/core";

import React from "react";
//Types
import { CartItemType } from "../App";

//styles
import { Wrapper } from "./Product.styles";

type Props={
    product:CartItemType;
    handleAddToCart:(clickedProduct: CartItemType)=> void;
}
const Product: React.FC<Props> = ({product, handleAddToCart}) =>{
    
    return(
    <Wrapper>
        <img src={product.image} alt={product.title}/>
        <div>
            <h3>{product.title}</h3>
            <p>{product.description}</p>
          
        </div>
        <h4>€{product.price}</h4>
        <Button onClick={()=>handleAddToCart(product) } variant='contained' color='primary' >Add to Cart</Button>
    </Wrapper>)
};
export default Product