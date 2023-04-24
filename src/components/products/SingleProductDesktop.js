import { useEffect, useState } from "react";
import {

  Product,
  
} from "../../styles/product";
import { Button, Stack, Tooltip, Typography } from "@mui/material";
import ProductMeta from "./ProductMeta";

export default function SingleProductDesktop({ product, matches }) {


  return (
    <>
      <Product>
        <Button sx={{background:'#A4BC92',height:'55px'}}>{product.image}</Button>
       
      </Product>
      <ProductMeta product={product} />
    </>
  );
}
