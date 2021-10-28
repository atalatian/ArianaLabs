const addUser = (state = [], action, user) => {
    switch (action.type) {
        case "ADD_USER":
            state.push(user);
            return state;
        default:
            return state;
    }
}

export default addUser()