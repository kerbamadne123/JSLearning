class Bank{
    bank_name;
    location;
    account_no;
    ifsc
    interest_rate
    constructor(bank_name,location,account_no,ifsc,interest_rate){
    this.bank_name=bank_name;
    this.location=location;
    this.account_no=account_no;
    this.ifsc=ifsc;
    this.interest_rate=interest_rate;
    
    }
    }
    console.log("****************************Create object of these banks******************************");
    
    
    const axis_bank=new Bank("axis","nanded",1000445,"axis00066",6.8);
    const sbi_bank=new Bank("sbi","pune",10001,"sbin00022",2.8);
    const icic_bank=new Bank("icici","mumbai",10002,"icic00033",3.8);
    const kotak_bank=new Bank("kotak","mumbai",10002,"kotak00033",3.8);
    const hdfc_bank=new Bank("hdfc","nagpur",10003,"hdfc00044",4.8);
    const punjab_bank=new Bank("pujab","latur",10004,"mgb00055",5.8);
    
    
    
    
    console.log(axis_bank);
    console.log(sbi_bank);
    console.log(icic_bank);
    console.log(kotak_bank);
    console.log(hdfc_bank);
    console.log(punjab_bank);
     

    const mapofName=new Map();
    
    mapofName.set("axisbank",axis_bank);
    mapofName.set("sbibank",sbi_bank);
    mapofName.set("icicbank",icic_bank);
    mapofName.set("kotakbank",kotak_bank);
    mapofName.set("hdfcbank",hdfc_bank);
    mapofName.set("punjabbank",punjab_bank);
    console.log("****************************Add All Object Elements in a Set******************************");

   console.log(mapofName);
//const detailsBank=mapofName.set(`bank Name:${bank_name},accountNum: ${account_no},interest Rate:${interest_rate}`);
for (const bank of mapofName) {
  const bankname=bank.mapofName;
    console.log(mapofName.get(bankname,axis_bank));
}







    // const setOfbankName=new Set();
    
    // setOfbankName.add(axis_bank);
    // setOfbankName.add(sbi_bank);
    // setOfbankName.add(icic_bank);
    // setOfbankName.add(kotak_bank);
    // setOfbankName.add(hdfc_bank);
    // setOfbankName.add(punjab_bank);
    // console.log("****************************Add All Object Elements in a Set******************************");
    
    // console.log(setOfbankName);
    
    // console.log("****************************Traverse set using for of loop******************************");
    
    
    // for (const bank of setOfbankName) {
    //     const bankname=bank.bank_name;
    //     console.log("BankDatils:",`Bank Name:${bank.bank_name},Location:${bank.location}`);
    // }