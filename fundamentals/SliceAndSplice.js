function frankenSplice(arr1, arr2, n) {
    let result = [];
    for (let i = 0, j = 0, k = 0; i < arr1.length + arr2.length; i++) {
        if (i < n) {
            result.push(arr2[j++])
        }else{
            if (k < arr1.length) {
                result.push(arr1[k++])
            } else{
                result.push(arr2[j++])
            }
            
        }
        
    }
    return result;
  }
  
  console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));