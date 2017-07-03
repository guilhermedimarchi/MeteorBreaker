#pragma strict

var tempo: float;

function Start () {
tempo = 0;
}

function Update () {

	tempo = tempo + 1*Time.deltaTime;
	
	if(tempo>3)
		Destroy(gameObject);
	

}