import profileReduser, { addPostAC } from "./profileReduser"


it('length of state must be incemented', () => {
    let state = {
        postArr: [
          { title: 'title', text: 'some text', id: 1 },
          { title: 'title', text: 'some text', id: 2 },
          { title: 'title', text: 'some text', id: 3 },
          { title: 'title', text: 'some text', id: 4 },
        ]
      }
    let action = addPostAC('new post')
    let newState = profileReduser(state, action)

    expect(newState.postArr.length).toBe(5)
})