const lists = document.querySelectorAll(".list"),
  rightBox = document.querySelector("#right"),
  leftBox = document.querySelector("#left");

lists.forEach((idx) => {
  idx.addEventListener("dragstart", (e) => {
    let selected = e.target;

    rightBox.addEventListener("dragover", (e) => {
      e.preventDefault();
    });
    rightBox.addEventListener("drop", () => {
      rightBox.appendChild(selected);
      selected = null;
    });

    leftBox.addEventListener("dragover", (e) => {
      e.preventDefault();
    });
    leftBox.addEventListener("drop", () => {
      leftBox.appendChild(selected);
      selected = null;
    });
  });
});
