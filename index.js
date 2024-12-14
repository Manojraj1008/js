let os=document.getElementById('os');
function Clear()
{
 os.value="";
}
function del()
{
    os.value=os.value.slice(0,-1);
}
function display(txt)
{
    os.value=os.value+txt;
}
function calculate()
{
    os.value=eval(os.value);
}
function cube()
{
    os.value=os.value*os.value*os.value;
}
function square()
{
    os.value=os.value*os.value;
}

function sin(){
    os.value=Math.sin(os.value);
}
function cos(){
    os.value=Math.cos(os.value);
}
function tan(){
    os.value=Math.tan(os.value);
}
function sqrt(){
    os.value=Math.sqrt(os.value);
}

