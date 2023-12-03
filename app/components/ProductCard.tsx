import React from "react";
import { ProductInt } from "@/app/types/product";
import Button from "./Button";

interface ProductCardProps extends ProductInt {
  className?: string;
  quantity?: number;
}

const ProductCard = ({
  id,
  title,
  image,
  price,
  description,
  category,
  className,
}: ProductCardProps) => {
  return (
    <div className="flex flex-col items-stretch justify-around p-4 rounded-md bg-slate-50 text-slate-900">
      <img src={image} alt={title} className="object-contain h-48 mb-4" />
      <p className="text-xs">{category}</p>
      <p className="text-lg font-bold leading-tight tracking-tight text-slate-800">
        {title}
      </p>
      <p className="self-end p-3 bg-indigo-600 rounded-3xl text-indigo-50">
        $ {price}
      </p>
      {/* <p>{description}</p> */}
      <Button className="self-center" variant="secondary">
        Add to Cart
      </Button>
    </div>
  );
};

export default ProductCard;
