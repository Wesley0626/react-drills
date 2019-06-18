import React, {Component} from 'react'


class Image extends Component{

  render(){
    console.log(this.props.link)
    return(
      <image src={this.props.link} />
    )
  }
}

export default Image