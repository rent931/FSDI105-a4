function saveUser(user){
    let data=readUsers();
    data.push(user);
    let val = JSON.stringify(data)
    localStorage.setItem("users",val);
}

function readUsers(){
    let data=localStorage.getItem("users");
    if(!data){
        return [];
    }
    else{
        let list=JSON.parse(data);
        return list;
    }
}