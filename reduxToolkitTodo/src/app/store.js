// first we create a store js file then we import the configure store
// then we create reducers (reducers are create in different way in react name as slicer)

/* 
  redux is a famoous library for JS which is use for managing state in the application. In application different part the state is store in a central part and then use to manage state according to the action and reducers.
  Redux Toolkit and redux is work together to make easy use redux. RKT reduce the redux Boilerplate code and make easy the common redux work. 
*/

import {configureStore} from '@reduxjs/toolkit';
import todoReducer from '../features/Todo/todoSlice'

export const store = configureStore({
    reducer : todoReducer
})
