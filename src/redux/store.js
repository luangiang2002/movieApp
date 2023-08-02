import { createStore, applyMiddleware, combineReducers } from 'redux'

import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import { authReducer } from './reducer/authReducer'
import {  VideoCHANNEL, VideoComment, VideoDetail, VideoReducer, selectedVideoReducer } from './reducer/videoReducer'
import { ShortReducer } from './reducer/ToggleReducer'

const rootReducer = combineReducers({
    auth: authReducer,
    search:selectedVideoReducer,
    videowatch:VideoReducer,
    comment:VideoComment,
    videoChannel:VideoCHANNEL,
    videoDetail:VideoDetail,
    short:ShortReducer,
})


const store = createStore(
    rootReducer,
    {},
    composeWithDevTools(applyMiddleware(thunk))
)

export default store;