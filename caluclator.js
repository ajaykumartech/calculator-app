function display(value)
{
    document.getElementById("result").value += value;
}
function clearscreen()
{
    document.getElementById("result").value="";
}
function allclear()
{
    history="";
    expressionData="";
    document.getElementById("result").value="";
    document.getElementById("res").value="";
}

var expressionData="";
var historyData="";
var history=[];
const z="";
function resolve()
{
         let x = document.getElementById("result").value;
         let ya = eval(x);
         let y=ya+z;
        expressionData=x;
       //alert(expressionData);
        z=expressionData.slice(expressionData.length-2,expressionData.length);
        alert(z);
        historyData=x;
        document.getElementById("result").value=y;
        document.getElementById("res").innerHTML=historyData;
  //  document.getElementById("res").innerHTML=expressionData;
   // document.getElementById("result").innerHTML=historyData;
  //  alert("normal");
}


function sqart(){
    let x = document.getElementById("result").value;
    let y = Math.sqrt(x);
    document.getElementById("result").value = y;
}

function backward()
{
    let size=document.getElementById("result").value.length;
    document.getElementById("result").value = document.getElementById("result").value.substring(0,size-1);
}

function percent()
{
    let size=document.getElementById("result").value.length;
    let n=Number(document.getElementById("result").value.substring(0,size-1));
    document.getElementById("result").value  =n/100;
}