#pragma strict

static var distancia_planeta: Vector3;
static var vida_planeta = 100;


function Start () {
 vida_planeta = 100;
}

function Update () {

distancia_planeta = transform.position;


}


function OnCollisionEnter(collision: Collision)
{
	
	if(collision.gameObject.tag == "Jogador")
	{
		controle.vidaNave -= 20;
	}

	if(collision.gameObject.tag == "Inimigo")
		vida_planeta -=50 ;
	
	
	if(vida_planeta<=0)
	{
		
		Destroy(gameObject);
		Application.LoadLevel (3);
		
	}
}
	
