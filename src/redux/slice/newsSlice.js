import { createSlice } from '@reduxjs/toolkit';
import { fetchNews, fetchTopHeadlines, fetchLatest, fetchMoreNews, fetchPopular, fetchSearch, fetchByCat } from '../actions/newsAction';

const initialState = {
	isLoading: false,
	error: {},
	trendingNews: [],
	latest: [],
	topheadlines: [],
	moreNews: [],
	popularNews: [],
	clickedNews: [],
	searchedNews:[],
	catNews:[],
};

export const newsSlice = createSlice({
	name: 'news',
	initialState,
	reducers: {
		clickedNews: (state, action) => {
			state.clickedNews = action.payload;
		}
	},
	extraReducers: (builder) => {
		builder
			.addCase(fetchNews.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(fetchNews.fulfilled, (state, action) => {
				state.isLoading = false;
				const trending = action.payload.slice(0, 10);
				// console.log("ger",trending)
				state.trendingNews = trending;
			})
			.addCase(fetchNews.rejected, (state, action) => {
				state.isLoading = false;
				state.error = action.payload;
			})
			.addCase(fetchLatest.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(fetchLatest.fulfilled, (state, action) => {
				state.isLoading = false;
				const latest = action.payload.slice(0, 10);
				// console.log("ger",trending)
				state.latest = latest;
			})
			.addCase(fetchLatest.rejected, (state, action) => {
				state.isLoading = false;
				state.error = action.payload;
			})
			.addCase(fetchTopHeadlines.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(fetchTopHeadlines.fulfilled, (state, action) => {
				state.isLoading = false;
				const topheadlines = action.payload.slice(0, 10);
				// console.log("ger",trending)
				state.topheadlines = topheadlines;
			})
			.addCase(fetchTopHeadlines.rejected, (state, action) => {
				state.isLoading = false;
				state.error = action.payload;
			})
			.addCase(fetchMoreNews.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(fetchMoreNews.fulfilled, (state, action) => {
				state.isLoading = false;
				const more = action.payload.slice(0, 10);
				// console.log("ger",trending)
				state.moreNews = more;
			})
			.addCase(fetchMoreNews.rejected, (state, action) => {
				state.isLoading = false;
				state.error = action.payload;
			})
			.addCase(fetchPopular.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(fetchPopular.fulfilled, (state, action) => {
				state.isLoading = false;
				const more = action.payload.slice(0, 10);
				// console.log("ger",trending)
				state.popularNews = more;
			})
			.addCase(fetchPopular.rejected, (state, action) => {
				state.isLoading = false;
				state.error = action.payload;
			})
			.addCase(fetchByCat.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(fetchByCat.fulfilled, (state, action) => {
				state.isLoading = false;
				state.catNews = action.payload;
			})
			.addCase(fetchByCat.rejected, (state, action) => {
				state.isLoading = false;
				state.error = action.payload;
			})
			.addCase(fetchSearch.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(fetchSearch.fulfilled, (state, action) => {
				state.isLoading = false;
				state.searchedNews = action.payload;
			})
			.addCase(fetchSearch.rejected, (state, action) => {
				state.isLoading = false;
				state.error = action.payload;
			});
	}
});

// Action creators are generated for each case reducer function
export const { clickedNews } = newsSlice.actions;

export default newsSlice.reducer;
