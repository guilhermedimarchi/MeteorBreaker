#pragma strict

function OnGUI() {

	if (GUI.Button (Rect (500,400,100,30), "Novo Jogo")) {
		Application.LoadLevel (1);

	}

	if (GUI.Button (Rect (500,440,100,30), "Créditos")) {
		Application.LoadLevel (2);
	}

	if (GUI.Button (Rect (500,480,100,30), "Sair")) {
		Application.Quit();
	}
	
}