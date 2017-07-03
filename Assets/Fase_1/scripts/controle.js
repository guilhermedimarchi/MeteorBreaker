static var Speed 	= 0;
var MaxSpeed 		= 5000;
var MinSpeed 		= 0;
var Torque 			= 50;
var Aceleracao 		= 15;
static var vidaNave = 100;
static var pontos 	= 0;
static var posicao_nave: Vector3;
var msg : GUIText;
static var distancia_ate_terra: float;
static var tempo: float = 0;
var aux: boolean;
var aux2: int;


function Start () {

Speed 	= 0;
MaxSpeed 		= 5000;
MinSpeed 		= 0;
Torque 			= 50;
Aceleracao 		= 15;
vidaNave = 100;
pontos 	= 0;

}

function Update () {
	
	posicao_nave = transform.position;
	
	distancia_ate_terra = Vector3.Distance(posicao_nave, planeta.distancia_planeta);
	
	if(aux==false)
	{
		tempo = 0;
		aux = true;
	}
	
	
	if(distancia_ate_terra < 700){
	
		aux = true;
		tempo = tempo + 1*Time.deltaTime;
		aux2 = tempo;
		msg.text = "Você está muito próximo da Terra! \nA nave irá explodir em 10 Segundos.\nTempo : " + aux2.ToString();
		
				
		/// Quanto atingir 10 seg mostra GAMER OVER
		if(tempo > 13){
			Application.LoadLevel (3);
		}
	}else{
			msg.text = " ";
			aux = false;		
	}

	if(distancia_ate_terra < 500){
	
		msg.text = "Você entrou na Atmosfera!";
		Speed 	 = 0;
	}
		
	/// DESTRUIÇÃO DA NAVE
	if(vidaNave <= 0){
	
		Destroy(gameObject);
		Application.LoadLevel (3);
	}
	
	/// TURBO
	if(Input.GetKey(KeyCode.T)){ 

		Speed = 5000;
	}

	/// BREAK
	if(Input.GetKey(KeyCode.B)){
		Speed = 0;
	}
	
	
if(Input.GetKey(KeyCode.UpArrow)) Speed = Speed + 1 * Aceleracao;
if(Input.GetKey(KeyCode.DownArrow)) Speed = Speed - 1 * Aceleracao;

if(Speed >= MaxSpeed) Speed = MaxSpeed;
if(Speed <= MinSpeed) Speed = MinSpeed;
constantForce.relativeForce.z = Speed * Time.deltaTime;
constantForce.relativeTorque.y = Input.GetAxis("Yaw") * Torque * Time.deltaTime;
constantForce.relativeTorque.z = Input.GetAxis("Horizontal") * Torque * Time.deltaTime;
constantForce.relativeTorque.x = Input.GetAxis("Vertical") * Torque * Time.deltaTime;


}