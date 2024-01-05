function swapClasses(activeButtonId, activeSectionId, disabledButtonId, disabledSectionId) {
  const activeButton = document.getElementById(activeButtonId);
  const activeSection = document.getElementById(activeSectionId);
  const disabledButton = document.getElementById(disabledButtonId);
  const disabledSection = document.getElementById(disabledSectionId);

  activeButton.classList.add("active");
  activeButton.classList.remove("disabled");
  activeSection.classList.add("active");
  activeSection.classList.remove("disabled");

  disabledButton.classList.add("disabled");
  disabledButton.classList.remove("active");
  disabledSection.classList.add("disabled");
  disabledSection.classList.remove("active");
}

document.getElementById("btn-howItWorks-one").addEventListener("click", function () {
  swapClasses("btn-howItWorks-one", "card-howItWorks-one", "btn-howItWorks-two", "card-howItWorks-two");
});

document.getElementById("btn-howItWorks-two").addEventListener("click", function () {
  swapClasses("btn-howItWorks-two", "card-howItWorks-two", "btn-howItWorks-one", "card-howItWorks-one");
});
