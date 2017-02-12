import localReducer from './reducer'
import { NAME } from './constants'
import Container,{ navs } from './container/Container'

export const reducers = {
  [NAME]: localReducer
}

export { navs , Container }

export default { NAME , reducers, navs }
