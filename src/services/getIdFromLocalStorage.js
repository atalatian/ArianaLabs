const getIdFromLocalStorage = () => {
    let id = parseInt(localStorage.getItem('id'));
    if (id !== null){
        return id + 1;
    }else {
        return 0;
    }
}

export default getIdFromLocalStorage;