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


const StarRating = (rating) => {
  const star = '<i className="icon icon-star"/>';
  if ( rating <= 5 ) {


    return star

  }
  return "rating error"
}

export default class ProductThumb extends Component {
  constructor(props) {
    super(props);
    this.state = {
      "display": "card",
    }
  }



  render() {
    return (
      <a className={'ProductThumb relative pa2 br2 ba b--black-10'}  href={this.props.href}>
        <div className="ProductThumb-img relative mb2">
          <img src={this.props.image} alt=""/>
        </div>

        <div className="ProductThumb-detail relative mb2">
          <h5 className="lh-solid f7 mb2">
            <span className="ProductThumb-brand">{this.props.brand} </span>
            <span className="ProductThumb-name">{this.props.name}</span>
          </h5>
          <div className="ProductThumb-price f5 lh-solid mb3">
            <span className="ProductThumb-priceOri dib f7 gray strike mr2">Rp. {(this.props.price).toLocaleString('id')}</span>
            <span className="ProductThumb-priceCut dib f7 b">{this.props.priceCut}%</span>
            <span className="ProductThumb-priceAfterCut db green">Rp. {(this.props.price).toLocaleString('id')}</span>
          </div>
          <div className="ProductThumb-review flex f7">
            <div className="ProductThumb-rating w-50">{StarRating(this.props.rating)}</div>
            <div className="ProductThumb-reviewer w-50">{this.props.reviewers}</div>
          </div>

        </div>
      </a>

    );
  }
}
