import React, { Component } from 'react';

class TabList extends Component {

    constructor(props) {
        super(props);
        let defaultTab = React.Children.toArray(this.props.children).map((child) => child.props.name)[0];
        this.state = {
            selected : defaultTab
        }
        this.select = this.select.bind(this);
    }

    select( item ) {
        this.setState({
            selected: item
        })
    }

  render() {
      //console.log(this.props.children);
      const tabs = React.Children.map( this.props.children, (child) => {
        const tabName = child.props.name;
        const className = (tabName === this.state.selected) ? "selected" : "unselected";
        return (
            <h1 onClick={(e) => this.select(tabName)} className={className}>{tabName}</h1>
        )
    });
      let body;
      React.Children.forEach( this.props.children, (child) => {
          //console.log(child);
          if ( child.props.name === this.state.selected ){
              body = child
          }
      });
    return (
      <div className="holder">
        <div className="tabs">
            {tabs}
        </div>
        <div className="body">
            {body}
        </div>
      </div>
    )
  }
}

export default TabList;