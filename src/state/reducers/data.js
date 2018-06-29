// @flow

import type {Planet, ServerSiths, CacheSiths} from '../types'

export const PLANETS: Array<Planet> = [
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

export const SERVER_SITH_DATA: ServerSiths = {
  [1121]: {
    id: 1121,
    name: 'Darth Millennial',
    homeworld: {id: 94, name: 'Dromund Kaas'},
    master: {id: 2942, url: 'http://localhost:3000/dark-jedis/2942'},
    apprentice: {id: 5956, url: 'http://localhost:3000/dark-jedis/5956'}
  },
  [1330]: {
    id: 1330,
    name: 'Antinnis Tremayne',
    homeworld: {id: 58, name: 'Coruscant'},
    master: {id: 1489, url: 'http://localhost:3000/dark-jedis/1489'},
    apprentice: {id: null, url: 'http://localhost:3000/dark-jedis/null'}
  },
  [1489]: {
    id: 1489,
    name: 'Darth Vader',
    homeworld: {id: 18, name: 'Tatooine'},
    master: {id: 3616, url: 'http://localhost:3000/dark-jedis/3616'},
    apprentice: {id: 1330, url: 'http://localhost:3000/dark-jedis/1330'}
  },
  [1548]: {
    id: 1548,
    name: 'Jorak Uln',
    homeworld: {id: 27, name: 'Korriban'},
    master: {id: 2941, url: 'http://localhost:3000/dark-jedis/2941'},
    apprentice: {id: 4618, url: 'http://localhost:3000/dark-jedis/4618'}
  },
  [2350]: {
    id: 2350,
    name: 'Darth Plagueis',
    homeworld: {id: 83, name: 'Mygeeto'},
    master: {id: 5956, url: 'http://localhost:3000/dark-jedis/5956'},
    apprentice: {id: 3616, url: 'http://localhost:3000/dark-jedis/3616'}
  },
  [2941]: {
    id: 2941,
    name: 'Exar Kun',
    homeworld: {id: 58, name: 'Coruscant'},
    master: {id: 8295, url: 'http://localhost:3000/dark-jedis/8295'},
    apprentice: {id: 1548, url: 'http://localhost:3000/dark-jedis/1548'}
  },
  [2942]: {
    id: 2942,
    name: 'Darth Cognus',
    homeworld: {id: 5, name: 'Iktotch'},
    master: {id: 3385, url: 'http://localhost:3000/dark-jedis/3385'},
    apprentice: {id: 1121, url: 'http://localhost:3000/dark-jedis/1121'}
  },
  [2950]: {
    id: 2950,
    name: 'Naga Sadow',
    homeworld: {id: 64, name: 'Ziost'},
    master: {id: 4601, url: 'http://localhost:3000/dark-jedis/4601'},
    apprentice: {id: 8295, url: 'http://localhost:3000/dark-jedis/8295'}
  },
  [3256]: {
    id: 3256,
    name: 'Darth Bane',
    homeworld: {id: 40, name: 'Apatros'},
    master: {id: 9285, url: 'http://localhost:3000/dark-jedis/9285'},
    apprentice: {id: 3385, url: 'http://localhost:3000/dark-jedis/3385'}
  },
  [3385]: {
    id: 3385,
    name: 'Darth Zannah',
    homeworld: {id: 11, name: 'Somov Rit'},
    master: {id: 3256, url: 'http://localhost:3000/dark-jedis/3256'},
    apprentice: {id: 2942, url: 'http://localhost:3000/dark-jedis/2942'}
  },
  [3616]: {
    id: 3616,
    name: 'Darth Sidious',
    homeworld: {id: 7, name: 'Naboo'},
    master: {id: 2350, url: 'http://localhost:3000/dark-jedis/2350'},
    apprentice: {id: 1489, url: 'http://localhost:3000/dark-jedis/1489'}
  },
  [4601]: {
    id: 4601,
    name: 'Simus',
    homeworld: {id: 27, name: 'Korriban'},
    master: {id: 4629, url: 'http://localhost:3000/dark-jedis/4629'},
    apprentice: {id: 2950, url: 'http://localhost:3000/dark-jedis/2950'}
  },
  [4618]: {
    id: 4618,
    name: 'Skere Kaan',
    homeworld: {id: 58, name: 'Coruscant'},
    master: {id: 1548, url: 'http://localhost:3000/dark-jedis/1548'},
    apprentice: {id: 5611, url: 'http://localhost:3000/dark-jedis/5611'}
  },
  [4629]: {
    id: 4629,
    name: 'Ajunta Pall',
    homeworld: {id: 19, name: 'Alderaan'},
    master: {id: 5105, url: 'http://localhost:3000/dark-jedis/5105'},
    apprentice: {id: 4601, url: 'http://localhost:3000/dark-jedis/4601'}
  },
  [5105]: {
    id: 5105,
    name: 'Xendor',
    homeworld: {id: 58, name: 'Coruscant'},
    master: {id: null, url: 'http://localhost:3000/dark-jedis/null'},
    apprentice: {id: 4629, url: 'http://localhost:3000/dark-jedis/4629'}
  },
  [5611]: {
    id: 5611,
    name: 'Na\'daz',
    homeworld: {id: 35, name: 'Ryloth'},
    master: {id: 4618, url: 'http://localhost:3000/dark-jedis/4618'},
    apprentice: {id: 9285, url: 'http://localhost:3000/dark-jedis/9285'}
  },
  [5956]: {
    id: 5956,
    name: 'Darth Tenebrous',
    homeworld: {id: 90, name: 'Clak\'dor VII'},
    master: {id: 1121, url: 'http://localhost:3000/dark-jedis/1121'},
    apprentice: {id: 2350, url: 'http://localhost:3000/dark-jedis/2350'}
  },
  [8295]: {
    id: 8295,
    name: 'Freedon Nadd',
    homeworld: {id: 62, name: 'Onderon'},
    master: {id: 2950, url: 'http://localhost:3000/dark-jedis/2950'},
    apprentice: {id: 2941, url: 'http://localhost:3000/dark-jedis/2941'}
  },
  [9285]: {
    id: 9285,
    name: 'Kas\'im',
    homeworld: {id: 38, name: 'Nal Hutta'},
    master: {id: 5611, url: 'http://localhost:3000/dark-jedis/5611'},
    apprentice: {id: 3256, url: 'http://localhost:3000/dark-jedis/3256'}
  },
}

export const CACHE_SITH_DATA: CacheSiths = {
  [1121]: {
    id: 1121,
    name: 'Darth Millennial',
    homeworld: {id: 94, name: 'Dromund Kaas'},
    masterId: 2942,
    apprenticeId: 5956
  },
  [1330]: {
    id: 1330,
    name: 'Antinnis Tremayne',
    homeworld: {id: 58, name: 'Coruscant'},
    masterId: 1489,
    apprenticeId: null
  },
  [1489]: {
    id: 1489,
    name: 'Darth Vader',
    homeworld: {id: 18, name: 'Tatooine'},
    masterId: 3616,
    apprenticeId: 1330
  },
  [1548]: {
    id: 1548,
    name: 'Jorak Uln',
    homeworld: {id: 27, name: 'Korriban'},
    masterId: 2941,
    apprenticeId: 4618
  },
  [2350]: {
    id: 2350,
    name: 'Darth Plagueis',
    homeworld: {id: 83, name: 'Mygeeto'},
    masterId: 5956,
    apprenticeId: 3616
  },
  [2941]: {
    id: 2941,
    name: 'Exar Kun',
    homeworld: {id: 58, name: 'Coruscant'},
    masterId: 8295,
    apprenticeId: 1548
  },
  [2942]: {
    id: 2942,
    name: 'Darth Cognus',
    homeworld: {id: 5, name: 'Iktotch'},
    masterId: 3385,
    apprenticeId: 1121
  },
  [2950]: {
    id: 2950,
    name: 'Naga Sadow',
    homeworld: {id: 64, name: 'Ziost'},
    masterId: 4601,
    apprenticeId: 8295
  },
  [3256]: {
    id: 3256,
    name: 'Darth Bane',
    homeworld: {id: 40, name: 'Apatros'},
    masterId: 9285,
    apprenticeId: 3385
  },
  [3385]: {
    id: 3385,
    name: 'Darth Zannah',
    homeworld: {id: 11, name: 'Somov Rit'},
    masterId: 3256,
    apprenticeId: 2942
  },
  [3616]: {
    id: 3616,
    name: 'Darth Sidious',
    homeworld: {id: 7, name: 'Naboo'},
    masterId: 2350,
    apprenticeId: 1489
  },
  [4601]: {
    id: 4601,
    name: 'Simus',
    homeworld: {id: 27, name: 'Korriban'},
    masterId: 4629,
    apprenticeId: 2950
  },
  [4618]: {
    id: 4618,
    name: 'Skere Kaan',
    homeworld: {id: 58, name: 'Coruscant'},
    masterId: 1548,
    apprenticeId: 5611
  },
  [4629]: {
    id: 4629,
    name: 'Ajunta Pall',
    homeworld: {id: 19, name: 'Alderaan'},
    masterId: 5105,
    apprenticeId: 4601
  },
  [5105]: {
    id: 5105,
    name: 'Xendor',
    homeworld: {id: 58, name: 'Coruscant'},
    masterId: null,
    apprenticeId: 4629
  },
  [5611]: {
    id: 5611,
    name: 'Na\'daz',
    homeworld: {id: 35, name: 'Ryloth'},
    masterId: 4618,
    apprenticeId: 9285
  },
  [5956]: {
    id: 5956,
    name: 'Darth Tenebrous',
    homeworld: {id: 90, name: 'Clak\'dor VII'},
    masterId: 1121,
    apprenticeId: 2350
  },
  [8295]: {
    id: 8295,
    name: 'Freedon Nadd',
    homeworld: {id: 62, name: 'Onderon'},
    masterId: 2950,
    apprenticeId: 2941
  },
  [9285]: {
    id: 9285,
    name: 'Kas\'im',
    homeworld: {id: 38, name: 'Nal Hutta'},
    masterId: 5611,
    apprenticeId: 3256
  },
}

export const ORDERED_SITH_IDS = [
  5105,
  4629,
  4601,
  2950,
  8295,
  2941,
  1548,
  4618,
  5611,
  9285,
  3256,
  3385,
  2942,
  1121,
  5956,
  2350,
  3616,
  1489,
  1330,
]
