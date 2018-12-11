//add units to form that change based on slider use divs and change innerhtml in changesystem()
//rounding error on 1rmcalc
metric=false;
sessionStorage.setItem('metric', metric);
result=1;
maxresult=1;

function changeSystem(){
	if (metric==true)
		metric=false;
	else
	{
		metric=true;
	}
	sessionStorage.setItem('metric', metric);
	document.getElementById("weightLabel").innerHTML = "Weight lifted" + display1RMLabel() + ":";
}

function display1RMLabel(){
	if (sessionStorage.getItem('metric')==='true')
		return "(kgs)";
	else
		return "(lbs)";
}

function calculate1RM(bool) { //metric:true/false
	onerepmaxweight=document.getElementById("1rmform").elements[0].value;
	reps=document.getElementById("1rmform").elements[1].value;

	if (bool==true) //metric 1rm
	{
		return getMaxRep(reps, onerepmaxweight);
	}
	else if (bool==false) //standard 1rm
	{
		return convertToLbs(getMaxRep(reps, convertToKgs(onerepmaxweight)));
	}
	//else //errors?
}

function calculateBMI(bool) { //metric:true/false
	bmiweight=document.getElementById("bmiform").elements[0].value;
	bmiheight=document.getElementById("bmiform").elements[1].value;
	alert(metric + 'metric' + bmiweight + bmiheight)
	if (bool==true) //metric bmi
	{//if not -1 else error
		return getBMI(bmiheight, bmiweight);
	}
	else if (bool==false) //standard bmi
	{
		return getBMI(convertToCm(bmiheight), convertToKgs(bmiweight));

	} //display what group you are in (normal, underweight, overweight) maybe show chart comparing ppl with ur height, use colors like green for good red for bad
	//else //errors?
}

function getMaxRep(r, w) //uses kg
{
//errors?
  if (r>1)
  {
    return Math.round(w/(1.0278-0.0278*r));
  }
  else if (r==1)
  {
    return w;
  }
}

function getBMI(h, w) //uses cm
{
//errors?
  h/=100; //converts to m
  if (h>0&&w>0)
  {
    return Math.round(10*(w/(h*h)))/10;
  }
}

function convertToKgs(l)
{
    return Math.round(l*0.45359237);
}

function convertToLbs(k)
{
    return Math.round(k/0.45359237);
}

function convertToCm(i)
{
    return i*2.54;
}

function convertToIn(c)
{
    return c/2.54;
}

function submitBMI() {
	result=calculateBMI(metric);
	sessionStorage.setItem('result', result);
}

x=false;
unit='error';

function submit1RM() {
	if (sessionStorage.getItem('metric')==="true")
		x = true;
	else
		x = false;

	if (x==true)
		unit= "kilograms";
	else
		unit= "pounds";

	maxresult=calculate1RM(x) + " " + unit;
	sessionStorage.setItem('maxresult', maxresult);
	hide("1RM");
	show("ONERMresult");
}

function show(id) {
	document.getElementById(id).style.display='block';
}

function hide(id) {
	document.getElementById(id).style.display='none';
}