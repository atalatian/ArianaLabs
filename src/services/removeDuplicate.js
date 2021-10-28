const removeDuplicate = (array) => {
    return Array.from(new Set(array.map(item => item.id))).map(id =>{
        return array.find(item => item.id === id);
    })
}

export default removeDuplicate;