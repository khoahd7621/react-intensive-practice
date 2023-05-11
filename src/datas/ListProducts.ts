import productImg1 from "@/assets/images/product-1.jpg";
import productImg2 from "@/assets/images/product-2.jpg";
import productImg3 from "@/assets/images/product-3.jpg";
import productImg4 from "@/assets/images/product-4.jpg";
import productImg5 from "@/assets/images/product-5.jpg";
import productImg6 from "@/assets/images/product-6.jpg";
import productImg7 from "@/assets/images/product-7.jpg";
import productImg8 from "@/assets/images/product-8.jpg";
import { Product } from "@/models/Product";

export const listProducts: Product[] = [
  {
    id: 1,
    name: "Bell Pepper",
    slug: "bell-pepper",
    image: productImg1,
    price: 120,
    isDiscount: true,
    discountPrice: 80,
    discountPercent: 30,
    description: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia",
    category: "",
    ratingStar: 4.5,
    ratingCount: 500,
    soldCount: 200,
    inStockCount: 600,
  },
  {
    id: 2,
    name: "Strawberry",
    slug: "strawberry",
    image: productImg2,
    price: 120,
    isDiscount: false,
    discountPrice: 0,
    discountPercent: 0,
    description: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia",
    category: "",
    ratingStar: 4.5,
    ratingCount: 500,
    soldCount: 200,
    inStockCount: 600,
  },
  {
    id: 3,
    name: "Green Beans",
    slug: "green-beans",
    image: productImg3,
    price: 120,
    isDiscount: false,
    discountPrice: 0,
    discountPercent: 0,
    description: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia",
    category: "",
    ratingStar: 4.5,
    ratingCount: 500,
    soldCount: 200,
    inStockCount: 600,
  },
  {
    id: 4,
    name: "Purple Cabbage",
    slug: "purple-cabbage",
    image: productImg4,
    price: 120,
    isDiscount: false,
    discountPrice: 0,
    discountPercent: 0,
    description: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia",
    category: "",
    ratingStar: 4.5,
    ratingCount: 500,
    soldCount: 200,
    inStockCount: 600,
  },
  {
    id: 5,
    name: "Tomatoe",
    slug: "tomatoe",
    image: productImg5,
    price: 120,
    isDiscount: true,
    discountPrice: 80,
    discountPercent: 30,
    description: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia",
    category: "",
    ratingStar: 4.5,
    ratingCount: 500,
    soldCount: 200,
    inStockCount: 600,
  },
  {
    id: 6,
    name: "Brocolli",
    slug: "brocolli",
    image: productImg6,
    price: 120,
    isDiscount: false,
    discountPrice: 0,
    discountPercent: 0,
    description: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia",
    category: "",
    ratingStar: 4.5,
    ratingCount: 500,
    soldCount: 200,
    inStockCount: 600,
  },
  {
    id: 7,
    name: "Carrots",
    slug: "carrots",
    image: productImg7,
    price: 120,
    isDiscount: false,
    discountPrice: 0,
    discountPercent: 0,
    description: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia",
    category: "",
    ratingStar: 4.5,
    ratingCount: 500,
    soldCount: 200,
    inStockCount: 600,
  },
  {
    id: 8,
    name: "Fruit Juice",
    slug: "fruit-juice",
    image: productImg8,
    price: 120,
    isDiscount: false,
    discountPrice: 0,
    discountPercent: 0,
    description: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia",
    category: "",
    ratingStar: 4.5,
    ratingCount: 500,
    soldCount: 200,
    inStockCount: 600,
  },
];
