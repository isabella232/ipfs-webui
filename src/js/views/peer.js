import React, {Component} from 'react'
import PropTypes from 'prop-types'
import i18n from '../utils/i18n.js'

class Peer extends Component {
  render () {
    return (
      <div className='webui-peer'>
        <div className='box info'>
          <p>
            <strong>{i18n.t('Peer ID')} </strong> <code>{this.props.peer.id}</code>&nbsp;
          </p>
          <br />
          <p>
            <strong>{i18n.t('Agent Version')} </strong> <code>{this.props.peer.agentVersion || ''}</code>
          </p>
          <p>
            <strong>{i18n.t('Protocol Version')} </strong> <code>{this.props.peer.protocolVersion || ''}</code>
          </p>
          <br />
          <div>
            <strong>{i18n.t('Public Key')}</strong>
            <pre className='panel textarea-panel'>{this.props.peer.publicKey || ''}</pre>
          </div>
        </div>
      </div>
    )
  }
}

Peer.displayName = 'Peer'
Peer.propTypes = {
  peer: PropTypes.object,
  location: PropTypes.object
}

export default Peer
