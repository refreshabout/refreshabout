function disableIE() {
    if (document.all) {
        return false;
    }
}
function disableNS(e) {
    if (document.layers || (document.getElementById && !document.all)) {
        if (e.which==2 || e.which==3) {
            return false;
        }
    }
}
if (document.layers) {
    document.captureEvents(Event.MOUSEDOWN);
    document.onmousedown = disableNS;
} 
else {
    document.onmouseup = disableNS;
    document.oncontextmenu = disableIE;
}
document.oncontextmenu=new Function("return false");

var controlprecionado = 0;
var altprecionado = 0;
function desactivarCrlAlt(teclaactual){
   //alert(teclaactual);
   var desactivar = false;
   //Ctrl + 
   if (controlprecionado==17){
      if (teclaactual==78 || teclaactual==85 ){
        //alert("Ctrl+N y Ctrl+U deshabilitado");
        desactivar=true;
      }         
      if (teclaactual==83){
        //alert("Ctrl+R deshabilitado");
        desactivar=true;
		
      }       
	  
	  
      if (teclaactual==116){
        //alert("Ctrl+F5 deshabilitado");
        desactivar=true;
      }          
      if (teclaactual==114){
        //alert("Ctrl+F3 deshabilitado");
        desactivar=true;
      }  
   }
   //Alt +
   if (altprecionado==18){
      if (teclaactual==37){
        //alert("Alt+ [<-] deshabilitado");
        desactivar=true;
      } 
      if (teclaactual==39){
        //alert("Alt+ [->] deshabilitado");
        desactivar=true;
      }     
   }
   if (teclaactual==17)controlprecionado=teclaactual;
   if (teclaactual==18)altprecionado=teclaactual;  
   return desactivar;
}
 
document.onkeyup = function(){ 
   if (window.event && window.event.keyCode==17){
 controlprecionado = 0;
   }
   if (window.event && window.event.keyCode==18){
 altprecionado = 0;
   }  
}

document.onkeydown = function(){ 
   //116->f5
   //122->f11
   //117->f6
   //114->f3
   //alert(window.event.keyCode);
   if (window.event && 
         desactivarCrlAlt(window.event.keyCode)){
     return false;
   }
   if (window.event && 
      (window.event.keyCode == 122 || 
       window.event.keyCode == 116 || 
       window.event.keyCode == 114 || 
       window.event.keyCode == 117)){
 //alert("lo siento!, no hay f5, f3, f6 ni f11 :P");
 window.event.keyCode = 505; 
   }
   if (window.event.keyCode == 505){ 
 return false; 
   } 
   if (window.event && (window.event.keyCode == 8)){
 valor = document.activeElement.value;
 if (valor==undefined) { 
    //Evita Back en página.
    //alert("lo siento!, no hay back :P");
    return false; 
 } 
 else{
    if (document.activeElement.getAttribute('type')
          =='select-one')
       { return false; } //Evita Back en select.
    if (document.activeElement.getAttribute('type')
          =='button')
       { return false; } //Evita Back en button.
    if (document.activeElement.getAttribute('type')
          =='radio')
       { return false; } //Evita Back en radio.
    if (document.activeElement.getAttribute('type')
          =='checkbox')
       { return false; } //Evita Back en checkbox.
    if (document.activeElement.getAttribute('type')
          =='file')
       { return false; } //Evita Back en file.
    if (document.activeElement.getAttribute('type')
          =='reset')
       { return false; } //Evita Back en reset.
    if (document.activeElement.getAttribute('type')
          =='submit')
       { return false; } //Evita Back en submit.
    else //Text, textarea o password
 {
 if (document.activeElement.value.length==0){ 
    //No realiza el backspace(largo igual a 0).
    return false; 
 } 
 else{ 
       //Realiza el backspace.
       document.activeElement.value.keyCode = 8; } 
     }
   }
 }
} 
 
                  function showLanguageSelector(obj,language){	
                  	if("es_PA"!=language){
                  		obj.show();		
                  	}else{
                  		obj.hide();
                  	}
                  }
                  
                  showLanguageSelector($k("#selectorEs"),'es_PA');
                  showLanguageSelector($k("#selectorEn"),'en_PA');