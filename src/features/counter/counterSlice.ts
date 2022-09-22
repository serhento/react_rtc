import {createSlice, PayloadAction} from "@reduxjs/toolkit";

type CounterState = {
    value: number
}

const initialState: CounterState = {
    value: 0
}

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        incremented(state){
            state.value++
        },
        decremented(state){
            state.value--
        },
        reset(state){
            state.value = 0
        },
        amountAdded(state, action: PayloadAction<number>){
            state.value += action.payload
        }
    }
})

export const {incremented, decremented, reset, amountAdded} = counterSlice.actions
export default counterSlice.reducer