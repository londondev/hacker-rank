//https://www.hackerrank.com/challenges/ctci-making-anagrams/problem
process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();
});

function readLine() {
    return input_stdin_array[input_currentline++];
}

/////////////// ignore above this line ////////////////////

function main() {
    var a = "cde";
    var b = "abc";

    let firstArr=a.split("");
    let firstArrCopy=Object.assign([],firstArr);
    let secondArr=b.split("");
    let alreadyProcessedItemList=[];
    firstArr.forEach((item,i)=>{
      if(!existsOnArray(secondArr,item)){
        firstArrCopy.splice(firstArrCopy.indexOf(item),1);
      }else{
        alreadyProcessedItemList.push(item);
         let numberOfOccurenceOnFirstArray=numberOfPresenceInArray(firstArrCopy,item);
         let numberOfOccurenceOnSecondArray=numberOfPresenceInArray(secondArr,item);
         if(numberOfOccurenceOnFirstArray>numberOfOccurenceOnSecondArray){
            removeFromArray(firstArrCopy,item,numberOfOccurenceOnFirstArray - numberOfOccurenceOnSecondArray);
         }else{
            removeFromArray(secondArr,item,numberOfOccurenceOnSecondArray - numberOfOccurenceOnFirstArray);
         }
      }
    });
    let secondArrCopy=Object.assign([],secondArr);
    secondArr.diff(alreadyProcessedItemList).forEach((item,i)=>{
      if(!existsOnArray(firstArrCopy,item)){
        secondArrCopy.splice(secondArrCopy.indexOf(item),1);
      }else{
         let numberOfOccurenceOnFirstArray=numberOfPresenceInArray(secondArrCopy,item);
         let numberOfOccurenceOnSecondArray=numberOfPresenceInArray(firstArrCopy,item);
         if(numberOfOccurenceOnFirstArray>numberOfOccurenceOnSecondArray){
            removeFromArray(secondArrCopy,item,numberOfOccurenceOnFirstArray - numberOfOccurenceOnSecondArray);
         }else{
            removeFromArray(firstArrCopy,item,numberOfOccurenceOnSecondArray - numberOfOccurenceOnFirstArray);
         }
      }
    });
    console.log(a.length + b.length - firstArrCopy.length - secondArrCopy.length);
}

const existsOnArray=(arr,item)=>arr.includes(item);
const numberOfPresenceInArray=(arr,item)=>{
  let count=0;
  arr.forEach((cItem)=>{
    if(item===cItem)
      count++;
  });
  return count;
}
const removeFromArray=(arr,item,numberOfOccurence)=>{
      if(numberOfOccurence===0)
         return;
      for(let i=0;i<numberOfOccurence;i++)
         arr.splice(arr.indexOf(item),1);
}
Array.prototype.diff = function(a) {
    return this.filter(function(i) {return a.indexOf(i) < 0;});
};
main();
