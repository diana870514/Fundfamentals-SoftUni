function rounding(num1,num2){
    if(num2 > 15){
        num2 = 15;
    }
    let fixNumb = num1.toFixed(num2);
    console.log(parseFloat(fixNumb));
    

    

}
rounding(3.1415926535897932384626433832795,2);