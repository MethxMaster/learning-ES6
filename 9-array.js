//array


//join - concat

const data = [100,200,300]
console.log(data)
console.log(data.join())
console.log(data)
console.log(data.join('-'))

const data2 = [400,500]
const allData = data.concat(data2)
console.log(allData)

//push - pop - shift - unshift
const data3 = [10,20,30]
data3.push(500)
console.log(data3)
data3.push(...[1000,2000,3000])
console.log(data3)

data3.pop()
console.log(data3)

data3.shift()
console.log(data3)

data3.unshift(...[1,2,3])
console.log(data3)

//splice & slice

// SPLICE : use when you want to delete data   splice( start index #want-to-delete , number of data , add-data )
const data4 = [10,20,30,40,50]
data4.splice(1,2)
console.log(data4)
data4.splice(1,1,999)
console.log(data4)
data4.splice(1,1,...[100,200,300])
console.log(data4)

// SLICE : slice( start index , last index data - 1 )
const data5 = [10,20,30,40,50]
let data_slice = data5.slice(1,4)
console.log(data_slice)