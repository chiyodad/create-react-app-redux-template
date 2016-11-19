import React from 'react'
import { createDevTools } from 'redux-devtools'
import LogMonitor from 'redux-devtools-log-monitor'
// import DockMonitor from 'redux-devtools-dock-monitor'
// using localStorage for dock monitor
import CustomDockMonitor from '../lib/devtool-custom'
import Inspector from 'redux-devtools-inspector';

export default createDevTools(
  <CustomDockMonitor 
    toggleVisibilityKey='ctrl-h'
    changePositionKey='ctrl-w'
    changeMonitorKey='ctrl-m'>
    <LogMonitor />
    <Inspector />
  </CustomDockMonitor>
)
