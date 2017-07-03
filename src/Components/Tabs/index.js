import {h, Component} from 'preact'
// import _ from 'lodash'
// import fetch from 'unfetch'


const TabComponent = (props) => {
  return (
    <Tabs selected={props.firstSelect || 0}>

    {props.tabs.map(tab =>
      <Pane label={tab.name}>{tab.content}</Pane>)
    }
    </Tabs>
  );
}

const Pane = (props) => {
  return <div>{props.children}</div>
}

export class Tabs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: this.props.selected
    }
    // this.handleClick = this.handleClick.bind(this, idx);
  };

  _createAnchor() {
    function labels(child, idx) {
      let activeClass = (this.state.selected === idx ? 'isActive' : '');
      return(
        <li role="tab" key={idx} aria-controls={'panel${idx}'}>
          <a className={activeClass}
            onClick={this.handleClick.bind(this, idx)}
            href="#">
             {child.attributes.label}
          </a>
        </li>
      )
    }

    return(
      <ul className = "TabsAnchor">
        {this.props.children.map(labels.bind(this))}
      </ul>
    );
  };

  handleClick(index, event) {
    event.preventDefault();
    this.setState({
      selected: index
    });
  }

  render() {
    return(
      <div className="Tabs">
        {this._createAnchor()}
        <div className="TabsContent">
          {this.props.children[this.state.selected]}
        </div>
      </div>
    )
  }
}

export default TabComponent;
