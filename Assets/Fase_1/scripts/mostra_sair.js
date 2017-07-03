#pragma strict

var controlePause: boolean;

function OnGUI() {

	if (GUI.Button (Rect (720,10,60,30), "Sair")) {
		Application.LoadLevel (0);
	}

	
	if(Input.GetKey(KeyCode.Escape)){
	
		if(controlePause != true){
		
			Time.timeScale = 0;

			controlePause = true;
		
		}else{
		
		
			//Time.timeScale = 1;

			//controlePause = false;
			
		}
		
	}

	
	

			
					
}