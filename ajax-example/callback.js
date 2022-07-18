// ES5 Function
// function print(message) {
//     console.log(message)
// }

// ES6 Function
// function definition
const log = (message) => {
    console.log(message);
  };
  
  // function invoking - calling the function
  log("Hi from Blore");
  
  const sum = (a, b, jagan) => {
    const c = a + b;
    jagan(c);
  };
  
  sum(2, 3, log);
  
  const sum1 = (a, b) => {
    return a + b;
  };
  
  const result = sum1(2, 3);
  log(result);
  
  setTimeout(() => {
    console.log("This is Ashok");
  }, 5000); // 1 second = 1000 milliseconds
  
  const myTimer = setInterval(() => {
    console.log("This is Jagan");
  }, 1000);
  
  setTimeout(() => {
    clearInterval(myTimer);
  }, 60000); // 1 second = 1000 milliseconds
  
  const obj = {
      name: 'Ashok',
      id: 123
  };
  
  // add one attribute 
  obj.age = 30;
  
  // delete one attribute 
  delete obj.name; 
  
  
  // try {
  //     const name = 1234;
  //     console.log('Printing name: ', name123123);
  // } catch (error) {
  //     console.log('Error :', error)
  // }
  