const arr=[0,1,2,3,4,5]
const heroes=["shaktiman","spiderman"]
const myArr=new Array(1,2,3,4)
//console.log(arr[1])
//Array Methods
//arr.push(6)
//arr.push(7)
//arr.push(8)
//arr.unshift(9)
//arr.shift()
//console.log(arr.includes(4))
//console.log(arr.indexOf(3))
//const newArr=arr.join()
//console.log(newArr);
//const myn1=myArr.splice(1,3)
//console.log(myn1)
//Arrays part 2
const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

 marvel_heros.push(dc_heros)

 console.log(marvel_heros);
 console.log(marvel_heros[3][1]);

 const allHeros = marvel_heros.concat(dc_heros)
 console.log(allHeros);