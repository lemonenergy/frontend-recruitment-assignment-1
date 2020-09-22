import { useReducer, useEffect, useRef } from 'react'
import { getUsers } from '../services/github'
import userModel from '../models/user'

const actions = {
  FETCH: data => ({ loading: true, error: null, users: data.users }),
  SUCCESS: (data, { users }) => ({
    loading: false,
    error: null,
    users: [...data.users, ...users],
  }),
  ERROR: (data, { error }) => ({ loading: false, error, users: data.users }),
}

const reducer = (st, { type, ...params }) => {
  const handler = actions[type]
  return handler ? handler(st, params) : st
}

const useUsers = () => {
  const [{ loading, users, error }, dispatch] = useReducer(reducer, {
    loading: false,
    users: [],
    error: null,
  })
  const lastIdRef = useRef(0)

  const fetchMore = async () => {
    dispatch({ type: 'FETCH' })
    try {
      const data = await getUsers({ since: lastIdRef.current })
      dispatch({ type: 'SUCCESS', users: data.map(userModel) })
      lastIdRef.current = data[data.length - 1].id
    } catch (e) {
      dispatch({ type: 'ERROR', error: e })
    }
  }

  useEffect(() => {
    fetchMore()
  })

  return [{ users, loading, error }, { fetchMore }]
}

export default useUsers
