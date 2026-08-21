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