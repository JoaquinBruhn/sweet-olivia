import { useParams } from "react-router-dom";
import { getProduct } from "../../../data/productData";
import './productDetail.css'

const ProductDetail = () => {
    

    const { itemTitle } = useParams();

    const product = getProduct(itemTitle);
    console.log(product);

    return(
        <div className="d-flex container my-5">
            <img src={product.picture.desktop} className="col-6"></img>

            <div className="d-flex flex-column col-6 py-2">
                <h2 className="text-left ">{product.title}</h2>
                <h2 className="text-left ">${product.price}</h2>
                <p className="text-left ">TALLE</p>
                <div className="d-flex" style={{margin: "0 70px"}}>
                    {product.size.map((el) => {
                        return (<div className="size"><p>{el}</p></div>)
                    })}
                </div>
                <p className="text-left ">{product.description}</p>
                <button >Comprar</button>
            </div>
        </div>
    )
}


export default ProductDetail;