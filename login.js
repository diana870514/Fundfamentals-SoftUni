function login(input){
    let userName = input[0];
    let pass = '';

    for(let i = userName.length - 1; i >= 0;i--){
        pass += userName[i];
    }
    let guess = input[1];
    let index = 2;
    let wrongAttempts = 0;

    while(guess !== pass){
        wrongAttempts++;
        if(wrongAttempts == 4){
            console.log(`User ${userName} blocked!`);
            return;
        }
        console.log("Incorrect password. Try again.");
        guess = input[index];
        index++;
    }
    console.log(`User ${userName} logged in.`);

}
login(['Acer','login','go','let me in','recA']);