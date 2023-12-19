//Immediately Invoked Function Expression(IIFE)


(function omkar(){
    console.log("DB Connected");
})();

(()=>{
    console.log("Connection lost");
})();

((name)=>{
    console.log(`Connection lost ${name}`);
})("Omkar")