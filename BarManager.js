class BarMan {
  static bar = null
  static messages = []
  static setBar (bar) {
    this.bar = bar
  }
  static removeBar () {
    this.bar = null
  }

  static addMessage (props) {
    console.log('adding message...')
    this.messages.push(props)
    console.log('messages: ' + this.messages.length)
    if (this.bar.state.isShowing === false) this.showMessage(this.messages.shift())
  }
  static hideMessage () {
    console.log('hiding message')
    this.bar.hide()
    if (this.messages.length) this.showMessage(this.messages.shift())
  }
  static showMessage (props = {}) {
    console.log('showing message')
    this.bar.show(props)
    setTimeout(() => {
      this.hideMessage()
    }, props.duration || 3000)
  }
}
export default BarMan
