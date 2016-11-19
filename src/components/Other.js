import React, { Component } from 'react'
import { connect } from 'react-redux'
import { doSomething } from '../actions'

class AppComponent extends Component {
  render() {
    return (
      <div>
        <div className="App">
          <p className="App-intro">
            this is {this.props.pathName}<br/>
            <button onClick={() => this.props.doSomething()}>do Something</button>
          </p>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  pathName: ownProps.location.pathname.substring(1)
})

export default connect(mapStateToProps,{
  doSomething
})(AppComponent)
