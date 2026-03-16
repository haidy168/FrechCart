export interface CartResponse {
  status: string;
  numOfCartItems: number;
  cartId: string;
  data: CartData;
}
export interface CartState {
  numOfCartItems: number;
  cartId: string;
  products: CartItem[];
  totalCartPrice: number;
  isLoading: boolean;
  error: string | null;
}
export interface CartItem{
  count:number,
  _id: string,
  product:CartProduct,
  price:number,
}
export interface CartData {
  _id: string;
  cartOwner: string;
  products: CartItem[];
  totalCartPrice: number;
}

export interface CartProduct {
  count: number;
  _id: string;
  product: Product;
  price: number;
}

export interface Product {
  _id: string;
  title: string;
  imageCover: string;
  category: string;
  brand: string;
  ratingsAverage: number;
  id: string;
}