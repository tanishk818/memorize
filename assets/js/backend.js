clr.sort(() => Math.random() - 0.5);
    var mv=0;
    var visi=0;
    var match=[];
    var events=[];
    function flip(event){
    //alert(clr[event]+" "+event);
	var element = document.getElementsByClassName("card");
	if (element[event].style.transform != "rotateY(180deg)") {
        element[event].style.transform = "rotateY(180deg)";
        var element_back = document.getElementsByClassName("back");
        element_back[event].style.background="url("+clr[event]+")";
        element_back[event].style.backgroundSize= "cover";
        match.push(clr[event]);
        events.push(event);
        mv++;
        document.getElementById("text_content").innerHTML = "Moves : "+mv;
        document.getElementById("score").innerHTML = "Moves : "+mv;
    }
    //console.log(match.length);
    setTimeout(function(){
            if(match.length==2){
            if(match[0]===match[1]){
                visi+=2;
                if(visi===clr.length) $('#myModal').modal('show');
                else console.log(match[0]+" "+match[1]+" "+visi);
            }
            else{
                element[events[0]].style.transform="rotateY(0deg)";
                element[events[1]].style.transform="rotateY(0deg)";
            }
            match.splice(0, match.length);
            events.splice(0, events.length)
        }
    }, 1100);
    
};