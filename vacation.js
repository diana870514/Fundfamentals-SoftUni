function vacantion(group, type, day) {
    let price = 0;
    let singlePrice = 0;
    let discountPrise = 0;

    switch (day) {
        case 'Friday':
            if (type === 'Students') {
                singlePrice = 8.45;
                price = singlePrice * group;
            } else if (type === 'Business') {
                singlePrice = 10.90;
                price = singlePrice * group;
                 
            } else if (type === 'Regular') {
                singlePrice = 15;
                price = singlePrice * group;
            }
            break;
        case 'Saturday':
            if (type === 'Students') {
                singlePrice = 9.80 ;
                price = singlePrice * group;
            } else if (type === 'Business') {
                singlePrice = 15.60;
                price = singlePrice * group;
            } else if (type === 'Regular') {
                singlePrice = 20;
                price = singlePrice * group;
            }
            break;
        case 'Sunday':
            if (type === 'Students') {
                singlePrice = 10.46;
                price = singlePrice * group;
            } else if (type === 'Business') {
                singlePrice = 16;
                price = singlePrice * group;
            } else if (type === 'Regular') {
                singlePrice = 22.50;
                price = singlePrice * group;
            }
            break;
    }
    if (type === 'Students' && group >= 30) {
        price = price * 0.85;
    } else if (type === 'Business' && group >= 100) {
        discountPrise = 10 * singlePrice;
        price -= discountPrise;
    } else if ((type === 'Regular') && (group >= 10 && group <= 20)) {
        price = price * 0.95;
    }
    console.log(`Total price: ${price.toFixed(2)}`);
}

vacantion(30,"Students","Sunday");
vacantion(40,"Regular","Saturday");