let display=document.getElementById("screen");
function allclear()
{
    display.value = "";
}

function delet()
{
    display.value = display.value.slice(0, -1);
}

function show(n)
{
    display.value += n;
}

function calc()
{
    display.value = eval(display.value,);
}