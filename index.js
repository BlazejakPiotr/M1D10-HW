window.onload = function (){
    typeInConsole()
    console.log(newObj)
    deleteEmailProp()
    createArr()
    console.log(oneHundredNumsArr())
    getMinAndMaxValue()
    console.log(nestedArrays(5))
    console.log(compareArrays([1,2,3], [4,5,6,7]))
    sumArrays([1, 2, 5], [3, 1, 11])
    getContainer()
    console.log(getTd())
    console.log('PAGE LOADED')
}

const typeInConsole = function (){
    const x = 'John'
    const y = 'Doe'
    console.log(`${x} <> ${y}`)
}

let newObj = {
    name: 'John',
    surname: 'Doe',
    email: 'JohnDoe@web.com',
    }

const deleteEmailProp = function (){
    delete newObj.email
    console.log(newObj)
}

const createArr = function(){
    let newArr = [
        'First element |',
        'Second element |',
        'Third element |',
        'Fourth element |',
        'Fifth element |',
        'Sixth element |',
        'Seventh element |',
        'Eigth element |',
        'Nineth element |',
        'Tenth element',
    ]
    console.log(newArr[0],newArr[1],newArr[2],newArr[3],newArr[4],newArr[5],newArr[6],newArr[7],newArr[8],newArr[9],)
}

const oneHundredNumsArr = function() {
    let arr = []
    for (let i = 0; i < 100; i++) {
        arr.push(Math.floor(Math.random() * 1000))
    }
    return arr
}

const getMinAndMaxValue = function(){
    console.log(`Lowest generated number is: ${Math.min(...oneHundredNumsArr())} and highest generated number is: ${Math.max(...oneHundredNumsArr())}`)
}
 
const nestedArrays = function(numOfArr){
    let arr = []
    for (let x = 0; x < numOfArr; x++){
        let nestedArray = []
        for (let i = 0; i < 10; i++) {
            nestedArray.push(Math.floor(Math.random() * 100))
        }
        arr.push(nestedArray)
    }
    return arr
}

const compareArrays = function(firstArr, secondArr){
    if (firstArr.length > secondArr.length){
        console.log(`First array is longer, it value is: ${firstArr}`)
    }
    else {
        console.log(`Second array is longer, it value is: ${secondArr}`)
    }
}

const sumArrays = function(firstArr, secondArr){
    const reducer = (acc, val) => acc + val
    if (firstArr.reduce(reducer) > secondArr.reduce(reducer)){
        console.log(`First array has higher value, it value is: ${firstArr.reduce(reducer)}`)
    }
    else {
        console.log(`Second array has higher value, it value is: ${secondArr.reduce(reducer)}`)
    }
}

// DOM PART 

const getContainer = function() {
    let container = document.getElementById('container')
    return console.log(container)
}

const getTd = function() {
    let td = document.querySelectorAll('td')
    return td
}

const cycle = function(str){
    for(let i = 0; i < getTd().length; i++){
        getTd()[i].innerHTML += str
    }
}

const changeHeading = function(str){
    let heading = document.querySelector('h1')
    heading.innerText = str
}

const getTable = function(){
    let getTable = document.querySelector('table')
    return getTable
}

const addTableRow = function(){
    let newTrNode = document.createElement('tr')
    getTable().appendChild(newTrNode)
}

const addTestClass = function(){
    let getAllTr = document.querySelectorAll('tr')
    for (let i = 0; i < getAllTr.length; i++){
        getAllTr[i].classList.add('test')
    }
}

const addRedBgToAnchor = function(){
    let getAllA = document.querySelectorAll('a')
    console.log(getAllA)
    for (let i = 0; i < getAllA.length; i++){
        getAllA[i].style.backgroundColor = 'red'
    }
}

const addNewUlNode = function(){
    let getUl = document.querySelector('ul')
    let newLiNode = document.createElement('li')
    getUl.appendChild(newLiNode)
}

const createEmptyList = function(){
    document.body.createElement('ul')
}



// DOM EXTRA PART
const myFunction = function (){
    let x = document.querySelectorAll('a')
    for (let i = 0; i < x.length; i++){
        x[i].addEventListener("mouseover", myFunction)
    }
    alert('LINK')
}
