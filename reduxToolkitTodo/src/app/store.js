// first we create a store js file then we import the configure store
// then we create reducers (reducers are create in different way in react name as slicer)

import {configureStore} from '@reduxjs/toolkit';
import todoReducer from '../features/Todo/todoSlice'

export const store = configureStore({
    reducer : todoReducer
})
