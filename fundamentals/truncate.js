function truncateString(str, num) {
    let result = str.substring(0,num);
    result += str.length <= num ? "" : "...";
    return result;
  }
 console.log(truncateString("A-tisket a-tasket A green and yellow basketa", "A-tisket a-tasket A green and yellow basket".length));
 console.log(truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length + 2))
 console.log(truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length))