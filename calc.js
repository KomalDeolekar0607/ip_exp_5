function Calculator(num1 , num2 , opeartor){
    return new Promise((resolve , reject)=>{
        switch(opeartor){
            case 'add':
                resolve(num1 + num2)
                break;
            case 'subtract':
                if(num1 < num2){
                    reject("number 1 should be greater")
                }
                else{
                    resolve(num1 - num2)
                }
                break;
            case 'multiply':
                resolve(num1 * num2)
                break;
            case 'divide':
                if(num2 === 0){
                    reject("Division by zero is not allowed.")
                }
                else{
                    resolve(num1 / num2)
                }
                break;
            default : 
            reject("Invalid operation....")

        }
    })
}

Calculator(5 ,4 , 'add').then(ans => console.log("Result  : ",ans)).catch(error => console.error(error));
Calculator(5 ,8 , 'subtract').then(ans => console.log("Result  : ",ans)).catch(error => console.error(error));
Calculator(5 ,8 , 'multiply').then(ans => console.log("Result  : ",ans)).catch(error => console.error(error));
Calculator(16 ,8 , 'divide').then(ans => console.log("Result  : ",ans)).catch(error => console.error(error));
Calculator(16 ,0 , 'divide').then(ans => console.log("Result  : ",ans)).catch(error => console.error(error));
Calculator(16 ,8 , 'divi').then(ans => console.log("Result  : ",ans)).catch(error => console.error(error));


