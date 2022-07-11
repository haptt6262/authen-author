import { combineReducers } from 'redux'
import accountReducer from './accountReducer'
import userCollectionReducer from './userReducer/item.collection.reducer'
import userInstanceReducer from './userReducer/item.instance.reducer'

export default combineReducers({
    userCollection: userCollectionReducer,
    userInstance: userInstanceReducer,
    account: accountReducer,
})