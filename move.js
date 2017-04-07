function highlight_my(piece){


avaible_zones = [];

// Highlight none
if(piece == "none"){
	for(var i = 0; i < mypieces.length; i++){
		mypieces[i].highlighted = false;
	}
	return false;
}

//Highlight Pawn Move
if(piece.type == "P"){
		if(piece.color == mycolor) {
			if(piece.pos[1] > 1 && isEmpty( piece.pos[0] + (piece.pos[1]-1) ) ){
				avaible_zones.push(piece.pos[0]+(piece.pos[1]-1));
				if(piece.pos[1] == 7 && isEmpty( piece.pos[0] + (piece.pos[1]-2) )){
					avaible_zones.push(piece.pos[0]+(piece.pos[1]-2));
				}		
			}
			if(piece.pos[1] > 1){
				if(piece.pos[0] != "A" && isEnemy( abc[ abc.indexOf(piece.pos[0]) -1 ] + (piece.pos[1]-1) ))
				{
					avaible_zones.push(abc[abc.indexOf(piece.pos[0])-1]+(piece.pos[1]-1));
				}
				if(piece.pos[0] != "H" && isEnemy( abc[ abc.indexOf(piece.pos[0]) +1 ] + (piece.pos[1]-1) ))
				{
					avaible_zones.push(abc[abc.indexOf(piece.pos[0])+1]+(piece.pos[1]-1));
				}
			}
		}
		piece.highlighted = true;
		return true;
}
}
