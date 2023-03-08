console.log("rani matchi");
function dis_block(){
    document.getElementById("inscription").style.display = "block";
}
function controleMDP(mdp) {
    if (mdp.value.length < 8) {
    alert("Le mot de passe " + mdp.name + " doit contenir au moins 8 caractères");
    mdp.value="";
    mdp.focus();
    return false;
    } else {
    return true;
    }
    }
function validationInscription(mdp1, mdp2) {
        var test = true;
        if (!controleMDP(mdp1)) {
        test = false;
        } else if (!controleMDP(mdp2)) {
        test = false;
        } else if (mdp1.value !== mdp2.value) {
        alert("Mots de passe différents");
        mdp1.focus();
        mdp1.value="";
        mdp2.value="";
        test = false;
        }
        return test;
        }
function salut(x){
     alert("helo again mr."+cutMot(x.value));
}
function cutMot(x){
    var index= x.indexOf('@');
    return x.substring(0,index);
}