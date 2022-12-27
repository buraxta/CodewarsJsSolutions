const person = {
    name: "Taylor",
    sayHello() {
      return `Hello! My name is ${this.name}.`;
    }
  };
  console.log(person.sayHello);
  // Output: [Function: sayHello]
  console.log(person.sayHello());
  // Output: Hello! My name is Taylor.