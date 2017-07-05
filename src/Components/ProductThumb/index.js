/**
 * <ProductThumbnail
 *     display={card,list}
 *     productCode={productCode}
 *     name={name}
 *     brand={brand}
 *     price ={num}
 *     priceCut = {num}
 *     rating={num}
 *     reviewers={num}
 *     new={boolean}
 *     promo={} />
 *
 */

import './index.css'
import {h, Component} from 'preact'


export default class ProductThumb extends Component {
  constructor(props) {
    super(props);
    this.state = {
      "display": "card",
    }
  }



  render() {
    return (
      <div className={'ProductThumb relative pa2 br2 ba b--black-10'+' '+ this.state.display}>
        <a className="ProductThumb-bgLink absolute db bg-transparent" href={this.props.href}></a>
        <a className="ProductThumb-img relative mb3" href={this.props.href}>
          <img src={this.props.image} alt=""/>
        </a>

        <div className="ProductThumb-detail relative mb2">
          <h5 className="ProductThumb-brand f7">{this.props.brand}</h5>
          <span className="ProductThumb-name db f5 b">{this.props.name}</span>
          <span className="ProductThumb-price db">{this.props.price}</span>
        </div>

        <div className="ProductThumb-action relative flex">
          <button className="ProductThumb-toWishlistButton  w-30 mr2 truncate br2">add to Wishlist</button>
          <button className="ProductThumb-toCartButton w-70 truncate br2">Beli</button>
        </div>
      </div>

    );
  }
}
