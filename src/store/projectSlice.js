import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	orders: [],
	employs: [],
	isLoading: false,
	msgs: [],
	mesg: [],
};

export const projectSlice = createSlice({
	name: "project",
	initialState,
	reducers: {
		setOrders: (state, action) => {
			if (action.payload.orders === null) {
				state.orders = [];
			} else {
				state.orders = action.payload.orders;
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

export const { setOrders, setEmploys, setLoading, setChat, setMsgs } =
	projectSlice.actions;

export default projectSlice.reducer;
