const arrayIteraterwithSqyuares = (arr) => {
    let index = 0
    if (arr.length <1){
        return "Array is Empty.."
    }
    else{
        return {
            next(){
                if(index < arr.length){
                    const val = arr[index] ** 2
                    index++
                    return {val , done:false}
                }
                else{
                    return { val : undefined , done : true}
                }
            }
        }
    }
}


const array = [2 , 5, 9, 1 ,8]

const iter = arrayIteraterwithSqyuares(array)

console.log(iter.next())
console.log(iter.next())
console.log(iter.next())
console.log(iter.next())
console.log(iter.next())
console.log(iter.next())
console.log(iter.next())