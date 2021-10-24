var allInputs=[];
var lengthErrorMessage="Length should be between 6 and 30 Characters";
var onlyAlphaMessage="Numbers Not allowed";
var selectOptionMessage="Select a Value";
var splCharsMessage="Special Characters Not Allowed";
var errorFlag;



function courtVal(id)
{
	return document.getElementById(id).value;
}

function courtCheckVal(id)
{
	return document.getElementById(id).checked;
}

function getId(idVal)
{
	return document.getElementById(idVal);
}

function checkLength(checkData)
{
	var patt = new RegExp(".{6,30}");
    return !patt.test(getId(checkData).value);
}

function checkDropDown(dropDownData)
{
	if(getId(dropDownData).value==-1)
		return true;
	else
		return false;
}

function checkCourtDropDown(courtDropDown)
{
	if(getId(courtDropDown).value==-1)
		return true;
	else
		return false;
}

function containsNumbers(checkNumbers)
{
	var patt1 = new RegExp("[0-9]");
    return patt1.test(getId(checkNumbers).value);
}

function checkPostCode(facilityPostCode)
{
	var patt2 = new RegExp("^[0-9]{4}$");
    return !patt2.test(getId(facilityPostCode).value);
}

function checkSplChars(checkValue)
{
	var patt3 = new RegExp("^[A-Za-z]+$");
    return !patt3.test(getId(checkValue).value);
}

function addErrorStyles(style1,style2,errorText)
{
	getId(style1).classList.add("error");
	getId(style2).style.display="block";
	getId(style2).innerHTML=errorText;
}

function removeErrorStyles(style1,style2)
{
	getId(style1).classList.remove("error");
	getId(style2).style.display="none";
}


function addCheckErrorStyles(style1,errorText)
{
	document.getElementById(style1).style.display="block";
	document.getElementById(style1).innerHTML=errorText;
	errorFlag=true;
}

function removeCheckErrorStyles(style1)
{
	document.getElementById(style1).style.display="none";
	errorFlag=false;
}

function validateInputs()
{
	allInputs=[];
	var inputTags=document.getElementsByClassName("inputTag");
	var inputErrorTags=document.getElementsByClassName("inputError");
	for(var i=0;i<inputTags.length;i++)
	{	
		var temp={id:inputTags[i].id,value:"",isError:false,errorid:inputErrorTags[i].id};
		if(inputTags[i].type=="text")
			temp.validationType="text";
		else if(inputTags[i].type=="select-one")
			temp.validationType="select";
		allInputs.push(temp);
	}
	
	for(var i=0;i<allInputs.length;i++)
	{
		if(allInputs[i].id=="facilityPostCode")
		{
			if(checkPostCode(allInputs[i].id))
			{
				addErrorStyles(allInputs[i].id,allInputs[i].errorid,"Enter a valid Pin Code");
				allInputs[i].isError=true;
			}
			else
			{
				removeErrorStyles(allInputs[i].id,allInputs[i].errorid);
				allInputs[i].isError=false;
			}
		}
		else if(allInputs[i].validationType=="text")
		{
			if(checkLength(allInputs[i].id))
			{
				addErrorStyles(allInputs[i].id,allInputs[i].errorid,lengthErrorMessage);
				allInputs[i].isError=true;
			}
			else if(containsNumbers(allInputs[i].id))
			{
				addErrorStyles(allInputs[i].id,allInputs[i].errorid,onlyAlphaMessage);
				allInputs[i].isError=true;
			}
			else if(checkSplChars(allInputs[i].id))
			{
				addErrorStyles(allInputs[i].id,allInputs[i].errorid,splCharsMessage);
				allInputs[i].isError=true;
			}
			
			else
			{
				removeErrorStyles(allInputs[i].id,allInputs[i].errorid);
				allInputs[i].isError=false;
			}
		}
		else if(allInputs[i].validationType=="select")
		{
			if(checkDropDown(allInputs[i].id))
			{
				addErrorStyles(allInputs[i].id,allInputs[i].errorid,selectOptionMessage);
				allInputs[i].isError=true;
			}
			else
			{
				removeErrorStyles(allInputs[i].id,allInputs[i].errorid);
				allInputs[i].isError=false;
			}
		}
	}
}