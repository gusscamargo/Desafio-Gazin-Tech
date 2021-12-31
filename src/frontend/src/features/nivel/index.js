import { createSlice } from "@reduxjs/toolkit"

import { fetchById } from "./fetchById"

export const niveSlice = createSlice({
    name: "nivel",
    initialState: {
        value: {
            data: {}
        }
    },
    extraReducers: builder => {
        builder.addCase(fetchById.fulfilled, (state, action) => {
            state.value = action.payload
        })
    }
})

export default niveSlice.reducer