function validasi() {
	var user = document.getElementById("username").value;
	var pass = document.getElementById("password").value;
	if (user == "" && pass == "") {
		alert('Username Tidak Boleh Kosong');
		return false;
	}
	else if (pass.length < 8){
		alert('Password Kurang Dari 8 karakter');
		return false;
	}
	else if (user == "iniusername" && pass == "inipassword" ){
		alert('Anda Berhasil Login');
		window.location = "home.html";
		return false;
	}else{
		alert("Username / Password Anda Salah, Coba Lagi");
	}
		
}