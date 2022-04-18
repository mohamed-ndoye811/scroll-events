let scrolling = true;

let sections = Array.from(document.getElementsByTagName("section"));
let activeSection = document.querySelector("section.active");
let activeSectionIndex = sections.indexOf(activeSection);

function changeSection() {
	scrolling = false;

	activeSectionIndex + 1 >= sections.length
		? (activeSectionIndex = 0)
		: activeSectionIndex++;

	sections.forEach((section, index) => {
		if (section.classList.contains("active")) {
			section.classList.toggle("active");
		}

		if (index == activeSectionIndex) {
			section.classList.add("active");
		}
	});

	setTimeout(function () {
		scrolling = true;
	}, 800);
}

document.addEventListener(
	"wheel",
	(event) => {
		event.preventDefault();

		if (scrolling) {
			changeSection();
		}
	},
	{ passive: false }
);
