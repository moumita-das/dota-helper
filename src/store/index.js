import { configureStore } from "@reduxjs/toolkit";
import chatSlice from "./chat-slice";
import controlsSlice from "./controls-slice";

const store = configureStore({
    reducer: {
        chat : chatSlice.reducer,
        controls: controlsSlice.reducer
    }
})

export default store;