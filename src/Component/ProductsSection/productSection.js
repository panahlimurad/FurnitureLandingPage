import React from "react";
import style from "./productSection.module.css"
import { ProductCards } from "../ProductCards/productCards";

export class ProductSection extends React.Component{
    render() {
        return (
          <div className={style.productSection}>
            <ProductCards />
            <ProductCards />
            <ProductCards />
            <ProductCards />
            <ProductCards />
            <ProductCards />
            <ProductCards />
            <ProductCards />
          </div>
        );
    }
}