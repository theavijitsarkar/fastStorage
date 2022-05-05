var fastLocalStorage = {}

fastLocalStorage.state = {}

fastLocalStorage.getItem = function(key){

    if(fastLocalStorage.state[key]) { return fastLocalStorage.state[key] }
    else {
        fastLocalStorage.state[key] =  window.localStorage.getItem(key)
        return fastLocalStorage.state[key] 
    }


}

fastLocalStorage.setItem = function(key,val){


    //Set in local memory
    fastLocalStorage.state[key] = val

    //Set in localStorage
    window.localStorage.setItem(key,val)
    return 

}

fastLocalStorage.clear = function(){

    fastLocalStorage.state = {}
    window.localStorage.clear()
    
}

fastLocalStorage.removeItem = function(key) {

    delete fastLocalStorage[key]
    window.localStorage.removeItem(key)
}


export default fastLocalStorage






