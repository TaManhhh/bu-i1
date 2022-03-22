const reverse_number =(n)=>{
    n=n +"";
    return n.split("").reverse().join("");
    
}
// document.write(Number(reverse_number(12345)))
console.log(Number(reverse_number(12345)))