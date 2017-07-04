import './App.css'
import {h, Component} from 'preact'
import fetch from 'unfetch'
import _ from 'lodash'

import ImageCarousel from './Components/ImageCarousel'
import Tabs from './Components/Tabs'

const DATA = "http://localhost:3000/product.json";
const DATA2 = "http://localhost:3000/tabs.json";

const objToArray = (Obj) => {
  let result = [];
  Object.keys(Obj).forEach((value, idx) => {
    var mergeKeyandContent = {
      key: idx,
      name: value,
      content: Obj[value]
    };
    result.push(mergeKeyandContent)
  });
  return result;
};


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tabcontent: [],
    }
  }

  componentDidMount() {
    fetch(DATA)
      .then(resp => resp.json())
      .then(respData => {
        var dataArray = objToArray(respData);


        // var dataArray = _.map(respData, function(value, idx) {
        //   return {
        //     name: idx,
        //     content: value
        //   };
        // });

        this.setState({
          tabcontent: objToArray(respData),
        })
      })
      .catch(err => console.error(err))
  }

  render() {
    return (
      <div className="App">
        <Tabs tabs={this.state.tabcontent} firstSelect={0} />
      </div>
    )
  }
}

// <Tabs tabs={dataTab()} firstSelect={0} />
