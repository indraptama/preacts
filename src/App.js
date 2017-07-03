import './App.css'
import {h, Component} from 'preact'
import fetch from 'unfetch'
import _ from 'lodash'

import ImageCarousel from './Components/ImageCarousel'
import TabComponent from './Components/Tabs'

const DATA = "http://localhost:3000/product.json";

const tabs = [{
  name: 'Tab 1',
  content: 'Content for 1'
}, {
  name: 'Tab 2',
  content: 'Content for 2'

}, {
  name: 'Tab 3',
  content: 'Content for 3'
}];

const getData = (dataSrc) => {
  var arrayData = null;
  fetch(dataSrc)
    .then(resp => resp.json())
    .then(respData => {
      var tabDatas = _.clone(respData);
      var tabArray = _.map(tabDatas, function(value,index) {
        return {
          name: tabDatas.index,
          content: tabDatas.value,
        }
      })
      arrayData = new Array(tabArray);
    })
    .catch(err => console.error(err));

  var result = arrayData;
  return result;
}

export default class App extends Component {



  render() {
    const test = getData(DATA);
    return <div className="App">
      <TabComponent tabs={tabs} firstSelect={0} />
      {console.log(test,tabs)}
    </div>
  }
}
