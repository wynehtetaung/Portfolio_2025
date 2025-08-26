import { createSlice } from "@reduxjs/toolkit";

const dashboardSlice = createSlice({
  name: "dashboard",
  initialState: {
    logoBlack: null,
    logoWhite: null,
    description: null,
    linkedInLink: null,
    facebookLink: null,
    instagramLink: null,
  },
  reducers: {
    setLogoBlack: (state, action) => {
      state.logoBlack = action.payload;
    },
    setLogoWhite: (state, action) => {
      state.logoWhite = action.payload;
    },
    setDescription: (state, action) => {
      state.description = action.payload;
    },
    setLinkedInLink: (state, action) => {
      state.linkedInLink = action.payload;
    },
    setFacebookLink: (state, action) => {
      state.facebookLink = action.payload;
    },
    setInstagramLink: (state, action) => {
      state.instagramLink = action.payload;
    },
  },
});

export const {
  setLogoBlack,
  setLogoWhite,
  setDescription,
  setLinkedInLink,
  setFacebookLink,
  setInstagramLink,
} = dashboardSlice.actions;
export default dashboardSlice.reducer;
