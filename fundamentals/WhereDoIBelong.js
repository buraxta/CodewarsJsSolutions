function getIndexToIns(arr, num) {
    arr.sort(function(a,b){return a-b});
    let i;
    for (i = 0; i < arr.length; i++) {
        if (num > arr[i]) {
            if (num < arr[i+1] && arr[i+1] != arr[i]) {
                return i+1;
            }
        }else{
            return i;
        }        
    }
    return i;
  }
  
console.log(getIndexToIns([2,5,10], 15))