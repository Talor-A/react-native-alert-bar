import React, { Component } from 'react'
import * as Animatable from 'react-native-animatable'

// create a component
class MessageBar extends Component {
  constructor (props) {
    super(props)
    this.state = {
      isShowing: false,
      barProps: {}
    }
    this.getBarStyle = this.getBarStyle.bind(this)
  }
  show (props) {
    this.setState({ isShowing: true, barProps: props })
    this.refs.bar.slideInDown()
  }
  hide () {
    this.refs.bar.slideOutUp().then(() => this.setState({ isShowing: false }))
  }
  getBarStyle () {
    let { barProps, isShowing } = this.state
    return {
      position: 'absolute',
      backgroundColor: barProps.backgroundColor || '#38A4D9',
      top: isShowing ? 0 : -barProps.barHeight || -64,
      height: barProps.barHeight || 64,
      width: '100%'
    }
  }
  render () {
    let { barProps } = this.state
    return (
      <Animatable.View style={this.getBarStyle()} ref='bar'>
        {barProps.component || null}
      </Animatable.View>
    )
  }
}

export default MessageBar
