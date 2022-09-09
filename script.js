function validate(e){
    e.preventDefault() 
    var title = "Netflix";
icon = 'https://homepages.cae.wisc.edu/~ece533/images/airplane.png';
var body = "Netflix me aapka swagat hai";
var notification = new Notification(title, { body, icon });
    var  uname, pwd,s1, s2,z ;
   uname = document.getElementById("uname");
   pwd = document.getElementById("pwd");
  s1 = document.getElementById("s1");
  s2 = document.getElementById("s2");

 
if (uname.value==""){
    s1.innerHTML="**Must be fill";
    uname.style.border= "1px solid red";
}
else if(uname.value.length<5){
    s1.innerHTML="***Error";
    uname.style.border= "1px solid red";
}

// else if(pwd.value == "number"){ 
// s1.innerHTML="plz enter a valid number"
// z=true;
// }




else{
    s1.innerHTML="";
}
if (pwd.value==""){
    s2.innerHTML="**Must be fill";
    pwd.style.border= "1px solid red";

}
else{
    s2.innerHTML="";
}

if((uname.value=="") || (pwd.value=="")){
    z=false;
}
else{
    z=true;
}

    
return z;
}
Notification.requestPermission().then(function (permission) { console.log(permission); });