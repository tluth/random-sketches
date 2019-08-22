import React from 'react';
import { TwitterPicker } from 'react-color';

export default class ColorSelector extends React.Component {
  state = {
    displayColorPicker: false,
  };

  handleClick = () => {
    this.setState({ displayColorPicker: !this.state.displayColorPicker })
  };

  handleClose = () => {
    this.setState({ displayColorPicker: false })
  };

  render() {
    const popover = {
      position: 'absolute',
      zIndex: '2',
    }
    
    return (
      <div>
        <button className="btn btn-primary btn-lg" onClick={this.handleClick}>Change Color</button>
        {this.state.displayColorPicker ? <div style={popover}>
          <div onClick={this.handleClose} />
          <TwitterPicker onChange={this.props.handler} />
        </div> : null}
      </div>
    )
  }
}

