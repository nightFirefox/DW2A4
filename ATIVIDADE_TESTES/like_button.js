class LikeButton extends React.Component {
    constructor(props) {
      super(props);    this.state = { liked: false }
    }
    render() {
      if (this.state.liked) {
        return create('h4', {}, 'Você curtiu isso.')
      }
      return create(
        'button',
        { onClick: () => this.setState({ liked: true }) },
        'Curtir'
      )
    }
  }
