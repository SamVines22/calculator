document.querySelectorAll(".num").forEach(function(btn){
   
    btn.addEventListener("click", function(btn)
    
    {
        let val = btn.target.innerText;
         digits(val);
       // console.log(btn.target.innerHTML)
       // document.querySelector(".screen").innerText += btn.target.innerText;
    })
})

let numbers = [];
let answer = 0;
let ops = []
let count = 0;
document.querySelectorAll(".op").forEach(function(btn){
    
    btn.addEventListener("click", function(btn){   
        console.log(count);
        let val = document.querySelector(".screen").innerText;
        numbers.push(parseInt(val));
        console.log(numbers);
        let op = (btn.target.innerText);
        ops.push(op);
        console.log(op);
        document.querySelector(".screen").innerText = "";
        if (op == "DEL") {
            count = 0;
            ops = [];
            numbers = [];
            document.querySelector(".screen").innerText = "";
            return; 
        }

        if (ops[0] == "/" && numbers[1] == 0)
        {
            alert("can't divide by zero!");
            ops = [];
            numbers = [];
            return;
        }
        
        if (op == "=" && count == 1)
        {   
            
            answer = operate(ops[0],numbers[0],numbers[1]);
            console.log(answer);
            document.querySelector(".screen").innerText = answer;
            ops = [];
            numbers = [];
            count = 0;
            return;
        } 

        if (op != "=" && count >= 1)
        {
            console.log(ops[count]);
            answer = operate(ops[0],numbers[0],numbers[1]);
            console.log(`answer is ${answer}`);
            numbers = [];
            ops = [];
            ops[0] = op;
            numbers[0] = answer;
            console.log(numbers);
            count++;
            return;
            
        }
        else if (op == "=")
        {
            console.log(answer);
            console.log(ops[0]);
            console.log(numbers);
            answer = operate(ops[0],numbers[0],numbers[1]);
            document.querySelector(".screen").innerText = answer;
            numbers = [];
            ops = []
            count = 0;
            return;
        }
        count++;
        
        
    })
})




function digits(val) {
    document.querySelector(".screen").innerText += val;
    let val_int = parseInt(document.querySelector(".screen").innerText);
    return val_int;
}


function operate(operand, a, b){
   // console.log(operand);
    if (operand == "+")
    {
       return a+b;
    }
    else if (operand == "-") {
        return a-b;
    }
    else if (operand == "/") {
        return  a/b;
    }
    else if (operand == "x") {
        return a*b;
    }

    
}

