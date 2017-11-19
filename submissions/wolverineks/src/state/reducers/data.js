// @flow

import type {Planet} from '../types'

export const planets: Array<Planet> = [
  {id: 4,  name: 'Saleucami'},
  {id: 5,  name: 'Iktotch'},
  {id: 7,  name: 'Naboo'},
  {id: 8,  name: 'Cato Neimoidia'},
  {id: 10, name: 'Endor'},
  {id: 11, name: 'Somov Rit'},
  {id: 12, name: 'Bespin'},
  {id: 13, name: 'Mustafar'},
  {id: 14, name: 'Felucia'},
  {id: 18, name: 'Tatooine'},
  {id: 19, name: 'Alderaan'},
  {id: 24, name: 'Hoth'},
  {id: 27, name: 'Korriban'},
  {id: 32, name: 'Utapau'},
  {id: 35, name: 'Ryloth'},
  {id: 36, name: 'Jakku'},
  {id: 38, name: 'Nal Hutta'},
  {id: 40, name: 'Apatros'},
  {id: 57, name: 'Dagobah'},
  {id: 58, name: 'Coruscant'},
  {id: 59, name: 'Geonosis'},
  {id: 62, name: 'Onderon'},
  {id: 64, name: 'Ziost'},
  {id: 74, name: 'Kamino'},
  {id: 83, name: 'Mygeeto'},
  {id: 90, name: 'Clak\'dor VII'},
  {id: 92, name: 'Kashyyyk'},
  {id: 94, name: 'Dromund Kaas'},
  {id: 95, name: 'Jestefad'},
]

export default {
  '1121': {
    id: 1121,
    name: 'Darth Millennial',
    homeworld: {id: 94, name: 'Dromund Kaas'},
    master: {url: 'http://localhost:3000/dark-jedis/2942'},
    apprentice: {url: 'http://localhost:3000/dark-jedis/5956'}
  },
  '1330': {
    id: 1330,
    name: 'Antinnis Tremayne',
    homeworld: {id: 58, name: 'Coruscant'},
    master: {url: 'http://localhost:3000/dark-jedis/1489'},
    apprentice: {url: 'http://localhost:3000/dark-jedis/null'}
  },
  '1489': {
    id: 1489,
    name: 'Darth Vader',
    homeworld: {id: 18, name: 'Tatooine'},
    master: {url: 'http://localhost:3000/dark-jedis/3616'},
    apprentice: {url: 'http://localhost:3000/dark-jedis/1330'}
  },
  '1548': {
    id: 1548,
    name: 'Jorak Uln',
    homeworld: {id: 27, name: 'Korriban'},
    master: {url: 'http://localhost:3000/dark-jedis/2941'},
    apprentice: {url: 'http://localhost:3000/dark-jedis/4618'}
  },
  '2350': {
    id: 2350,
    name: 'Darth Plagueis',
    homeworld: {id: 83, name: 'Mygeeto'},
    master: {url: 'http://localhost:3000/dark-jedis/5956'},
    apprentice: {url: 'http://localhost:3000/dark-jedis/3616'}
  },
  '2941': {
    id: 2941,
    name: 'Exar Kun',
    homeworld: {id: 58, name: 'Coruscant'},
    master: {url: 'http://localhost:3000/dark-jedis/8295'},
    apprentice: {url: 'http://localhost:3000/dark-jedis/1548'}
  },
  '2942': {
    id: 2942,
    name: 'Darth Cognus',
    homeworld: {id: 5, name: 'Iktotch'},
    master: {url: 'http://localhost:3000/dark-jedis/3385'},
    apprentice: {url: 'http://localhost:3000/dark-jedis/1121'}
  },
  '2950': {
    id: 2950,
    name: 'Naga Sadow',
    homeworld: {id: 64, name: 'Ziost'},
    master: {url: 'http://localhost:3000/dark-jedis/4601'},
    apprentice: {url: 'http://localhost:3000/dark-jedis/8295'}
  },
  '3256': {
    id: 3256,
    name: 'Darth Bane',
    homeworld: {id: 40, name: 'Apatros'},
    master: {url: 'http://localhost:3000/dark-jedis/9285'},
    apprentice: {url: 'http://localhost:3000/dark-jedis/3385'}
  },
  '3385': {
    id: 3385,
    name: 'Darth Zannah',
    homeworld: {id: 11, name: 'Somov Rit'},
    master: {url: 'http://localhost:3000/dark-jedis/3256'},
    apprentice: {url: 'http://localhost:3000/dark-jedis/2942'}
  },
  '3616': {
    id: 3616,
    name: 'Darth Sidious',
    homeworld: {id: 7, name: 'Naboo'},
    master: {url: 'http://localhost:3000/dark-jedis/2350'},
    apprentice: {url: 'http://localhost:3000/dark-jedis/1489'}
  },
  '4601': {
    id: 4601,
    name: 'Simus',
    homeworld: {id: 27, name: 'Korriban'},
    master: {url: 'http://localhost:3000/dark-jedis/4629'},
    apprentice: {url: 'http://localhost:3000/dark-jedis/2950'}
  },
  '4618': {
    id: 4618,
    name: 'Skere Kaan',
    homeworld: {id: 58, name: 'Coruscant'},
    master: {url: 'http://localhost:3000/dark-jedis/1548'},
    apprentice: {url: 'http://localhost:3000/dark-jedis/5611'}
  },
  '4629': {
    id: 4629,
    name: 'Ajunta Pall',
    homeworld: {id: 19, name: 'Alderaan'},
    master: {url: 'http://localhost:3000/dark-jedis/5105'},
    apprentice: {url: 'http://localhost:3000/dark-jedis/4601'}
  },
  '5611': {
    id: 5611,
    name: 'Na\'daz',
    homeworld: {id: 35, name: 'Ryloth'},
    master: {url: 'http://localhost:3000/dark-jedis/4618'},
    apprentice: {url: 'http://localhost:3000/dark-jedis/9285'}
  },
  '5956': {
    id: 5956,
    name: 'Darth Tenebrous',
    homeworld: {id: 90, name: 'Clak\'dor VII'},
    master: {url: 'http://localhost:3000/dark-jedis/1121'},
    apprentice: {url: 'http://localhost:3000/dark-jedis/2350'}
  },
  '8295': {
    id: 8295,
    name: 'Freedon Nadd',
    homeworld: {id: 62, name: 'Onderon'},
    master: {url: 'http://localhost:3000/dark-jedis/2950'},
    apprentice: {url: 'http://localhost:3000/dark-jedis/2941'}
  },
  '9285': {
    id: 9285,
    name: 'Kas\'im',
    homeworld: {id: 38, name: 'Nal Hutta'},
    master: {url: 'http://localhost:3000/dark-jedis/5611'},
    apprentice: {url: 'http://localhost:3000/dark-jedis/3256'}
  },
  '5105': {
    id: 5105,
    name: 'Xendor',
    homeworld: {id: 58, name: 'Coruscant'},
    master: {url: 'http://localhost:3000/dark-jedis/null'},
    apprentice: {url: 'http://localhost:3000/dark-jedis/4629'}
  }
}
