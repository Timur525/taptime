import {createStore} from 'redux';

const defaultState = {
    whereFrom: '',
    where: 'Владивосток',
    currency: 'USD',
    rate: '64,54 руб.',
    volume: '',
    netWeight: '',
    grossWeight: '',
    cost: '',
    counter: 0,
    productName: '',
    key: '',
    page: true,
    bool: false,
    search: '',
    resize: false,
    currencyOption: [
        {
            name: 'USD',
            rate: '64,54 руб.'
        },
        {
            name: 'CYN',
            rate: '30,71 руб.'
        },
        {
            name: 'RUB',
            rate: '-----'
        }
    ],
    city: [
        'Владивосток',
        'Омск',
        'Москва',
        'Хабаровск'
    ],
    furnitureList: [
    {
        img: './img/product.jpg',
        text: 'Диван-кровать, раскладывается'
    },
    {
        img: '/img/product.jpg',
        text: 'Стол, удобный и красивый'
    },
    {
        img: '/img/product.jpg',
        text: 'Стул, 1111 на нем можно всё'
    },
    {
        img: '/img/product.jpg',
        text: 'Диван-кровать, раскладывается'
    },
    {
        img: '/img/product.jpg',
        text: 'Стол, удобный и красивый'
    },
    {
        img: '/img/product.jpg',
        text: 'Стул, на нем можно всё'
    }
  ]
}

const reduser = (state = defaultState, action) => {
  switch (action.type) {
    case "RATE":
        return {...state, rate: action.payload}
    case "WHERE_FROM":
        return {...state, whereFrom: action.payload}
    case "WHERE":
        return {...state, where: action.payload}
    case "CURRENCY":
        return {...state, currency: action.payload}
    case "RATE":
        return {...state, rate: action.payload}
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
    case "RESIZE":
      return {...state, resize: action.payload}
    case "PAGE":
      return {...state, page: action.payload}
    default:
      return state;
  }
}

export const store = createStore(reduser);


