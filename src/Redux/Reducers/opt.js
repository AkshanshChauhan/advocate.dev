const checkOtpClickedReducer = (state=true, action) => {
    switch (action.type) {
        case 'OTPCLICKED':
            return false
        case 'OTPCLICKEDAG':
            return true
        default:
            return state;
    }
}

export default checkOtpClickedReducer;