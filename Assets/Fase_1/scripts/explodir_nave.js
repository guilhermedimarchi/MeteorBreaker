#pragma strict
var explosao_nave: GameObject;
var som_explocao: AudioClip;

function Start () {

}

function Update () {


	if(controle.tempo > 10){
	
		Destroy(gameObject);
		Instantiate(explosao_nave, transform.position, transform.rotation);
		
		if(!audio.isPlaying){
			AudioSource.PlayClipAtPoint(som_explocao, transform.position);
		};
		
		
	};

	if(controle.distancia_ate_terra < 500){
		
		Destroy(gameObject);
		Instantiate(explosao_nave, transform.position, transform.rotation);
		
		if(!audio.isPlaying){
			AudioSource.PlayClipAtPoint(som_explocao, transform.position);
		};
	
	}
	
	
	
	
}