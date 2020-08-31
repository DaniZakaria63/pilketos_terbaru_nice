class Auth {
    login(cb,a){
        localStorage.setItem('token',JSON.stringify(cb));
        a()
    }
    logout(cb){
        localStorage.clear();
        cb()
    }
    isAuth(){
        return localStorage.getItem('token');
    }
}

export default new Auth();