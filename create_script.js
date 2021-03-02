var counter = 0
var question_ans = {}

function newElement()
{
    var li = document.createElement("LI");
    var disop1 = document.createElement("INPUT");
    var disop2 = document.createElement("INPUT");
    var disop3 = document.createElement("INPUT");
    var disop4 = document.createElement("INPUT");

    var span1 = document.createElement("SPAN");
    var span2 = document.createElement("SPAN");
    var span3 = document.createElement("SPAN");
    var span4 = document.createElement("SPAN");

    span1.setAttribute("style", "display: block;  padding: 5px;");
    span2.setAttribute("style", "display: block;  padding: 5px;");
    span3.setAttribute("style", "display: block;  padding: 5px;");
    span4.setAttribute("style", "display: block;  padding: 5px;");


    setAttributes(disop1, {"type": "radio", "name": "Options" + counter});
    setAttributes(disop2, {"type": "radio", "name": "Options"+ counter});
    setAttributes(disop3, {"type": "radio", "name": "Options"+ counter});
    setAttributes(disop4, {"type": "radio", "name": "Options"+ counter});

    var inQues = document.getElementById("iquestion").value;
    var inOp1 = document.getElementById("op1").value;
    var inOp2 = document.getElementById("op2").value;
    var inOp3 = document.getElementById("op3").value;
    var inOp4 = document.getElementById("op4").value;
    var inCorrectOption = document.getElementById("ans").value;

    var inQuesT = document.createTextNode(inQues);
    var inOp1T = document.createTextNode(inOp1);
    var inOp2T = document.createTextNode(inOp2);
    var inOp3T = document.createTextNode(inOp3);
    var inOp4T = document.createTextNode(inOp4);

    var lOp1 = document.createElement("LABEL");
    var lOp2 = document.createElement("LABEL");
    var lOp3 = document.createElement("LABEL");
    var lOp4 = document.createElement("LABEL");

    lOp1.setAttribute("for", "op1");
    lOp1.appendChild(inOp1T);
    lOp2.setAttribute("for", "op2");
    lOp2.appendChild(inOp2T);
    lOp3.setAttribute("for", "op3");
    lOp3.appendChild(inOp3T);
    lOp4.setAttribute("for", "op4");
    lOp4.appendChild(inOp4T);

    li.appendChild(inQuesT);
    lOp1.innerHTML = inOp1;
    lOp2.innerHTML = inOp2;
    lOp3.innerHTML = inOp3;
    lOp4.innerHTML = inOp4;


    if (inQues == "")
    {
        alert("Question Field can't be empty!");
    }
    else if (inCorrectOption < 1 || inCorrectOption > 4) {
        alert("Correct Option must be between 1 to 4");
    }
    else 
    {
        document.getElementById("Questions").appendChild(li);
        document.getElementById("Questions").appendChild(span1);
        span1.appendChild(disop1);
        span1.appendChild(lOp1);
        document.getElementById("Questions").appendChild(span2);
        span2.appendChild(disop2);
        span2.appendChild(lOp2);
        document.getElementById("Questions").appendChild(span3);
        span3.appendChild(disop3);
        span3.appendChild(lOp3);
        document.getElementById("Questions").appendChild(span4);
        span4.appendChild(disop4);
        span4.appendChild(lOp4);
        counter += 1

        question_ans[inQues] = [inOp1, inOp2, inOp3, inOp4, inCorrectOption]
    }
    document.getElementById("iquestion").value = "";
    document.getElementById("op1").value = ""
    document.getElementById("op2").value = ""
    document.getElementById("op3").value = ""
    document.getElementById("op4").value = ""
    document.getElementById("ans").value = ""
    console.log(question_ans);
}

function setAttributes(el, attrs) {
    for(var key in attrs) {
      el.setAttribute(key, attrs[key]);
    }
}
