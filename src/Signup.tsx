import React, { useReducer } from 'react';

type stateType = {
  name: string,
  password: string
}

const initialState: stateType = {
  name: '',
  password: '',
}

type actionType = {
  type: 'SETNAME' | 'SETPASSWORD',
  payload: string,
}

function reducer(currentState: stateType, action: actionType) {
  if (action.type === 'SETNAME') {
    return { ...currentState, name: action.payload }
  }
  if (action.type === 'SETPASSWORD') {
    return { ...currentState, password: action.payload }
  }
  return currentState;
}

function Signup() {
  const [state, dispatch] = useReducer(reducer, initialState);

  function onSubmitForm(event: React.FormEvent) {
    event.preventDefault();
    console.log(`Your form has been successfully 
    submited with name 😀 ${state.name} and password ${state.password}`)
  }

  return (
    <div>
      <div>
        <h1 >Sign up now 🚀</h1>
      </div>
      <form onSubmit={onSubmitForm}>
        <div>
          <input
            onChange={(e) => dispatch(
              {
                type: 'SETNAME',
                payload: e.target.value
              }
            )}
            type="text"
            placeholder="Name"
          />
        </div>
        <div>
          <input
            onChange={(e) => dispatch(
              {
                type: 'SETPASSWORD',
                payload: e.target.value
              }
            )}
            type="password"
            placeholder="Password"
          />
        </div>
        <button>Submit 🚀</button>
      </form>
    </div>
  )
}

export default Signup