function result() {
    var userName = document.getElementById(userName);
    var passWord = document.getElementById(passWord);
    
    var last = document.getElementById(last);
    var mail = document.getElementById(mail);

    var userError = document.getElementById(userError);
    var passError = document.getElementById(passError);

    if(userName.trim()===""){
        userName.textContent="first name cannot be empty"
    }
        else if(userName.length<4){

            
        

    }
    if(last.trim()===""){
        last.textContent="last name cannot be empty"
    }
    if(mail.trim()===""){
        mail.textContent=" looks like it not an email"
    }
    if(passWord.trim()===""){
        passWord.textContent="password cannot be empty"

    }
    else if( passWord.)
}