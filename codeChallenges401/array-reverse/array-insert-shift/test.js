let arr=[2,4,6,3,7]
shiftArray=(arr,val)=>{

let pos=Math.round(arr.length/2)

let newarray=[]
for(let i=0;i<arr.length;i++){
  if(i!==pos){
    newarray.push(arr[i])

  }
  else{
    newarray.push(val)
    newarray.push(arr[i])
    
  }

}
return newarray
}
console.log(shiftArray(arr,999))