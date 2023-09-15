import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import instance from '../api/axious';

// API thêm mới sản phẩm
export const createUser = createAsyncThunk("http://localhost:3000/users/createUser", async (user) => {
    try {
        const response = await instance.post("users", user);
        return response.data;
    } catch (error) {
        console.log(error);
    }
});