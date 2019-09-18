 aavvpp ... https://dl.dropboxusercontent.com/u/5203653/aavvppmatch/index.html
function clickimg(n) {
//if(numTotalClicks==0) gameTimer = setInterval(incTime,1000);
numTotalClicks++;
ntoque=ntoque + 1;
tact=arrazar[n];
alert("UN TOQUE... ntoque=" + ntoque); 

	if (ntoque == 1) {			// if (ntoque < 2  &&  n != nant)
		//  PRIMER TOQUE
		// *******************************************
		alert("PRIMER TOQUE... ntoque=" + ntoque + " ..compara ... " + (n == nant) );
		ocultar1y2();
		arrtoque[1] = n;
		mostrar(arrtoque[1]);
		t1=tact;
		t2=0;
		tact=0;
		nant=n;
	}else{
		//  SEGUNDO TOQUE
		
			if ( n != nant ) {		// para controlar repeticion del Primer toque
				alert("SEGUNDO TOQUE... ntoque=" + ntoque + " ..compara ... " + (n == nant) );
				arrtoque[2] = n;
				mostrar(arrtoque[2]);
				t2=tact;
				if (t1 == t2)  {
					desaparecer(arrtoque[1]);
					desaparecer(arrtoque[2]);
					nummatches++;
					if (nummatches == numfilas[catact] * numcols[catact]/2) {
						nummatches=0;
						//  ***************************************************PlaySound("ganador");
						//clearInterval(gameTimer);
						alert("JUEGO TERMINADO");
						return;
					}
					//alert("MATCH .... entre ... " + nant + " ..y.. " + n);
				}else{
					//alert("NOT NOT NOT MATCH .... entre ... " + nant + " ..y.. " + n);
					$("#c3").text("a ocultar n=" + n + " y nant=" + nant);
					ocultar(arrtoque[1]);
					ocultar(arrtoque[2]);
				}	
			nant=0;	
			ntoque=0;
			t1=0;
			t2=0;
			tact=0;
		}else{  // se repitio el primer toque  .. es decir n==nant
			ntoque=1;
			alert(" AHORA EL TOQUE ES .... " + ntoque);
		}
	}
alert("SALE DEL TOQUE... ntoque=" + ntoque + "  ....... y nant=" + nant);
//debugger;		
}	// end function clickimg

// *** functions para manejar display y animacion 
function mostrar(n) {
var strsound = "sound" + arrazar[n];
PlaySound(strsound);

$("#c1").text("mostrando n=" + n + " arrazar[n]=" + arrazar[n]);
$("#sg" + n).show();
$("#bk" + n).hide();
return;
$("#bk" + n).flip({
	direction:'lr', 
	//direction:flipAnim,
    speed: 1500,
    content: $("#sg" + n),
    onEnd: function(){
        $("#bk" + n).html(arr_bk_html[n]);
    }
});
//setTimeout(function(){ }, 1000);

$("#sg" + n).show();
$("#bk" + n).hide();
	
//alert("bk=" + arr_bk_html[n]); 	
//alert("sg=" + arr_sg_html[n]); 		  
}

function ocultar(n) {
$("#c1").text("ocultando n=" + n + " arrazar[n]=" + arrazar[n]);

$("#sg" + n).hide();
$("#bk" + n).show();
return;

//alert("ocultando .. " + n + " sg=" + arr_sg_html[n]); 
$("#sg" + n).flip({
	direction:'lr', 
	//direction:flipAnim,
    speed: 1500,
    content: $("#bk" + n),
    onEnd: function(){
        $("#sg" + n).html(arr_sg_html[n]);
    }
});
//setTimeout(function(){ }, 1000);
$("#sg" + n).hide();
$("#bk" + n).show();
//alert("sale de ocultar");
}
		
function desaparecer(n) {
	$("#sg" + n).remove();
	$("#bk" + n).remove();
return;
//setTimeout(function(){ }, 1000);	
}


showing
case 'flip':
              el.flip({
                direction:opts.flipAnim,
                speed: opts.animSpeed,
                content: el.children('div.quizy-mg-item-bottom'),
                color:'#777',
                onEnd: function(){
                  addInHTML(el,id);
                }
              });
            break;
			
hiding 
 case 'flip':
              setTimeout( function(){
               el.revertFlip();
              }, delayShow);
              setTimeout( function(){
               removeInHTML(el);
              }, delayShow+opts.animSpeed*4);
            break;		

 /**** plugin parameters *****************************************************
  *****************************************************************************
  
    * itemWidth:         The width of the card in pixels.
    * itemHeight:        The width of the card in pixels.
                         Don't forget to change the style of the element in
                         the CSS if you change one of this two paremeters
    * itemsMargin:       The right and bottom margin of the element defining
                         the margin between the cards.
    * colCount:          In how many columns the plugin should arrange the cards
    * animType:          The type of animation used when a card is clicked. 
                         Can be 'flip', 'fade' and 'scroll'.
    * flipAnim:          The direction of the flip animation, if chosen in the
                         previous property.Possible values: 'tb', 'bt', 'lr', 'rl'
    * animSpeed:         How fast the card turning animation should be (in ms)
    * openDelay:         For how long the card should stay turned (in ms)
    * resultIcons:       After turning each to pairs the plugin shows an icon
                         if it was correct or not. Can be true or false
    * gameSummary:       At the end of the game the plugin shows a short game
                         summary - how many clicks the user has done and how 
                         much time it took to complete the game. 
                         Can be true or false
    * textSummaryTitle:  The title of the summary text at the end of the game
    * textSummaryClicks: The same as the previous but used for the text 
                         indicating the clicks done.
    * textSummaryTime:   The same as the previous but used for the text 
                         indicating the time to complete.
    * replayButton:      At the end of the game the at the bottom of the summary
                         popup a replay button can be shown
                         Can be true or false
    * replayButtonText:  The text to appear on the replay button
    * closeButtonText:   The text to appear on the close button
    * onFinishCall:      The call back function
                         It sends two arguments: clicks and time.
                         
    ***** METHODS ************************************************************
    
    * init:             initializes the plug
    * destroy:          destroys the plug
    * reset:            resets the game
                         
  ****************************************************************************/			
  
  Search "delayShow" (7 hits in 1 file)
  C:\Temp\quizy-memorygame-master\quizy-memorygame-master\js\jquery.quizymemorygame.js (7 hits)
	Line 76:         var delayShow = opts.openDelay;
	Line 149:               }, delayShow+opts.animSpeed+250);
	Line 199:               $('#'+topId).delay(delayShow).fadeIn(opts.animSpeed, function(){
	Line 206:               }, delayShow);
	Line 209:               }, delayShow+opts.animSpeed*4);
	Line 212:               $('#'+topId).delay(delayShow).
	Line 225:             var time = Math.round(delayShow/3);
	
	  C:\Temp\quizy-memorygame-master\quizy-memorygame-master\js\jquery.quizymemorygame.js (3 hits)
	Line 76:         var delayShow = opts.openDelay;
	Line 414:     * openDelay:         For how long the card should stay turned (in ms)
	Line 442:   $.fn.quizyMemoryGame.defaults = {
	itemWidth: 156, 
	itemHeight: 156, 
	itemsMargin:10, 
	colCount:4, 
	animType:'scroll', 
	animSpeed:250, 
	openDelay:2500, 
	flipAnim:'rl', 
	resultIcons:true, 
	gameSummary:true, 
	textSummaryTitle:'Your game summary', 
	replayButton:true, 
	replayButtonText:'Replay', 
	closeButtonText:'Close', 
	textSummaryClicks:'clicks', 
	textSummaryTime:'seconds', 
	onFinishCall:''
	}
	
//shows and hids the correct/wrong message after an action
        var showResIcon = function(type){
          if(opts.resultIcons){
            var el;
            var time = Math.round(delayShow/3);
            if(type=='wrong'){
              el = $('div#quizy-mg-msgwrong');
            }else if(type=='correct'){
              el = $('div#quizy-mg-msgcorrect');
            }
            el.delay(time).fadeIn(time/2).delay(time/2).hide("explode", time/2);
          }
        }

setTimeout( function(){
               el.revertFlip();
              }, delayShow);
              setTimeout( function(){
               removeInHTML(el);
              }, delayShow+opts.animSpeed*4);
			  
match.js

					setTimeout( function(){
						ocultar(arrtoque[1]);
						}, 1000);
					setTimeout( function(){
						ocultar(arrtoque[2]);
						}, 1000);
						
function  incTime(){
    numSeconds ++;
}

function ocultar1y2() {
    $("#sg" + arrtoque[1]).hide();
	$("#bk" + arrtoque[1]).hide();
	$("#sg" + arrtoque[2]).hide();
	$("#bk" + arrtoque[2]).hide();

	$("#bk" + arrtoque[1]).show();
	$("#bk" + arrtoque[2]).show();
}
function restaurehtml(id, n) {
$("#bk" + n).html(inHtml[n]);    

flgtout=setTimeout( "reactivartodo()", 1000);


Una vez que se activa el temporizador simple mediante el método setTimeout( ) el navegador lanzará la llamada a la función temporizada cuando transcurra el tiempo marcado, pero si queremos evitar esta llamada podemos hacerlo usando el método clearTimeout(tempor) cuyo argumento es el valor devuelto por la función que activó el temporizador. Por ejemplo el ejemplo siguiente se usa para actualizar un contador que se incrementa cada segundo, pero podemos detener el proceso mediante un botón que llame a este método, esto podría servir para cronometrar el tiempo que un visitante tarda en encontrar un elemento en la página:
var veces =0;
function contar(){
contar++;
tempo = setTimeout("contar()", 1000);
}
tempo = setTimeout("contar()", 1000);
function parar(){
clearTimeout(tempo);
alert("Has tardado "+contar+" segundos");
}

En la página podríamos colocar un botón que llame a esta función parar

<input type="button" name="Button" 
value="Parar" onclick="parar()">
Al pulsar el botón se detiene el contador y aparece un mensaje indicando el tiempo que tardó en pulsar el botón, por supuesto es un valor aproximado.
//debugger;