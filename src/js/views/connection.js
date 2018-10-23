import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Peer from './peer'

class Connection extends Component {
  constructor (props) {
    super(props)
    this.state = {
      open: false
    }
  }

  render () {
    let peer = ''

    if (this.state.open) {
      peer = (
        <Peer
          peer={this.state.peer}
          location={this.props.location}
          bytesRead={this.props.bytesRead}
          bytesWritten={this.props.bytesWritten}
        />
      )
    }

    const id = this.props.peer.toB58String()
    return (
      <li className={'webui-connection list-group-item ' + (this.state.open ? 'active' : '')}>
        <strong>Peer ID: {id}</strong>
        {peer}
      </li>
    )
  }
}

Connection.displayName = 'Connection'

Connection.propTypes = {
  location: PropTypes.object,
  bytesRead: PropTypes.number,
  bytesWritten: PropTypes.number,
  peer: PropTypes.object
}

export default Connection
