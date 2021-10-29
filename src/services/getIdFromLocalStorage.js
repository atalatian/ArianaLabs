const getIdFromLocalStorage = () => {
    let id = localStorage.getItem('id');
    if (id){
        return parseInt(id)+ 1;
    }else {
        return 0;
    }
}

export default getIdFromLocalStorage;