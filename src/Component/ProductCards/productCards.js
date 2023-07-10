import React from "react";
import style from "./productCards.module.css"
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";



export class ProductCards extends React.Component {

    constructor() {
        super();
        this.state = {
          count: 0,
          price: 10+"$",
          total: 0,
        };

        this.addOrder = this.addOrder.bind(this)
        this.removeOrder = this.removeOrder.bind(this);
    }

    addOrder() {
        this.setState({
          count: this.state.count + 1,
          total: parseInt(this.state.price) + parseInt(this.state.price),
        });
    }



    removeOrder() {
        this.setState({
            count: this.state.count - 1,
            total: parseInt(this.state.total) - parseInt(this.state.price)
         });
    };

    render() {



        return (
          <div className={style.productCards}>
            <div className={style.mainCards}>
              <img
                src="https://netdna.coolthings.com/wp-content/uploads/2017/10/surface-tension-nucleus-1-360x240.jpg"
                alt="furniture"
              ></img>
              <div className={style.buttons}>
                <button onClick={(this.addOrder)}>
                  <AiOutlinePlus />
                </button>
                <button
                  onClick={this.removeOrder}
                  disabled={this.state.count === 0}
                >
                  <AiOutlineMinus />
                </button>
              </div>
              <p>Price: {this.state.price}</p>
              <p>Count: {this.state.count} </p>
              <p>Total: {this.state.total}</p>
            </div>
          </div>
        );
    }
}

