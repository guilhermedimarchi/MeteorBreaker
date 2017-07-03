#pragma strict

function OnGUI() {

	if (GUI.Button (Rect (480,480,100,30), "Menu Principal")) {
		Application.LoadLevel (0);
	}
	
}