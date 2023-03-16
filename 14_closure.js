function outer(){
    console.log("This Is outer function");

   let inner= function(){
        console.log("This Is inner function");
    }
    return inner;
}
const innerFun=outer();
innerFun();
