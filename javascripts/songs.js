//QUESTIONS
// [ ] line 23:  why does for loop need to count down instead of up? Count down vs Up?
	//why does adding "=" make line 23 undefined?


var songs = [];

songs[songs.length] = "Legs > by Z*ZTop on the album Eliminator";
songs[songs.length] = "The Logical Song > by Supertr@amp on the album Breakfast in America";
songs[songs.length] = "Another Brick in the Wall > by Pink Floyd on the album The Wall";
songs[songs.length] = "Welco(me to the Jungle > by Guns & Roses on the album Appetite for Destruction";
songs[songs.length] = "Ironi!c > by Alanis Moris*ette on the album Jagged Little Pill";

songs.unshift("Array's First Song - by The Arrays");//Adds song to beginning of array.
songs.push("Array's Last Song - by the Arrays");//Adds song to end of array

//Remove characters * @ ( !
//use indexOf, splice

// Find and remove item from an array
for(var i = songs.length-1; i >= 0; i--){  // STEP 1
    if(songs[i] == '@'){              // STEP 2
		console.log("splice @   ", songs[i]);
        songs.splice(i,1);                 // STEP 3
    }
}



//@@@@@@@@@@@@@@
// for (i=0; i<songs.length; i+=1) {
// 	var x = songs.indexOf("*");
// 			if(x != -1) {
// 				songs.splice(x, 1);
// 		}
// }


//Find ">" and replace with "-" using replace method
// for (i = songs.length-1; i >= 0; i-=1){
// for (i=0; i<songs.length; i+=1) {
// 			songs[i] = songs[i].replace(">", "-");
// 			console.log("Replaced (>):  ", songs[i]);
// }



	
