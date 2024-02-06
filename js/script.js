//

//

$(document).ready(function () {
	let cards = $(".cards");
	let cardDataNemes = [];
	let cardsContainer = $(".cardsContainer");

	//
	function setItem(key, value) {
		localStorage.setItem(key, value);
	}
	function getItem(key) {
		return localStorage.getItem(key);
	}
	//
	function flipCard() {
		$(this).addClass("flip");
		cardDataNemes.push($(this).attr("data"));
		// console.log(cardDataNemes);
		setItem("cardDataNames", JSON.stringify(cardDataNemes));
		if (cardDataNemes.length === 2) {
			let getDataNames = getItem("cardDataNames");
			let parsedDataNames = jQuery.parseJSON(getDataNames);

			if (parsedDataNames[0] === parsedDataNames[1]) {
				localStorage.clear();
				cardDataNemes = [];
			} else {
				setTimeout(function () {
					cards.removeClass("flip");
					localStorage.clear();
					cardDataNemes = [];
				}, 1200);
			}
		}
	}

	//

	function suffleDivs() {
		cardsContainer.each(function () {
			var divs = $(this).find("div");
			let i = divs.length,
				j,
				temp;
			for (let i = 0; i < divs.length; i++) {
				$(divs[i]).remove();
			}

			while (--i > 0) {
				j = Math.floor(Math.random() * (i + 1));
				console.log(j);
				temp = divs[j];
				divs[j] = divs[i];
				divs[i] = temp;
				console.log(temp);
			}
			for (let i = 0; i < divs.length; i++) {
				$(divs[i]).appendTo(this);
			}
			cards.removeClass("flip");
			cards.each(function () {
				$(this).on("click", flipCard);
			});
			//
			let span = $(this).find("span");
			$(span).appendTo(this);
			
		});
	}
	//
	cards.each(function () {
		$(this).on("click", flipCard);
	});
	$("#newGameButton").click(suffleDivs);

});
