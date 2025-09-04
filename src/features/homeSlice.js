import { createSlice } from "@reduxjs/toolkit";

const homeSlice = createSlice({
  name: "home",
  initialState: {
    heroImage: null,
    heroTitle: null,
    description: null,
    funFact: null,
    sliderImages: null,
    checkOutDescription: null,
    serviceDescription: null,
    services: [],
    qa: [],
  },
  reducers: {
    setHeroImage: (state, action) => {
      state.heroImage = action.payload;
    },
    setHeroTitle: (state, action) => {
      state.heroTitle = action.payload;
    },
    setDescription: (state, action) => {
      state.description = action.payload;
    },
    setFunFact: (state, action) => {
      state.funFact = action.payload;
    },
    setSliderImages: (state, action) => {
      state.sliderImages = action.payload;
    },
    setCheckOutDescription: (state, action) => {
      state.checkOutDescription = action.payload;
    },
    setServiceDescription: (state, action) => {
      state.serviceDescription = action.payload;
    },
    setServices: (state, action) => {
      state.services = [...state.services, action.payload];
    },
    setQa: (state, action) => {
      state.qa = [...state.qa, action.payload];
    },
  },
});

export const {
  setHeroImage,
  setHeroTitle,
  setDescription,
  setFunFact,
  setSliderImages,
  setCheckOutDescription,
  setServiceDescription,
  setServices,
  setQa,
} = homeSlice.actions;
export default homeSlice.reducer;
