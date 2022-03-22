const array=[1, 2, 3, 5, 4, 2, 6, 4];
// const ary= new Set(array);
// const yarra=[...ary];
// console.log(yarra)
array.filter((item,index) =>{
    console.log(item,index,array.indexOf(item),array.indexOf(item)===index,);
    return array.indexOf(item)===index
});