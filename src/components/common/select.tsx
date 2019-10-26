/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react'
import Select from 'react-select'

interface props{
  options: any
}


class Selector extends Component<props> {

  constructor(props: any) {
    super(props);
    this.state = {
      selectedOption: 1
    }
  }
  
  
  handleChange = (selectedOption: any) => {
    this.setState(
      { selectedOption },
      () => console.log(`Option selected:`, this.props.options)
    );
  };
  render() {
    const { options } = this.props
    const selectedOption = options[1];

    return (
      <Select
        value={selectedOption}
        onChange={this.handleChange}
        options={options}
      />
    );
  }
}

export default Selector;