function titleCase(str) {
    let arr = str.split(" ");
    let result = "";
    for (let i = 0; i < arr.length; i++) {
      result += arr[i].slice(0,1).toUpperCase() + arr[i].slice(1).toLowerCase(); 
      if (i != arr.length-1) {
        result += " ";
      }
    }
    console.log(arr)
    return result;
  }
  
  console.log(titleCase("I'm a little tea pot"));
  // console.log("burak".toUpperCase());
  // let arr = ["burak", "eymo"];
  // console.log(arr[0].slice(0,1))
