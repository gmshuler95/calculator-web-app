var firstNum="";
var oper="";

$(".reset").on("click", function(){
    $(".numDisplay").text("");
    console.log("hello");
    firstNum=0; oper="";
});

$(".numBut").on("click", function(event){
    var prev = $(".numDisplay").text();
    var eventText = event.target.innerHTML;
    console.log(prev);
    $(".numDisplay").text(prev+eventText);
});

$(".delete").on("click", function(event){
    var theText = $(".numDisplay").text();
     theText = theText.substring(0, theText.length-1);
     console.log(theText);

     $(".numDisplay").text(theText);
});

$(".operBut").on("click", function(event){
    if(oper===""){
        oper=event.target.innerHTML;
        console.log(oper);
        var display = $(".numDisplay").text();
        firstNum=display.substring(0,display.length);
        //console.log(firstNum);
        $(".numDisplay").text(display+oper);
    }
});

$(".equal").on("click",function(event){
    var result;
    var secNum = $(".numDisplay").text();
    console.log(secNum);
    var expression=firstNum.length+oper.length;
    secNum=secNum.substring(expression);
    //console.log(firstNum);
    secNum=parseFloat(secNum); firstNum=parseFloat(firstNum);
    console.log(firstNum+secNum);
    switch(oper){
        case "+":
            result=(firstNum+secNum);
            break;
        case "-":
            result=(firstNum-secNum);
            break;
        case "*":
            result=(firstNum*secNum);
            break;
        case "/":
            result=(firstNum/secNum);
            break;
        default:
            break;
    }
    oper=""; firstNum=result;
    $(".numDisplay").text(result);
});


