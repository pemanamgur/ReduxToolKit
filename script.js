let box = document.querySelectorAll(".box");
let container = document.querySelector(".container");

box.forEach((items) => {
  console.log(items);
  items.addEventListener("click", function (e) {
    // console.log(e);
    //  console.log(e.target);
    container.style.backgroundColor = e.target.id;
  });
});
