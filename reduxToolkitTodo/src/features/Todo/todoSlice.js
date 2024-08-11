import { createSlice , nanoid } from '@reduxjs/toolkit' ;
// nanoid is use for reading or generate the unique id when we call it.

const initialState = {
    todos : [{id : 1 , text : "Hello world"}]
}

export const todoSlice = createSlice({
    name:'todo' ,
    initialState,

    // reducer is a function which can change its state according to the action . It is a pure funcion always give same input for same output any other side effect does't happen.
    // reducer application is to take present state and one action as input then create a new output state . 
    reducers : {
        addTodo :  (state , action) => {
            const todo = {
                id : nanoid() ,
                text : action.payload
            }
            state.todos.push(todo)
        }, 
        // payload is a object
        // always state and action are placed in this place. State define or give access of current State and Action is a object that descrobe a change that should happen in the state it .
        removeTodo : ( state , action ) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload )
            // filter use to create a array with all elements that pass a test implemented by the provided function . 
        },

    }
})

export const {addTodo , removeTodo} = todoSlice.actions 

export default todoSlice.reducer

// slicing in redux is different from the python,in redux slicing slicing meaning is to change one part of state then creating a new reducer and action for that part. 