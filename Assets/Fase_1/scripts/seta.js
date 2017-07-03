#pragma strict



var alcance: int;
var inimigo: GameObject[];
var inimigomarcado: GameObject;
var rotacao: Quaternion;

var mira: Transform;

var distancia: float;
var auxinimigo:GameObject;
var achouinimigo:boolean;


function Start () {

alcance = 5000;
}

function Update () {

	inimigo = GameObject.FindGameObjectsWithTag("Inimigo");
	achouinimigo = false;
	
	for(inimigomarcado in inimigo)
	{
		distancia = Vector3.Distance(inimigomarcado.transform.position, planeta.distancia_planeta);
		
		if(distancia<alcance)
		{
			auxinimigo = inimigomarcado;
			achouinimigo=true;
			break;
		}
	}
	
	if(achouinimigo)
	{
		//rotacao = Quaternion.LookRotation(auxinimigo.transform.position - transform.position);
		transform.LookAt(auxinimigo.transform.position);
		
		/*
		mira.eulerAngles.x = rotacao.eulerAngles.x;
		mira.eulerAngles.y = rotacao.eulerAngles.y;
		mira.eulerAngles.z = rotacao.eulerAngles.z;*/
	}


	
	if(controle.tempo > 10){
	
		Destroy(gameObject);

	}
	
	if(controle.distancia_ate_terra < 500){
		
		Destroy(gameObject);
	
	}	
	
	

}