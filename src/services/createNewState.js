const createNewState = (state) =>{
    const forMutable = (state, previous, index) => {
        if (state.constructor === Array){
            if (previous){
                previous[index] = [...state];
            }
            state.forEach((item, index)=>{
                forMutable(item, state, index);
            })
        }else if (state.constructor === Object){
            if (previous){
                previous[index] = {...state}
            }
            for (let prop in state){
                if (state.hasOwnProperty(prop)){
                    forMutable(state[prop], state, prop);
                }
            }
        }
    }

    let newState
    if (state.constructor === Array){
        newState = [...state];
        forMutable(newState, null, null);
    }else if (state.constructor === Object){
        newState = {...state};
        forMutable(newState, null, null);
    }else {
        return state;
    }
    return newState;
}

export default createNewState;