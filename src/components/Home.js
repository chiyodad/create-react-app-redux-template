import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { fetchData } from '../actions'

class AppComponent extends Component {
  static PropTypes = {
    rate: PropTypes.string.isRequired,
  }

  componentDidMount() {
    this.props.fetchData()
  }

  render() {
    return (
      <div>
        <div className="App">
          <p className="App-intro">
            To get started, edit <code>src/components/AppComponent.js</code> and save to reload.
          </p>
          <p>
            toggleVisibilityKey='ctrl-h'<br />
            changePositionKey='ctrl-w'<br />
            changeMonitorKey='ctrl-m'<br />
          </p>
          <p>
            fetched data: {JSON.stringify(this.props.entities)}
          </p>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const { entities } = state
  return {
    entities
  }
}

export default connect(mapStateToProps,{
  fetchData
})(AppComponent)
