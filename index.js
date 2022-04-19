var count = 0;
var dates={};

function week(d){
    if(d==0) return "Sun";
    else if(d==1) return "Mon";
    else if(d==2) return "Tue";
    else if(d==3) return "Wed";
    else if(d==4) return "Thurs";
    else if(d==5) return "Fri";
    else return "Sat";
}

function mins(d) {
    if(d.length = 1) return "0"+d;
    else return d;
}
document.querySelectorAll("button")[4].onclick = function(){
    count++;
    const d = new Date;
    document.querySelector("ol").innerHTML = document.querySelector("ol").innerHTML +  "<li><input type='checkbox'>  "+document.querySelector("textarea").value + "<span class='date'> "+d.getHours()+":"+mins(d.getMinutes())+" "+week(d.getDay()) +"</span> <button class='delete-task' onclick='this.parentElement.remove()'>Delete</button></li>";
    document.querySelector("textarea").value="";
}

document.getElementById("delete-clr-btn").onclick = function() {
    document.querySelector("ol").innerHTML = "";
}

for(let i=0; i<count; i++)
{
    document.querySelector("btn"+String(i)).onclick = function(){
        document.querySelectorAll("li")[i].remove();
    }
}
