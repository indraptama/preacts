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

const searchkey = (array, key) => {
  const searchArray = [];

  for (let vars of array) {
    console.log(vars);
  }
}



export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tabcontent: [],
    }
  }

  // componentDidMount() {
  //   fetch(DATA)
  //     .then(resp => resp.json())
  //     .then(respData => {
  //       this.setState({
  //         tabcontent: objToArray(respData),
  //       });
  //       console.log(this.state.tabcontent);
  //     })
  //     .catch(err => console.error(err))
  // }

  componentDidMount() {
    fetch(DATA)
      .then(resp => resp.json())
      .then(respData => {
        var dataResult = [];
        var dataOri = objToArray(respData);

        for (var dataFilter of dataOri) {
          var k = dataFilter.name;
          if (k === 'price' || k === 'description' || k === 'brand') {
            dataResult.push(dataFilter);
          }
        }
        this.setState({
          tabcontent: dataResult,
        });
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

// <Tabs tabs={this.state.tabcontent} firstSelect={0} />
// <Tabs tabs={dataTab()} firstSelect={0} />
