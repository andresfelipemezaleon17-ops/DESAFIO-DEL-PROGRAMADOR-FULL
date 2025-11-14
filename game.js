const preguntas=[
{p:'¿Qué es hardware?',o:['La parte física','Programas','Internet'],c:0},
{p:'¿Qué es software?',o:['Películas','Programas','Teclado'],c:1},
{p:'¿Qué es la RAM?',o:['Memoria temporal','Memoria externa','Procesador'],c:0},
{p:'¿Qué es una IP?',o:['Un número de identificación','Un archivo','Un virus'],c:0},
{p:'¿Qué es un sistema operativo?',o:['Windows','Una silla','Cable'],c:0},
{p:'¿Qué es un servidor?',o:['Equipo que provee servicios','Un juego','Router casero'],c:0},
{p:'¿Qué es una red LAN?',o:['Red local','Red mundial','Red telefónica'],c:0},
{p:'¿Qué es un bit?',o:['Unidad mínima','Una app','Un clip'],c:0},
{p:'¿Qué es un CPU?',o:['Procesador','Pantalla','Cable'],c:0},
{p:'¿Qué es un archivo?',o:['Contenedor de datos','Un teclado','Un virus'],c:0},
{p:'¿Qué es la nube?',o:['Servidores remotos','El clima','Un chip'],c:0},
{p:'¿Qué es un router?',o:['Dispositivo de red','Teclado','Software'],c:0},
{p:'¿Qué es un backup?',o:['Copia de seguridad','Un sonido','Virus'],c:0},
{p:'¿Qué es un navegador?',o:['Programa web','Virus','Mouse'],c:0},
{p:'¿Qué es HTML?',o:['Lenguaje de marcado','Sistema operativo','Juego'],c:0},
];

let nivel=0, vidas=2, puntaje=0;
const robot=document.getElementById('robot');

function cargar(){
 document.getElementById('nivel').textContent='Nivel: '+(nivel+1)+' / '+preguntas.length;
 document.getElementById('vidas').textContent='Vidas: '+vidas;
 document.getElementById('puntaje').textContent='Puntaje: '+puntaje;
 let q=preguntas[nivel];
 document.getElementById('pregunta').textContent=q.p;
 let ops='';
 q.o.forEach((t,i)=>{ops+=`<button onclick="evaluar(${i})">${t}</button>`});
 document.getElementById('opciones').innerHTML=ops;
}

function evaluar(i){
 let q=preguntas[nivel];
 if(i===q.c){
   puntaje+=10;
   robot.style.left = (parseInt(robot.style.left||'20')+40)+'px';
 }else{
   vidas--;
   robot.style.left = (parseInt(robot.style.left||'20')-40)+'px';
   if(vidas<=0){fin();return;}
 }
 nivel++;
 if(nivel>=preguntas.length){fin();return;}
 cargar();
}

function fin(){
 document.getElementById('game').classList.add('hidden');
 document.getElementById('fin').classList.remove('hidden');
}

document.getElementById('startBtn').onclick=()=>{
 document.getElementById('menu').classList.add('hidden');
 document.getElementById('game').classList.remove('hidden');
 document.getElementById('bgm').volume=0.4;
 document.getElementById('bgm').play();
 cargar();
};