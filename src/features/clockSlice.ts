import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
    name: 'clock',
    initialState: {
        timeZones: false as false | TimeZones,
        displayedClocks: [] as Array< ClockConfig >
    },
    reducers: {
        setTimeZones: (state, action: PayloadAction<TimeZones>) => {
            state.timeZones = action.payload;
        },
        addClock: (state, action: PayloadAction<ClockConfig[]>) => {
            state.displayedClocks.push(...action.payload);
        },
        changeClockTimeZone: (state, action: PayloadAction<{ clockIdx: number, timeZoneIdx: number }>) => {
            state.displayedClocks[action.payload.clockIdx].timeZoneIdx = action.payload.timeZoneIdx;
        }
    },
});

// Action creators are generated for each case reducer function
export const { setTimeZones, addClock, changeClockTimeZone } = counterSlice.actions;

export default counterSlice.reducer;