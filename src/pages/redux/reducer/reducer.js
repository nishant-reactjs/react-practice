const amountReducer = (state = 0, action)=>{
    
    switch (action.type) {
        case 'diposit':
            return state + action.payload
        case 'withdraw':
            return state - action.payload
        default:
            return state;
    }
}

export default amountReducer