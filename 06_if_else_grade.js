function Eligibility(gradScore,hscScore,sscScore,candidateName) {
    if (gradScore>=70||hscScore>=80||sscScore>=90) {
        console.log(`Hey ${candidateName} You Are Selected For TCS Interview`);
        
    } else {
        console.log(`Hey ${candidateName} You Are Not Selected For Interview `);
        
    }
    
}
Eligibility(80,86,90,"kerba");
Eligibility(70,65,55,"Nikhil")
Eligibility(60,79,88,"DilKhush");