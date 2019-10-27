
//codigo reactivo
const {fromEvent,interval} = require('rxjs');
const {map, takeUntil,switchMap}  = require('rxjs/operators');

let botonInicio = document.getElementById('btnInicio');
let botonFin = document.getElementById('btnFin');
let resultado = document.getElementById('salida');


let inicioConteo$ = fromEvent(botonInicio,'click');
let pararConteo$ = fromEvent(botonFin,'click');
let intervalo$ = interval(100).pipe(
    map(x=>x/10),
    takeUntil(pararConteo$));




inicioConteo$
    .pipe(
        switchMap(()=>intervalo$)
    ).subscribe(x=>resultado.innerHTML=x)



/*
//codigo javascript imperativo

let botonInicio = document.getElementById('btnInicio');
let botonFin = document.getElementById('btnFin');
let resultado = document.getElementById('salida');

let intervalo = null;
let contador= 0;

botonInicio.addEventListener('click',function(){
   intervalo = setInterval(function(){
        contador++;
         res = contador/10;
        resultado.innerHTML=res.toString();
    },100)
});

botonFin.addEventListener('click', function(){
    contador=0;
    clearInterval(intervalo);

});
 */