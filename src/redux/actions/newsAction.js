import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const API_KEY = "6f411bd211604bc4947a8f8df2040155";


export const fetchNews = createAsyncThunk('news', async () => {
    // const res = await axios.get(`SampleOutput.json`);
    const res = await axios.get(`https://newsapi.org/v2/everything?q=sports&apiKey=${API_KEY}`);
    // console.log(res)
    return res.data.articles
})

export const fetchLatest = createAsyncThunk('latest', async () => {
    // const res = await axios.get(`SampleOutput.json`);
    const res = await axios.get(`https://newsapi.org/v2/everything?q=crypto&apiKey=6f411bd211604bc4947a8f8df2040155`);
    // console.log("here",res)
    return res.data.articles
})

export const fetchTopHeadlines = createAsyncThunk('topheadlines', async () => {
    // const res = await axios.get(`SampleOutput.json`);
    const res = await axios.get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=6f411bd211604bc4947a8f8df2040155`);
    // console.log("here",res)
    return res.data.articles
})

export const fetchMoreNews = createAsyncThunk('more', async () => {
    // const res = await axios.get(`SampleOutput.json`);
    const res = await axios.get(`https://newsapi.org/v2/everything?q=tesla&apiKey=6f411bd211604bc4947a8f8df2040155`);
    // console.log("here",res)
    return res.data.articles
})

export const fetchPopular = createAsyncThunk('popular', async () => {
    // const res = await axios.get(`SampleOutput.json`);
    const res = await axios.get('https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=6f411bd211604bc4947a8f8df2040155');
    return res.data.articles
})

export const fetchByCat = createAsyncThunk('category', async (cat) => {
    // console.log('am',cat)
    const res = await axios.get(`https://newsapi.org/v2/top-headlines?country=us&category=${cat}&apiKey=6f411bd211604bc4947a8f8df2040155`);
    return res.data.articles
})

export const fetchSearch = createAsyncThunk('search', async (key) => {
    const res = await axios.get(`https://newsapi.org/v2/everything?q=${key}&apiKey=6f411bd211604bc4947a8f8df2040155`);
    return res.data.articles
})