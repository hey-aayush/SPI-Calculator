function submitBtn(){
    var noOfSub = parseInt(document.getElementById("noOfSub").value);
    if (noOfSub>0){
        document.querySelector(".card").classList.remove("hidden-card");
        createTable();
    }else{
        document.getElementById("invalid-input").classList.remove("hidden-card");
    }
}

function createTable()
{
    var num_sub = document.getElementById('noOfSub').value;

    var tbody="";
    
    for( var i=0; i<num_sub;i++)
    {
        tbody += '<tr class = "table-row">';
        tbody += '<td>Course-'+(parseInt(i)+1)+'</td>'
        tbody += '<td><input class="form-control credit" type="text" name= "credit-'+(parseInt(i)+1)+'" placeholder="credit-'+(parseInt(i)+1)+'"></td>'
        tbody += '<td><input class="form-control score" type="text" name= "score-'+(parseInt(i)+1)+'" placeholder="score-'+(parseInt(i)+1)+'"></td>'
        tbody += '</tr>\n';
    }
    
    document.getElementById('marksheet').innerHTML = tbody;
}

document.querySelector(".details button").addEventListener("click",submitBtn);

function calculateSPI(){
    var cur_credit;
    var cur_score;
    var score_Sum=0;
    var credit_Sum=0;
    if (validateForm){
        for(var i=0;i<document.querySelectorAll(".credit").length;i++){
            cur_credit=parseInt(document.querySelectorAll(".credit")[i].value);
            cur_score=parseInt(document.querySelectorAll(".score")[i].value);
            score_Sum +=cur_credit*cur_score;
            credit_Sum +=cur_credit;
        }
        return (score_Sum/credit_Sum);
    }
}

function validateForm(){
    var cur_credit;
    var cur_score;
    for(var i=0;i<document.querySelectorAll(".credit").length;i++){
        cur_credit=document.querySelectorAll(".credit")[i].value;
        cur_score=document.querySelectorAll(".score")[i].value;
        if(cur_credit.NaN||cur_credit<0||cur_score.NaN||cur_score<0){
            return false;
        }
    }
    return true;
}