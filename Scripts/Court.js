var courtList=[];
var x=1;


	
	
function addCourt()
{
	courtList.push(x);
	if(courtList.length>0)
		document.getElementById("courtTableInitial").style.display="none";
	createCourt(courtList.length);
	x+=1;
}
function createErrorRow(x)
{
	var row=document.createElement("div");
	row.setAttribute('class',"errorRow");
	row.setAttribute('id',"errorRow"+x);
	
	var sno = document.createElement("div");
	sno.setAttribute('class',"snoColumn");
	
	var inp=document.createElement("div");
	inp.setAttribute('class','courttabledataColumn');
	var errorContainer1=document.createElement("div");
	errorContainer1.setAttribute('class',"inputError");
	errorContainer1.setAttribute('id',"courtNameError"+x);
	inp.appendChild(errorContainer1);
	
	var size=document.createElement("div");
	size.classList.add('courttabledataColumn',);
	var errorContainer2=document.createElement("div");
	errorContainer2.setAttribute('class',"inputError");
	errorContainer2.setAttribute('id',"courtSizeError"+x);
	size.appendChild(errorContainer2);
	
	var surface=document.createElement("div");
	surface.classList.add('courttabledataColumn');
	var errorContainer3=document.createElement("div");
	errorContainer3.setAttribute('class',"inputError");
	errorContainer3.setAttribute('id',"courtSurfaceError"+x);
	surface.appendChild(errorContainer3);
	
	var court_location=document.createElement("div");
	court_location.setAttribute('class','courttabledataColumn');
	var errorContainer4=document.createElement("div");
	errorContainer4.setAttribute('class',"inputError");
	errorContainer4.setAttribute('id',"courtLocationError"+x);
	court_location.appendChild(errorContainer4);
	
	
	var lighted=document.createElement("div");
	lighted.setAttribute('class','courttabledataColumn');
	var errorContainer5=document.createElement("div");
	errorContainer5.setAttribute('class',"inputError");
	errorContainer5.setAttribute('id',"courtLightedError"+x);
	lighted.appendChild(errorContainer5);
			
	var deleteCol=document.createElement("div");
	deleteCol.setAttribute('class','deleteColumn');
	
	row.appendChild(sno);
	row.appendChild(inp);
	row.appendChild(size);
	row.appendChild(surface);
	row.appendChild(court_location);
	row.appendChild(lighted);
	row.appendChild(deleteCol);
	return row;
}
function createCourt(x)
{
	
	var container=document.getElementById("courttablecontainer");
	
	var row=document.createElement("div");
	row.setAttribute('class',"courttablerow");
	row.setAttribute('id',"courttablerow"+x);
		
	var sno = document.createElement("div");
	sno.setAttribute('class',"snoColumn");
	sno.setAttribute('id',"sno"+x);
	sno.appendChild(document.createTextNode(x));
		
	var inp=document.createElement("div");
	inp.setAttribute('class','courttabledataColumn');

	
	
	
	var element1 = document.createElement("input");
	element1.setAttribute("type", "text");
	element1.classList.add("customInputCourt","inputTag");
	element1.setAttribute('id',"courtName"+x);
	inp.appendChild(element1);
	
		
		
	var size=document.createElement("div");
	size.classList.add('courttabledataColumn','checkboxPosition');
	var sel = document.createElement("select");
	sel.classList.add('customSelect','selectIcon',"inputTag");
	sel.setAttribute('id',"courtSize"+x);
    size.appendChild(sel);
    var selopt = document.createElement("option");
    selopt.setAttribute("value", "Full Size");
    var t = document.createTextNode("Full Size");
    selopt.appendChild(t);
	
	var disabledOptSize=document.createElement("option");
	disabledOptSize.setAttribute("value", "-1");
	var t1 = document.createTextNode("Select Size");
	disabledOptSize.disabled=true;
	disabledOptSize.setAttribute("Selected","Selected");
	disabledOptSize.appendChild(t1);
	var selopt2 = document.createElement("option");
	selopt2.setAttribute("value", "Option2");
	var t1 = document.createTextNode("Option2");
	selopt2.appendChild(t1);

	var selopt3 = document.createElement("option");
	selopt3.setAttribute("value", "Option3");
	var t2 = document.createTextNode("Option3");
	selopt3.appendChild(t2);
	
	sel.appendChild(disabledOptSize);
    sel.appendChild(selopt);
    sel.appendChild(selopt2);
    sel.appendChild(selopt3);

	size.innerHTML+="<div class='checkbox1Position'><label class='checkbox1'>HOT SHOTS RED<input type='checkbox' id='HotShotsRed"+x+"'><span class='checkmark1'></span></label></div>";
		
	var surface=document.createElement("div");
	surface.classList.add('courttabledataColumn','checkboxPosition');
	var sel1 = document.createElement("select");
	sel1.classList.add('customSelect','selectIcon',"inputTag");
	sel1.setAttribute('id',"courtSurface"+x);
    surface.appendChild(sel1);
    
	var selopt1 = document.createElement("option");
    selopt1.setAttribute("value", "Clay");
    var t = document.createTextNode("Clay");
	selopt1.appendChild(t);
	
	var disabledOptSurface=document.createElement("option");
	disabledOptSurface.setAttribute("value", "-1");
	var t1 = document.createTextNode("Select Surface");
	disabledOptSurface.disabled=true;
	disabledOptSurface.setAttribute("Selected","Selected");
	disabledOptSurface.appendChild(t1);
	var selopt2 = document.createElement("option");
	selopt2.setAttribute("value", "Option2");
	var t1 = document.createTextNode("Option2");
	selopt2.appendChild(t1);

	var selopt3 = document.createElement("option");
	selopt3.setAttribute("value", "Option3");
	var t2 = document.createTextNode("Option3");
	selopt3.appendChild(t2);
	sel1.appendChild(disabledOptSurface);
    sel1.appendChild(selopt1);
	sel1.appendChild(selopt2);
    sel1.appendChild(selopt3);
	surface.innerHTML+="<div class='checkbox2Position'><label class='checkbox2'>HOT SHOTS ORANGE<input type='checkbox' id='HotShotsOrange"+x+"'><span class='checkmark2'></span></label></div>";
		
	
	var court_location=document.createElement("div");
	court_location.classList.add('courttabledataColumn');
	var sel2 = document.createElement("select");
	sel2.classList.add('customSelect','selectIcon',"inputTag");
	sel2.setAttribute('id',"courtLocation"+x);
    court_location.appendChild(sel2);
    var selopt1 = document.createElement("option");
    selopt1.setAttribute("value", "Outdoor");
    var t = document.createTextNode("Outdoor");
    selopt1.appendChild(t);
	
	var disabledOptLocation=document.createElement("option");
	disabledOptLocation.setAttribute("value", "-1");
	var t1 = document.createTextNode("Select Location");
	disabledOptLocation.disabled=true;
	disabledOptLocation.setAttribute("Selected","Selected");
	disabledOptLocation.appendChild(t1);
	var selopt2 = document.createElement("option");
	selopt2.setAttribute("value", "Option2");
	var t1 = document.createTextNode("Option2");
	selopt2.appendChild(t1);

	var selopt3 = document.createElement("option");
	selopt3.setAttribute("value", "Option3");
	var t2 = document.createTextNode("Option3");
	selopt3.appendChild(t2);
	
	sel2.appendChild(disabledOptLocation);
    sel2.appendChild(selopt1);
	sel2.appendChild(selopt2);
    sel2.appendChild(selopt3);
	
	
	
	var lighted=document.createElement("div");
	lighted.classList.add('courttabledataColumn');
	var sel3 = document.createElement("select");
	sel3.classList.add('customSelect','selectIcon',"inputTag");
	sel3.setAttribute('id',"courtLighted"+x);
    lighted.appendChild(sel3);
    var selopt1 = document.createElement("option");
    selopt1.setAttribute("value", "Lighted");
    var t = document.createTextNode("Lighted");
    selopt1.appendChild(t);
	
	var disabledOptLighted=document.createElement("option");
	disabledOptLighted.setAttribute("value", "-1");
	var t1 = document.createTextNode("Select Lighted");
	disabledOptLighted.disabled=true;
	disabledOptLighted.setAttribute("Selected","Selected");
	disabledOptLighted.appendChild(t1);
	var selopt2 = document.createElement("option");
	selopt2.setAttribute("value", "Option2");
	var t1 = document.createTextNode("Option2");
	selopt2.appendChild(t1);

	var selopt3 = document.createElement("option");
	selopt3.setAttribute("value", "Option3");
	var t2 = document.createTextNode("Option3");
	selopt3.appendChild(t2);
	
	sel3.appendChild(disabledOptLighted);
    sel3.appendChild(selopt1);
    sel3.appendChild(selopt2);
    sel3.appendChild(selopt3);
	
			
	var deleteCol=document.createElement("div");
	deleteCol.setAttribute('class','deleteColumn');
	deleteCol.setAttribute('id','deleteCol'+x);
	deleteCol.innerHTML+="<i class='fa fa-times removeCourt' aria-hidden='true' onclick=removeCourt("+x+")></i>";
	
	row.appendChild(sno);
	row.appendChild(inp);
	row.appendChild(size);
	row.appendChild(surface);
	row.appendChild(court_location);
	row.appendChild(lighted);
	row.appendChild(deleteCol);
	
	
	container.appendChild(createErrorRow(x));
	container.appendChild(row);
	changeDropDownStyle();
}

function removeCourt(val)
{
	var removeRow = document.getElementById("courttablerow"+val);
    removeRow.remove();

	var removeErorrRow = document.getElementById("errorRow"+val);
    removeErorrRow.remove();
	
	courtList.splice(val-1,1);
	for(j=val;j<=courtList.length;j++)
	{
		document.getElementById("courttablerow"+(j+1)).setAttribute('id','courttablerow'+(j));
		document.getElementById("courtName"+(j+1)).setAttribute('id','courtName'+(j));
		document.getElementById("courtSize"+(j+1)).setAttribute('id','courtSize'+(j));
		document.getElementById("courtSurface"+(j+1)).setAttribute('id','courtSurface'+(j));
		document.getElementById("courtLocation"+(j+1)).setAttribute('id','courtLocation'+(j));
		document.getElementById("courtLighted"+(j+1)).setAttribute('id','courtLighted'+(j));
		document.getElementById("HotShotsRed"+(j+1)).setAttribute('id','HotShotsRed'+(j));
		document.getElementById("HotShotsOrange"+(j+1)).setAttribute('id','HotShotsOrange'+(j));
		document.getElementById("sno"+(j+1)).setAttribute('id','sno'+(j));
		document.getElementById("sno"+(j)).innerHTML=j;
		document.getElementById("deleteCol"+(j+1)).setAttribute('id','deleteCol'+(j));
		document.getElementById("deleteCol"+j).innerHTML="<i class='fa fa-times removeCourt' aria-hidden='true' onclick=removeCourt("+j+")></i>";
		
		document.getElementById("courtNameError"+(j+1)).setAttribute('id','courtNameError'+(j));
		document.getElementById("courtSizeError"+(j+1)).setAttribute('id','courtSizeError'+(j));
		document.getElementById("courtSurfaceError"+(j+1)).setAttribute('id','courtSurfaceError'+(j));
		document.getElementById("courtLocationError"+(j+1)).setAttribute('id','courtLocationError'+(j));
		document.getElementById("courtLightedError"+(j+1)).setAttribute('id','courtLightedError'+(j));
		document.getElementById("errorRow"+(j+1)).setAttribute('id','errorRow'+(j));
		
	}
	if(courtList.length==0)
		document.getElementById("courtTableInitial").style.display="block";
	
}