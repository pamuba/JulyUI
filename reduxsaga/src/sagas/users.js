//takeEvery
import {takeEvery, call, fork, put, takeLatest} from 'redux-saga/effects'
import * as actions from '../actions/users'
import * as api from '../api/users'


//worker saga
function* getUsers(){
    try{
        const result = yield call(api.getUsers)
        console.log(result.data.data)
        yield put(actions.getUsersSuccess({
            items: result.data.data
        }))
    }
    catch(e){
        console.log(e.message)
    }
}


function* createUser({payload}){
    try{
        yield call(api.createUser, {
            firstName: payload.firstName,
            lastName: payload.lastName
        })
        yield call(getUsers)
    }
    catch(e){
        console.log(e.message)
    }

}

//watcher saga- to watch for an action to happrn
function* watchGetUsersRequest(){
    //takeEvery implements While(true)
    yield takeEvery(actions.Types.GET_USERS_REQUEST, getUsers)
}

function* watchCreateUserRequest(){
    yield takeLatest(actions.Types.CREATE_USER_REQUEST, createUser)
}

const usersSagas = [
    fork(watchGetUsersRequest),
    fork(watchCreateUserRequest)
]

export default usersSagas;
