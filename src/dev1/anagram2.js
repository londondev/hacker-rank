const anagram=(a,b)=>{
  let aFrequencyArray=getFrequencyArray(a);
  let bFrequencyArray=getFrequencyArray(b);
  return getDelta(aFrequencyArray,bFrequencyArray);
}

const getFrequencyArray=(s)=>{
   let numberArr=getEmptyArray();
   let offset='a'.charCodeAt(0);
   for(let i=0;i<s.length;i++){
      let index=s.charCodeAt(i)-offset;
      numberArr[index]++;
   }
   return numberArr;
}

const getDelta=(arr1, arr2)=>{
  let delta=0;
  arr1.forEach((item,i)=>{
      delta+=Math.abs(arr1[i]-arr2[i]);
  })
  return delta;
}

const getEmptyArray=()=>{
  let emptyArr=[];
  for(let i=0;i<26;i++)
     emptyArr[i]=0;
  return emptyArr;
}

console.log(anagram("cde","abc"));
