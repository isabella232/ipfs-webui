import React from 'react'
import PropTypes from 'prop-types'
import ConnectionList from '../views/connection-list'
import i18n from '../utils/i18n.js'
import { Row, Col } from 'react-bootstrap'
import {withIpfs} from '../components/ipfs'

class Connections extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      peers: [],
      locations: {},
      nonce: 0
    }
  }

  componentDidMount () {
    this.mounted = true
    this.pollInterval = setInterval(() => this.getPeers(), 1000)
    this.getPeers()
  }

  componentWillUnmount () {
    this.mounted = false
    clearInterval(this.pollInterval)
  }

  getPeers () {
    this.props.ipfs.swarm.peers((err, peers) => {
      if (err) {
        return console.error(err)
      }
      // If we've unmounted, abort
      if (!this.mounted) {
        return
      }

      peers = peers.sort((a, b) => {
        return a.peer.toB58String() > b.peer.toB58String() ? 1 : -1
      })

      this.setState({
        peers
      })
    })
  }

  render () {
    return (
      <Row>
        <Col sm={12}>
          <h4>{i18n.t('Connected to X peer', { postProcess: 'sprintf', sprintf: [this.state.peers.length], count: this.state.peers.length })}</h4>
          <div>
            <ConnectionList peers={this.state.peers} />
          </div>
        </Col>
      </Row>
    )
  }
}

Connections.displayName = 'Connections'
Connections.propTypes = {
  peers: PropTypes.array,
  ipfs: PropTypes.object
}

export default withIpfs(Connections)
