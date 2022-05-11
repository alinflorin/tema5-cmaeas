function getValues() {
    var balance = 2400;
    var interestRate =
        9 / 100;
    var terms = 48; // luni

    amort(balance, interestRate, terms);
}

function amort(balance, interestRate, terms) {
    //Calculate the per month interest rate
    var monthlyRate = interestRate / 12;

    //Calculate the payment
    var payment = balance * (monthlyRate / (1 - Math.pow(
        1 + monthlyRate, -terms)));

    console.log("Loan amount: $" + balance.toFixed(2) + "\r\n" +
        "Interest rate: " + (interestRate * 100).toFixed(2) + "%\r\n" +
        "Number of months: " + terms + "\r\n" +
        "Monthly payment: $" + payment.toFixed(2) + "\r\n" +
        "Total paid: $" + (payment * terms).toFixed(2) + "\r\n\r\n");
    
    //add header row for table to return string

    console.log('Month -- Balance -- Interest -- Principal');

    for (var count = 0; count < terms; ++count) {
        //in-loop interest amount holder
        var interest = 0;

        //in-loop monthly principal amount holder
        var monthlyPrincipal = 0;


        //calc the in-loop interest amount and display
        interest = balance * monthlyRate;

        //calc the in-loop monthly principal and display
        monthlyPrincipal = payment - interest;

        console.log((count + 1) + ' -- ' + balance.toFixed(2) + ' -- ' + interest.toFixed(2) + ' -- ' + monthlyPrincipal.toFixed(2));
        //update the balance for each loop iteration
        balance = balance - monthlyPrincipal;
    }

}


getValues();