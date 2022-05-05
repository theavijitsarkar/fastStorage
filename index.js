var fastStorage = {}

fastStorage.state = {}

fastStorage.getItem = function(key){

    if(fastStorage.state[key]) { return fastStorage.state[key] }
    else {
        fastStorage.state[key] =  window.localStorage.getItem(key)
        return fastStorage.state[key] 
    }


}

fastStorage.setItem = function(key,val){


    //Set in local memory
    fastStorage.state[key] = val

    //Set in localStorage
    window.localStorage.setItem(key,val)
    return 

}

fastStorage.clear = function(){

    fastStorage.state = {}
    window.localStorage.clear()
    
}

fastStorage.removeItem = function(key) {

    delete fastStorage[key]
    window.localStorage.removeItem(key)
}


export default fastStorage






