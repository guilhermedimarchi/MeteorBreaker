#pragma strict
var velocidade_tiro: int;
var aceleracao_tiro : int;
var tempo:float;

function Start () {

	velocidade_tiro = 20;
	tempo			= 0;
	aceleracao_tiro = 15;
}

function Update () {

		tempo += Time.deltaTime;
		
		if(tempo>15)
		{
			tempo = 0;
			Destroy(gameObject);	
		}
		
		transform.Translate(0,0, velocidade_tiro*-1*aceleracao_tiro*Time.deltaTime);
		
}function OnCollisionEnter(collision: Collision)
{
	Destroy(gameObject);
}