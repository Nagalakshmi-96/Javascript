var loadDraftModal = document.getElementById('loadDraft');
var loadCancel = document.getElementById('loadCancelButton');
var close = document.getElementsByClassName("close")[1];

window.onload = function()
{
	if(localStorage.getItem("draftData") || false)
	{
		loadDraftModal.style.display = "block";
	}
}
close.onclick = function() 
{
    loadDraftModal.style.display = "none";
}

window.onclick = function(event) 
{
    if (event.target == loadDraftModal) 
	{
        loadDraftModal.style.display = "none";
    }
	 if (event.target == messageModal) 
	{
        messageModal.style.display = "none";
    }
}
loadCancel.onclick =function(){loadDraftModal.style.display = "none";}



function loadfromDraft()
{
	loadDraftModal.style.display = "none";
	var draftData=JSON.parse(localStorage.getItem("draftData"));
	for(i in draftData)
		console.log(i);
	
	document.getElementById("facilityNameInput").value=draftData.facilityName;
	document.getElementById("facilityTypeInput").value=draftData.facilityType;
	document.getElementById("facilityAddressFirstLine").value=draftData.facilityAddress.address1;
	document.getElementById("facilityAddressSecondLine").value=draftData.facilityAddress.address2;
	document.getElementById("facilitySuburbInput").value=draftData.facilityAddress.suburb;
	document.getElementById("facilityCountryInput").value=draftData.facilityAddress.country;
	document.getElementById("facilityStateInput").value=draftData.facilityAddress.state;
	document.getElementById("facilityPostCode").value=draftData.facilityAddress.postcode;
	var m;
	
	for(m=0;m<draftData.courtInformation.length;m++)
	{
		addCourt();
		document.getElementById("courtName"+(m+1)).value=draftData.courtInformation[m].courtName;
		document.getElementById("courtSize"+(m+1)).value=draftData.courtInformation[m].courtSize;
		document.getElementById("courtSurface"+(m+1)).value=draftData.courtInformation[m].courtSurface;
		document.getElementById("courtLocation"+(m+1)).value=draftData.courtInformation[m].courtLocation;
		document.getElementById("courtLighted"+(m+1)).value=draftData.courtInformation[m].courtLighted;
		document.getElementById("HotShotsRed"+(m+1)).checked=draftData.courtInformation[m].HotShotsRed;
		document.getElementById("HotShotsOrange"+(m+1)).checked=draftData.courtInformation[m].HotShotsOrange;
	}
	document.getElementById("facilityPropertyType"+draftData.additionalInformation.facilityPropertyType).checked=true;
	document.getElementById("MoreThan2YearLease-"+draftData.additionalInformation.MoreThan2YearLease).checked=true;
	document.getElementById("refubrishPlan-"+draftData.additionalInformation.refubrishPlan).checked=true;
	document.getElementById("offerCourtHire-"+draftData.additionalInformation.offerCourtHire).checked=true;
	addAmenitiesDyn(draftData.amenities);
}

function restoreDefaults()
{
	if(localStorage.getItem("draftData") || false)
	{
		loadfromDraft();
	}
}