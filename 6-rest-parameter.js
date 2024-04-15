//rest parameter 


summation=(x,y)=>{
    return x+y
}
console.log(summation(10,5))

sumArray=(...numArray)=>{
    let total = 0
    for(let num of numArray) total += num
    return total
}

const data = [1,2,3,4,5,6,7,8,9,10]

console.log(sumArray(1))
console.log(sumArray(1,2))
console.log(sumArray(1,2,3))
console.log(sumArray(1,2,3,4))
console.log(sumArray(...data))