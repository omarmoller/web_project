window.onscroll = () => {scrollNavbar()};

scrollNavbar = () => {
    // Target elements
    const navBar = document.getElementById("navBar");

  if (document.documentElement.scrollTop > 100) {
    navBar.classList.add("pa-fixed-header");

  } else {
    navBar.classList.remove("pa-fixed-header");
  }
}