import promiseMiddleware from '../src'
import { Action } from 'redux'

function noop(...args) {
  return args
}

describe('Promise Middleware', () => {
  let baseDispatch
  let dispatch
  let store

  beforeEach(() => {
    baseDispatch = jest.fn()
    dispatch = function dispatch(action: Action) {
      const methods = { dispatch, getState: noop }
      return promiseMiddleware(methods)(baseDispatch)(action)
    }
    store = {
      dispatch,
      getState: noop
    }
  })

  it('export default should correct', () => {
    expect(typeof promiseMiddleware).toBe('function')
    expect(typeof promiseMiddleware(store)).toBe('function')
    expect(typeof promiseMiddleware(store)(dispatch)).toBe('function')
  })

  it('promise middleware should work well', async () => {
    await dispatch({
      type: 'ACTION_TYPE',
      payload: Promise.resolve(1)
    })

    expect(baseDispatch).toHaveBeenCalledTimes(1)
    expect(baseDispatch.mock.calls[0][0]).toEqual({
      type: 'ACTION_TYPE',
      payload: 1
    })
  })

  it('promise middleware should work well when throw', async () => {
    await dispatch({
      type: 'ACTION_TYPE',
      payload: Promise.reject(new Error('error'))
    })

    expect(baseDispatch).toHaveBeenCalledTimes(1)
    expect(baseDispatch.mock.calls[0][0].error).toBe(true)
  })
})
