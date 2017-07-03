import './App.css'
import {h, Component} from 'preact'
import fetch from 'unfetch'
import _ from 'lodash'

const DATA = "http://localhost:3000/product.json";

const TabData = ({DATA}) => {
  fetch(DATA)
    .then(resp => resp.json())
    .then(tabData => {
      console.log(tabData);
    })
}

function getData(link) {
  var data;
  fetch(link)
    .then(resp => resp.json())
    .then(respData => {
      var tabData = _.clone(respData);
      var objectKey = _.keys(tabData);
      console.log(objectKey);
    })

      // data.push(Description, Review)

    return data;
}



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




import ImageCarousel from './Components/ImageCarousel'
import TabComponent from './Components/Tabs'


export default class App extends Component {
  render() {
    return <div className="App">
      <TabComponent tabs={tabs} firstSelect={0} />
      {/* <ImageCarousel Data={DATA} /> */}
      {console.log(getData(DATA))}
    </div>
  }
}
