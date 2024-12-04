import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetcher = createAsyncThunk("thoughts", async () => {
  const response = await fetch("/generate_insult.php?lang=en&type=json", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response.json();
});

const fetched = createSlice({
  name: "data",
  initialState: {
    isLoading: true,
    data: null,
    isError: false,
  },
  extraReducers: (builder) => {
    builder.addCase(fetcher.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetcher.fulfilled, (state, action) => {
      state.data = action.payload;
    });
    builder.addCase(fetcher.rejected, (state, action) => {
      console.log("Error:", action.payload);
      state.isError = true;
    });
  },
});

export default fetched.reducer;
