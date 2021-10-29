const createStates = (inputs, defaultValue) => {
    const obj = {}
    for (const input of inputs){
        obj[input.name] = defaultValue[input.name] || input.defaultValue;
    }
    return obj;
}


export default createStates;