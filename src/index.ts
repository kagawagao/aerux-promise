import { isFSA } from 'flux-standard-action'
import isPromise from 'is-promise'
import { AnyAction, Dispatch, MiddlewareAPI } from 'redux'

export default function promiseMiddleware({ dispatch }: MiddlewareAPI) {
  return (next: Dispatch<AnyAction>) => (action: AnyAction) => {
    if (!isFSA(action)) {
      if (isPromise(action)) {
        return action.then(res => {
          dispatch(res)
        })
      } else {
        return next(action)
      }
    }

    if (isPromise(action.payload)) {
      return (action.payload as any)
        .then((result: any) => {
          dispatch({ ...action, payload: result })
        })
        .catch((error: any) => {
          dispatch({ ...action, payload: error, error: true })
        })
    }
    return next(action)
  }
}
