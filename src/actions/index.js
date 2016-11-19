// Resets the currently visible error message.
export const RESET_ERROR_MESSAGE = 'RESET_ERROR_MESSAGE'
export const resetErrorMessage = () => ({
  type: RESET_ERROR_MESSAGE
})

// Throw error
export const DO_SOMETHING = 'DO_SOMETHING'
export const doSomething = () => ({
  type: DO_SOMETHING,
  error: 'something wrong'
})

// Fetch data
export const FETCH_DATA = 'FETCH_DATA'
export const fetchData = () => {
  return dispatch => {
    const response = { entities: { a: 1, b: 2, c: 3 } }

    dispatch({
      type: FETCH_DATA,
      response,
    })
  } 
}
