let loadingCompleted = 0;
let startLoading = Date.now();
const tag = document.createElement("div");
tag.className = "loading";
document.querySelector(".container").appendChild(tag);

const loadingTime = () => {
  let endLoading = Date.now();
  loadingCompleted = (endLoading - startLoading) / 1000;
  return loadingCompleted;
};

window.addEventListener("load", () => {
  setTimeout(() => {
    tag.remove();
  }, loadingTime() + 2500);
});
