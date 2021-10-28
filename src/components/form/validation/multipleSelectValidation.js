const multipleSelectValidation = (array) => {
    if (!array.length){
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

export default multipleSelectValidation;