const initialState = {
    tracks: [],
    comprehensives: [],
    step: 0
}

export function regData(state = initialState, action) {
    switch (action.type) {
        case 'SET_STEP':
            return {
                ...state,
                step: action.step
            };
        default:
            return {
                ...state
            };
    }
}