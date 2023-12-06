/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  //edi btter
  //more easy way is to lowercase the string and split and use sort method ....both string
  //compare this 2 sorted string 
  //if equal return true
  //else return false
  //i think this above method is easy because in almost 4-5 lines code will be done


  var string1=str1.toLowerCase().split('');
  var string2=str2.toLowerCase().split('');
  var count=0;


  if(string1.length != string2.length){
    return false;
  }


  for(var i=0;i<string1.length;i++){
    for(var j=0;j<string2.length;j++){
      if(string1[i]==string2[j]){
        count++;
        string2[j]="0";
      }
    }
  }

  if(count==string1.length){
    return true;
  }
  else{
    return false;
  }
}

module.exports = isAnagram;


