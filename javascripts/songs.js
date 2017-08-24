var songs = [];
songs[songs.length] = "Legs > by Z*ZTop on the album Eliminator";
songs[songs.length] = "The Logical Song > by Supertr@amp on the album Breakfast in America";
songs[songs.length] = "Another Brick in the Wall > by Pink Floyd on the album The Wall";
songs[songs.length] = "Welco(me to the Jungle > by Guns & Roses on the album Appetite for Destruction";
songs[songs.length] = "Ironi!c > by Alanis Moris*ette on the album Jagged Little Pill";

songs = songs; //Created songs array to preserve original songs array data.

songs.unshift("First - by The Arrays");//Adds song to beginning of array.
songs.push("Last - by The Arrays");//Adds song to end of array

//Remove characters * @ ( !
//Find ">" and replace with "-" using replace method
for(i=0; i<songs.length; i+=1) {
	songs[i] = songs[i]
				.replace("*", "")
				.replace("@", "")
				.replace("(", "")
				.replace("!", "")
				.replace(">", "-");
}

console.log("songs", songs);

//********* OUTPUT **********

for(var i = 0; i < songs.length; i+=1){ 
	var songInfo = document.getElementById("songInfoOut");
	songInfo.innerHTML += `<p>🎵  ${songs[i]}</p>`;
}