'use strict'
import React from 'react'
import { createDevTools } from 'redux-devtools'
import LogMonitor from 'redux-devtools-log-monitor'
import DockMonitor from 'redux-devtools-dock-monitor'
import SliderMonitor from 'redux-slider-monitor'

export const DevTools = () => createDevTools(
  <DockMonitor toggleVisibilityKey='ctrl-h'
               changePositionKey='ctrl-q'
               defaultPosition='right'
               changeMonitorKey='ctrl-m'
               defaultIsVisible={false}
  >
    <LogMonitor />
    <SliderMonitor />
  </DockMonitor>
)