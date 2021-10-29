import createNewState from "../services/createNewState";

const initialState = {
    variant: 'create',
    defaultValue: {},
}

const formReducer = (state = initialState, action) => {
    if (action.type === 'GO_CREATE') {
        const newState = createNewState(state);
        newState.variant = 'create';
        newState.defaultValue = {};
        return newState;
    }else if (action.type === 'GO_EDIT'){
        const newState = createNewState(state);
        newState.variant = 'edit';
        newState.defaultValue = action.payload;
        return newState;
    }else {
        return state;
    }
}

export default formReducer;