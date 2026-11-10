let username = "admin";
let password = "1234";
let isActive = true;
if(username === ""){
    console.log("Username required.");
} else if(password === ""){
    console.log("Password Required."); 
} else if(username !== "admin"){
    console.log("User not found.")
}
else if(password !== "1234"){
    console.log("Wrong password.")
  }  else if (isActive === false){
    console.log("Account blocked.")
} else {
    console.log("Login Successful.")
}