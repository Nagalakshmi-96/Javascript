var formData;

function saveJSON()
{
	var facilityPropertyType=document.getElementsByName("facilityPropertyType");
	var k,facilityPropType,leaseValue,refubrish,courtHire;
	for(k=0;k<facilityPropertyType.length;k++)
		if(facilityPropertyType[k].checked)
			facilityPropType=facilityPropertyType[k].value;
		
	var MoreThan2YearLease=document.getElementsByName("MoreThan2YearLease");	
	for(k=0;k<MoreThan2YearLease.length;k++)
		if(MoreThan2YearLease[k].checked)
			leaseValue=MoreThan2YearLease[k].value;
		
	var refubrishPlan=document.getElementsByName("refubrishPlan");	
	for(k=0;k<refubrishPlan.length;k++)
		if(refubrishPlan[k].checked)
			refubrish=refubrishPlan[k].value;
		
	var offerCourtHire=document.getElementsByName("offerCourtHire");	
	for(k=0;k<offerCourtHire.length;k++)
		if(offerCourtHire[k].checked)
			courtHire=offerCourtHire[k].value;
		
	formData={
				"facilityName":getId("facilityNameInput").value,
				"facilityType":getId("facilityTypeInput").value,
				"facilityAddress":{
									"address1":getId("facilityAddressFirstLine").value,
									"address2":getId("facilityAddressSecondLine").value,
									"suburb":getId("facilitySuburbInput").value,
									"country":getId("facilityCountryInput").value,
									"state":getId("facilityStateInput").value,
									"postcode":getId("facilityPostCode").value
								   },
				"courtInformation":[],
				"additionalInformation":{
											"facilityPropertyType":facilityPropType,
											"MoreThan2YearLease":leaseValue,
											"refubrishPlan":refubrish,
											"offerCourtHire":courtHire
										},
				"amenities":[]
			}
	formData.amenities=[];
	formData.courtInformation=[];
	for(k=0;k<selectedAmenties.length;k++)
		formData.amenities.push(selectedAmenties[k]);
	for(k=0;k<courtList.length;k++)
		formData.courtInformation.push({"courtName":courtVal('courtName'+(k+1)),"courtSize":courtVal('courtSize'+(k+1)),"courtSurface":courtVal('courtSurface'+(k+1)),"courtLocation":courtVal('courtLocation'+(k+1)),"courtLighted":courtVal('courtLighted'+(k+1)),"HotShotsRed":courtCheckVal('HotShotsRed'+(k+1)),"HotShotsOrange":courtCheckVal('HotShotsOrange'+(k+1))});
	return formData;
}

function saveData()
{
	validateInputs();
	var errorFlag=1;
	for(var i=0;i<allInputs.length;i++)
		if(allInputs[i].isError==true)
		{
			errorFlag=0;
			break;
		}
	if(errorFlag)
	{
		var finalData=saveJSON();
		localStorage.setItem("finalData",JSON.stringify(finalData));
		getId("alertMessage").innerHTML="Final Data Saved Successfully";
		messageModal.style.display = "block";
	}

}

function saveDraft()
{	
	var draftData=saveJSON();
	localStorage.setItem("draftData",JSON.stringify(draftData));
	getId("alertMessage").innerHTML="Draft Data Saved Successfully";
    messageModal.style.display = "block";
}

var messageModal = document.getElementById('saveDraftSuccess');
var close = document.getElementsByClassName("close")[0];
close.onclick = function() 
{
    messageModal.style.display = "none";
}
