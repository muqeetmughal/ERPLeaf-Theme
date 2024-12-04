function createLogoImg() {
	var container = document.querySelector("header > div.container");
	if (container) {
		var a = document.createElement("a");
		a.href = "/app/home";
		var img = document.createElement("img");
		img.className = "erpleaf-logo";
		img.src = "https://erpleaf.com/wp-content/uploads/2024/12/erpleaf-logo-white.svg";
		a.appendChild(img);
		container.insertBefore(a, container.firstChild);
	}
}
function changePlaceHolderOfSearch() {
	const searchInput = document.getElementById("navbar-search");
	const UserName = frappe.session.user;
	if (searchInput) {
		searchInput.placeholder = `Welcome ${UserName}!`;
	}
}
function addBlurBackground() {
	var pageWorkspaces = document.querySelectorAll(".page-container");

	pageWorkspaces.forEach((workspace) => {
		workspace.classList.add("blur-bg");
		workspace.style.pointerEvents = "none"; // Make pageWorkspaces unresponsive
	});
}
function removeBlurBackground() {
	pageWorkspaces.forEach((workspace) => {
		var pageWorkspaces = document.querySelectorAll(".page-container");

		workspace.classList.remove("blur-bg");
		workspace.style.pointerEvents = "auto"; // Restore pageWorkspaces responsiveness
	});
}
function applyEventListeners() {
	var navbarSearch = document.getElementById("navbar-search");
	var awesomeBarSearchForm = document.querySelector(
		"form.form-inline.fill-width.justify-content-end"
	);

	var searchResultsUl = document.querySelector(".search-bar .awesomplete ul");
	var searchInputField = document.querySelector(".search-bar .awesomplete input");

	var pageWorkspaces = document.querySelectorAll(".page-container");

	if (navbarSearch) {
		navbarSearch.addEventListener("focus", function () {
			pageWorkspaces.forEach((workspace) => {
				workspace.classList.add("blur-bg");
				workspace.style.pointerEvents = "none"; // Make pageWorkspaces unresponsive
			});

			awesomeBarSearchForm.classList.add("search-open");
			searchResultsUl.classList.add("search-open");
			searchInputField.classList.add("search-open");
		});

		navbarSearch.addEventListener("blur", function () {
			pageWorkspaces.forEach((workspace) => {
				workspace.classList.remove("blur-bg");
				workspace.style.pointerEvents = "auto"; // Restore pageWorkspaces responsiveness
			});

			awesomeBarSearchForm.classList.remove("search-open");
			searchResultsUl.classList.remove("search-open");
			searchInputField.classList.remove("search-open");
		});
	}

	const dropdown_notifications = document.querySelector(".dropdown-menu.notifications-list");
	if (dropdown_notifications && dropdown_notifications.classList.contains("show")) {
		// Add blur effect to the background
		// document.body.style.filter = "blur(5px)";
		addBlurBackground()
	} else {
		// Remove blur effect
		// document.body.style.filter = "none";
		removeBlurBackground()
	}
}

function init() {
	createLogoImg();
	changePlaceHolderOfSearch();
	applyEventListeners();

	// Observe changes in the DOM to reapply event listeners when the route changes
	const observer = new MutationObserver(() => {
		applyEventListeners();
	});
	observer.observe(document.body, { childList: true, subtree: true });
}

window.onload = init;
