import { all } from 'redux-saga/effects'
import accountSaga from './AccountSaga'
import userSaga from './UserSaga'

export default function* rootSaga() {
    yield all([
        ...userSaga,
        ...accountSaga
    ])
}