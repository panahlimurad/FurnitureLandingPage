import React from "react";
import style from "./productCards.module.css"
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";



export class ProductCards extends React.Component {

  constructor() {
    super();
    this.state = {
      count: 0,
      total: 0,
    };

  }
  render() {
    const { image_url, price, } = this.props

    const addOrder = () => {
      this.setState({
        count: this.state.count + 1,
        total: parseInt(this.state.total) + parseInt(price),
      });
    }



    const removeOrder = () => {
      this.setState({
        count: this.state.count - 1,
        total: parseInt(this.state.total) - parseInt(price)
      });
    };




    return (
      <div className={style.productCards}>
        <div className={style.mainCards}>
          <img
            src={image_url}
            alt="furniture"
          ></img>
          <div className={style.buttons}>
            <button onClick={(addOrder)}>
              <AiOutlinePlus />
            </button>
            <button
              onClick={removeOrder}
              disabled={this.state.count === 0}
            >
              <AiOutlineMinus />
            </button>
          </div>
          <p>Price: {price}</p>
          <p>Count: {this.state.count} </p>
          <p>Total: {this.state.total} </p>
        </div>
      </div>
    );
  }
}

