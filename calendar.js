

var x = window.innerHeight;
var y = window.innerWidth;

// onLoad

(function(){
    document.querySelector(".date").addEventListener('keypress', function (e) {
        var key = e.which || e.keyCode;
        if (key === 13) { // 13 is enter
            var d = document.querySelector(".date").value;
            // le text apres le champ de text

            console.log();
            showCalendar(d);
        }
        var nodes = document.querySelectorAll(".node");
        for(var i=0;i<nodes.length;i++){
            node = nodes[i];
            if(!(parseInt(node.innerHTML)>=0 && parseInt(node.innerHTML)<=31)){
                continue;
            }
            (function(node){
                node.addEventListener("click",function(e){
                    node.innerHTML += "test";
                    console.log();
                })
            })(node)
        }

    });
    document.querySelector(".left").addEventListener("click",function(){
        var d = document.querySelector(".date").value;
        d = document.querySelector(".date").value = d.split("-")[0]+"-"+(d.split("-")[1]*1-1)+"-"+(d.split("-")[2]);
        showCalendar(d)
        console.log(d);
    });
    document.querySelector(".right").addEventListener("click",function(){
        var d = document.querySelector(".date").value;
        d = document.querySelector(".date").value = d.split("-")[0]+"-"+(d.split("-")[1]*1+1)+"-"+(d.split("-")[2]);
        showCalendar(d)
        console.log(d);
    });

})()
function showCalendar(d){
    var month ={1:"janvier",2:"février",3:"mars",4:"avril",5:"mai",6:"juin",7:"juillet",8:"août",9:"septembre",10:"octobre",11:"novembre",12:"décembre"}
    var div = document.querySelector(".calendar")
    while(div.firstChild){
        div.removeChild(div.firstChild)
    }
    document.querySelector(".month-year").innerHTML=month[parseInt(d.split("-")[1])]+" "+d.split("-")[0];
    // var d = prompt("entrer une date: YYYY-MM-DD")
    var maDate = new Date(d)
    var firstDay = (new Date(maDate.getFullYear(),maDate.getMonth(),1)).getDay();
    var lastDay = (new Date(maDate.getFullYear(),maDate.getMonth()+1,0)).getDate();
    var k = 1;
    for(var i=0;i<5;i++){
        for(var j=0;j<7;j++){
            var temp = document.createElement("div");
            temp.display = "inline-block"
            temp.style.width = parseInt(parseInt(window.getComputedStyle(div).width)*0.9/7) + "px";
            temp.style.height = parseInt(parseInt(window.getComputedStyle(div).height)*0.9/5) + "px" ;
            console.log(temp.style.width + "    " + temp.style.height);
            // temp.style.backgroundColor = "yellow"
            temp.classList.add("node");

            if(firstDay<=(j+1) +(i)*7 && k<= lastDay)
                temp.innerHTML = k++ ;
            else{
                temp.innerHTML = " ";
                temp.style.backgroundColor="#eee";
            }

            div.appendChild(temp);
        }
    }
}
