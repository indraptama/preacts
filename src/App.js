import './App.css'
import {h, Component} from 'preact'
import fetch from 'unfetch'
import _ from 'lodash'


import ProductThumb from './Components/ProductThumb'

const ProductThumbData = {
  "code": "2456-xx",
  "brand": "Asus",
  "name": "X441UV I3-6006 - RAM 8GB - VGA NVDIA GT920 2GB - HDD 500GB - 14 - DOS",
  "price": 8500000,
  "priceCut": 20,
  "rating": 5,
  "reviewers": 5,
  "new": true,
  "promo": true,
  "image": "img/oneplus5-front.jpg",
  "href": "img/oneplus5-front.jpg"
}



export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tabcontent: [],
    }
  }


  render() {
    return (
      <div className="App">
         <ProductThumb
             display={"card"}
             productCode={ProductThumbData.code}
             name={ProductThumbData.name}
             brand={ProductThumbData.brand}
             price ={ProductThumbData.price}
             priceCut = {ProductThumbData.priceCut}
             rating={ProductThumbData.rating}
             reviewers={ProductThumbData.reviewers}
             new={ProductThumbData.new}
             image={ProductThumbData.image}
             promo={ProductThumbData.promo}
             href={ProductThumbData.href}
           />
      </div>
    )
  }
}

// <Tabs tabs={this.state.tabcontent} firstSelect={0} />
// <Tabs tabs={dataTab()} firstSelect={0} />
