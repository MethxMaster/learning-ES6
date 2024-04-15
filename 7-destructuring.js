//destructuring


//original
const colors = ['red','green','blue']
const a = colors[0]
const b = colors[1]
const c = colors[2]
console.log(a,b,c)

//destructuring
const [x,y,z] = colors
console.log(x,y,z)

const [i,,k] = colors
console.log(i,k)
 
const product = {
    productName : 'computer',
    price: 30000,
    stock: 10
}

const {productName:item1 ,price:item2 ,stock:item3} = product
console.log(item1,item2,item3)
/*
const {productName:productName ,price:price ,stock:stock} = product
console.log(productName,price,stock)
*/
const {productName ,price ,stock} = product
console.log(productName,price,stock)

/*
const {productName  ,stock} = product
console.log(productName,stock)
*/