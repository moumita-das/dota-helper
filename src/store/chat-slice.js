import {createSlice} from '@reduxjs/toolkit';

const chatSlice = createSlice({
    name: 'chat',
    initialState:{
        messages : [],
        currentSpeaker : 'user',
        controlVisible : false,
        currentMessage : ''
    },
    reducers:{
        setCurrentMessage(state, action){
            state.currentMessage = action.payload
        }
    }
});

export const chatActions = chatSlice.actions;

export default chatSlice;