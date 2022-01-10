document.onload = astCourseCards;
function astCourseCards() {
  const astCourseCard = document.querySelectorAll(
    ".card-img.dashboard-card-img"
  );
  const skin = document.querySelector(".ast-skin").innerHTML;
  function changeCards() {
    skinLower = skin.toString().toLowerCase();

    switch (skinLower) {
      case "rospa":
        for (i = 0; i < astCourseCard.length; ++i) {
          astCourseCard[i].style.background = "red";
        }
        break;
      case "meta":
        for (i = 0; i < astCourseCard.length; ++i) {
          astCourseCard[i].style.background = "blue";
        }
        break;
      case "twitter":
        for (i = 0; i < astCourseCard.length; ++i) {
          astCourseCard[i].style.background = "green";
        }
        break;
    }
  }
  changeCards();
}
