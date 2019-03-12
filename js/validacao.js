function validaFormulario(fm) {
	if(fm.usuario.value=="" || fm.senha.value==""){
		document.getElementById("mensagem").innerHTML = "Atenção: Alguns dos campos não foi preenchido";
		
		if(fm.senha.value==""){
			document.getElementById("senha").style.border="solid red 2px";
		}else{
			document.getElementById("senha").style.border="solid black 2px";
		}
		
		if(fm.usuario.value==""){
			document.getElementById("usuario").style.border="solid red 2px";
		}else{
			document.getElementById("usuario").style.border="solid black 2px";
		}
		
		document.getElementById("centraliza").style.height="200px";
		document.getElementById("centraliza").style.marginTop="-150px";
		
		return false;
	}else{
		return true;
	}
}