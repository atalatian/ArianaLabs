import getUsersFromLocalStorage from "../services/getUsersFromLocalStorage";
import createNewState from "../services/createNewState";
import filterById from "../services/filterById";
import getIdFromLocalStorage from "../services/getIdFromLocalStorage";
import replaceUser from "../services/replaceUser";

const usersReducer = (state = getUsersFromLocalStorage(), action) => {
    if (action.type === 'ADD_USER'){
        const newState = createNewState(state);
        const user = {...action.payload, id: getIdFromLocalStorage()};
        localStorage.setItem('id', getIdFromLocalStorage().toString());
        newState.push(user);
        localStorage.setItem('users', JSON.stringify(newState));
        return newState;
    }else if (action.type === 'DELETE_USER'){
        let newState = createNewState(state);
        newState = filterById(newState, action.payload);
        localStorage.setItem('users', JSON.stringify(newState));
        return newState
    }else if(action.type === 'EDIT_USER'){
        let newState = createNewState(state);
        newState = replaceUser(newState, action.payload);
        localStorage.setItem('users', JSON.stringify(newState));
        return newState;
    }else {
        return state;
    }
}

export default usersReducer;