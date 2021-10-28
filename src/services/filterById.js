const filterById = (array, id) => {
    return array.filter((value) => {
        return value['id'] !== id;
    });
}

export default filterById;