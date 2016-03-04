function save(what,param2) {
	if(what=="local") {
		localStorage.chickensgamesave=save("string");
		$("#mutenotif").html("Game saved").animate({"bottom":"-30px"},1000);
		setTimeout(function() {
			$("#mutenotif").animate({"bottom":"-82px"},1000);
		},2000);
	}
	else if(what=="load") {
		save("splitter");
	}
	else if(what=="export") {
		prompt("Here is your game export code:",save("string"));
	}
	else if(what=="import") {
		code=prompt("Import your game code (game will be save after you import)","");
		if(code!=null && code!="") {
			save("splitter",code);
			save("local");
			window.location=self.location;
		}
	}
	else if(what=="autosave") {
		if(autosave) {
			autosave=false;
			if(typeof autosaveinterval !== "undefined")clearInterval(autosaveinterval);
			alert('Autosave disabled');
		}
		else {
			autosave=true;
			autosaveinterval=setInterval(function() {
				autosavetime--;
				if(autosavetime==0) {
					autosavetime=60;
					save("local");
				}
				$("#autosave-cd").html(autosavetime);
			},1000);
			alert('Autosave enabled');
		}
	}
	else if(what=="string") {
		return btoa(items[0].owned+"|"+items[1].owned+"|"+items[2].owned);
		update();
	}
	else if(what=="splitter") {
	
		if(typeof param2 === "undefined") {
			tehcodez=localStorage.chickensgamesave;
		}
		else {
			tehcodez=param2;
		}
		
		tehcodez=atob(tehcodez).split("|");
		
		dirt = parseFloat(tehcodez[0]);
		
		if(breedinterval<1500) {
			breedinterval+=1000;
		}
		
		update();

	}
}
