
// >, < <=, >=, ==, !=, ===, !==
                       //  ^       
                        //(valuecheck + datatypecheck) 
                      


const isUserLoggedIn = true
const IsUserHaveCreditcard = true 
const UserLoginfrommail = false              
if(isUserLoggedIn && IsUserHaveCreditcard){
    console.log("You can purchase anything");
}else{
    console.log("You cant purchase");
}
if(UserLoginfrommail || isUserLoggedIn){
    console.log("Fine still can purchase");
}else{
    console.log("Cant purchase");
}
