export const NEXT_BTN = "NEXT_BTN";
export const BACK_BTN = "BACK_BTN";
export const CHANGE_EMAIL = "CHANGE_EMAIL";
export const CHANGE_PASSWORD = "CHANGE_PASSWORD";
export const CHANGE_CONFIRM = "CHANGE_CONFIRM";
export const CHANGE_DAY = "CHANGE_DAY";
export const CHANGE_MONTH = "CHANGE_MONTH";
export const CHANGE_YEAR = "CHANGE_YEAR";
export const CHANGE_GENDER = "CHANGE_GENDER";
export const GOTO_DASHBOARD = "GOTO_DASHBOARD";

export function nextBtn(step){
    return { type: NEXT_BTN, step };
}

export function backBtn(step){
    return { type: BACK_BTN, step };
}

export function changeEmail(email){
    return {type: CHANGE_EMAIL, email}
}

export function changePassword(password){
    return {type: CHANGE_PASSWORD, password}
}

export function changeConfirm(confirm){
    return {type: CHANGE_CONFIRM, confirm}
}

export function changeDay(day){
    return {type: CHANGE_DAY, day}
}

export function changeMonth(month){
    return {type: CHANGE_MONTH, month}
}

export function changeYear(year){
    return {type: CHANGE_YEAR, year}
}

export function changeGender(gender){
    return {type: CHANGE_GENDER, gender}
}

export function gotoDashboard(){
    return {type: GOTO_DASHBOARD}
}