var qrcode=new QRCode(document.getElementById('qrResult'),{
		width:100,
		height:100
	});

function generate(){
	var message=document.getElementById('qr');
	if(!message.value){
		alert("Input a text");
		message.focus();
		return;
	}

	qrcode.makeCode(message.value);

}

