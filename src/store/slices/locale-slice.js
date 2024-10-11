import { createSlice } from "@reduxjs/toolkit";

const localeSlice = createSlice({
	name: "locale",
	initialState: {
		lang: { code: "en", title: "English", countryCode: "gb" },
		currency: "EUR",
		timeZone: "GMT+2",
	},
	reducers: {
		setLang: (state, action) => {
			state.lang = action.payload;
		},
/*************  ✨ Codeium Command ⭐  *************/
		/**
		 * Sets the currency to the given value
		 * @function
		 * @param {Object} state - The current state
		 * @param {Object} action - The action containing the currency value
		 * @param {String} action.payload - The currency value
		 */
/******  ec969e96-8ac0-40b9-8b3d-cee30782a061  *******/
		setCurrency: (state, action) => {
			state.currency = action.payload;
		},
		setTimeZone: (state, action) => {
			state.timeZone = action.payload;
		},
	},
});

export const { setLang, setCurrency, setTimeZone } = localeSlice.actions;
export default localeSlice.reducer;