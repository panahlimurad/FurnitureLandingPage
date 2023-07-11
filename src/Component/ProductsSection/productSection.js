import React from "react";
import style from "./productSection.module.css"
import PropTypes from "prop-types";
import { ProductCards } from "../ProductCards/productCards";


export class ProductSection extends React.Component{

  static defaultProps = {
    products: []
  }
 
  render() {

      

    const { products } = this.props

        return (
          <div className={style.productSection}>
            {products?.map((product, index) => (
              <ProductCards key={index} {...product} />
            ))}
          </div>
        );
    }
}

ProductSection.propTypes = {
  products: PropTypes.array
}