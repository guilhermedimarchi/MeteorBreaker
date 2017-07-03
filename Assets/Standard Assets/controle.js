static var Speed 	= 0;
var MaxSpeed 		= 5000;
var MinSpeed 		= 0;
var Torque 			= 50;
var Gravity 		= 0;
var Aceleracao 		= 15;
static var vidaNave = 100;


function Update () {
	
	/// DESTRUIÇÃO DA NAVE
	if(vidaNave <= 0){
	
		Destroy(gameObject);
	
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