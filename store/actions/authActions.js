export const LOGIN = 'LOGIN';

export const tryLogin = (user, password) =>{
    if((user === "scdo46@hotmail.com" && password === "deibi123")||(user === "a.puerto@gmail.com" && password === "alexis123")||(user === "heliogeno09@hotmail.com" && password === "helio123")){
        return {
            type: LOGIN, //action.type  //payload
            user:user //action.user
        }
    }else{
        throw ("Usuario y/o Contraseña invalidos")
    }

}