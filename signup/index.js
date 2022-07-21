function signup(){
    var ftName = (document.getElementById("fme").value)
    var ltName = (document.getElementById("lme").value)
    var sMail = (document.getElementById("ml").value)
    var password1 = (document.getElementById("password1").value)
    var con_passord = (document.getElementById("psc").value)
    if(ftName.length ===0 || ltName.length===0 ||  sMail.length===0 || password1.length===con_passord.length===0){
    
        alert("fill in all details");
    
    }
    else{
        ftName = fme
        ltName = lme
        sMail =ml
        password1 = psd
        con_passord = psc
    }
    
    }