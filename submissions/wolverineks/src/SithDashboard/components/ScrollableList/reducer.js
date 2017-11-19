// SithDashboard/reducer.js
// @flow

export type State = Array<any>
export type Action = {type: 'SCROLLED_UP'} | {type: 'SCROLLED_DOWN'}
const initialState = [undefined, undefined, undefined, undefined, undefined]

export default (state: State = initialState, action: Action) => {
  switch (action.type) {
  case 'SCROLLED_UP':
    return [
      undefined,
      undefined,
      state[0],
      state[1],
      state[2],
    ]
  case 'SCROLLED_DOWN':
    return [
      state[2],
      state[3],
      state[4],
      undefined,
      undefined,
    ]
  default:
    return state
  }
}
