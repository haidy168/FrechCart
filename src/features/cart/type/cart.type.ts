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

export interface CartItem {
  _id: string;       // الـ CartItem id
  count: number;     // عدد القطع
  price: number;     // سعر الوحدة
  product: Product;  // المنتج نفسه
}

export interface CartData {
  _id: string;
  cartOwner: string;
  products: CartItem[];
  totalCartPrice: number;
}

export interface Product {
  _id: string;
  id: string;            // ممكن يكون ID من الـ API
  title: string;
  imageCover: string;
  quantity: number;      // الكمية المتاحة في المخزن
  category: {
    _id: string;
    name: string;
  };
  brand: {
    _id: string;
    name: string;
  };
  ratingsAverage: number;
}