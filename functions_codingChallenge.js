// Find the largest number
console.log('1.Find the largest number');
function findLargest(a,b,c){
if (a>b && a>c){
    return `${a} is greatest`
}else if(b>a && b>c){
    return `${b} is greatest` 
}else{
   return `${c} is greatest`
}
}

console.log(findLargest(5,10,3));
console.log(findLargest(8,2,6));

console.log("*****************************************************************")


console.log('2. Reverse Words in a sentence')

function  reverseWords(sentence){
 let s=sentence.split(" ")
  let rev= s.reverse().join(" ");
  return rev.toString();

}

console.log(reverseWords("Hello World!"));
console.log(reverseWords("The quick brown fox"));
console.log(reverseWords("Javascript is fun"));


console.log("*****************************************************************")

console.log("3. Longest word in an Array");

function findLongestWord(words){
let count=0;
let longest;
for(let i=0;i<words.length;i++){
    if(words[i].length>count){
        count=words[i].length;
        longest=words[i];
    }
}
return longest;
}

console.log(findLongestWord(["apple","banana","cherry","date"]))
console.log(findLongestWord(["dog","elephant","cat"]));
console.log(findLongestWord(["red","blue","green"]));

console.log("*****************************************************************")

console.log("4.Occurance of word in a sentence");

function countWords(sentence){
    let newObj={};
let wordSet= sentence.split(" ")

for(let i=0;i<wordSet.length;i++){
    // console.log(wordSet[i]);
if(wordSet[i] in newObj){
    newObj[wordSet[i]]++;
}else{
    newObj[wordSet[i]] = 1;
}
}
return newObj;
}

console.log(countWords("hello world hello"));
console.log(countWords("this is a test this is only a test"));