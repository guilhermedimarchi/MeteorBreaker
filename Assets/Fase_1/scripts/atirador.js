#pragma strict

var tiro:Transform;
var tiro_secundario:Transform;
var tiro_metralhadora:Transform;
var tiro_atomico:Transform;
static var contar_municao: int;
static var contar_municao_secundario: int;
static var contar_municao_metralhadora: int;
static var contar_municao_atomica: int;
var tempo: float;
var tempominimo: float;

var opcao_municao;

function Start () {

	contar_municao = 100;
	contar_municao_secundario = 30;
	contar_municao_metralhadora = 400;
	contar_municao_atomica = 10;
	opcao_municao = 1;
	tempominimo = 0.1;
}

function Update () {

	tempo = tempo + 1*Time.deltaTime;

	/// ESCOLHENDO O TIPO DE MUNIÇÃO
	if(Input.GetKeyDown(KeyCode.Alpha1)){
	
		opcao_municao = 1; 
		tempominimo = 0.5;
		
	}
	
	if(Input.GetKeyDown(KeyCode.Alpha2)){
	
		opcao_municao = 2;
		tempominimo = 1;
		
	}
	
	if(Input.GetKeyDown(KeyCode.Alpha3)){
	
		opcao_municao = 3;
		tempominimo = 2;
		
	}
	
	if(Input.GetKeyDown(KeyCode.Alpha4)){
	
		opcao_municao = 4;
		tempominimo = 2;
		
	}
	
	/// GATILHO PARA ATIRAR
	if(Input.GetKeyDown(KeyCode.Space)){
		
		if(tempo>=tempominimo){
		
			/// TIRO - Laser
			if(contar_municao_metralhadora > 0 && opcao_municao == 1){
			
				Instantiate(tiro_metralhadora,transform.position,transform.rotation);
				contar_municao_metralhadora = contar_municao_metralhadora - 1;
				tempo = 0;
	
			}
			
			/// TIRO - Foguete
			if(contar_municao > 0 && opcao_municao == 2){
			
				Instantiate(tiro,transform.position,transform.rotation);
				contar_municao = contar_municao - 1;
				tempo = 0;
				
			}
			
			/// TIRO - Míssil
			if(contar_municao_secundario > 0 && opcao_municao == 3){
			
				Instantiate(tiro_secundario,transform.position,transform.rotation);
				contar_municao_secundario = contar_municao_secundario - 1;
				tempo = 0;
				
			}
	
			/// TIRO - Atômico
			if(contar_municao_atomica > 0 && opcao_municao == 4){
			
				Instantiate(tiro_atomico,transform.position,transform.rotation);
				contar_municao_atomica = contar_municao_atomica - 1;
				tempo = 0;
				
			}
	
		}
	
	
	}

}
