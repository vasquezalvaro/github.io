// 
const arrgrupo = ["&", "R", "G", "H", "J", "V", "Z", "Y"];
// Total imagenes disponibles por grupo(imgGn.png) donde G=("R", "G", "H", "J"...) y n=(1,2,3.....)
const arrnumimg = [0, 12, 12, 12, 12, 12, 12, 12];
var grp=1;
var numfilas = [];				//  10 numero limite de grupos
var numcols = [];
	// Ej: La R (arrgrupo[1]) tiene 4 categorias y 
	// su cat 1 tiene 2 filas (numfilas[1][1])  y 3 columnas(numcols[1][1])
	// su cat 3 tiene 4 filas (numfilas[1][3])  y 5 columnas(numcols[1][3])
numfilas[1] = [0, 3, 3, 4, 5];   	// # de Filas por cada grupo y categoria ( 2 dimensiones)
numcols[1] =  [0, 4, 4, 5, 5];	// # de Columnas por cada grupo y categoria ( 2 dimensiones)
	// Ej: La G (arrgrupo[2]) tiene 4 categorias y 
	// su cat 2 tiene 3 filas (numfilas[2][2])  y 4 columnas(numcols[2][2])
	// su cat 3 tiene 4 filas (numfilas[2][3])  y 5 columnas(numcols[2][3])
numfilas[2] =  [0, 2, 3, 4, 5];
numcols[2] =  [0, 3, 4, 5, 5];
numfilas[3] =  [0, 2, 3, 4, 5];
numcols[3] =  [0, 3, 4, 5, 5];
numfilas[4] =  [0, 2, 3, 4, 5];
numcols[4] =  [0, 3, 4, 5, 5];
numfilas[5] =  [0, 2, 3, 4, 5];
numcols[5] =  [0, 3, 4, 5, 5];
numfilas[6] =  [0, 2, 3, 4, 5];
numcols[6] =  [0, 3, 4, 5, 5];
numfilas[7] =  [0, 2, 3, 4, 5];
numcols[7] =  [0, 3, 4, 5, 5];	
numfilas[8] =  [0, 2, 3, 4, 5];
numcols[8] =  [0, 3, 4, 5, 5];

// *************  40 limite de imagenes por categoria 
var tdig = [];			// arreglo de digitos al azar
var imgarrfilen = [];	// nombres de archivo de imagenes
var arrmatch = [];

var screenW=window.screen.availWidth;
var screenH=window.screen.availHeight;
var tpos = []; 		// arreglo con posicx y posicy para cada imagen
var ktew=330;  					// width de imagen + 30 para espaciamiento entre imagenes 
var ktex; 						// posic x inicial ... se calcula dependiendo de .... ver creartablero(cat) 
var ktey; 						// posic y inicial ... se calcula dependiendo de .... ver creartablero(cat) 
// para controlar el toque de imagenes en el juego
var ntarj;
var ntoque=0;							
var t1=0;
var t2=0;
var tact=0;
var nant=0;
var catact;
var nummatches = 0;
var gameTimer;
//var numTotalClicks = 0;
//var numSeconds = 0;
const delayShow = 2500;
const animSpeed = 250;
const	openDelay = 2500; 
var	flipAnim = 'rl'; 
var arrtoque = []; 
var arr_sg_html  = []; 
var arr_bk_html  = []; 

var flgtout;
var flgtout1;
var flgtout2;

var optaudio;

$(document).ready(function(){ 
//  if (isvalidbrowser())       .... para controlar el browser .....
console.log(arrgrupo.length);
for(let i=0; i < arrgrupo.length; i++) {
  console.log(i + ' ... ' + arrgrupo[i]);
}
console.log(tdig.length+ ' ... ' + tdig[0]);
});
// *******************************************************************************
function isvalidbrowser() {
	return true;
}

function juegoparacat(g, a, c) {
//  
// LLamada desde el Home .... grupo g=(R,J,V,.... T,), opcion audio a=(0,1,2,3), la categoria c=(1, 2, .... ,6)
// a=0  No escuchar, no hablar
// a=1  Solo escuchar 
// a=2  Solo hablar 
// a=3  escuchar  y  hablar

var nelmatch=arrmatch.length;
optaudio=a;
PlaySound("beep1");
	for (var i = 1; i < arrgrupo.length; i++) {
		  if (arrgrupo[i] == g) {
			grp=i;	
		  }
	}
	// eliminar elem de arreglo con match
	for (var i = 0; i < nelmatch; i++) {
		  arrmatch.shift();
	}
	
	creartablero( c );
	
	//  inicializa variables para controlar juego
	ntoque=0;
	t1=0;
	t2=0;
	tact=0;
	nant=0;
	nummatches = 0;
	//numTotalClicks = 0;
	//numSeconds = 0;
	jQT.goTo("#juego", "flip");
}

function creartablero(cat) { 
	
// print("------- arreglo 2 dimens tpos[p] = {fila, columna} ")
// para manejar tablero de imagenes 

var nf=numfilas[grp][cat];
var nc=numcols[grp][cat];
ntarj = nf*nc;
var sep;

if (screenW < screenH) {  		// tablet
	screenW=screen.height;
	screenH=screen.width;
}

ktex=(1/2)*(screenW - nc*ktew ) + 15;   //  15:corresponde a la mitad de la separacion entre imgs(30/2)
ktey=(1/2)*(screenH - nf*ktew ) - 30;

// ************** RECALCULANDO ancho de imagen ************************
ktew=parseInt(screenW/(nc + 2 + (nc-1)*0.1));		// nuevo ancho de imagen recalculado 
ktex=ktew;
sep=parseInt(0.1*ktew);
ktey=parseInt((1/2)*(screenH - (nf*ktew + (nf - 1)*sep)));

console.log(' ...nc ' + nc);
console.log(' ...nf ' + nf);
console.log(ktex + ' ... ' + ktey);

var p=1;
var x;
var y;
crearalazar(nf, nc);

for (var i = 1; i < arrnumimg[grp] + 1; i++) {
	imgarrfilen[i]= arrgrupo[grp] + i		// cada archivo de la forma  <cat>.<i>
}

	for (var i = 1; i < nf + 1; i++) {				// por filas
		tpos[i]=[];
		for (var j = 1; j < nc + 1; j++) {			// por columnas
		$('#tb').append('<div id=tj' + p + ' class=tarjeta>');
		//crear los elementos para los archivos de sonido	
			$("#sound" + p).remove();
			$("#tj" + p).append('<audio id=sound' + p  +  ' src=sounds/sound' + imgarrfilen[tdig[p]] + '.mp3/>');
		//crear los elementos para las imagenes	
			tpos[i][1] = i;  // fila
			tpos[i][2] = j;  // columna
			$("#sg" + p).remove();
			$("#bk" + p).remove();
			
arr_sg_html[p] = '<div class=signos id=sg' + p +  ' onclick=clickimg(' +  p + ')><a><img width=' + ktew + 'px heigth=' + ktew + 'px src=images/img' + imgarrfilen[tdig[p]] + '.png></a></div>';
arr_bk_html[p] = '<div class=signos id=bk' + p +  ' onclick=clickimg(' +  p + ')><a><img width=' + ktew + 'px heigth=' + ktew + 'px src=images/img' + arrgrupo[grp]  + 0 + '.png></a></div>';
			$("#tj" + p).append(arr_sg_html[p]);
			$("#tj" + p).append(arr_bk_html[p]);
			
			$("#bk" + p).css("display", "block");  
			$("#sg" + p).css("display", "block"); 	
			x = ktex + ktew*(j - 1) + (j - 1)*sep;
			y = ktey + ktew*(i - 1) + (i - 1)*sep;
			
			$("#sg" + p).css("position", "absolute");
			$("#sg" + p).css("left", x + "px");
			$("#sg" + p).css("top", y + "px");
			$("#bk" + p).css("position", "absolute");
			$("#bk" + p).css("left", x + "px");
			$("#bk" + p).css("top", y + "px");
 
			$("#tj" + p).append('</div>');  // cierre tag div para class tarjeta			
			p=p+1;		
		}	// for j
	}	// for i


}  // end function creartablero

function crearalazar(nf, nc) {
//("------- arreglo de digitos al azar ")
//("------- para tablero de juego ")
// // console.log(" arrnumimg[grp]=" + arrnumimg[grp]);
var f;
var arrazar = [41];
var arraux =  [41];
tdig = [arrnumimg[grp] + 1];
for (var i = 1; i < arrnumimg[grp] + 1; i++) {
		tdig[i] = 0;
		arraux[i] = 0;
		
}
var limd=ntarj/2;	
// cambiar para que entren al juego todas las imagenes del grupo y no solamente limd=ntarj/2
for (var i = 1; i < limd + 1; i++) {
	f=Math.floor(Math.random() * arrnumimg[grp]) + 1;
	if (tdig[f] == 0) {	
		tdig[f]=i;				
	}else{		
		while (tdig[f] > 0)  {
			f=Math.floor(Math.random() * arrnumimg[grp]) + 1;
		}
		tdig[f]=i;				
	}
	arrazar[i]=f;	
// // console.log(" al azar 1 ... f=" + f + " .. tdig[f]=" + tdig[f] + " ..arrazar[i]=" + arrazar[i] + " ..para i=" + i);
}
// en arreglo arrazar hay 3 numeros no repetidos generados al azar entre 1 y num total de imags disponibles

for (var i = 1; i < limd + 1; i++) {
	f=Math.floor(Math.random() * ntarj) + 1;
	if (arraux[f] == 0) {	
		arraux[f]=arrazar[i];
	}else{		
		while (arraux[f] > 0)  {
			f=Math.floor(Math.random() * ntarj) + 1;
		}
		arraux[f]=arrazar[i];
	}
// // console.log(" al azar 2 ... f=" + f + " .. arraux[f]=" + arraux[f] + " ..para i=" + i);
}

for (var i = 1; i < limd + 1; i++) {
	f=Math.floor(Math.random() * ntarj) + 1;
	if (arraux[f] == 0) {	
		arraux[f]=arrazar[i];
	}else{		
		while (arraux[f] > 0)  {
			f=Math.floor(Math.random() * ntarj) + 1;
		}
		arraux[f]=arrazar[i];
	}
// // console.log(" al azar 3 ... f=" + f + " .. arraux[f]=" + arraux[f] + " ..para i=" + i);
}

for (var i = 1; i < ntarj + 1; i++) {
	tdig[i]=arraux[i];
// // console.log(" al azar para i ... " + i + " ... tdig[i]=" + tdig[i]);
	
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
var strsound = "sound" + n;
desactivartodo();

//numTotalClicks++;
ntoque=ntoque + 1;
tact=tdig[n];

	if (ntoque == 1) {			
		//  PRIMER TOQUE
		// *******************************************
		// alert("PRIMER TOQUE... ntoque=" + ntoque + " ..compara ... " + (n == nant) );
		PlaySound(strsound);
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
// ***************************************************************************************************
			/*  PARA REMOVER DE PANTALLA  habilitar las sigtes. 4 lineas   
					clearTimeout(flgtout1);
					flgtout1=setTimeout( "desaparecer(arrtoque[1])", 500);
					clearTimeout(flgtout2);
					flgtout2=setTimeout( "desaparecer(arrtoque[2])", 500);
					*/ 
			/*  PARA CONSERVAR EN PANTALLA  habilitar las sigtes. 2 lineas  */
					arrmatch.push(arrtoque[1]);
					arrmatch.push(arrtoque[2]);
// ***************************************************************************************************					
					nummatches++;					
					//alert("MATCH .... entre ... " + nant + " ..y.. " + n);
				}else{
					//alert("NOT NOT NOT MATCH .... entre ... " + nant + " ..y.. " + n);
					PlaySound(strsound);
					clearTimeout(flgtout1);
					flgtout1=setTimeout( "ocultar(arrtoque[1])", 500);
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
		}
	}
// "SALE DEL TOQUE"
	clearTimeout(flgtout);
	flgtout=setTimeout( "reactivartodo()", 1000);	
	if (nummatches == ntarj/2) {
		nummatches=0;
		clearTimeout(flgtout1);
		flgtout1=setTimeout( "gofinjuego();", 2000);
		return;
	}	
}	// end function clickimg

// *** functions para manejar display y animacion 
function mostrar(n) {
var x=n;
$("#bk" + n).hide("drop", { direction: "down"  }, 500);
$("#sg" + n).show("puff", {   }, 500);
flgtout=setTimeout( "mostrar(x)", 1000);
}
 
function ocultar(n) {

$("#sg" + n).hide("drop", { direction: "down"  }, 500);
$("#bk" + n).show("puff", {   }, 500);

}
		
function desaparecer(n) {
flgtout=setTimeout( "reactivartodo()", 500);
	$("#sg" + n).remove();
	$("#bk" + n).remove();

}

function PlaySound(soundObj) {
var sound = document.getElementById(soundObj);
if (optaudio == 1  ||  optaudio == 3) {	
	if (sound) {
		sound.play();
	}
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
for (var i = 1; i < ntarj + 1; i++) {
	desactivar(i);
}
}

function reactivartodo() {

for (var i = 1; i < ntarj + 1; i++) {
	reactivar(i);
}
//  ****************   FALTA EXCEPTUAR LAS QUE HAN HECHO MATCH .... arrmatch

for(var x = 0; x < arrmatch.length; x++) {
	desactivar(arrmatch[x]);
}
flgtout=setTimeout( "reactivartodo()", 500);
}

function nada() {
   
}


