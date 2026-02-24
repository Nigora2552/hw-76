import type {IMessages, MessageMutation} from "../types";
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axiosApi from "../axiosApi.ts";
import type {RootState} from "./store.ts";


interface MessagesState {
    items: IMessages[];
    loading: boolean;
}

const initialState: MessagesState = {
    items: [],
    loading: false,
}

export const messagesSlice = createSlice({
    name: 'message',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(createMessage.pending, (state) => {
            state.loading = true
        });
        builder.addCase(createMessage.fulfilled, (state) => {
            state.loading = false
        });
        builder.addCase(createMessage.rejected, (state) => {
            state.loading = false
        });
    }
});

export const createMessage = createAsyncThunk<void, MessageMutation>('message/createMessage',
    async (item: MessageMutation) => {
    const newMessage = {
        ...item, item,
        datetime: new Date().toISOString(),
    }
        await axiosApi.post('/messages', newMessage)
    });

export const selectMessages = (state: RootState) => state.message.items;
export const selectLoading = (state: RootState) => state.message.loading;


export const messageReducer = messagesSlice.reducer;
