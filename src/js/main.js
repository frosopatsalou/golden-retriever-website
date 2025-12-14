const cookieBanner = document.getElementById("cookie-banner");
const acceptBtn = document.getElementById("accept-cookies");

if (localStorage.getItem("cookiesAccepted")) {
  cookieBanner.style.display = "none";
}

acceptBtn.addEventListener("click", () => {
  localStorage.setItem("cookiesAccepted", "true");
  cookieBanner.style.display = "none";
});
