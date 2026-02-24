import type {IMessages, MessageMutation} from "../types";
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axiosApi from "../axiosApi.ts";


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
    // extraReducers: builder => {
    //
    // }
});

export const createMessage = createAsyncThunk<void, MessageMutation>('message/createMessage',
    async (item:MessageMutation) => {
        await axiosApi.post('/messages', item)
    });


export const