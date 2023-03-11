let sbiBank={
    bankName:"SBI Bank",
    location:"Nanded",
    IFSC:"SBIN00005934",
    showDetails:  function (){
        console.log(`Bank Name:${sbiBank. bankName}, Location:${sbiBank. location}, IFSC:${sbiBank. IFSC}, Interest Rate:${sbiBank. interestRate}`);
    },
    interestRate:7.5

}

let axisBank={
    bankName:" Axis Bank",
    location:"Mumbai",
    IFSC:"axis0000145",
    showDetails: function (){
        console.log(`Bank Name :${axisBank. bankName},Location:${axisBank. location},IFSC:${axisBank. IFSC},Interest Rate:${axisBank. interestRate}`);
    },
    interestRate:11

}

let yesBank={
    bankName:"Yes Bank",
    location:"pune",
    IFSC:"Yes0000456",
    showDetails: function (){
        console.log(`Bank Name:${yesBank. bankName},Location:${yesBank. location},IFSC:${yesBank. IFSC},Interest Rate:${yesBank. interestRate}`);
    },
    interestRate:8


}

let hdfcBank={
    bankName:"HDFC Bank",
    location:"Nagpur",
    IFSC:"HDFC0000597",
    showDetails: function (){
        console.log(`Bank Name:${hdfcBank. bankName},Location :${hdfcBank. location},IFSC:${hdfcBank. IFSC},Interest Rate:${hdfcBank. interestRate}`);
    },
    interestRate:8.5

}
const arrayOfBanks=[sbiBank,axisBank,hdfcBank,yesBank];
for (let index = 0; index < arrayOfBanks.length; index++) {
    const element = arrayOfBanks[index];
    console.log(`${element.bankName},${element.location},${element.IFSC}`);
    
}
// for (const Bank in arrayOfBanks) {
//         console.log(Bank);
//     }
    // const array=[1,2,3,4,5,6];
    // for (const value in array) {
    //     console.log(value);
    // }


