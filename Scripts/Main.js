function changeDropDownStyle()
{
	var sel=document.getElementsByClassName("customSelect");
	for(var j=0;j<sel.length;j++)
	{
		console.log(sel[j]);
		sel[j].onfocus=function()
		{
			this.classList.add("selectIconRotated");
		}
		sel[j].onblur=function()
		{
			this.classList.remove("selectIconRotated");
		}
	}
}
changeDropDownStyle();