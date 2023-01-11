function mutation(arr) {
    let container = [...arr[0]];
    let newContainer = container.map(a => a.toLowerCase());
    let flag = true;
    for (let i = 0; i < arr[1].length; i++) {
        if (!newContainer.includes(arr[1].charAt(i).toLowerCase())) {
            return false;
        }
        
    }    
    return true;
  }
  
  console.log(mutation(["hEllo", "He"]));
