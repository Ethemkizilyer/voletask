import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";

export const getMyAsync = createAsyncThunk("my/getMyAsync", async () => {
  try {
    const { data } = await axios("http://challenge.vole.io/cards/mycards");
    return data;
  } catch (error) {
    console.log(error.message);
  }
});

const initialState = {
  loading: false,
  error: false,
  myCards: JSON.parse(localStorage.getItem("cards")) || [],
};

export const mySlice = createSlice({
  name: "my",
  initialState,
  reducers: {
    addCard: (state, action) => {
      const my = {
        id: action.payload.id,
        photoUrl: action.payload.photoUrl,
        price: action.payload.price,
        cardType: action.payload.cardType,
        name: action.payload.name,
        position: action.payload.position,
        team: action.payload.team,
        attributes: action.payload.attributes,
      };
      const filter = state.myCards.some((item) => item.id == my.id);

      if (filter) {
        toast.error("This player already has it in his basket");
      } else {
        state.myCards.push(my);
        toast.success("Added to the player cart");
        localStorage.setItem("cards", JSON.stringify(state.myCards));
      }
    },
    toggleComplete: (state, action) => {
      const index = state.myCards.findIndex(
        (card) => card.id === action.payload.id
      );
      state.myCards[index].completed = action.payload.completed;
      localStorage.setItem("cards", JSON.stringify(state.myCards));
    },
    deleteCard: (state, action) => {
      state.myCards = state.myCards.filter(
        (card) => card.id !== action.payload.id
      );
      localStorage.setItem("cards", JSON.stringify(state.myCards));
    },
    CategoryCard: (state, action) => {
      state.myCards = state.myCards.filter(
        (card) => card.cardType === action.payload.cardType
      );
      localStorage.setItem("cards", JSON.stringify(state.myCards));
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getMyAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(getMyAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.myCards =
          JSON.parse(localStorage.getItem("cards")) || action.payload;
        state.error = false;
      })
      .addCase(getMyAsync.rejected, (state) => {
        state.loading = false;
        state.error = true;
      });
  },
});

export const { addCard, toggleComplete, deleteCard, CategoryCard } = mySlice.actions;

export default mySlice.reducer;
