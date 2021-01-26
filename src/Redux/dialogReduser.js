const SEND_MASSAGE = 'SEND_MASSAGE'

let initialState = {
  dialogsArr: [
    { name: 'Sanya', id: 1 },
    { name: 'Kolya', id: 2 },
    { name: 'Andrew', id: 3 },
    { name: 'Alexandra', id: 4 }
  ],
  massagesArr: [
    { text: 'Hi', id: 1 },
    { text: 'Hello', id: 2 },
  ]
}

let dialogReduser = (state = initialState, action) => {

  switch (action.type) {
    case SEND_MASSAGE: {

      return {
        ...state,
        massagesArr: [...state.massagesArr, {
          text: action.addMassage,
          id: Date.now()
        }]
      }
    }
    default:
      return state
  }
}

export const sendMassageAC = (addMassage) => ({ type: SEND_MASSAGE, addMassage })

export default dialogReduser