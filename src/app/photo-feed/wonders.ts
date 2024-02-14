import { StaticImageData } from "next/image";
import photos1 from "./photos/1.jpg";
import photos2 from "./photos/2.jpg";
import photos3 from "./photos/3.jpg";
import photos4 from "./photos/4.jpg";
import photos5 from "./photos/5.jpg";
import photos6 from "./photos/6.jpg";
import photos7 from "./photos/7.jpg";

export type ProductImage = {
  id: string;
  name: string;
  src: StaticImageData;
  price: string;
  reviews: string;
};

const productsImages: ProductImage[] = [
  {
    id: "1",
    name: "GIORGIO ARMANI Main Line Cotton Regular Fit Polo T-Shirt",
    src: photos1,
    price: '$2100.00',
    reviews: "Reviews",
  },
  {
    id: "2",
    name: "JIMMY CHOO Wilmer JC Monogram Backpack",
    src: photos2,
    price: '$200.00',
    reviews: "Reviews",
  },
  {
    id: "3",
    name: "GIORGIO ARMANI Main Line Viscose Relaxed Fit Shirt",
    src: photos3,
    price: '$1230.00',
    reviews: "Reviews",
  },
  {
    id: "4",
    name: "CALVIN KLEIN JEANS SS Teadye Standard Logo Crew-Neck T-Shirt",
    src: photos4,
    price: '$3320.00',
    reviews: "Reviews",
  },
  {
    id: "5",
    name: 'GIORGIO ARMANI Main Line Polyamide Regular Fit Blouson',
    src: photos5,
    price: '$800.00',
    reviews: "Reviews",
  },
  {
    id: "6",
    name: "COACH Limited Edition Typography Woven Muffler",
    src: photos6,
    price: '$670.00',
    reviews: "Reviews",
  },
  {
    id: "7",
    name: "A COLD WALL Vector Monogram Cotton Polo T-Shirt",
    src: photos7,
    price: '$999.00',
    reviews: "Reviews",
  },
];

export default productsImages;
