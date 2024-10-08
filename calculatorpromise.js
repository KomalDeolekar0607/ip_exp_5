function calculator(num1 , num2 , operator){
    return new Promise((resolve , reject) =>{
        if(typeof num1 != 'number' || typeof num2 != 'number'){
            return reject("the input must be in integers")
        }

        if (operator == 'add' || operator == 'addition' || operator == '+'){
            resolve(num1 + num2)
        }
        else if(operator == 'substract' || operator == 'substraction' || operator == 'sub' || operator == '-'){
            if (num1 < num2){
                reject("1st value should be greater in substraction")
            }
            else{
                resolve(num1 - num2)
            }
        }

        else if(operator == 'multiply' || operator == 'mul' || operator == '*'){
            resolve(num1 * num2)
        }

        else if(operator == 'divide' || operator == 'divide' || operator == 'dividation' || operator == '/'){
            if(num2 == 0){
                reject("Cannot divide a number by zero")
            }
            else{
                resolve(num1 / num2)
            }
        }

        else{
            reject("Enter opeartor properly....")
        }
            
    })
}


calculator(10, 5, 'add')
  .then(result => {
    console.log(`Result: ${result}`);
  })
  .catch(error => {
    console.error(`Error: ${error}`);
  });

  calculator(10, 15, 'substract')
  .then(result => {
    console.log(`Result: ${result}`);
  })
  .catch(error => {
    console.error(`Error: ${error}`);
  });

  calculator(10, 15, 'mul')
  .then(result => {
    console.log(`Result: ${result}`);
  })
  .catch(error => {
    console.error(`Error: ${error}`);
  });

  calculator(60, 15, '/')
  .then(result => {
    console.log(`Result: ${result}`);
  })
  .catch(error => {
    console.error(`Error: ${error}`);
  });

calculator(10, 0, 'divide')
  .then(result => {
    console.log(`Result: ${result}`);
  })
  .catch(error => {
    console.error(`Error: ${error}`);
  });

calculator(10, 5, 'invalid')
  .then(result => {
    console.log(`Result: ${result}`);
  })
  .catch(error => {
    console.error(`Error: ${error}`);
  });