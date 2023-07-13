let screen = document.querySelector('.answerCell');

const uploadToScreen = (number) => {
    screen.append(number)
    console.log(screen.innerHTML);
}

const clearScreen = () => {
    screen.innerHTML = '';
}

const calculateTerms = (x,y,sign) => {
    if (sign === "+"){
        let calculate = parseInt(x) + parseInt(y);
        screen.innerHTML = calculate;
        console.log(calculate);
    }
    else if (sign === "-") {
        let calculate = parseInt(x) - parseInt(y);
        screen.innerHTML = calculate;
        console.log(calculate);

    }
    else if (sign === "/") {
        let calculate = parseInt(x) / parseInt(y);
        screen.innerHTML = calculate;
        console.log(calculate);

    }
    else if (sign === "x") {
        let calculate = parseInt(x) * parseInt(y);
        screen.innerHTML = calculate;
        console.log(calculate);

    } else {
        alert("Something went wrong!");
    }

}

const splitInput = () => {
    let nput = screen.textContent;

    //split into 2 container
    if (nput.includes("+")){
        let solve = nput.split("+");
        console.log("input: " + solve);
        calculateTerms(solve[0], solve[1], "+");
    }
    else if (nput.includes("-")){
        let solve = nput.split("-");
        console.log("input: " + solve);
        calculateTerms(solve[0], solve[1], "-");
    }
    else if (nput.includes("x")){
        let solve = nput.split("x");
        console.log("input: " + solve);
        calculateTerms(solve[0], solve[1], "x");
    }
    else if (nput.includes("/")){
        let solve = nput.split("/");
        console.log("input: " + solve);
        calculateTerms(solve[0], solve[1], "/");
    }        
    
}