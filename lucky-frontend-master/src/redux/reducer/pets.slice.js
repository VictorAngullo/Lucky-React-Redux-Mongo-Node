import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getAllPets } from '../../api/pets.api';

const INITIAL_STATE = {
    petsFiltered: [],
    loading: false,
    filter: {
        location: '',
        specie: '',
    }
}

export const petFilterAsync = createAsyncThunk(
    'pets/getPetFilter',
    async (payload) => {
        const response = await getAllPets(payload.url);

        return response;
    }
);

export const petsSlice = createSlice({
    name: 'pets',
    initialState: INITIAL_STATE,
    reducers: {
        changeFilterField: (state, action) => {
            const { name, value } = action.payload;

            state.filter[name] = value;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(petFilterAsync.pending, (state) => {
                console.log('hola')
                state.loading = true;
            })
            .addCase(petFilterAsync.fulfilled, (state, action) => {
                console.log(action);
                state.loading = false;
                state.petsFiltered = action.payload.response;
            })
    }
})

export const { changeFilterField } = petsSlice.actions;

export default petsSlice.reducer;