import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CampaignState {
  value: number;
  title: string;
}

const initialState: CampaignState = {
  value: 0,
  title: 'Campaign Title',
};

const campaignSlice = createSlice({
  name: 'campaigns',
  initialState,
  reducers: {
    incremented(state) {
      state.value++;
    },
    campaignAdded(state, action: PayloadAction<string>) {
      state.title = action.payload;
    },
  },
});

export const { incremented, campaignAdded } = campaignSlice.actions;
export default campaignSlice.reducer;
