
import { getProductById } from "../server/products.action"
import  ProductInfo from "../component/ProductDetails/ProductDetails";

export default async function ProductDetailsScreen({productId}:{productId:string}){
const response = await getProductById({id:productId });
  return <>
  <ProductInfo product={response.data}/>
  </>
}