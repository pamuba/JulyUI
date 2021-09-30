//takeEvery
import {takeEvery, call, fork, put} from 'redux-saga/effects'
import * as actions from '../actions/users'
import * as api from '../api/users'


//worker saga
function* getUsers(){
    try{
        const result = yield call(api.getUsers)
        // console.log(result.data.data)
        yield put(actions.getUsersRequest({
            items: result.data.data
        }))
    }
    catch(e){
        console.log("Error")
    }
}


//watcher saga- to watch for an action to happrn
function* watchGetUsersRequest(){
    //takeEvery implements While(true)
    yield takeEvery(actions.Types.GET_USERS_REQUEST, getUsers)
}

const usersSagas = [
    fork(watchGetUsersRequest)
]

export default usersSagas;
