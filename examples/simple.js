import Align from 'rce-align';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Test extends Component {
  state = {
    monitor: true,
    monitorScroll: true,
    align: {
      points: ['cc', 'cc'],
    },
  };

  getTarget = () => {
    let ref = this.refs.container;
    if (!ref) {
      // parent ref not attached
      ref = document.getElementById('container');
    }
    return ref;
  }

  toggleMonitor = () => {
    this.setState({
      monitor: !this.state.monitor,
    });
  }
  toggleMonitorScroll = () => {
    this.setState({
      monitorScroll: !this.state.monitorScroll,
    });
  }

  forceAlign = () => {
    if (this.align) {
      this.align.forceAlign();
    }
  }

  render() {
    return (
      <div
        style={{
          margin: 50,
        }}
      >
        <p>
          <button onClick={this.forceAlign}>force align</button>
          &nbsp;&nbsp;&nbsp;
          <button onClick={this.toggleMonitor}>
            toggle monitor {this.state.monitor ? 'on' : 'off'}
          </button>
          &nbsp;&nbsp;&nbsp;
          <button onClick={this.toggleMonitorScroll}>
            toggle monitor scroll {this.state.monitorScroll ? 'on' : 'off'}
          </button>
        </p>
        <div 
          style={{
            height: 300,
            overflow: 'auto',
            padding: 50,
            border: '1px solid blue',
          }}
        >
          <div
            ref="container"
            id="container"
            style={{
              width: '80%',
              height: 500,
              border: '1px solid red',
            }}
          >
            <Align
              target={this.getTarget}
              monitorWindowResize={this.state.monitor}
              monitorWindowScroll={this.state.monitorScroll}
              align={this.state.align}
              ref={ref => this.align = ref}
            >
              <div
                style={{
                  position: 'absolute',
                  width: 50,
                  height: 50,
                  background: 'yellow',
                }}
              >
                source
              </div>
            </Align>
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<Test />, document.getElementById('__react-content'));
