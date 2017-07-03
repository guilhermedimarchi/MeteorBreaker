#pragma strict


var distancia_planeta: Vector3;
static var velocidade_translate: float;
var tempo : float;
var explosao: GameObject;
var vida_meteoro = 10;



static var mostravidameteoro: int;


function Start () {

velocidade_translate = 10*Time.deltaTime;
vida_meteoro = 10;

}

function Update () {

mostravidameteoro = vida_meteoro;

distancia_planeta = planeta.distancia_planeta - transform.position;

if(distancia_planeta.x>0) 
	transform.Translate(velocidade_translate,0,0);
else 
	transform.Translate(-velocidade_translate,0,0);

if(distancia_planeta.y>0) 
	transform.Translate(0,velocidade_translate,0);
else 
	transform.Translate(0,-velocidade_translate,0);

if(distancia_planeta.z>0) 
	transform.Translate(0,0,velocidade_translate);
else 
	transform.Translate(0,0,-velocidade_translate);

}

function OnCollisionEnter(collision: Collision)
{
	
	if(collision.gameObject.tag == "bala1")
		vida_meteoro -=1 ;
	else if(collision.gameObject.tag == "bala2")
		vida_meteoro -=2 ;
	else if(collision.gameObject.tag == "bala5")
		vida_meteoro -=5 ;
	else if(collision.gameObject.tag == "bala10")
		vida_meteoro -=10 ;
	else if(collision.gameObject.tag == "Jogador")
	{
		Destroy(gameObject);
		Instantiate(explosao, transform.position, transform.rotation);
		controle.vidaNave -= 20;
		respawn.meteoros_destruidos++;
	}
	else if(collision.gameObject.tag == "Planeta")
	{
			Destroy(gameObject);
			Instantiate(explosao, transform.position, transform.rotation);
			respawn.meteoros_destruidos++;
	}
	if(vida_meteoro<=0)
	{
			Instantiate(explosao, transform.position, transform.rotation);
			Destroy(gameObject);
			controle.pontos +=10;
			respawn.meteoros_destruidos++;
	}
}