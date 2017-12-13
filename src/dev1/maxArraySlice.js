export const maxCommonArraySlice=(numbers)=>{
  if(!numbers)
     return 0;

  let currentMaxSliceSize=0;
  let currentSliceSize=0;
  let currentNumbers=[numbers[0]];
  let lastSeriesStartingIndex=0;
  let previousNumber=numbers[0];
  numbers.forEach((n,i)=>{
        if(n===previousNumber)
           currentSliceSize++;
        else{
           if(currentNumbers.indexOf(n)>-1){
             currentSliceSize++;
             lastSeriesStartingIndex=i;
           }
           else if(currentNumbers.length===1){
              currentNumbers.push(n);
              currentSliceSize++;
              lastSeriesStartingIndex=i;
           }else{
             currentNumbers.splice(0,1);
             currentNumbers.push(n);
             if(currentSliceSize>currentMaxSliceSize)
               currentMaxSliceSize=currentSliceSize;
             currentSliceSize=i-lastSeriesStartingIndex+1;
             lastSeriesStartingIndex=i;
           }
        }
  });
  return Math.max(currentMaxSliceSize,currentSliceSize);
}
