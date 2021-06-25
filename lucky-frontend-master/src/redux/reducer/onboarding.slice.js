import { createSlice } from '@reduxjs/toolkit';

const INITIAL_STATE = {
    actualStep: 1,
}


export const onboardingSlice = createSlice({
    initialState: INITIAL_STATE,
    name: 'onboarding',
    reducers: {
        stepForward: (state) => {
            state.actualStep += 1;
        },
        stepBackward: (state) => {
            if (state.actualStep > 1) state.actualStep -= 1;
            else state.error = 'No puedes retroceder otro paso';
        },
    },
});

export const {
    stepBackward,
    stepForward,
} = onboardingSlice.actions;