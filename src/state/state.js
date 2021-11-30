import {createStore} from 'redux';

const defaultState = {
  volume: '',
  netWeight: '',
  grossWeight: '',
  cost: '',
  counter: 0,
  productName: '',
  key: '',
  bool: false,
  search: '',
  furnitureList: [
    {
        img: './img/product.jpg',
        text: 'Диван-кровать, раскладывается'
    },
    {
        img: './img/product.jpg',
        text: 'Стол, удобный и красивый'
    },
    {
        img: '/src/img/product.jpg',
        text: 'Стул, 1111 на нем можно всё'
    },
    {
        img: './img/product.jpg',
        text: 'Диван-кровать, раскладывается'
    },
    {
        img: './img/product.jpg',
        text: 'Стол, удобный и красивый'
    },
    {
        img: '/src/img/product.jpg',
        text: 'Стул, на нем можно всё'
    }
  ]
}

const reduser = (state = defaultState, action) => {
  switch (action.type) {
    case "COUNTER":
      return {...state, counter: action.payload}
    case "VOLUME":
      return {...state, volume: action.payload}
    case "NET_WEIGHT":
      return {...state, netWeight: action.payload}
    case "GROSS_WEIGHT":
      return {...state, grossWeight: action.payload}
    case "COST":
      return {...state, cost: action.payload}
    case "KEY":
      return {...state, key: action.payload, bool: true}
    case "PRODUCT":
      return {...state, productName: action.payload}
      case "SEARCH":
      return {...state, search: action.payload}
    default:
      return state;
  }
}

export const store = createStore(reduser);


