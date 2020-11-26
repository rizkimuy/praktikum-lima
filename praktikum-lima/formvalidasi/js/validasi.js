function maxlength() {
	var maxname = document.getElementById("Username").value;
	if (maxname.length >= 30  ){
		window.alert("Max Length 30");
		return false;
	}
}
function number() {
  var max = document.getElementById("jmltiket").value;
  if (!/^[0-9]+$/.test(e.value)) {
	window.alert("Fill with number");
    e.value = e.value.substring(0,e.value.length-1);
	max.length = 2;
  }
}
function validasi() {
	var Username = document.getElementById("Username").value;
	var Email = document.getElementById("Email").value;
	var Jam = document.getElementById("jam").value;
	var Tujuan = document.getElementById("tujuan").value;
	var Tiket = document.getElementById("jmltiket").value;
	
	if (Username && Email && Jam && Tujuan  && Tiket ) {
		document.getElementById("form").innerHTML= "Username : " + nama + "<br>" +
		 "Email : " + Email + "<br>" + "Jam : " + jam+ "<br>" + "Tujuan: " +Tujuan + "<br>" +
		 "Jmltiket : " + Tiket + "<br><br>" + "Happy Traveling";
		return false;
	}else{
		alert("incomplate data,please fill in correctly!");
	}	
}