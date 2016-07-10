function intersection(arr1, arr2){
  let result = [];
  arr1.forEach(function(i){
    if (arr2.includes(i)){
      result.push(i);
      arr2.splice(arr2.indexOf(i), 1);
    }
  })
  return result;
}