function showVideoInfo(id) {
	const menuSections = document.querySelectorAll(".video-menu-section");
	const menuTabs = document.querySelectorAll(".video-menu-tab");

	menuSections.forEach((section) => (section.style.display = "none"));
	menuTabs.forEach((tab) => tab.classList.remove("video-menu-tab-active"));
	document.getElementById(id).style.display = "block";

	const currentActiveBtn = document.querySelector(`[data-id=${id}]`);

	currentActiveBtn.classList.add("video-menu-tab-active");
}

document.addEventListener("DOMContentLoaded", function () {
	const nav = document.querySelector(".navbar");
	const allNavItems = document.querySelectorAll(".nav-link");
	const navList = document.querySelector(".navbar-collapse");
	const navButton = document.querySelector(".navbar-toggler");
	// const videoClick = document.getElementById('video-wrap')

	function addShadow() {
		if (window.scrollY >= 50) {
			nav.classList.add("shadow-bg");
		} else {
			nav.classList.remove("shadow-bg");
		}
	}

	function addShadowNavBar() {
		nav.classList.add("shadow-bg");
		// if (nav.classList.contains('shadow-bg')) {
		//     nav.classList.remove('shadow-bg');
		// } else {
		// }
	}

	allNavItems.forEach((item) =>
		item.addEventListener("click", () => navList.classList.remove("show"))
	);

	window.addEventListener("scroll", addShadow);
	nav.addEventListener("click", addShadowNavBar);
});
