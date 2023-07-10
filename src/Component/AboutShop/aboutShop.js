import React from "react";
import style from "./aboutShop.module.css"


export class AboutShop extends React.Component{
    render() {
        return (
            <div className={style.aboutShop}>
                <div>
                    <h1>Furniture</h1>
                    <p>Landing Page</p>
                    <button>ORDER</button>
                </div>
            </div>
        )
    }
}