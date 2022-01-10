/*This site
const astCourseCard = document.querySelectorAll(
  ".first-class.second-class.third-class"
);
*/
/*
const astCourseCard = document.querySelectorAll(".card-img.dashboard-card-img");
const skin = document.querySelector(".ast-skin").innerHTML;
function changeCards() {
  skinLower = skin.toString().toLowerCase();

  switch (skinLower) {
    case "rospa":
      for (i = 0; i < astCourseCard.length; ++i) {
        astCourseCard[i].style.backgroundImage =
          "url('https://www.barton.co.uk/wp-content/uploads/sites/10/2019/07/ROSPA-logo.jpg')";
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
          "url('https://1000logos.net/wp-content/uploads/2021/04/Twitter-Logo-2010.png')";
      }
      break;
  }
}
changeCards();
*/
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
            "url('https://www.barton.co.uk/wp-content/uploads/sites/10/2019/07/ROSPA-logo.jpg')";
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
            "url('https://1000logos.net/wp-content/uploads/2021/04/Twitter-Logo-2010.png')";
        }
        break;
    }
  }
  changeCards();
}

/*Syntax
var divs = document.querySelectorAll('div'), i;

for (i = 0; i < divs.length; ++i) {
  divs[i].style.color = "green";
}
*/

/*Astutis
const astCourseCard = document.querySelectorAll(
  ".detail-inner.border.d-flex.flex-column.sl-hover-bg-darken.sl-hover-lift.w-100.flex-grow-1.position-relative.shadow.overflow-hidden"
);

for (i = 0; i < astCourseCard.length; ++i) {
  astCourseCard[i].style.backgroundImage =
    "url('https://images.unsplash.com/photo-1641749034424-07c5e72a26a3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60')";
}
*/

/*Test site
const astCourseCard = document.querySelectorAll(".card-img.dashboard-card-img");

for (i = 0; i < astCourseCard.length; ++i) {
  astCourseCard[i].style.backgroundImage =
    "url('https://images.unsplash.com/photo-1641749034424-07c5e72a26a3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60')";
}
*/
