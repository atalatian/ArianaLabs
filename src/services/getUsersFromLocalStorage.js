const getUsersFromLocalStorage = () => {
    const users = localStorage.getItem('users');
    if (users){
        return JSON.parse(users);
    }else {
        return [];
    }
}

export default getUsersFromLocalStorage;