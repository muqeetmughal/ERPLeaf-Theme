function createLogoImg() {
	var container = document.querySelector("header > div.container");
	if (container) {
		var img = document.createElement("img");
		img.className = "app-logo";
		img.src = "https://img.freepik.com/free-vector/leaf-green-logo_78370-6242.jpg?w=50";
		container.insertBefore(img, container.firstChild);
	}
}


window.onload = function () {
	var navbarSearch = document.getElementById("navbar-search");
	var awesomeBarSearchForm = document.querySelector(
		"form.form-inline.fill-width.justify-content-end"
	);

	var searchResultsUl = document.querySelector(".search-bar .awesomplete ul");
	var searchInputField = document.querySelector(".search-bar .awesomplete input");

	var pageWorkspaces = document.getElementById("page-Workspaces");

	navbarSearch.addEventListener("focus", function () {
		pageWorkspaces.classList.add("blur-bg");
		awesomeBarSearchForm.classList.add("search-open");
		searchResultsUl.classList.add("search-open");
		searchInputField.classList.add("search-open");
	});

	navbarSearch.addEventListener("blur", function () {
		pageWorkspaces.classList.remove("blur-bg");
		awesomeBarSearchForm.classList.remove("search-open");
		searchResultsUl.classList.remove("search-open");
		searchInputField.classList.remove("search-open");
	});
	createLogoImg();

	// // Select the img element with the class 'app-logo'
	// const appLogoImg = document.querySelector("img.app-logo");

	// // Check if the element exists
	// if (appLogoImg) {
	// 	// Change the src attribute to the new image URL
	// 	appLogoImg.src =
	// 		"https://www.shutterstock.com/image-vector/letter-o-leaf-logo-vector-600nw-2485074717.jpg";
	// }
};
