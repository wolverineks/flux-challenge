// const nextState = {
//   a0: 1,
//   b0: { b1: 2 },
//   c0: { c1: { c2: 3 } }
// }
//
// const SELECTORS = {
//   geta0: (state) => state.a0,
//   getb1: (state) => state.b0.b1,
//   getc2: (state) => state.c0.c1.c2,
// }
//
// const sumAction  = { type: 'SUM' }
// const diffAction = { type: 'DIFF' }
//
// const reducer = (state = 0, action, {a, b, c}) => {
//   switch (action.type) {
//   case 'SUM':
//     return a + b + c
//   case 'DIFF':
//     return a - b - c
//   default:
//     return state
//   }
// }
//
// const mapNextToProps = (next) => {
//   const a = SELECTORS.geta0(next)
//   const b = SELECTORS.getb1(next)
//   const c = SELECTORS.getc2(next)
//
//   return {a, b, c}
// }
//
// const connect = (mapNextToProps) => (reducer) => {
//   return (action, state, next) => reducer(action, state, mapNextToProps(next))
// }
//
// const value = connect(mapNextToProps)(reducer)


i have an array of ids, where does this come from?
i have an array of all ids that i want associated sith data displayed on the screen
derived from that i have added, removed ids
derived from that i have pixies fetching sith data from the server

ids
  -> added
    -> sithPixie
  -> removed
    -> sithPixie
  -> rootId
