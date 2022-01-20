import { Button } from "@material-ui/core";
//Types
import { CartItemType } from "../App";

//styles
import { Wrapper } from "./Product.styles";

type Props={
    product:CartItemType;
    handleAddToCart:(clickedProduct: CartItemType)=> void;
}
const Product: React.FC<Props> = ({product, handleAddToCart}) =>(
    <Wrapper>
        <img src={product.image} alt={product.title}/>
        <div>
            <h3>{product.title}</h3>
            <p>{product.description}</p>
            <h4>€{product.price}</h4>
            {/* <p>{product.rating}</p> */}

        </div>
        <Button onClick={()=>handleAddToCart(product) }  >Add to Cart</Button>
    </Wrapper>
);
export default Product