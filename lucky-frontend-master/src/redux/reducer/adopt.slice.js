import { createSlice } from '@reduxjs/toolkit';

const INITIAL_STATE = {
    pets: [],
    form: {
        name: '',
        email: '',
        movil: 0,
        dni: '',
        address: '',
        pedegree: false,
        specie: '',
        another: '',
        howMany: '',
        why:'',
        necessities: '',
        cost: '',
        diet: '',
        rent: false,
        allow: false,
        move: false,
        garden: false,
        people: false,
        agree: false,
        visit: false,
    },
    actualStep: 1,
    error: '',
}

export const adoptPetsSlice = createSlice({
    name: 'adopt',
    initialState: INITIAL_STATE,
    reducers: {
        stepForward: (state) => {
            state.actualStep += 1;
        },
        stepBackward: (state) => {
            if (state.actualStep > 1) state.actualStep -= 1;
            else state.error = 'No puedes retroceder otro paso';
        },
        changeFormField: (state, action) => {
            const {name, value} = action.payload;
            
            state.form[name] = value;
        },
        addPet: (state, action) => {
            state.pets = [...state.pets, action.payload];
        }, 
        resetForm: (state) => {
            state.form = INITIAL_STATE.form;
        },
    },
});

export const {
    stepBackward,
    stepForward,
    changeFormField,
    addPet,
    resetForm,
} = adoptPetsSlice.actions;