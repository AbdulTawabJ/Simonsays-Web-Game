
// ALL VARS HERE
var num;
var nums = new Array(4); 
var color = ["red","green","blue","yellow"]; 
var press = "true";
var pattern = 1;

// GENERATES RANDOM PATTERN TO PLAY
function Randompattern() {
    for (var index = 0; index < 4; index++) {
        num = Math.floor(Math.random()*4)+1;
        while(nums.includes(num))
        {
            num = Math.floor(Math.random()*4)+1;
        }
        nums[index] = num;
    }
    
}
// PLAYS ANIMATION FOLLOWING THE RANDOM PATTERN
function flashanim(){

    $("#level-title").text("Simon Says")

    setTimeout(function(){
        new Audio("sounds/"+color[nums.indexOf(1)]+".mp3").play();
        $("."+color[nums.indexOf(1)]).css("opacity", "0.1");
        $("."+color[nums.indexOf(1)]).delay(200).animate({opacity: 1});
    },200)

    setTimeout(function(){
        new Audio("sounds/"+color[nums.indexOf(2)]+".mp3").play();
        $("."+color[nums.indexOf(2)]).css("opacity", "0.1");
        $("."+color[nums.indexOf(2)]).delay(200).animate({opacity: 1});
    },700);
    setTimeout(function(){
        new Audio("sounds/"+color[nums.indexOf(3)]+".mp3").play();
        $("."+color[nums.indexOf(3)]).css("opacity", "0.1");
        $("."+color[nums.indexOf(3)]).delay(200).animate({opacity: 1});
    },1200);
    setTimeout(function(){
        new Audio("sounds/"+color[nums.indexOf(4)]+".mp3").play();
        $("."+color[nums.indexOf(4)]).css("opacity", "0.1");
        $("."+color[nums.indexOf(4)]).delay(200).animate({opacity: 1});
    },1700);

    setTimeout(function(){
        $("#level-title").text("What did Simon Say?");
        $("#level-title").attr("class", "typinganim");
        },2400);

}

function playgame(){
    flashanim();
    
    function re(){

        if(pattern === 4){
            setTimeout(function(){
            new Audio("sounds/yay.mp3").play();
            $("#level-title").text("YAAA!  🎉🎉🎉");
            }, 1250)
            $(".red").off("click",re);
            $(".green").off("click",gr);
            $(".yellow").off("click",yel);
            $(".blue").off("click",blu);
            setTimeout(function(){
                document.addEventListener("keydown" , function(){
                    location.reload();
                });
                document.addEventListener("click" , function(){
                    location.reload();
                });
            }, 2500)   
            }

        if(color[nums.indexOf(pattern)] === $(this).attr("class").slice(4)){
        $("#level-title").attr("class", "heading");
        new Audio("sounds/red.mp3").play();
        $(".red").css("opacity", "0.1");
        $(".red").delay(200).animate({opacity: 1});
        $("#level-title").text("YAY! x"+pattern);
        pattern++;}
        else{
        new Audio("sounds/wrong.mp3").play();
        $(".red").css("opacity", "0.1");
        $(".red").delay(200).animate({opacity: 1});
        $("#cross").css("display", "flex");
        $("#level-title").text("Noooooo :(");
        setTimeout(function(){
        $("#cross").css("display", "none");
        location.reload();},1200);    
        }
    }
    function blu(){

        if(pattern === 4){
            setTimeout(function(){
            new Audio("sounds/yay.mp3").play();
            $("#level-title").text("YAAA!  🎉🎉🎉");
            }, 1250)
            $(".red").off("click",re);
            $(".green").off("click",gr);
            $(".yellow").off("click",yel);
            $(".blue").off("click",blu);
            setTimeout(function(){
                document.addEventListener("keydown" , function(){
                    location.reload();
                });
                document.addEventListener("click" , function(){
                    location.reload();
                });
            }, 2500)   
            }

        if(color[nums.indexOf(pattern)] === $(this).attr("class").slice(4)){
        $("#level-title").attr("class", "heading");
        new Audio("sounds/blue.mp3").play();
        $(".blue").css("opacity", "0.1");
        $(".blue").delay(200).animate({opacity: 1});
        $("#level-title").text("YAY! x"+pattern);
        pattern++;}
        else{
        new Audio("sounds/wrong.mp3").play();
        $(".blue").css("opacity", "0.1");
        $(".blue").delay(200).animate({opacity: 1});
        $("#cross").css("display", "flex");
        setTimeout(function(){
            $("#cross").css("display", "none");
            location.reload();},1200);    
            }
    }
    function yel(){

        if(pattern === 4){
        setTimeout(function(){
        new Audio("sounds/yay.mp3").play();
        $("#level-title").text("YAAA!  🎉🎉🎉");
        }, 1250)
        $(".red").off("click",re);
        $(".green").off("click",gr);
        $(".yellow").off("click",yel);
        $(".blue").off("click",blu);
        setTimeout(function(){
            document.addEventListener("keydown" , function(){
                location.reload();
            });
            document.addEventListener("click" , function(){
                location.reload();
            });
        }, 2500)   
        }

        if(color[nums.indexOf(pattern)] === $(this).attr("class").slice(4)){
        $("#level-title").attr("class", "heading");
        new Audio("sounds/yellow.mp3").play();
        $(".yellow").css("opacity", "0.1");
        $(".yellow").delay(200).animate({opacity: 1});
        $("#level-title").text("YAY! x"+pattern);
        pattern++;}
        else{
        new Audio("sounds/wrong.mp3").play();
        $(".yellow").css("opacity", "0.1");
        $(".yellow").delay(200).animate({opacity: 1});
        $("#cross").css("display", "flex");
        setTimeout(function(){
            $("#cross").css("display", "none");
            location.reload();},1200);    
            }
    }
    function gr(){

        if(pattern === 4){
            setTimeout(function(){
            new Audio("sounds/yay.mp3").play();
            $("#level-title").text("YAAA!  🎉🎉🎉");
            }, 1250)
            $(".red").off("click",re);
            $(".green").off("click",gr);
            $(".yellow").off("click",yel);
            $(".blue").off("click",blu);
            setTimeout(function(){
                document.addEventListener("keydown" , function(){
                    location.reload();
                });
                document.addEventListener("click" , function(){
                    location.reload();
                });
            }, 2500)   
            }

        if(color[nums.indexOf(pattern)] === $(this).attr("class").slice(4)){
        $("#level-title").attr("class", "heading");
        new Audio("sounds/green.mp3").play();
        $(".green").css("opacity", "0.1");
        $(".green").delay(200).animate({opacity: 1});
        $("#level-title").text("YAY! x"+pattern);
        pattern++;}
        else{
        new Audio("sounds/wrong.mp3").play();
        $(".green").css("opacity", "0.1");
        $(".green").delay(200).animate({opacity: 1});
        $("#cross").css("display", "flex");
        setTimeout(function(){
            $("#cross").css("display", "none");
            location.reload();},1200);    
            }}
    $(".red").on("click", re);
    $(".blue").on("click",blu);
    $(".yellow").on("click",yel);
    $(".green").on("click",gr);

    
   
}
function keypressed(){
    
    if(press === "true"){
    press = "false";
    playgame();
    document.removeEventListener("keydown" , keypressed);
    document.removeEventListener("click" , keypressed);
}}
// FOR PLAYING WHEN KEY IS PRESSED
document.addEventListener("keydown" , keypressed);
document.addEventListener("click" , keypressed);
Randompattern();