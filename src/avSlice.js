import { createSlice } from "@reduxjs/toolkit";

export const avSlice = createSlice({
  name: "av",
  initialState: [
     {
        img: "https://images.pexels.com/photos/3864594/pexels-photo-3864594.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        name: "Projectors",
        cost: 200,
        quantity: 0,
    },
    {
        img: "https://images.pexels.com/photos/2897776/pexels-photo-2897776.jpeg?auto=compress&cs=tinysrgb&w=1200",
        name: "Speaker",
        cost: 35,
        quantity: 0,
    },
    {
        img: "https://images.pexels.com/photos/164829/pexels-photo-164829.jpeg?auto=compress&cs=tinysrgb&w=1200",
        name: "Microphones",
        cost: 45,
        quantity: 0,
    },
    {
        img: "https://images.pexels.com/photos/3861962/pexels-photo-3861962.jpeg?auto=compress&cs=tinysrgb&w=1200",
        name: "Whiteboards",
        cost: 80,
        quantity: 0,
    },
    {
        img: "https://images.pexels.com/photos/134065/pexels-photo-134065.jpeg?auto=compress&cs=tinysrgb&w=1200",
        name: "Signage",
        cost: 80,
        quantity: 0,
    },
  ],


  reducers: {
    incrementAvQuantity: (state, action) => {
      const {payload: index} = action;
      if(state[index])
        state[index].quantity++;
    },
    decrementAvQuantity: (state, action) => {
     const {payload: index} = action;
     const item = state[index];
      if(item && item.quantity > 0 )
        item.quantity++;
    },
  },
});

export const { incrementAvQuantity, decrementAvQuantity } = avSlice.actions;

export default avSlice.reducer;
