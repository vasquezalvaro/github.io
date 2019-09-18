
var arrgrupo = new Array("&", "R", "G", "H", "J", "V", "Z", "Y" );
var grp=1;
var numfilas = new Array(11);				//  10 numero limite de grupos
var numcols = new Array(11);
numfilas[1] = new Array(0, 2, 3, 4, 5 );   	// # de Filas por cada grupo y categoria ( 2 dimensiones)
numcols[1] =  new Array(0, 3, 4, 5, 5 );	// # de Columnas por cada grupo y categoria ( 2 dimensiones)
	// Ej: La R (arrgrupo[1]) tiene 4 categorias y 
	// su cat 1 tiene 2 filas (numfilas[1][1])  y 3 columnas(numcols[1][1])
	// su cat 3 tiene 4 filas (numfilas[1][3])  y 5 columnas(numcols[1][3])
numfilas[2] =  new Array(0, 2, 3, 4, 5 );
numcols[2] =  new Array(0, 3, 4, 5, 5 );
numfilas[3] =  new Array(0, 2, 3, 4, 5 );
numcols[3] =  new Array(0, 3, 4, 5, 5 );
numfilas[4] =  new Array(0, 2, 3, 4, 5 );
numcols[4] =  new Array(0, 3, 4, 5, 5 );
numfilas[5] =  new Array(0, 2, 3, 4, 5 );
numcols[5] =  new Array(0, 3, 4, 5, 5 );
numfilas[6] =  new Array(0, 2, 3, 4, 5 );
numcols[6] =  new Array(0, 3, 4, 5, 5 );
numfilas[7] =  new Array(0, 2, 3, 4, 5 );
numcols[7] =  new Array(0, 3, 4, 5, 5 );	
numfilas[8] =  new Array(0, 2, 3, 4, 5 );
numcols[8] =  new Array(0, 3, 4, 5, 5 );

// *************  40 limite de imagenes por categoria 
var arrazar = new Array(41);			// arreglo de digitos al azar
var imgarrfilen = new Array(41);		// nombres de archivo de imagenes

var screenW=screen.width;
var screenH=screen.height;
var tpos = new Array(41); 				// arreglo con posicx y posicy para cada imagen
var ktew=330;  							// width de imagen + 30 para espaciamiento entre imagenes 
var ktex; 								// posic x inicial ... se calcula dependiendo de .... ver creartablero(cat) 
var ktey; 								// posic y inicial ... se calcula dependiendo de .... ver creartablero(cat) 
// para controlar el toque de imagenes en el juego
var nimg;
var ntoque=0;							
var t1=0;
var t2=0;
var tact=0;
var nant=0;
var catact;
var nummatches = 0;
var gameTimer;
var numTotalClicks = 0;
var numSeconds = 0;
var delayShow = 2500;
var animSpeed = 250;
var	openDelay = 2500; 
var	flipAnim = 'rl'; 
var arrtoque = new Array(3); 
var arr_sg_html  = new Array(41); 
var arr_bk_html  = new Array(41); 

var flgtout;
var flgtout1;
var flgtout2;

$(document).ready(function(){ 
//  if (isvalidbrowser())       .... para controlar el browser .....
});
// *******************************************************************************
function isvalidbrowser() {
	return true;
}

function juegoparacat(g, n) {
	// LLamada desde el Home define el grupo (R,J,V,.... T,) la categoria (1, 2, .... ,6)
	for (var i = 1; i < arrgrupo.length; i++) {
		  if (arrgrupo[i] == g) {
			grp=i;	
		  }
	}
	
	//alert("indice de grupo...=" + grp + " para letra " + arrgrupo[grp]);
	catact=n;
	creartablero( catact );
	PlaySound("beep1");
	//  inicializa variables para controlar juego
	ntoque=0;
	t1=0;
	t2=0;
	tact=0;
	nant=0;
	nummatches = 0;
	numTotalClicks = 0;
	numSeconds = 0;
	jQT.goTo("#juego", "flip");
}

function creartablero(cat) { 
	
// print("------- arreglo 2 dimens tpos[p] = {fila, columna} ")
// para manejar tablero de imagenes 

var nf=numfilas[grp][cat];
var nc=numcols[grp][cat];

PlaySound("beep1");
ktex=(1/2)*(screenW - nc*ktew ) + 15;
ktey=(1/2)*(screenH - nf*ktew ) - 30;

nimg = nf*nc;
for (var i = 1; i < nimg + 1; i++) {
	imgarrfilen[i]= cat + "." + i		// cada archivo de imagen de la forma  img<cat>.<i>.png
}
var p=1;
var x;
var y;
crearalazar(nf, nc);

	for (var i = 1; i < nf + 1; i++) {				// por filas
		tpos[i]=new Array(3);
		for (var j = 1; j < nc + 1; j++) {			// por columnas
		$('#tb').append('<div id=tj' + p + ' class=tarjeta>');
			tpos[i][1] = i;  // fila
			tpos[i][2] = j;  // columna
			$("#sg" + p).remove();
			$("#bk" + p).remove();
			
			arr_sg_html[p] = '<div class=signos id=sg' + p +  ' onclick=clickimg(' +  p + ')><a><img src=images/img' + arrgrupo[grp] + imgarrfilen[arrazar[p]] + '.png></a></div>';
			arr_bk_html[p] = '<div class=signos id=bk' + p +  ' onclick=clickimg(' +  p + ')><a><img src=images/img' + arrgrupo[grp] + cat + "." + 0 + '.png></a></div>';
			$("#tj" + p).append(arr_sg_html[p]);
			$("#tj" + p).append(arr_bk_html[p]);
			
			$("#bk" + p).css("display", "block");  
			$("#sg" + p).css("display", "block"); 	
			x = ktex + ktew*(j - 1);
			y = ktey + ktew*(i - 1);
			$("#sg" + p).css("position", "absolute");
			$("#sg" + p).css("left", x + "px");
			$("#sg" + p).css("top", y + "px");
			$("#bk" + p).css("position", "absolute");
			$("#bk" + p).css("left", x + "px");
			$("#bk" + p).css("top", y + "px");

			//crear los elementos para los archivos de sonido	
			$("#sound" + p).remove();
			$("#tj" + p).append('<audio id=sound' + p  +  ' src=sounds/sound' + imgarrfilen[arrazar[p]] + '.mp3/>'); 
			$("#tj" + p).append('</div>');
			//debugger;
			p=p+1;		
		}	// for j
	}	// for i


}  // end function creartablero

function crearalazar(nf, nc) {
//("------- arreglo de digitos al azar ")
//("------- para tablero de juego ")
var ndig = nf*nc;
var f;
var tdig = new Array(ndig + 1);
for (var i = 1; i < ndig + 1; i++) {
		tdig[i] = 0;
		arrazar[i] = 0;
}
var limd=ndig/2;
for (var i = 1; i < limd + 1; i++) {
	f=Math.floor(Math.random() * ndig) + 1;
	if (tdig[f] == 0) {	
		tdig[f]=i;
	}else{		
		while (tdig[f] > 0)  {
			f=Math.floor(Math.random() * ndig) + 1;
		}
		tdig[f]=i;
	}

}

for (var i = 1; i < limd + 1; i++) {
	f=Math.floor(Math.random() * ndig) + 1;
	if (tdig[f] == 0) {	
		tdig[f]=i;
	}else{		
		while (tdig[f] > 0)  {
			f=Math.floor(Math.random() * ndig) + 1;
		}
		tdig[f]=i;
	}
}

for (var i = 1; i < ndig + 1; i++) {
	arrazar[i]=tdig[i];
	//alert(" al azar para i ... " + i + " ... " + arrazar[i]);
	
}
}	// end function crearalazar

function gohome() {	
	jQT.goTo("#home", "flip"); 		
}	// end function gohome
function gofinjuego() {	
	PlaySound("ganador");
	jQT.goTo("#finjuego", "flip"); 		
}	// end function gohome

function clickimg(n) {

desactivartodo();

var strsound = "sound" + n;
PlaySound(strsound);
numTotalClicks++;
ntoque=ntoque + 1;
tact=arrazar[n];

	if (ntoque == 1) {			
		//  PRIMER TOQUE
		// *******************************************
		// alert("PRIMER TOQUE... ntoque=" + ntoque + " ..compara ... " + (n == nant) );

		arrtoque[1] = n;
		clearTimeout(flgtout);
		mostrar(arrtoque[1]);
		t1=tact;
		t2=0;
		tact=0;
		nant=n;
	}else{
		//  SEGUNDO TOQUE
		
			if ( n != nant ) {		// para controlar repeticion del Primer toque
				// alert("SEGUNDO TOQUE... ntoque=" + ntoque + " ..compara ... " + (n == nant) );
				arrtoque[2] = n;
				clearTimeout(flgtout);
				mostrar(arrtoque[2]);

				t2=tact;
				if (t1 == t2)  {
					//$("#c3").text(" MATCH ..... n=" + n + " y nant=" + nant);
					/*  PARA REMOVER DE PANTALLA  habilitar las sigtes. 4 lineas    */
					clearTimeout(flgtout1);
					flgtout1=setTimeout( "desaparecer(arrtoque[1])", 500);
					clearTimeout(flgtout2);
					flgtout2=setTimeout( "desaparecer(arrtoque[2])", 1500);
					 
					/*  PARA CONSERVAR EN PANTALLA  habilitar las sigtes. 2 lineas
					desactivar(arrtoque[1]);
					desactivar(arrtoque[2]);
					*/
					nummatches++;
					if (nummatches == numfilas[grp][catact] * numcols[grp][catact]/2) {
						nummatches=0;
						gofinjuego();
						return;
					}
					//alert("MATCH .... entre ... " + nant + " ..y.. " + n);
				}else{
					//alert("NOT NOT NOT MATCH .... entre ... " + nant + " ..y.. " + n);
					//$("#c3").text("NOT MATCH a ocultar n=" + n + " y nant=" + nant);
		// volver a mostrar toque 2  ??????????????????'   O un timeout 
					clearTimeout(flgtout1);
					flgtout1=setTimeout( "ocultar(arrtoque[1])", 1000);
					clearTimeout(flgtout2);
					flgtout2=setTimeout( "ocultar(arrtoque[2])", 1000);
				}	
			nant=0;	
			ntoque=0;
			t1=0;
			t2=0;
			tact=0;
		}else{  // se repitio el primer toque  .. es decir n==nant
			ntoque=1;
			// alert(" AHORA EL TOQUE ES .... " + ntoque);
		}
	}
// alert("SALE DEL TOQUE... ntoque=" + ntoque + "  ....... y nant=" + nant);
clearTimeout(flgtout);
flgtout=setTimeout( "reactivartodo()", 1000);		
}	// end function clickimg

// *** functions para manejar display y animacion 
function mostrar(n) {
var x=n;
$("#bk" + n).hide("drop", { direction: "down"  }, 1000);
$("#sg" + n).show("puff", {   }, 1000);
flgtout=setTimeout( "mostrar(x)", 2000);
}
 
function ocultar(n) {
//$("#c1").text("ocultando n=" + n + " arrazar[n]=" + arrazar[n]);
$("#sg" + n).hide("drop", { direction: "down"  }, 1500);
$("#bk" + n).show("puff", {   }, 1500);

}
		
function desaparecer(n) {
flgtout=setTimeout( "reactivartodo()", 2000);
	$("#sg" + n).remove();
	$("#bk" + n).remove();

}

function PlaySound(soundObj) {
	var sound = document.getElementById(soundObj);
	if (sound) {
		sound.play();
	}
}

function desactivar(n) {
$("#bk" + n).attr('onclick', 'nada()');
$("#sg" + n).attr('onclick', 'nada()');
}

function reactivar(n) {
$("#bk" + n).attr('onclick', 'clickimg(' +  n + ') ');
$("#sg" + n).attr('onclick', 'clickimg(' +  n + ') ');
}

function desactivartodo() {
for (var i = 1; i < nimg + 1; i++) {
	desactivar(i);
}
}
function reactivartodo() {
for (var i = 1; i < nimg + 1; i++) {
	reactivar(i);
}
flgtout=setTimeout( "reactivartodo()", 1000);
}
function nada() {
   
}



