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
        tbody += '<td><input id="credit-'+(parseInt(i)+1)+'" class="form-control" type="text" name= "credit-'+(parseInt(i)+1)+'" placeholder="credit-'+(parseInt(i)+1)+'"></td>'
        tbody += '<td><input id="score-'+(parseInt(i)+1)+'" class="form-control" type="text" name= "score-'+(parseInt(i)+1)+'" placeholder="score-'+(parseInt(i)+1)+'"></td>'
        tbody += '</tr>\n';
    }
    
    document.getElementById('marksheet').innerHTML = tbody;
}

document.querySelector(".details button").addEventListener("click",submitBtn);
