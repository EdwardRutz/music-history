#README

# Music History: 
- [X] Part 1, Ex #10, HTML, CSS
- [X] Part 2, Ex #17, Arrays
- [ ] Part 3, Ex #28, Event Listeners
- [ ] Part 4,
- [ ] Part 5,
- [ ] Part 6,
- [ ] Part 7,
- [ ] Part 8,
- [ ] Part 9,
- [ ] Part 10,
- [ ] Part 11,

***
***


This is the project that you will be working for your individual work throughout the entire front end course. Don't worry, you'll be building lots of other applications, but when you learn a new technique, library or language, you'll be cutting your teeth with it on Music History.

> This project is made up of several parts, and by creating a branch for each section you will be able to preserve the concepts you have learned on github as resources should you need them in the future. We have mentioned you should be commenting your code, right?


***
***


# Music History Part 3

## Prerequisites

> :warning: This exercise requires that you have completed the [Music History 2](../../1-the-static-web/exercises/SW_JS_MUSIC_HISTORY_02.md) exercise.

## Setup

```
git checkout -b version-3
```

## Requirements

Time to make Music History into a single page application. Before you begin please [review the sample code](https://github.com/nashville-software-school/front-end-milestones/blob/master/2-single-page-applications/resources/SP_JS_SINGLE_PAGE_APPLICATIONS.md) I provided in JavaScript 103 about building a simple SPA.

- [X] In the navigation bar, make sure you have two links labeled "List Music", and "Add Music".

- [X] Add a DOM element that contains some input fields for the user to enter in the name of a song, the artist for the song, and the album. 
	- You do not need to enclose them in a `<form>` element because we're not actually submitting this form anywhere.

- [X] Add a `<button>` element at the bottom of the input fields labeled "Add".
- VIEWS
	- The input fields and the add button make up the *Add Music View*.
		- The *Add Music View* should not appear when the user first visits your page. 
		- The song list with the corresponding filter form should be visible.
	- [ ] *List Music View*: The existing view - the combination of the filter form and the song list 
- [ ] When the user clicks on "Add Music" in the navigation bar, the *List Music View* should be hidden, and the *Add Music View* should be shown 
	- ([see example wireframe](https://moqups.com/chortlehoort/1E8LJX7r/p:a0cf17f7b)).
- [ ] When the user clicks on "List Music" in the navigation bar, the *Add Music View* should be hidden, and the *List Music View* should be shown ([see example wireframe](https://moqups.com/chortlehoort/1E8LJX7r/p:a8d99d401)).
- [ ] Once the user fills out the song form and clicks the add button, you should collect all values from the input fields, add the song to your array of songs, and update the song list in the DOM.



***
***



# Music History Part 2

## Prerequisites
Use JavaScript arrays, loops, and innerHTML to show the music you love.

> :warning: This exercise requires that you have completed the [Music History 1](SW_CSS_MUSIC_HISTORY_01.md) exercise.

## Setup

- [X] Create a branch in your `musichistory` repository named `version-2`, and switch to that branch. `git checkout -b version-2` will create and switch you into that branch.



## Requirements

Use JavaScript to create a list of songs in the `index.html` file for your Music History project. 

- [X] Download [`songs.js`](https://raw.githubusercontent.com/nashville-software-school/front-end-curriculum/9f5d7303f4c53102e8918f0ca06bebc84c91d266/resources/js-101.js), which contains an array of strings with song information.

- [X] Add one song to the beginning and the end of the array.
- [X] Loop over the array, and remove any words or characters that obviously don't belong.
- [X] Find and replace the `>` character in each item with a `-` character.
- [X] Add each string to the DOM in `index.html` in the main content area.

> **Example output:**  
>  
> {Song name} by {Artist} on the album {Album}  
>  
> {Song name} by {Artist} on the album {Album}  
>  
> ...



***
***

# Module 1, Exercise #10

You will be building the basic structure of your Music History application in HTML and making it look good with the skills you learned in CSS.

- [X] Visit the [Music History mockup](https://moqups.com/chortlehoort/1E8LJX7r/) that I created. You will be recreating that document in your own HTML file.

### Criteria 

- [X] Create five options for the artist select element of any artist that you enjoy.
- [X] Create at least five options for the album select element. One or more for each artist.
- [X] The links in the navigation bar don't need to link to anything, 
	- you can use `<a href="#">View music</a>` for now
- [X] Pick your four favorite songs from the artists you have chosen and use the information for each in the list that's on the right-hand side. You can use `h1` tags, `div` tags, `section` tags... whatever you like.
- [X] Once you are done, make sure you add your files to git, make a commit, and then push your new code up to Github with the following command `git push origin master`.


***
***



## Sources
[MDN: Regular Expressions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions)

[Regular Expressions](http://www.javascriptkit.com/javatutors/redev2.shtml)

[MDN: Replace Method](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace)

[Replace Characters in String Array](https://stackoverflow.com/questions/26742310/replace-characters-in-string-array-javascript#26742337)



