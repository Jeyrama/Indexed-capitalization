/*
Given a string and an array of integers representing indices, 
capitalize all letters at the given indices.
The input will be a lowercase string with no spaces and an array of digits.

For example:
  capitalize("abcdef",[1,2,5]) = "aBCdeF"
  capitalize("abcdef",[1,2,5,100]) = "aBCdeF". There is no index 100.
*/


// Solution

function capitalize(s,arr){
  
  let capS = s.split("");
  
  for(let i = 0; i < arr.length; i++) {
    if(capS[arr[i]]) {
      capS[arr[i]] = capS[arr[i]].toUpperCase();
    }
  }
  capS = capS.join("");
  return capS
  };

  // or

  function capitalize(s,arr){
    return arr.reduce((a,b) => {
      if (a[b]) {
        a[b] = a[b].toUpperCase();
      }
      return a;
    }, [...s]).join('');
  }