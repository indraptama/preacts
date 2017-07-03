import {h, Component} from 'preact'
import _ from 'lodash'
import fetch from 'unfetch'

export default class Tabs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      tabTitles:[],
      tabsContents: []
    }
  }

  componentDidMount() {
    fetch(this.props.Data)
      .then(resp => resp.json())
      .then(tabData => {

        var Description = tabData.description;
        var Specification = tabData.specification;
        var Review = tabData.reviews;

        console.log(Review);

        this.setState({
          tabTitles: tabData.name,
          tabsContents: Review
        })
      })
      .catch(err => console.error(err))
  }

  render() {
    return (
      <div className="Tabs">
        <div className="TabsAnchor">
          <TabsAnchorItem title="hallo" link="#"/>
        </div>
        <div className="TabsContent">
          <TabsContentItem content={this.state.tabsContents} id="xxx"/>
        </div>
      </div>);
  }
}



const TabsAnchorItem = ({title, link}) => (
  <a className="TabsAnchor-item" href={link}>{"this is anchor 1"}</a>
);

const TabsContentItem = ({content, id}) => (
  <div className="TabsContent-item" id={id}>
    <p>{"this is content one"}</p>
  </div>
);
