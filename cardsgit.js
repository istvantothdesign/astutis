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
          astCourseCard[i].style.backgroundImage =
            "url(`https://www.barton.co.uk/wp-content/uploads/sites/10/2019/07/ROSPA-logo.jpg`)";
        }
        break;
      case "meta":
        for (i = 0; i < astCourseCard.length; ++i) {
          astCourseCard[i].style.backgroundImage =
            "url('https://static.dezeen.com/uploads/2021/11/meta-facebook-rebranding-name-news_dezeen_2364_col_hero2.jpg')";
        }
        break;
      case "twitter":
        for (i = 0; i < astCourseCard.length; ++i) {
          astCourseCard[i].style.backgroundImage =
            "url(https://1000logos.net/wp-content/uploads/2021/04/Twitter-Logo-2010.png)";
        }
        break;
    }
  }
  changeCards();
}
