import { combineReducers } from 'redux';
import {
    NEXT_BTN,
    BACK_BTN,
    CHANGE_EMAIL,
    CHANGE_PASSWORD,
    CHANGE_CONFIRM,
    CHANGE_DAY,
    CHANGE_MONTH,
    CHANGE_YEAR,
    CHANGE_GENDER,
    GOTO_DASHBOARD
} from '../actions/login.js';

let initialData = {
    email: '',
    emailError: '',
    password: '',
    passwordError: '',
    confirm: '',
    confirmError: '',
    dd: 0,
    mm: 0,
    yyyy: 0,
    ddtextcolor: 'grey',
    mmtextcolor: 'grey',
    yyyytextcolor: 'grey',
    gender: '',
    dropdown: '',
    step: 0,
    options: [
        { key: 1, text: 'Option 1', value: 1 },
        { key: 2, text: 'Option 2', value: 2 },
        { key: 3, text: 'Option 3', value: 3 }
    ],

    result: '',
}

let regemail = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
let regdd = /^([1-9]|0[1-9]|1[012])$/;
let regmm = /^([1-9]|0[1-9]|[12][0-9]|3[01])$/;
let regyy = /^(([1]{1}[9]{1}\d{2})|([2-9]{1}\d{3}))$/;
//let regdate = /^([1-9]|0[1-9]|1[012])\/([1-9]|0[1-9]|[12][0-9]|3[01])\/(([1]{1}[9]{1}\d{2})|([2-9]{1}\d{3}))$/

function data(state = initialData, action) {
    switch (action.type) {
        case NEXT_BTN:
            if ((state.step == 0 && regemail.test(state.email) && state.password.length >= 6 && state.password == state.confirm) || (state.step == 1 && state.dd != '' && state.mm != '' && state.yyyy != '' && regdd.test(state.dd) && regmm.test(state.mm) && regyy.test(state.yyyy))) {
                state = Object.assign({}, state, { step: state.step + action.step });
                return state;
            }
            if (!regemail.test(state.email)) {
                state = Object.assign({}, state, { emailError: "Email should be a valid email address." });
            }
            if (state.email == '') {
                state = Object.assign({}, state, { emailError: "Email should be required." });
            }
            if (state.password.length < 6) {
                state = Object.assign({}, state, { passwordError: "Password should be minimum 6 characters long." });
            }
            if (state.password == '') {
                state = Object.assign({}, state, { passwordError: "Password is required." });
            }
            if (state.password != state.confirm) {
                state = Object.assign({}, state, { confirmError: "Password confirmation should match the password." });
            }
            if (!regdd.test(state.dd)) {
                state = Object.assign({}, state, { ddtextcolor: "red" });
            }
            if (!regmm.test(state.mm)) {
                state = Object.assign({}, state, { mmtextcolor: "red" });
            }
            if (!regyy.test(state.yyyy)) {
                state = Object.assign({}, state, { yyyytextcolor: "red" });
            }
            return state;
        case BACK_BTN:
            state = Object.assign({}, state, { step: state.step + action.step });
            return state;
        case CHANGE_EMAIL:
            if (regemail.test(action.email)) {
                state = Object.assign({}, state, { emailError: "" });
            }
            return Object.assign({}, state, { email: action.email });
        case CHANGE_PASSWORD:
            if (action.password.length >= 6) {
                state = Object.assign({}, state, { passwordError: "" });
            }
            return Object.assign({}, state, { password: action.password });
        case CHANGE_CONFIRM:
            if (state.password == action.confirm) {
                state = Object.assign({}, state, { confirmError: "" });
            }
            return Object.assign({}, state, { confirm: action.confirm });
        case CHANGE_DAY:
            if (regdd.test(action.day)) {
                state = Object.assign({}, state, { ddtextcolor: "grey" });
            }
            state = Object.assign({}, state, { dd: action.day });
            return state;
        case CHANGE_MONTH:
            if (regmm.test(action.month)) {
                state = Object.assign({}, state, { mmtextcolor: "grey" });
            }
            state = Object.assign({}, state, { mm: action.month });
            return state;
        case CHANGE_YEAR:
            if (regyy.test(action.year)) {
                state = Object.assign({}, state, { mmtextcolor: "grey" });
            }
            state = Object.assign({}, state, { yyyy: action.year });
            return state;
        case CHANGE_GENDER:
            state = Object.assign({}, state, { gender: action.gender });
            return state;

        case GOTO_DASHBOARD:
            let r = {
                user_data: {
                    "email": state.email,
                    "password": state.password,
                    "date_of_birth": "",
                    "gender": state.gender,
                    "how_hear_about_us": null
                }
            };
            return Object.assign({}, state, { result: r });
        default:
            return state;
    }
}


const login = combineReducers({
    data
});

export default login;