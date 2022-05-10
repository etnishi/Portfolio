class Game {
    constructor(location_start, rooms) {
        this.location = location_start;
        this.rooms = rooms;
		this.inventory = []; //
    }

    parse(command) {
		
        var words = command.toUpperCase();
        var objects = this.rooms[this.location].objects;
        var target = "";
        for (var i = 0; i < objects.length; i++) {
            if (words.includes(objects[i].obj_name.toUpperCase())) {
                target = objects[i]
                break;
            }
        }
		if(target == ""){ //
			for (var i = 0; i < this.inventory.length; i++) { //
            if (words.includes(this.inventory[i].obj_name.toUpperCase())) { //
                target = this.inventory[i] //
                break; //
				} //
			} //
		} //
        if (target != "") {
            var verbs = target.obj_actions;
            var action = "";
            for (var i = 0; i < verbs.length; i++) {
                if (words.includes(verbs[i].toUpperCase())) {
                    action = verbs[i]
                    break;
                }
            }
			//console.log(target);
			
            switch (action) {
                case "ENTER":
					if(target.obj_status != "locked"){
						this.location = target.obj_destination;
						var output = "<br> -------------------------------------------- <br>  You enter the " + target.obj_name + " and emerge in the " + this.rooms[target.obj_destination].name + ". ";
						output += this.rooms[target.obj_destination].description + " ";
						output += this.listRoomObjects();
					}else{
						if(target.obj_status)
						return "The " + target.obj_name + " is locked."
					}
                    break;
                case "LOOK":
					if(target.obj_init_desc != null){
						var output = "You look at the " + target.obj_name + ". ";
						output += target.obj_init_desc;
						target.obj_init_desc = null;
					}else{
						var output = "You look at the " + target.obj_name + ". ";
						output += target.obj_description;
					}
                    break;
				case "MAP":
                    var output = "You open the " + target.obj_name + ". ";
					var mp = document.createElement("img");
					mp.setAttribute("src", target.obj_map);
					document.getElementById("map").innerHTML = '';
					document.getElementById("map").appendChild(mp);
					
                    break;
				case "BREAK":
					if ( this.getKeyObj(target.obj_key) != -1){
						var output = "You use the " + target.obj_name + ". ";
						target.obj_status = "unlocked";
						output += "You break a hole in " + target.obj_name;
					}else{
						output += "you don't have anything heavy enough to break this with."
					}
					break;
				case "UNLOCK":
					if(target.obj_key != null){
						if( this.getKeyObj(target.obj_key) != -1){
							target.obj_status = "unlocked";
							return "You unlock the " + target.obj_name + ". ";
						}else{
							return "You don't have the right key. This door uses a " + target.obj_key + " level key.";
						}
					}else if(target.obj_special != null){
						this.rooms.MainFloor.objects[1].obj_status = "unlocked";
						return "The main doors are now unlicked";
					}else{
						return "This door has no visible way to unlock it.";
					}
					break;
				case "TAKE": //
					for (var i = 0; i < objects.length; i++) { //
							if(target == objects[i]){ //
								var output = "You take the " + target.obj_name + ". "; //
								this.inventory.push(target); //
								this.rooms[this.location].objects.splice(i, 1); //
								return output; //
							} //
					} //
                default:
                    return "You are unsure of what to do.";
            }
            return output
        }
		if(target == ""){ //
			var verbs_user = ["INVENTORY", "INV"] //
			for (var i = 0; i < verbs_user.length; i++) { //
                if (words.includes(verbs_user[i].toUpperCase())) { //
                    action = verbs_user[i] //
                    break; //
                } //
            } //
			if(action != ""){ //
				switch (action) { //
				case "INVENTORY": //
                    return this.listInventoryObjects(); //
                    break; //
				case "INV": //
                    return this.listInventoryObjects(); //
                    break; //
                default: //
                    return this.listRoomObjects(); //
				} //
			}else{ //
				return "You are unsure of what to do."; //
			} //
		} //
	}

    listRoomObjects() {
        var current_location = this.location;
        var rooms = this.rooms;
        var output = "<br> ----------------------------------- <br> The room contains a ";
        for (var i = 0; i < rooms[current_location].objects.length; i++) {
			if(rooms[current_location].objects[i].obj_hidden != "hidden"){
				output += rooms[current_location].objects[i].obj_name;
				if (i == rooms[current_location].objects.length - 2) {
					output += ", and a ";
				} else if (i < rooms[current_location].objects.length - 2) {
					output += ", a ";
				} else {
					output += ".";
				}
			}
        }
        return output;
    }
	
	getKeyObj(keyType) {
		var output = -1;
		for (var i = 0; i < this.inventory.length; i++){ //
            if (this.inventory[i].obj_key == keyType) { //
                output = i;
				break;
            }
		}
		//console.log(output);
		return output;
	}
	
	
	listInventoryObjects() { //
		var output = "<br> ---------------- <br> Your inventory contains a "; //
		for (var i = 0; i < this.inventory.length; i++){ //
			output += this.inventory[i].obj_name; //
            if (i == this.inventory.length - 2) { //
                output += ", and a "; //
            } else if (i < this.inventory.length - 2) { //
                output += ", a "; //
            } else { //
                output += "."; //
            } //
		} //
		return output; //
	} //
}

gameobj = new Game("storageRoom", rooms)
document.getElementById("log").innerHTML += "<br>" + "Intro text";
document.getElementById("log").innerHTML += "<br>" + gameobj.listRoomObjects();
const node = document.getElementById("playerInput");
node.addEventListener('keyup', ({
    key
}) => {
    if (key === "Enter") {
        document.getElementById("log").innerHTML += "<br>" + gameobj.parse(node.value);
        node.value = "";
    }
})