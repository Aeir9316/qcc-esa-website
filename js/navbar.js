/* ============================================================
   QCC-ESA MOBILE NAVIGATION
   ============================================================ */

const menuToggle = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".site-navigation");
const navBackdrop = document.querySelector(".nav-backdrop");


/* ============================================================
   OPEN MENU
   ============================================================ */

function openMenu() {

  document.body.classList.add("menu-open");

  menuToggle.setAttribute(
    "aria-expanded",
    "true"
  );

}


/* ============================================================
   CLOSE MENU
   ============================================================ */

function closeMenu() {

  document.body.classList.remove("menu-open");

  menuToggle.setAttribute(
    "aria-expanded",
    "false"
  );

}


/* ============================================================
   MENU EVENTS
   ============================================================ */

if (menuToggle && navigation && navBackdrop) {

  /* Hamburger button */

  menuToggle.addEventListener(
    "click",
    () => {

      const isOpen =
        document.body.classList.contains("menu-open");

      if (isOpen) {

        closeMenu();

      } else {

        openMenu();

      }

    }
  );


  /* Click outside menu */

  navBackdrop.addEventListener(
    "click",
    closeMenu
  );


  /* Close after selecting a page */

  navigation
    .querySelectorAll("a")
    .forEach(link => {

      link.addEventListener(
        "click",
        closeMenu
      );

    });


  /* Close menu when returning to desktop */

  window.addEventListener(
    "resize",
    () => {

      if (window.innerWidth > 980) {

        closeMenu();

      }

    }
  );

}
/* ============================================================
   SCROLL REVEAL ANIMATIONS
   Works across all pages
   ============================================================ */

document.addEventListener("DOMContentLoaded", () => {

  /* ------------------------------------------------------------
     Elements to animate
     ------------------------------------------------------------ */

  const revealElements = document.querySelectorAll(
  `
  main section,
  .index-news-card,
  .index-event-card,
  .about-preamble-card
  `
);


  /* ------------------------------------------------------------
     Add reveal class
     ------------------------------------------------------------ */

  revealElements.forEach((element, index) => {

    element.classList.add("scroll-reveal");

    /*
      Small stagger for cards
    */

    if (
      element.classList.contains("index-news-card") ||
      element.classList.contains("index-event-card")
    ) {

      const delay =
        (index % 3) * 80;

      element.style.setProperty(
        "--reveal-delay",
        `${delay}ms`
      );

    }

  });


  /* ------------------------------------------------------------
     Intersection Observer
     ------------------------------------------------------------ */

  const revealObserver =
    new IntersectionObserver(
      (entries, observer) => {

        entries.forEach(entry => {

          if (!entry.isIntersecting) {
            return;
          }

          entry.target.classList.add(
            "is-visible"
          );

          observer.unobserve(
            entry.target
          );

        });

      },
      {
        threshold: 0.12,

        rootMargin:
          "0px 0px -60px 0px"
      }
    );


  /* ------------------------------------------------------------
     Observe elements
     ------------------------------------------------------------ */

  revealElements.forEach(element => {

    revealObserver.observe(element);

  });

});