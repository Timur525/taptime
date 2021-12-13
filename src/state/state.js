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
    counter: 1, 
    productName: '',
    productImg: '',
    page: true,
    viewForm: false,
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
            text: 'Диван-кровать, раскладывается',
            img: './img/product.jpg'
        },
        {
            text: 'Стул, можно использовать как вешалку',
            img: './img/chair.jpg'
        },
        {
            text: 'Письменный стол, деревянный',
            img: './img/table.jpg'
        },
        {
            text: 'Пуфик, мягкий и красивый',
            img: './img/ottoman.jpg'
        },
        {
            text: 'Вместительный шкаф',
            img: './img/cabinet.jpg'
        },
        {
            text: 'Канделябр, ЧТО!?',
            img: './img/candelabrum.jpg'
        },
    
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
    case "VIEW_FORM":
      return {...state, viewForm: action.payload}
    case "PRODUCT":
      return {...state, productName: action.payload}
    case "PRODUCT_IMG":
      return {...state, productImg: action.payload}
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


