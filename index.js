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