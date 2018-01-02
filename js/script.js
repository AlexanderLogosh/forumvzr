var searchbtn = document.querySelector(".page-header__search-btn");
var searchinput = document.querySelector(".page-header__search-input");

searchbtn.addEventListener("click", function(event) {
	event.preventDefault();
	searchinput.classList.toggle("page-header__search-input--visible");
});