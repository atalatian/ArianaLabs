const textInputValidation = (text) => {
    if (!text.length){
        return {
            error: true,
            type: ['EMPTY'],
        }
    }else {
        return {
            error: false,
            type: [],
        }
    }
}

export default textInputValidation;