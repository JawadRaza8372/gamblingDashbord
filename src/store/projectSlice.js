import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	employs: [],
	isLoading: false,
	msgs: [],
	mesg: [],
	mytokens: [],
};

export const projectSlice = createSlice({
	name: "project",
	initialState,
	reducers: {
		setmyTokens: (state, action) => {
			if (action.payload.tokens === null) {
				state.mytokens = [];
			} else {
				state.mytokens = action.payload.tokens;
			}
		},
		setEmploys: (state, action) => {
			if (action.payload.employs === null) {
				state.employs = [];
			} else {
				state.employs = action.payload.employs;
			}
		},
		setLoading: (state, action) => {
			if (action.payload.isLoading === null) {
				state.isLoading = false;
			} else {
				state.isLoading = action.payload.isLoading;
			}
		},
		setMsgs: (state, action) => {
			if (action.payload.msgs === null) {
				state.msgs = [];
			} else {
				state.msgs = action.payload.msgs;
			}
		},

		setChat: (state, action) => {
			if (action.payload.mesg === null) {
				state.mesg = [];
			} else {
				state.mesg = action.payload.mesg;
			}
		},
	},
});

export const { setEmploys, setLoading, setChat, setMsgs, setmyTokens } =
	projectSlice.actions;

export default projectSlice.reducer;
