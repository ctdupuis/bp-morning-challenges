// Paired with Laurance Vincent

const formatPhone = phone => {

    let areaCode = phone.slice(0, 3).join("");
    let exchangeCode = phone.slice(3, 6).join("");
    let subscriberNum = phone.slice(6, phone.length).join("");

    return `(${areaCode}) ${exchangeCode}-${subscriberNum}`;
}


const phoneFormat = phone => {

    phone.splice(0, 0, "(");
    phone.splice(4, 0, ")");
    phone.splice(5, 0, " ");
    phone.splice(9, 0, "-");
    
    return phone.join("");
}

const phoneLoop = phone => {
    let start = "(";

    for (let i = 0; i < phone.length; i++) {

        if (i < 3 || i > 3 && i < 6 || i > 6) {
            start += phone[i];
        };

        if (i === 3) {
            start += `) ${phone[i]}`;
        };

        if (i === 6) {
            start += `-${phone[i]}`;
        };
    };

    return start;
}

console.log(phoneLoop([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])) // (123) 456-7890