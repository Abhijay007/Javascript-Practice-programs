//function to find the pivot of the passed array
const findIndex=(myArray,start,end)=>{

    const pivotEle=myArray[end];
    let j=start,i=start;
    for( j=start;j<end;++j){

        if(myArray[j]<pivotEle){
            [myArray[i],myArray[j]]=[myArray[j],myArray[i]];
            i++;
        }
    }
    [myArray[i],myArray[end]]=[myArray[end],myArray[i]];//swapping values using
return i;
}

//recursive function to partition around the pivot
const quickSort=(myArray,start,end)=>{
    if(start<=end){
    const pivotIndex=findIndex(myArray,start,end);
    quickSort(myArray,start,pivotIndex-1);
    quickSort(myArray,pivotIndex+1,end);
    }
}

const main=()=>{
const myArray=[10,29,1,4,5,22,90,87,0];
const len=myArray.length;
quickSort(myArray,0,len-1);
for(var i=0;i<myArray.length;++i)console.log(myArray[i]);
}
main();