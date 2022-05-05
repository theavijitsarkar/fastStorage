
//SPEED TESTS
//var storage = window.fastLocalStorage 
 
runTest(window.localStorage, 'localStorage')

runTest(window.fastLocalStorage, 'fastLocalStorage')

function runTest(storage, storeName){
    console.log("TESTING STORE ", storeName)
console.time('write test')
for(var i = 0 ; i<10*10*10*10; i++){
    storage.setItem(i,i)
}
console.timeEnd('write test')

console.time('read test with localStorage')
for(var i = 0 ; i<10*10*10*10; i++){
    storage.getItem(i,i)
}
console.timeEnd('read test')


}