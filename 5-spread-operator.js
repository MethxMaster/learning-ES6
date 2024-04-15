
const newArr = [100,200,300]
const data1 = [10,20,newArr]

console.log(data1)

const data2 = [10,20,...newArr]

console.log(data2)

const data3 = [30,40]

data3.push(...data2)

console.log(data3)