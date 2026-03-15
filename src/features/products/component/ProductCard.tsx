'use client'
import { faEye, faHeart, faStar as regularStar } from "@fortawesome/free-regular-svg-icons";
import { faArrowsRotate, faPlus, faStar as solidStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Product } from "../types/Product.types";
import Rating from "./Rating";
import { addProductToCart, getLoggedUserCard } from "@/features/cart/server/cart.action";
import { toast } from "react-toastify";
import { setCartInfo } from "@/features/cart/store/cart.slice";
import { useDispatch } from "react-redux";
import { useAppDispatch } from "@/store/store";

export default function ProductCard({info}:{info:Product}) {

const  {id, category, title, imageCover, ratingsAverage, ratingsQuantity, price, priceAfterDiscount}= info
const dispatch= useAppDispatch();

const onSale = priceAfterDiscount ? priceAfterDiscount < price : false;

const discountPercentage = priceAfterDiscount
? Math.round((price - priceAfterDiscount) / price * 100)
: 0;
const  handleAddToCard=async()=>{
try{const response = await addProductToCart({productId: id})
if(response.status==='success'){
  toast.success(response.message);
const cartInfo= await getLoggedUserCard();
dispatch(setCartInfo(cartInfo));
}

}catch(error){

toast.error("failed to add product to cart")
}
}

  
return (

<div className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition p-4">

{/* image */}
<div className="relative group">

<img
className="w-full h-56 object-contain"
src={imageCover}
alt={title}
/>

{/* discount */}
{
onSale && (
<span className="absolute top-3 left-3 bg-red-500 text-white text-xs px-2 py-1 rounded">
-{discountPercentage}%
</span>
)
}

{/* icons */}
<div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition">

<button className="bg-white w-8 h-8 rounded-full shadow flex items-center justify-center hover:text-emerald-600">
<FontAwesomeIcon icon={faHeart}/>
</button>

<button className="bg-white w-8 h-8 rounded-full shadow flex items-center justify-center hover:text-emerald-600">
<FontAwesomeIcon icon={faArrowsRotate}/>
</button>

<button className="bg-white w-8 h-8 rounded-full shadow flex items-center justify-center hover:text-emerald-600">
<FontAwesomeIcon icon={faEye}/>
</button>

</div>

</div>

{/* info */}
<div className="mt-3">

{/* category */}
<p className="text-gray-400 text-sm">
{category.name}
</p>

{/* title */}
<h3 className="font-semibold text-gray-800 line-clamp-2">
{title}
</h3>

{/* rating */}
<div className="flex items-center mb-2">

  <div className="flex text-amber-400 mr-2 ">
    <Rating rating={ratingsAverage} />
  </div>

  <span className="text-xs text-gray-500">
    {ratingsAverage} ({ratingsQuantity} reviews)
  </span>

</div>

{/* price */}
<div className="flex justify-between items-center mt-3">

<div className="flex gap-2 items-center">

<span className="text-emerald-600 font-bold text-lg">
{priceAfterDiscount ?? price} EGP
</span>

{
onSale && (
<span className="text-gray-400 line-through text-sm">
{price} EGP
</span>
)
}

</div>

<button onClick={handleAddToCard} className="bg-emerald-600 text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-emerald-700">
<FontAwesomeIcon icon={faPlus}/>
</button>

</div>

</div>

</div>

);
}