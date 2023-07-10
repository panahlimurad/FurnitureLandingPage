import React from "react";
import { AboutShop } from "./Component/AboutShop/aboutShop";
import { ProductSection } from "./Component/ProductsSection/productSection";


export class App extends React.Component{
    render() {
        return (
            <main>
            <AboutShop />
            <ProductSection />
            </main>
        )
    }
}