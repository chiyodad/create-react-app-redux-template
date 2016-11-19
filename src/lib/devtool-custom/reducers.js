import {
  CHANGE_MONITOR,
  CHANGE_POSITION,
  CHANGE_SIZE,
  TOGGLE_VISIBILITY
} from './actions';
import { POSITIONS } from './constants';
import { Children } from 'react';

const DEVTOOL_SIZE = 'redux-devtools-dock-monitor-size'
const DEVTOOL_ISVISIBLE = 'redux-devtools-dock-monitor-isVisible'
const DEVTOOL_MONITOR = 'redux-devtools-dock-monitor-monitor'

function localStorageSetItem(key, value) {
  try {
    window.localStorage.setItem(key, value);
  } catch (e) {}
}

function localStorageGetItem(key) {
  try {
    return window.localStorage.getItem(key);
  } catch (e) {
    return null
  }
}

function position(props, state = props.defaultPosition, action) {
  return (action.type === CHANGE_POSITION) ?
    POSITIONS[(POSITIONS.indexOf(state) + 1) % POSITIONS.length] :
    state;
}

const storedSize = localStorageGetItem(DEVTOOL_SIZE)
function size(props, state = storedSize ? JSON.parse(storedSize) : props.defaultSize, action) {
  if (action.type === CHANGE_SIZE) {
    localStorageSetItem(DEVTOOL_SIZE, action.size);
    return action.size;
  }
  return state;
}


const storedIsVisible = localStorageGetItem(DEVTOOL_ISVISIBLE);
function isVisible(props, state = storedIsVisible ? JSON.parse(storedIsVisible) : props.defaultIsVisible, action) {
  let result;
  if (action.type === TOGGLE_VISIBILITY) {
    localStorageSetItem(DEVTOOL_ISVISIBLE, !state);
    result = !state;
  } else {
    result = state;
  }
  return result;
}

function childMonitorStates(props, state = [], action) {
  return Children.map(props.children, (child, index) =>
    child.type.update(child.props, state[index], action)
  );
}

const storedMonitor = localStorageGetItem(DEVTOOL_MONITOR);
function childMonitorIndex(props, state = storedMonitor ? JSON.parse(storedMonitor) : 0, action) {
  switch (action.type) {
  case CHANGE_MONITOR:
    const monitorIdx = (state + 1) % Children.count(props.children)
    localStorageSetItem(DEVTOOL_MONITOR, monitorIdx);
    return monitorIdx;
  default:
    return state;
  }
}

export default function reducer(props, state = {}, action) {
  if (!state.childMonitorStates) {
    Children.forEach(props.children, (child, index) => {
      if (typeof child.type.update !== 'function') {
        console.error(
          `Child of <DockMonitor> with the index ${index} ` +
          `(${child.type.displayName || child.type.name || child.type }) ` +
          'does not appear to be a valid Redux DevTools monitor.'
        );
      }
    });
  }

  return {
    position: position(props, state.position, action),
    isVisible: isVisible(props, state.isVisible, action),
    size: size(props, state.size, action),
    childMonitorIndex: childMonitorIndex(
      props,
      state.childMonitorIndex,
      action
    ),
    childMonitorStates: childMonitorStates(
      props,
      state.childMonitorStates,
      action
    )
  };
}
