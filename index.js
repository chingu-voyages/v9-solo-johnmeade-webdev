let bookNavToggle = false;
let artNavToggle = false;
let socialNavToggle = false;
let aboutNavToggle = false;
let merchNavToggle = false;
let contactNavToggle = false;

let mainContent = document.querySelector("#main-content-container");

let featureBook = [];

let authorInfo = {
  bio1:
    "J. N. Chaney has a Master’s of Fine Arts in Creative Writing and fancies himself quite the Super Mario Bros. fan. When he isn’t writing or gaming, you can find him somewhere online, probably goofing off. He spends most of his downtime reading, catching up on netflix, and building a weapon to combat the oncoming invasion of fifth dimensional beings (probably shaped like spaghetti or something).",
  bio2:
    "After serving in the US Air Force, Chaney decided to pursue writing full time. Since then, he’s published two novels in his ongoing Variant Saga. It’s a cool series about genetic engineering, dystopian societies, and other neat stuff. Check it out if you’re into that sort of thing.",
  bio3:
    "Chaney migrates often, but was last seen in Avon Park, FL. Any sightings should be reported, as they are rare. Also, you should say hi to him. He likes that.",
  img: "./imgs/author_pic.jpg"
};

let bookCategories = [
  {
    title: "The Last Reaper",
    img: "./imgs/navDisplay/reaper_books_display_200x200.jpg",
    link: "books.html#reaper",
    quote: ""
  },
  {
    title: "Renegade Star",
    img: "./imgs/navDisplay/renegade_books_display_200x200.jpg",
    link: "books.html#star",
    quote: ""
  },
  {
    title: "Renegade Origins",
    img: "./imgs/navDisplay/renegade_origins_books_display_200x200.jpg",
    link: "books.html#origins",
    quote: ""
  },
  {
    title: "Orion Colony",
    img: "./imgs/navDisplay/orion_books_display_200x200.jpg",
    link: "books.html#orion",
    quote: ""
  },
  {
    title: "The Variant Saga",
    img: "./imgs/navDisplay/variant_books_display_200x200.jpg",
    link: "books.html#variant",
    quote: ""
  },
  {
    title: "The Fifth Column",
    img: "./imgs/navDisplay/fifth_column_books_display_200x200.jpg",
    link: "books.html#column",
    quote: ""
  },
  {
    title: "Stand Alone Works",
    img: "./imgs/navDisplay/stand_alone_books_display_200x200.jpg",
    link: "books.html#standAlone",
    quote: ""
  }
];

let charArt = [
  {
    img: "./imgs/charArt/char_art_1_w200.jpg",
    link: "./imgs/charArt/char_art_1.jpg",
    caption: ""
  },
  {
    img: "./imgs/charArt/char_art_2_w200.jpg",
    link: "./imgs/charArt/char_art_2.jpg",
    caption: ""
  },
  {
    img: "./imgs/charArt/char_art_3_w200.jpg",
    link: "./imgs/charArt/char_art_3.jpg",
    caption: ""
  },
  {
    img: "./imgs/charArt/char_art_4_w200.jpg",
    link: "./imgs/charArt/char_art_4.jpg",
    caption: ""
  },
  {
    img: "./imgs/charArt/char_art_5_w200.jpg",
    link: "./imgs/charArt/char_art_5.jpg",
    caption: ""
  },
  {
    img: "./imgs/charArt/char_art_6_w200.jpg",
    link: "./imgs/charArt/char_art_6.jpg",
    caption: ""
  },
  {
    img: "./imgs/charArt/char_art_7_w200.jpg",
    link: "./imgs/charArt/char_art_7.jpg",
    caption: ""
  }
];

let promo = [
  {
    title: "Orion Protected",
    date: "June 2, 2019",
    img: "./promo/orion_protected.jpg"
  },
  {
    title: "Warrior Queen",
    date: "June 9, 2019",
    img: "./promo/warrior_queen.jpg"
  },
  {
    title: "Renegade Descent",
    date: "June 16, 2019",
    img: ""
  }
];

/* Promotion Banner Display */

let cycleCount = 0;
let dateSpan = document.querySelector("#promo-pub-date");
let titleSpan = document.querySelector("#promo-title");

if (promo.length == 1) {
  document.querySelector("#promo-container").style.display = "flex";
  dateSpan.innerText = promo[0].date;
  titleSpan.innerText = promo[0].title;
} else {
  document.querySelector("#promo-container").style.display = "flex";
  dateSpan.innerText = promo[0].date;
  titleSpan.innerText = promo[0].title;
  cycleCount++;
  setInterval(cyclePromo, 7000);
}

function cyclePromo() {
  dateSpan.style.opacity = 0;
  titleSpan.style.opacity = 0;
  setTimeout(() => {
    dateSpan.innerText = promo[cycleCount].date;
    titleSpan.innerText = promo[cycleCount].title;
    if (cycleCount == promo.length - 1) {
      cycleCount = 0;
    } else {
      cycleCount++;
    }
    dateSpan.style.opacity = 1;
    titleSpan.style.opacity = 1;
  }, 600);
}

function displayContactNav() {
  if (contactNavToggle == false) {
    mainContent.style.opacity = 0;
    setTimeout(() => {
      clearData(mainContent);

      let container = document.createElement("div");
      container.setAttribute("id", "contact-container");

      let form = document.createElement("form");
      form.setAttribute(
        "action",
        "https://gmail.us20.list-manage.com/subscribe/post?u=ebf3ef32a9040cd251a3d7091&id=31c2622b5f"
      );
      form.setAttribute("method", "post");
      form.setAttribute("id", "mc-embedded-subscribe-form");
      form.setAttribute("name", "mc-embedded-subscribe-form");
      form.setAttribute("class", "validate");
      form.setAttribute("target", "_blank");
      form.setAttribute("novalidate", "");

      let p = document.createElement("p");
      p.innerText = "What's your email?";

      let input = document.createElement("input");
      input.setAttribute("type", "email");
      input.setAttribute("value", "");
      input.setAttribute("name", "EMAIL");
      input.setAttribute("class", "email");
      input.setAttribute("id", "mce-EMAIL");
      input.setAttribute("placeholder", "you@mail.com");
      input.setAttribute("required", "true");

      let submit = document.createElement("input");
      submit.setAttribute("type", "submit");
      submit.setAttribute("value", "Subscribe");
      submit.setAttribute("name", "subscribe");
      submit.setAttribute("id", "mc-embedded-subscribe");
      submit.setAttribute("class", "button");

      form.appendChild(p);
      form.appendChild(input);
      form.appendChild(submit);
      container.appendChild(form);
      mainContent.append(container);

      contactNavToggle = true;
      document.querySelector("#nav-contact").style.color = "black";
      document.querySelector("#nav-contact").style.textShadow =
        "0px 0px 1px white";
      mainContent.style.opacity = 1;
    }, 800);
  } else {
    mainContent.style.opacity = 0;
    document.querySelector("#nav-contact").style.color = "white";
    setTimeout(() => clearData(mainContent), 900);
    contactNavToggle = false;
  }
}

function displayMerchNav() {
  if (merchNavToggle == false) {
    mainContent.style.opacity = 0;
    setTimeout(() => {
      clearData(mainContent);

      let container = document.createElement("div");
      container.setAttribute("id", "merch-container");

      let p1 = document.createElement("p");
      p1.innerText = "... comming soon ...";

      container.appendChild(p1);
      mainContent.appendChild(container);

      merchNavToggle = true;
      document.querySelector("#nav-merch").style.color = "black";
      document.querySelector("#nav-merch").style.textShadow =
        "0px 0px 1px white";
      mainContent.style.opacity = 1;
    }, 800);
  } else {
    mainContent.style.opacity = 0;
    document.querySelector("#nav-merch").style.color = "white";
    setTimeout(() => clearData(mainContent), 900);
    merchNavToggle = false;
  }
}

function displayAboutNav() {
  if (aboutNavToggle == false) {
    mainContent.style.opacity = 0;
    setTimeout(() => {
      clearData(mainContent);
      let article = document.createElement("article");
      article.setAttribute("id", "about-container");

      let img = document.createElement("img");
      img.setAttribute("src", authorInfo.img);
      img.setAttribute("alt", "JN Chaney");

      let p1 = document.createElement("p");
      p1.innerText = authorInfo.bio1;

      let p2 = document.createElement("p");
      p2.innerText = authorInfo.bio2;

      let p3 = document.createElement("p");
      p3.innerText = authorInfo.bio3;

      article.appendChild(img);
      article.appendChild(p1);
      article.appendChild(p2);
      article.appendChild(p3);

      mainContent.appendChild(article);

      aboutNavToggle = true;
      mainContent.style.overflowX = "hidden";
      document.querySelector("#nav-about").style.color = "black";
      document.querySelector("#nav-about").style.textShadow =
        "0px 0px 1px white";
      mainContent.style.opacity = 1;
    }, 800);
  } else {
    mainContent.style.opacity = 0;
    document.querySelector("#nav-about").style.color = "white";
    setTimeout(() => clearData(mainContent), 900);
    navNavToggle = false;
  }
}

/* DISPLAY BOOK CATEGORIES ON NAV CLICK */

function displayBooksNav() {
  if (bookNavToggle == false) {
    mainContent.style.opacity = 0;
    setTimeout(() => {
      clearData(mainContent);
      for (let book in bookCategories) {
        displayNav(
          bookCategories[book].title,
          bookCategories[book].img,
          "book",
          "",
          bookCategories[book].link
        );
      }
      bookNavToggle = true;
      document.querySelector("#nav-books").style.color = "black";
      document.querySelector("#nav-books").style.textShadow =
        "0px 0px 1px white";
      mainContent.style.opacity = 1;
    }, 800);
  } else {
    mainContent.style.opacity = 0;
    document.querySelector("#nav-books").style.color = "white";
    setTimeout(() => clearData(mainContent), 900);
    bookNavToggle = false;
  }
}

/* DISPLAY ART CATEGORIES ON NAV CLICK */

function displayArtNav() {
  if (artNavToggle == false) {
    mainContent.style.opacity = 0;
    setTimeout(() => {
      clearData(mainContent);
      for (let art in charArt) {
        displayNav(
          charArt[art].caption,
          charArt[art].img,
          "art",
          "",
          charArt[art].link
        );
      }
      artNavToggle = true;
      document.querySelector("#nav-art").style.color = "black";
      document.querySelector("#nav-art").style.textShadow = "0px 0px 1px white";
      mainContent.style.opacity = 1;
    }, 800);
  } else {
    mainContent.style.opacity = 0;
    document.querySelector("#nav-art").style.color = "white";
    setTimeout(() => clearData(mainContent), 900);
    artNavToggle = false;
  }
}

/* Social Network Nav Display on Click */

function displaySocialNav() {
  if (socialNavToggle == false) {
    mainContent.style.opacity = 0;
    setTimeout(() => {
      clearData(mainContent);
      makeSocialIcons();
      socialNavToggle = true;
      document.querySelector("#nav-social").style.color = "black";
      document.querySelector("#nav-social").style.textShadow =
        "0px 0px 1px white";
      mainContent.style.opacity = 1;
    }, 800);
  } else {
    mainContent.style.opacity = 0;
    document.querySelector("#nav-social").style.color = "white";
    setTimeout(() => clearData(mainContent), 900);
    socialNavToggle = false;
  }

  function makeSocialIcons() {
    let socialDiv = document.createElement("div");
    socialDiv.setAttribute("id", "renegade-reader-div");

    let h2 = document.createElement("h2");
    h2.innerText =
      "Join the community of Renegade Readers on facebook for discussions, updates, and sneak-peaks!";

    let h22 = document.createElement("h2");
    h22.innerText = "You can also visit JN on twitter and instagram.";

    let iconDiv = document.createElement("div");
    iconDiv.setAttribute("id", "icon-div");
    let facebookLink = document.createElement("a");
    let twitterLink = document.createElement("a");
    let instagramLink = document.createElement("a");
    facebookLink.setAttribute(
      "href",
      "https://www.facebook.com/groups/jnchaneyreaders/"
    );
    facebookLink.setAttribute("target", "_blank");
    twitterLink.setAttribute("href", "https://twitter.com/JNChaney");
    twitterLink.setAttribute("target", "_blank");
    instagramLink.setAttribute("href", "https://instagram.com/jn_chaney/");
    instagramLink.setAttribute("target", "_blank");

    let facebookIcon = document.createElement("i");
    let twitterIcon = document.createElement("i");
    let instagramIcon = document.createElement("i");
    facebookIcon.classList = "fab fa-facebook";
    twitterIcon.classList = "fab fa-twitter";
    instagramIcon.classList = "fab fa-instagram";

    facebookLink.appendChild(facebookIcon);
    twitterLink.appendChild(twitterIcon);
    instagramLink.appendChild(instagramIcon);

    iconDiv.appendChild(facebookLink);
    iconDiv.appendChild(twitterLink);
    iconDiv.appendChild(instagramLink);

    socialDiv.appendChild(h2);
    socialDiv.appendChild(h22);
    socialDiv.appendChild(iconDiv);

    mainContent.appendChild(socialDiv);
  }
}

/* Global Nav Display Element Constructor */

function displayNav(
  caption = "",
  imgURI,
  imgClass = "",
  divClass = "",
  link = ""
) {
  let container = document.createElement("div");
  if (divClass != "") {
    container.classList = divClass;
  }
  let h2 = document.createElement("h2");
  let img = document.createElement("img");

  if (caption != "") {
    h2.innerText = caption;
  }

  img.setAttribute("src", imgURI);

  if (imgClass != "") {
    img.classList = imgClass;
  }

  img.setAttribute("alt", caption);

  let anchor = document.createElement("a");
  anchor.setAttribute("href", link);
  if(imgClass == "art"){
    anchor.setAttribute("target", "_blank");
  }
  

  anchor.appendChild(img);
  container.appendChild(h2);
  container.appendChild(anchor);

  mainContent.appendChild(container);
}

/* GLOBAL CLEAR FUNCTION FOR NAVIGATION DISPLAY */

function clearData(element) {
  if (element.hasChildNodes) {
    if (element.hasChildNodes) {
      while (element.hasChildNodes()) {
        element.removeChild(element.firstChild);
      }
    }
  }

  bookNavToggle = false;
  artNavToggle = false;
  socialNavToggle = false;
  aboutNavToggle = false;
  merchNavToggle = false;
  contactNavToggle = false;

  if (mainContent.style.overflowX != "scroll") {
    mainContent.style.overflowX = "scroll";
  }

  document.querySelector("#nav-books").style.color = "white";
  document.querySelector("#nav-books").style.textShadow = "0px 0px 1px black";
  document.querySelector("#nav-art").style.color = "white";
  document.querySelector("#nav-art").style.textShadow = "0px 0px 1px black";
  document.querySelector("#nav-merch").style.color = "white";
  document.querySelector("#nav-merch").style.textShadow = "0px 0px 1px black";
  document.querySelector("#nav-social").style.color = "white";
  document.querySelector("#nav-social").style.textShadow = "0px 0px 1px black";
  document.querySelector("#nav-about").style.color = "white";
  document.querySelector("#nav-about").style.textShadow = "0px 0px 1px black";
  document.querySelector("#nav-contact").style.color = "white";
  document.querySelector("#nav-contact").style.textShadow = "0px 0px 1px black";
}

function moveRight() {
  window.scrollBy(270, 0);
}
