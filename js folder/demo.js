function demoexternalalert()
{
   alert("external alert"); 
}
{
    if(confirm("are you sure..?")){
        alert("Yess bro");

    }
    else{
        alert("Noo bro");
    }
}
function demoexternalprompt(){
    var aname=prompt("enter the first name...?");
    var bname=prompt("enter the last name here...?");
    alert(aname+" "+bname);
}