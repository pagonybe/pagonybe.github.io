var du=0, laim=0;
var pav, priespav="";
var id, priesid=-1;
var buvo, priesbuvo;
var x;

function smagu()
{
if(du==1 && buvo==x)
{
document.getElementById(x).src="nug.jpeg";
priespav="";
priesid=-1;
buvo="";
du=0;
return;
}
else if (id==priesid && du==1)
{
document.getElementById(x).style.visibility="hidden";
document.getElementById(buvo).style.visibility="hidden";
laim++;
du=0;
}
else if (du<2) 
{
du++;
priespav=pav;
priesid=id;
}
else if (du==2)
{
document.getElementById(buvo).src="nug.jpeg";
document.getElementById(priesbuvo).src="nug.jpeg";
du=1;
priespav=pav;
priesid=id;
}
document.getElementById(x).src=pav;
priesbuvo = buvo;
buvo = x;
}

function vert1()
{
x="pav1";
pav="liuksemburgo.jpeg";
id=1;
smagu(x, pav);
}
function vert2()
{
x="pav2";
pav="svedija.jpeg";
id=2;
smagu(x, pav);
}
function vert3()
{
x="pav3";
pav="liuksemburgas.jpg";
id=1;
smagu(x, pav);
}
function vert4()
{
x="pav4";
pav="kipro.jpeg";
id=3;
smagu(x, pav);
}
function vert5()
{
x="pav5";
pav="kipras.jpeg";
id=3;
smagu(x, pav);
}
function vert6()
{
x="pav6";
pav="portugalijos.jpeg";
id=4;
smagu(x, pav);
}
function vert7()
{
x="pav7";
pav="svedijos.jpeg";
id=2;
smagu(x, pav);
}
function vert8()
{
x="pav8";
pav="portugalija.jpeg";
id=4;
smagu(x, pav);
}

		function TIKRINIMAS1()
		{
			if (document.getElementById("sost1").value=="Liubliana")
				document.getElementById("ats1").innerHTML="TEISINGAI";
			else document.getElementById("ats1").innerHTML="NETEISINGAI";
		}
		function TIKRINIMAS2()
		{
			if (document.getElementById("sost2").value=="Oslas")
				document.getElementById("ats2").innerHTML="TEISINGAI";
			else document.getElementById("ats2").innerHTML="NETEISINGAI";
		}
		function TIKRINIMAS3()
		{	
			if (document.getElementById("sost3").value=="Atėnai")
				document.getElementById("ats3").innerHTML="TEISINGAI";
			else document.getElementById("ats3").innerHTML="NETEISINGAI";
		}
		function TIKRINIMAS4()
		{
			if (document.getElementById("sost4").value=="Talinas")
				document.getElementById("ats4").innerHTML="TEISINGAI";
			else document.getElementById("ats4").innerHTML="NETEISINGAI";
		}
		function TIKRINIMAS5()
		{
			if (document.getElementById("sost5").value=="Bernas")
				document.getElementById("ats5").innerHTML="TEISINGAI";
			else document.getElementById("ats5").innerHTML="NETEISINGAI";
		}
