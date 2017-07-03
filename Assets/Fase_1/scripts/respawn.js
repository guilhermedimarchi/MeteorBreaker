#pragma strict

var meteoro: GameObject;
var nivelup: GameObject;
var distancia_meteoro: Vector3;
var tempo: float;
static var max_meteoro: int;
var nivel: int;
var dificuldade: int;
var aux: int;
static var meteoros_destruidos: int;
var mostra_nivel: GUIText;
var restante: GUIText;

function Start () {
max_meteoro = 0;
aux = 1;
nivel = 1;
dificuldade = 2;
tempo = 0;

}

function Update () {

tempo = tempo + 1*Time.deltaTime;
mostra_nivel.text = nivel.ToString();
restante.text = "Restam: " + (dificuldade-meteoros_destruidos).ToString();

if(tempo>5)
{
	 if(max_meteoro<dificuldade)
	 {		
	 
	 		if(aux==1)
	 		{
				distancia_meteoro.x = (planeta.distancia_planeta.x + (Random.value*3000)+30);
				distancia_meteoro.y = (planeta.distancia_planeta.y + (Random.value*3000)+30);
				distancia_meteoro.z = (planeta.distancia_planeta.z + (Random.value*3000)+30);
				aux = -1;
			}
			else if(aux==-1)
	 		{
				distancia_meteoro.x = (planeta.distancia_planeta.x + (Random.value*3000)+30)*-1;
				distancia_meteoro.y = (planeta.distancia_planeta.y + (Random.value*3000)+30)*-1;
				distancia_meteoro.z = (planeta.distancia_planeta.z + (Random.value*3000)+30)*-1;
				aux = 0;
			}
			else if(aux==0)
	 		{
				distancia_meteoro.x = (planeta.distancia_planeta.x + (Random.value*3000)+30);
				distancia_meteoro.y = (planeta.distancia_planeta.y + (Random.value*3000)+30)*-1;
				distancia_meteoro.z = (planeta.distancia_planeta.z + (Random.value*3000)+30);
				aux = 2;
			}
			else if(aux==2)
	 		{
				distancia_meteoro.x = (planeta.distancia_planeta.x + (Random.value*3000)+30)*-1;
				distancia_meteoro.y = (planeta.distancia_planeta.y + (Random.value*3000)+30);
				distancia_meteoro.z = (planeta.distancia_planeta.z + (Random.value*3000)+30)*-1;
				aux = 1;
			}
			
			Instantiate(meteoro, distancia_meteoro, transform.rotation);
			max_meteoro++;
	}
		tempo = 0;
}
		if(meteoros_destruidos==dificuldade)
		{
			nivel ++;
			dificuldade = dificuldade * 2;
			max_meteoro = 0;
			meteoros_destruidos = 0;
			inimigo.velocidade_translate += 900*Time.deltaTime;
			
			Instantiate(nivelup, new Vector3(0.31,0.67,0), transform.rotation);
			atirador.contar_municao = atirador.contar_municao + 10;
			atirador.contar_municao_secundario = atirador.contar_municao_secundario + 5;
			atirador.contar_municao_metralhadora = atirador.contar_municao_metralhadora + 20;
			atirador.contar_municao_atomica = atirador.contar_municao_atomica + 2;
		}
}