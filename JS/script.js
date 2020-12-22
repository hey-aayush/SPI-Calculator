function submitBtn(){
    var noOfSub = parseInt(document.getElementById("noOfSub").value);
    if (noOfSub>0){
        document.querySelector(".card").classList.remove("hidden-card");
    }else{
        document.getElementById("invalid-input").classList.remove("hidden-card");
    }
}

document.querySelector(".details button").addEventListener("click",submitBtn);
