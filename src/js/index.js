function swapClassesHowItWork(activeButtonId, activeSectionId, disabledButtonId, disabledSectionId) {
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
  swapClassesHowItWork("btn-howItWorks-one", "card-howItWorks-one", "btn-howItWorks-two", "card-howItWorks-two");
});

document.getElementById("btn-howItWorks-two").addEventListener("click", function () {
  swapClassesHowItWork("btn-howItWorks-two", "card-howItWorks-two", "btn-howItWorks-one", "card-howItWorks-one");
});

function swapClassesOurMission(activeButtonId, activeSectionId, disabledButtonIds, disabledSectionIds) {
  const activeButton = document.getElementById(activeButtonId);
  const activeSection = document.getElementById(activeSectionId);

  activeButton.classList.add("active");
  activeButton.classList.remove("disabled");
  activeSection.classList.add("active");
  activeSection.classList.remove("disabled");

  disabledButtonIds.forEach((id) => {
    const button = document.getElementById(id);
    button.classList.add("disabled");
    button.classList.remove("active");
  });

  disabledSectionIds.forEach((id) => {
    const section = document.getElementById(id);
    section.classList.add("disabled");
    section.classList.remove("active");
  });
}

document.getElementById("btn-ourMission-one").addEventListener("click", function () {
  swapClassesOurMission(
    "btn-ourMission-one",
    "card-ourMission-one",
    ["btn-ourMission-two", "btn-ourMission-three"],
    ["card-ourMission-two", "card-ourMission-three"],
  );
});

document.getElementById("btn-ourMission-two").addEventListener("click", function () {
  swapClassesOurMission(
    "btn-ourMission-two",
    "card-ourMission-two",
    ["btn-ourMission-one", "btn-ourMission-three"],
    ["card-ourMission-one", "card-ourMission-three"],
  );
});

document.getElementById("btn-ourMission-three").addEventListener("click", function () {
  swapClassesOurMission(
    "btn-ourMission-three",
    "card-ourMission-three",
    ["btn-ourMission-one", "btn-ourMission-two"],
    ["card-ourMission-one", "card-ourMission-two"],
  );
});
