import { configureStore } from '@reduxjs/toolkit';
import { onboardingSlice } from './reducer/onboarding.slice';
import { userSlice } from './reducer/user.slice';
import { petsSlice } from './reducer/pets.slice';
import { adoptPetsSlice } from './reducer/adopt.slice';

export const store = configureStore({
    reducer: {
        onboarding: onboardingSlice.reducer,
        user: userSlice.reducer,
        pets: petsSlice.reducer,
        adopt: adoptPetsSlice.reducer,
    }
});