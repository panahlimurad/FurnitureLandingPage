import React from "react";
import { AboutShop } from "./Component/AboutShop/aboutShop";
import { ProductSection } from "./Component/ProductsSection/productSection";



const data = [
  {
    image_url:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5dM1VnYnUmNYnxH1PwSY_wcT43jG97jHZuw&usqp=CAU",
    price: 35 + "$",
  },
  {
    image_url:
      "https://www.sunnyoverseas.com/wp-content/themes/sunnyoverseas/img/m-table.jpg",
    price: 45 + "$",
  },
  {
    image_url:
      "https://brooklynspace.co/cdn/shop/products/monroe_serpentine_sofa_-_light_blue_velvet-_brooklyn_space_modern_furniture_2.jpg?v=1629413815",
    price: 250 + "$",
  },
  {
    image_url:
      "https://stylecaster.com/wp-content/uploads/2022/03/mid-century-modern-furniture.jpg",
    price: 300 + "$",
  },
  {
    image_url:
      "https://www.ignant.com/wp-content/uploads/2020/12/ignant-design-instrmnt-studio-05-min-1440x1052.jpg",
    price: 100 + "$",
  },
  {
    image_url:
      "https://designwanted.com/wp-content/uploads/2023/04/Artu-_-modern-furniture-_-innovation-_-sustainability-6.jpg",
    price: 120 + "$",
  },
  {
    image_url:
      "https://images.woodenstreet.de/image/data/Blog%20images/29thmarch/2.jpg",
    price: 55 + "$",
  },
  {
    image_url:
      "https://m.media-amazon.com/images/I/51omDPkBN4L._AC_UF894,1000_QL80_DpWeblab_.jpg",
    price: 90 + "$",
  },
];



export class App extends React.Component {
  constructor() {
    super();
    this.state = {
      isShow: false,
    };
  }

  showTotal() {
    this.setState({ isShow: !this.state.isShow });
  }

    render() {
      
        
        console.log("isShow", this.state.isShow);
        
    return (
      <main>
        <AboutShop isShow={this.showTotal.bind(this)} />
        <ProductSection products={data} />
      </main>
    );
  }
}