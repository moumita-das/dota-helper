import { createSlice } from "@reduxjs/toolkit";

const controlsSlice = createSlice({
    name: 'controls',
    initialState: {
        isVisible : false,
        confirmBeforeSend : false,
        resultAudio : false
    },
    reducers : {
        toggleControlsVisbility(state, action) {
            state.isVisible = !state.isVisible;
        },
        toggleConfirmBeforeSend(state, action) {
            state.confirmBeforeSend = !state.confirmBeforeSend
        }
    }
})

export const controlsActions = controlsSlice.actions;

export default controlsSlice;