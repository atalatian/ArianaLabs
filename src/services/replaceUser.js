const replaceUser = (users, user) => {
    return users.map((item)=>{
        if (item.id === user.id){
            return user;
        }else {
            return item;
        }
    })
}

export default replaceUser;