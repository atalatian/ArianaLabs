const getById = (array, id) => {
    return  array.filter((value) => {
        return value['id'] === id;
    })[0];
}

export default getById;