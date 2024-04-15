//array


//join - concat--------------------------------------------------------------------------------------------------------

const data = [100,200,300]
console.log(data)
console.log(data.join())
console.log(data)
console.log(data.join('-'))

const data2 = [400,500]
const allData = data.concat(data2)
console.log(allData)

//push - pop - shift - unshift -----------------------------------------------------------------------------------------
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

//splice & slice----------------------------------------------------------------------------

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



//For array ----------------------------------------------------------------------------------
const data6 = [10,20,30,40,50]

//original
for(let i=0;i<data6.length;i++){
    if(data6[i]>=30) break
    console.log('normal loop : ', data6[i])
}

//forEach
data6.forEach(item=>{       //cannot use break
    console.log('foreach loop - ',item)
})

data6.forEach(func_test)
function func_test(item){
    console.log('func_test',item)
}

let total_data6 = 0
data6.forEach(function(item){
    total_data6 += item
    console.log(`sum : ${total_data6}`)

})

//For of
const data7 = [10,20,30,40,50]
for(const element of data7){    //can use break/continue
    if(element>=40) break
    console.log(`FOR OF : ${element}`)
}


// array find ----------------------------------------------------------------------------------

//indexOf(data)     => if "found" the result will be return index of data if it's not the result will be "-1"
//find(data)        => the result will return "data" searched if it's not it will be "undefined"
//findIndex(data)   => if "found" the result will be return index of data if it's not the result will be "-1"

const colors2 = ['red','green','blue','purple','white']
console.log(colors2.indexOf('green'))

const searched = colors2.find(item=>item==='blue')
console.log(searched);

const searched2 = colors2.findIndex(item=>item==='blue')
console.log(searched2);

// array map -------------------------------------------------------------------------------------

const data8 = [10,20,30,40]
const newData8 = data8.map(item=>item*2)
console.log('original arr : ',data8)
console.log('array map : ',newData8)

const weather = ['rained','sunny','cloudy','sunny','rained','warm','foggy']
const weatherReport = weather.map((data,index)=>`day ${index+1} : ${data}`)
console.log(weatherReport)

const weather2 = [
    {day:'13-04-2024',weath:'sunny',temp:'40'},
    {day:'14-04-2024',weath:'hot',temp:'45'},
    {day:'15-04-2024',weath:'rained',temp:'38'}
]

const weatherReport2 = weather2.map(data=>{
    return data.day + ' : ' + data.weath
})
console.log(weatherReport2)

// array filter -------------------------------------------------------------------------------------

const data9 = [10,20,30,40,50,60,70,80,90]

const result9 = data9.filter(data=>{
    return data>60
})
console.log(result9)    // --> if use "map" -> [false,false,false,false,false,false,true,true,true]

const employee = [
    {fname:'Meth',salary:35000,jd:'engineer'},
    {fname:'Sor',salary:45000,jd:'developer'},
    {fname:'Max',salary:28000,jd:'freelance'},
    {fname:'Opor',salary:43000,jd:'consult'},
    {fname:'Pom',salary:45000,jd:'engineer'}
]

const highSalary = employee.filter(data=>{
    return (data.salary>37500)&&(data.jd==='developer')
})
console.log(highSalary)

const highSalary2 = employee.filter(data=>data.salary>37500).filter(data=>data.jd==='developer')
console.log(highSalary2)

const onlyName = employee.filter(data=>data.salary>37500).map(data=>data.fname)
console.log(onlyName)


// array reduce -------------------------------------------------------------------------------------

const data10 = [10,20,30,40,50,60]

const mapData10 = data10.map(data=>100)
console.log(mapData10)
 
const dataFilter10 = data10.filter(data=>data>20)
console.log(dataFilter10)

//REDUCE :  array.reduce(( value , data in array) => { /// }, initial value )
const summation10 = data10.reduce((value,data)=>{
    console.log(`current sum : ${value+=data}`)
    return value
},0)
console.log(summation10)

const cart = [
    {pname:'book',price:350},
    {pname:'pen',price:50},
    {pname:'bag',price:850},
    {pname:'paper',price:200}
]

const totalPrice = cart.reduce((total,paid)=>total+paid.price,0)
console.log(totalPrice)