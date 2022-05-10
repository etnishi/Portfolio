rooms = {
    "storageRoom": {
        "name": "Storage Room",
        "description": "A large room filled with many storage boxes and pallets.",
        "objects": [{
                "obj_name": "Broken Shutter Door",
                "obj_description": "A large shutter door with a hole in it that leads to the Receiving Area. You could ENTER here.",
                "obj_actions": ["LOOK", "ENTER"],
                "obj_destination": "receiving"
            },
			{
                "obj_name": "Hall Door",
                "obj_description": "A door that leads to a hallway.",
				"obj_status": "locked",
				"obj_key": "L1",
                "obj_actions": ["LOOK", "ENTER", "UNLOCK"],
                "obj_destination": "stairB1"
            },
            {
                "obj_name": "Broken Container",
                "obj_init_desc": "The broken container that you were in. It appears that the rack it was on broke and the container fell over.",
				"obj_description": "It seems like you were the only thing left in the container",
                "obj_actions": ["LOOK"]
            },
			{
				"obj_name": "Service Elevator",
				"obj_init_desc": "This is the main service elevator. You could use this move to other floors. However, it appears you need individual keys to go to each floor",
				"obj_description": "This is the main service elevator. If you have the right key you could use this to quickly move between floors",
				"obj_status": "locked",
				"obj_key": "L1",
                "obj_actions": ["LOOK", "ENTER", "UNLOCK"],
                "obj_destination": "elevator"
			},
			{
                "obj_name": "B1 Map",
				"obj_init_desc": "A portable map you could TAKE showing the B1 level of this facility. You can look at maps using the MAP command",
				"obj_description": "A MAP showing the B1 level of this facility.",
				"obj_map":"MapB1.png",
                "obj_actions": ["LOOK", "MAP", "TAKE"]
            },
			{
                "obj_name": "Storage Container",
                "obj_description": "A locked storage container. You could ENTER this if you had the key.",
				"obj_status": "locked",
				"obj_key": "L2",
                "obj_actions": ["LOOK", "ENTER", "UNLOCK"],
                "obj_destination": "PrivateContainer"
            }
        ]
    },
	"PrivateContainer":{
		"name": "Locked storage container",
        "description": "A locked storage area used by seinior security staff.",
        "objects": [
		{
			"obj_name": "L3 Key",
			"obj_init_desc": "This is a key card that belonged to a senior security officer. It can be used to UNLOCK L3 doors.",
            "obj_description": "This is a key that can UNLOCK L3 Doors",
			"obj_key": "L3",
            "obj_actions": ["LOOK", "TAKE"]
		},
		{
			"obj_name": "Exit",
			"obj_description": "Back to the storage room.",
            "obj_actions": ["LOOK", "ENTER"],
            "obj_destination": "storageRoom"
		}]
	},
	"elevator":{
		"name": "Service Elevator",
        "description": "An elevator designed to lift pallets to other floors of the building.",
        "objects": [{
			"obj_name": "B1",
			"obj_description": "This takes you to the Basement level 1.",
            "obj_actions": ["LOOK", "ENTER"],
            "obj_destination": "storageRoom"
		},
		{
			"obj_name": "Hallway Left",
			"obj_description": "Left Side of the hallway",
			"obj_status": "locked",
			"obj_key": "L2",
            "obj_actions": ["LOOK", "ENTER", "UNLOCK"],
			"obj_destination": "HallwayL"
		},
		{
			"obj_name": "MainFloor",
			"obj_description": "Through access to Main Floor",
			"obj_status": "locked",
			"obj_key": "L2",
            "obj_actions": ["LOOK", "ENTER", "UNLOCK"],
			"obj_destination": "MainFloor"
		}]
	},
    "receiving": {
        "name": "Receiving Area",
        "description": "This is the main recieving area of the complex.",
        "objects": [{
            "obj_name": "Broken Shutter Door",
            "obj_description": "A large shutter door with a hole in it that leads to the Storage Room.",
            "obj_actions": ["LOOK", "ENTER"],
            "obj_destination": "storageRoom"
        },
		{
            "obj_name": "Security Door",
            "obj_description": "A door leading to the security office. You notice that the nearby window is damaged",
			"obj_status": "locked",
			"obj_key": "L1",
            "obj_actions": ["LOOK", "ENTER", "UNLOCK"],
            "obj_destination": "security"
        },
		{
            "obj_name": "window",
			"obj_init_desc": "A weak looking window leading to the security office. On closer inspection you could use a heavy object to BREAK it",
            "obj_description": "A weak window. You could use a heavy object to BREAK it",
			"obj_status": "locked",
			"obj_key": "wrench",
			"obj_hidden":"hidden",
            "obj_actions": ["LOOK", "ENTER", "BREAK"],
            "obj_destination": "security"
        },
		{
			"obj_name": "open",
			"obj_description": "An open storage container containing various equipment. Of note is a HEAVY looking Wrench you think you can take with you.",
			"obj_hidden": "hidden",
            "obj_actions": ["LOOK"]
		},
		{
			"obj_name": "open container",
			"obj_description": "An open storage container containing various equipment. Of note is a HEAVY looking wrench you think you can take with you.",
			"obj_hidden": "hidden",
            "obj_actions": ["LOOK"]
		},
		{
			"obj_name": "Wrench",
			"obj_hidden": "hidden",
			"obj_key": "wrench",
			"obj_init_desc":"A heavy monkey wrench intended for plumbing maintenence.It could be used to BREAK FRAGILE things",
            "obj_description": "A heavy wrench that can be used to BREAK things",
            "obj_actions": ["LOOK", "TAKE"]
		},
		{
            "obj_name": "Storage Containers",
			"obj_description": "An assortment of containers similar to the containers stored in the other room. There is one Open Container",
            "obj_actions": ["LOOK"]
        }]
    },
	"security":{
		"name": "Security Room",
        "description": "A small room that was used to monitor this floor.",
        "objects": [{
            "obj_name": "Security Door",
            "obj_description": "A door leading to the Receiving Area",
			"obj_status": "locked",
			"obj_key": "L1",
            "obj_actions": ["LOOK", "ENTER", "UNLOCK"],
            "obj_destination": "receiving"
        },
		{
            "obj_name": "Hall Door",
            "obj_description": "A door leading to the hallway",
			"obj_status": "locked",
			"obj_key": "L1",
            "obj_actions": ["LOOK", "ENTER", "UNLOCK"],
            "obj_destination": "stairB1"
        },
		{
			"obj_name": "L1 Key",
			"obj_init_desc": "This is a key card that belonged to an absent security officer. It can be used to UNLOCK L1 doors.",
            "obj_description": "This is a key that can UNLOCK L1 Doors",
			"obj_hidden": "hidden",
			"obj_key": "L1",
            "obj_actions": ["LOOK", "TAKE"]
		},
		{
			"obj_name": "Security Desk",
			"obj_init_desc": "A desk with various monitors showing security camera footage of the Receiving Room, Storage Room and the hallway. You notice a L1 Key on the desk",
			"obj_description": "A desk with various monitors showing security camera footage.",
            "obj_actions": ["LOOK"]
		}]
	},
	"stairB1":{
		"name": "B1 Hallway",
        "description": "A hallway connecting most of the B1 rooms to a staircase leading to the first floor.",
        "objects": [{
            "obj_name": "security Door",
            "obj_description": "A door leading to the hallway",
			"obj_status": "locked",
			"obj_key": "L1",
            "obj_actions": ["LOOK", "ENTER", "UNLOCK"],
            "obj_destination": "security"
        },
		{
            "obj_name": "Storage Door",
            "obj_description": "A door that leads to a hallway.",
			"obj_status": "locked",
			"obj_key": "L1",
            "obj_actions": ["LOOK", "ENTER", "UNLOCK"],
            "obj_destination": "storageRoom"
        },
		{
			"obj_name": "B1 Stairs",
			"obj_description": "Stairs leading to the ground floor",
			"obj_actions": ["LOOK", "ENTER"],
			"obj_destination": "stairG"
		}]
	},
	"stairG":{
		"name": "Ground floor stairwell",
        "description": "A stairway connecting B1 to the first floor.",
        "objects": [{
			"obj_name": "B1 Stairs",
			"obj_description": "Stairs leading to B1",
			"obj_actions": ["LOOK", "ENTER"],
			"obj_destination": "stairB1"
		},
		{
			"obj_name": "Hallway Left",
			"obj_description": "Left Side of the hallway.",
			"obj_actions": ["LOOK", "ENTER"],
			"obj_destination": "HallwayL"
		},
		{
			"obj_name": "Hallway Right",
			"obj_description": "Right Side of the hallway.",
			"obj_actions": ["LOOK", "ENTER"],
			"obj_destination": "HallwayR"
		}]
	},
	"HallwayL":{
		"name": "Ground Floor Hallway Left",
		"description": "This hallway connects all rooms on the left side of the first floor.",
		"objects":[{
			"obj_name": "Ground Stairs",
			"obj_description": "Stairs leading to B1",
			"obj_actions": ["LOOK", "ENTER"],
			"obj_destination": "stairG"
		},
		{
			"obj_name": "Hallway Right",
			"obj_description": "Right Side of the hallway",
			"obj_actions": ["LOOK", "ENTER"],
			"obj_destination": "HallwayR"
		},
		{
			"obj_name": "Service Elevator",
			"obj_init_desc": "This is the main service elevator. You could use this move to other floors. However, it appears you need individual keys to go to each floor",
			"obj_description": "This is the main service elevator. If you have the right key you could use this to quickly move between floors",
			"obj_status": "locked",
			"obj_key": "L2",
            "obj_actions": ["LOOK", "ENTER", "UNLOCK"],
            "obj_destination": "elevator"
		},
		{
			"obj_name": "Chemistry Lab",
			"obj_description": "A Laboratory area with Chemistry Lab writen on the front.",
			"obj_actions": ["LOOK", "ENTER"],
			"obj_destination": "Lab1"
		},
		{
			"obj_name": "Freezer",
			"obj_description": "Large industrial sized door that leads to a walk in freezer.",
			"obj_actions": ["LOOK", "ENTER"],
			"obj_destination": "Freezer"
		},
		{
			"obj_name": "Mechanics Lab",
			"obj_description": "A Laboratory area with Mechanics Lab writen on the front.",
			"obj_status": "locked",
			"obj_key": "L2",
			"obj_actions": ["LOOK", "ENTER", "UNLOCK"],
			"obj_destination": "Lab2"
		}
		]
	},
	"Lab1":{
		"name": "Chemistry Lab",
		"description": "According to the sign on the door. This is the Chemistry lab.",
		"objects":[
			{
			"obj_name": "Hallway Left",
			"obj_description": "Left Side of the hallway",
			"obj_actions": ["LOOK", "ENTER"],
			"obj_destination": "HallwayL"
		},
		{
			"obj_name":"Lab Equipment",
			"obj_description":"Beakers and burners that have been left about. Some still have chemicals inside them. You should probably leave unknown chemicals alone.",
			"obj_actions":["LOOK"]
		}
		]
	},"Lab2":{
		"name": "Mechanics Lab",
		"description": "This is the Mechanics Lab.",
		"objects":[
			{
			"obj_name": "Hallway Left",
			"obj_description": "Left Side of the hallway",
			"obj_status": "locked",
			"obj_key": "L2",
			"obj_actions": ["LOOK", "ENTER", "UNLOCK"],
			"obj_destination": "HallwayL"
		},
		{
			"obj_name":"Lab Equipment",
			"obj_description":"null",
			"obj_actions":["LOOK"]
		},
		{
			"obj_name": "L2 Key",
			"obj_init_desc": "This is a key card that was lost by a scientist. It can be used to UNLOCK L2 doors.",
            "obj_description": "This is a key that can UNLOCK L2 Doors",
			"obj_hidden": "hidden",
			"obj_key": "L2",
            "obj_actions": ["LOOK", "TAKE"]
		},
		{
			"obj_name":"Lab Tables",
			"obj_init_desc":"Large tables useed to work on. There are several instruments used to takes various unknown kinds measurements.",
			"obj_description":"Upon closer inspection you notice what appears to be a L2 Key under the table.",
			"obj_actions":["LOOK"]
		}
		]
	},
	"Freezer":{
		"name": "Freezer Room",
		"description": "A walk in freezer used to store temperature sensitive materials",
		"objects":[
			{
			"obj_name": "Hallway Left",
			"obj_description": "Left Side of the hallway",
			"obj_actions": ["LOOK", "ENTER"],
			"obj_destination": "HallwayL"
		},
		{
			"obj_name": "Mechanics Lab",
			"obj_description": "Left Side of the hallway",
			"obj_actions": ["LOOK", "ENTER"],
			"obj_destination": "Lab2"
		},
		{
			"obj_name":"Chemicals",
			"obj_description":"Some unknown chemicals that are apparently temperature sensitive.",
			"obj_actions":["LOOK"]
		}
		]
	},
	"HallwayR":{
		"name": "Ground Floor Hallway Right",
		"description": " This hallway connects all rooms on the right side of the first floor",
		"objects":[{
			"obj_name": "Ground Stairs",
			"obj_description": "Stairs leading to B1",
			"obj_actions": ["LOOK", "ENTER"],
			"obj_destination": "stairG"
		},
		{
			"obj_name": "Hallway Left",
			"obj_description": "Left Side of the hallway",
			"obj_actions": ["LOOK", "ENTER"],
			"obj_destination": "HallwayL"
		},
		{
			"obj_name": "Conference Room",
			"obj_description": "A small conference room",
			"obj_actions": ["LOOK", "ENTER"],
			"obj_destination": "ConfR"
		},
		{
			"obj_name": "Storage Room",
			"obj_description": "A small storage room",
			"obj_actions": ["LOOK"]
		},
		{
			"obj_name": "Main Floor",
			"obj_description": "The main production floor",
			"obj_status": "locked",
			"obj_key": "L2",
			"obj_actions": ["LOOK", "ENTER", "UNLOCK"],
			"obj_destination": "MainFloor"
		},
		{
			"obj_name": "Security Office",
			"obj_description": "Left Side of the hallway",
			"obj_status": "locked",
			"obj_key": "L3",
			"obj_actions": ["LOOK", "ENTER", "UNLOCK"],
			"obj_destination": "SecurityO"
		}]
	},
	"SecurityO":{
		"name": "Ground Floor Security Office",
		"description": "This is the main security office for most of the facility.",
		"objects":[{
			"obj_name": "Hallway Right",
			"obj_description": "Right Side of the hallway",
			"obj_actions": ["LOOK", "ENTER"],
			"obj_destination": "HallwayR"
		},
		{
			"obj_name":"Security Terminal",
			"obj_init_description":"This terminal has access to the entire facility. You can disengage the lockdown from here once it is UNLOCKED.",
			"obj_description":"This terminal can disengage the lockdown once it is UNLOCKED.",
			"obj_special":"x",
			"obj_actions":["LOOK", "UNLOCK"]
		}]
	},
	"ConfR":{
		"name": "Ground Floor Conference Room",
		"description": "This is a conference room used by ground floor employees.",
		"objects":[{
			"obj_name": "Hallway Right",
			"obj_description": "Right Side of the hallway",
			"obj_actions": ["LOOK", "ENTER"],
			"obj_destination": "HallwayR"
		},
		{
			"obj_name":"memo",
			"obj_description":"The memo is addressed to a physicist for losing their L2 key card.",
			"obj_hidden":"hidden",
			"obj_actions":["LOOK"]
		},
		{
			"obj_name":"Papers",
			"obj_init_description":"An assortment of strewn about papers. You notice that one of them is a memo berating a junior level physicist for losing their L2 key card.",
			"obj_description":"The memo is addressed to a physicist for losing their L2 key card. You don't find anything else of note in the papers.",
			"obj_actions":["LOOK"]
		}
		]
	},
	"MainFloor":{
		"name": "Ground Floor factory Area",
		"description": "This is a Main Factory Floor of the facility. .",
		"objects":[{
			"obj_name": "Hallway Right",
			"obj_description": "Right Side of the hallway",
			"obj_actions": ["LOOK", "ENTER"],
			"obj_destination": "HallwayR"
		},
		{
			"obj_name": "Main Exit",
			"obj_description": "Right Side of the hallway",
			"obj_status": "locked",
			"obj_actions": ["LOOK", "ENTER", "UNLOCK"],
			"obj_destination": "Exit"
		},
		]
	},
	"Exit":{
		"name": "Ending",
		"description": "You got out! Thanks for playing.",
		"objects":[{
			"obj_name": "Closing Message",
			"obj_init_description": "Thanks for playing. This ended up being much shorter than I originally envisioned and the story was unfortunatly cut.",
			"obj_description":"originally, I wanted to have a mechanic where you had to combine chemicals in the freezer to get out but I wasn't able to get that to work.",
			"obj_actions": ["LOOK"]
		}
		]
	}
};









