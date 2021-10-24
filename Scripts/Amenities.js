var amenitiesModal = document.getElementById('amenitiesModal');

var amenitiesClose = document.getElementsByClassName("amenitiesClose")[0];
var selectedAmenties=[];
var selectedAmentiesid=[];
var amenitiesList=["BBQ_Facilities","Change_Rooms","Showers","Club_House"];

function showAmenities() 
{
    amenitiesModal.style.display = "block";
	document.body.style.overflow = "hidden";
	for(k=0;k<amenitiesList.length;k++)
	{
		document.getElementById("Checkbox_"+amenitiesList[k]).checked=false;
	}
	
	if(selectedAmentiesid.length>0)
	{
		for(k=0;k<selectedAmentiesid.length;k++)
		{
			document.getElementById(selectedAmentiesid[k]).checked=true;
		}
	}
}

amenitiesClose.onclick = function() {
    amenitiesModal.style.display = "none";
	document.body.style.overflow = "auto";
}
window.onclick = function(event) {
    if (event.target == amenitiesModal) {
        amenitiesModal.style.display = "none";
		document.body.style.overflow = "auto";
	
    }
}
function addAmenitiesDyn(selectedAmenties1)
{
	selectedAmenties=[];
	selectedAmentiesid=[];
	var val="";
	for(l=0;l<selectedAmenties1.length;l++)
	{
		selectedAmenties.push(selectedAmenties1[l]);
		var v=selectedAmenties1[l].replace(" ","_");
		selectedAmentiesid.push("Checkbox_"+v);
		val+="<div class='amenities'>"+selectedAmenties[l]+"<span class='removeAmenity' onclick=removeAmenity("+l+")><i class='fa fa-times' aria-hidden='true'></i></span></div>";
	}
	document.getElementById("amenitiesList").innerHTML=val;	
	if(selectedAmenties.length==0)
		document.getElementById("amenitiesList").innerHTML="<div class='amenities' id='amenitiesInitial'>Add Amenities using the add amenity button above</div>";
}
function addAmenities()
{
	selectedAmenties=[];
	selectedAmentiesid=[];
	for(l=0;l<amenitiesList.length;l++)
	{
		var inp=document.getElementById("Checkbox_"+amenitiesList[l]);
		if(inp.checked==true)
		{
			selectedAmenties.push(inp.value);
			selectedAmentiesid.push(inp.id);
		}
	}
	amenitiesModal.style.display = "none";
	document.body.style.overflow = "auto";
	var val="";
	for(l=0;l<selectedAmenties.length;l++)
	{
		val+="<div class='amenities'>"+selectedAmenties[l]+"<span class='removeAmenity' onclick=removeAmenity("+l+")><i class='fa fa-times' aria-hidden='true'></i></span></div>";
	}
	document.getElementById("amenitiesList").innerHTML=val;	
	if(selectedAmenties.length==0)
		document.getElementById("amenitiesList").innerHTML="<div class='amenities' id='amenitiesInitial'>Add Amenities using the add amenity button above</div>";
	
}
function removeAmenity(value)
{
	selectedAmenties.splice(value,1);
	selectedAmentiesid.splice(value,1);
	var val="";
	for(l=0;l<selectedAmenties.length;l++)
	{
		val+="<div class='amenities'>"+selectedAmenties[l]+"<span class='removeAmenity' onclick=removeAmenity("+l+")><i class='fa fa-times' aria-hidden='true'></i></span></div>";
	}
	document.getElementById("amenitiesList").innerHTML=val;
	if(selectedAmenties.length==0)
		document.getElementById("amenitiesList").innerHTML="<div class='amenities' id='amenitiesInitial'>Add Amenities using the add amenity button above</div>";
	
}