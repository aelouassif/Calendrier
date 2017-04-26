

var x = window.innerHeight;
var y = window.innerWidth;
var div = document.querySelector(".calendar")
for(var i=0;i<5;i++){
    for(var j=0;j<7;j++){
        var temp = document.createElement("div");
        temp.display = "inline-block"
        temp.style.width = parseInt(parseInt(window.getComputedStyle(div).width)*0.9/7) + "px";
        temp.style.height = parseInt(parseInt(window.getComputedStyle(div).height)*0.9/5) + "px" ;
        console.log(temp.style.width + "    " + temp.style.height);
        temp.style.backgroundColor = "yellow"
        temp.classList.add("node");

        temp.innerHTML = (j+1) +(i)*7 ;
        div.appendChild(temp);
    }
}
