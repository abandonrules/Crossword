// A javascript-enhanced crossword puzzle [c] Jesse Weisbeck, MIT/GPL 
(function($) {
	$(function() {
		// provide crossword entries in an array of objects like the following example
		// Position refers to the numerical order of an entry. Each position can have 
		// two entries: an across entry and a down entry
		var entryData = [
			 	{
					clue: "caterpillar of the past",
					answer: "ohggresyl",
                    rot13: "true",
					position: 1,
					orientation: "across",
					startx: 2,
					starty: 6
				},
        {
            clue:"Two party system becomes one",
            answer:"Marriage",
            position:2,
            orientation: "down",
            startx: 7,
            starty: 4
            },
        {
            clue:"cubes in a healthy diet",
            answer:"tofu",
            position:3,
            orientation: "across",
            startx: 14,
            starty: 3
            },
        {
            clue:"true love",
            answer:"blave",
            position:4,
            orientation: "across",
            startx: 12,
            starty:  5
            },
        {
            clue:"eats cats",
            answer:"alf",
            position:5,
            orientation: "down",
            startx: 11,
            starty: 11
            },
        {
            clue:"kanga and __",
            answer:"roo",
            position:1,
            orientation: "across",
            startx: 7,
            starty: 7
            },
        {
            clue:"_ for algernon",
            answer:"flowers",
            position:1,
            orientation: "down",
            startx: 9,
            starty:5 
            },
        {
            clue:"west coast of missouri",
            answer:"kansas",
            position:1,
            orientation: "across",
            startx: 12,
            starty: 7
            },
        {
            clue:"manservant",
            answer:"butler",
            position:3,
            orientation: "down",
            startx: 2,
            starty: 6
            },
        {
            clue:"no new _",
            answer:"taxes",
            position:1,
            orientation: "across",
            startx: 6,
            starty: 9 
            },
        {
            clue:"two wheels and an engine",
            answer:"scooter",
            position:1,
            orientation: "down",
            startx: 5,
            starty: 1
            },
        {
            clue:"_ up a child",
            answer:"train",
            position:1,
            orientation: "down",
            startx: 14,
            starty:  3
            },
        {
            clue:"DQ order",
            answer:"shake",
            position:3,
            orientation: "across",
            startx: 9,
            starty:11 
            },
       {
            clue:"the box of _",
            answer:"doom",
            position:3,
            orientation: "across",
            startx: 4,
            starty: 4 
            },
        {
            clue:"type of dance",
            answer:"swing",
            position:3,
            orientation: "down",
            startx: 17,
            starty:7
            },
        {
            clue:"I like my yogurt",
            answer:"plain",
            position:3,
            orientation: "across",
            startx: 13,
            starty:10
            },
        {
            clue:"to stand in wonder",
            answer:"agape",
            position:3,
            orientation: "down",
            startx: 13,
            starty:7
            },
        {
            clue:"george washington's",
            answer:"wig",
            position:3,
            orientation: "across",
            startx: 17,
            starty:8
            },
        {
            clue:"lost in the dryer",
            answer:"socks",
            position:3,
            orientation: "across",
            startx: 3,
            starty: 2
            },
        {
            clue:"_ you wish",
            answer:"as",
            position:3,
            orientation: "down",
            startx: 7,
            starty:1
            },
        {
            clue:"the answer to life the universe and everything",
            answer:"42",
            position:3,
            orientation: "across",
            startx: 1,
            starty:13
            },
			] 
	
		$('#puzzle-wrapper').crossword({
			entryData: entryData,
			showAnswers: false,
			id: "my-crossword"
		});
		
	})
	
})(jQuery)
