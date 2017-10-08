// @flow
import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App.jsx'

const planet = 'Coruscant'
const siths = [
  {
    id: 5105,
    name: 'Xendor',
    homeworld: {
      id: 58,
      name: 'Coruscant',
    },
    master: null,
    apprentice: 4629,
  },
  {
    id: 4629,
    name: 'Ajunta Pall',
    homeworld: {
      id: 19,
      name: 'Alderaan',
    },
    master: 5105,
    apprentice: 4601,
  },
  {
    id: 4601,
    name: 'Simus',
    homeworld: {
      id: 27,
      name: 'Korriban',
    },
    master: 4629,
    apprentice: 2950,
  },
  {
    id: 2950,
    name: 'Naga Sadow',
    homeworld: {
      id: 64,
      name: 'Ziost',
    },
    master: 4601,
    apprentice: 8295,
  },
  {
    id: 8295,
    name: 'Freedon Nadd',
    homeworld: {
      id: 62,
      name: 'Onderon',
    },
    master: 2950,
    apprentice: 2941,
  }
]

ReactDOM.render(<App planet={planet} siths={siths} />, document.getElementById('root'))
