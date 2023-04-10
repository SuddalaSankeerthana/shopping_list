var marked = 0;
var count1 = 0;
var unmarked = 0;
const totalCount = document.getElementById("count");
const markedCount = document.getElementById("count1");
const unmarkedCount = document.getElementById("count2");
const hide = document.getElementById("hide");
document.querySelector("#myInput").addEventListener("keydown", (event) => {
  if (
    event.key == "Enter" &&
    document.querySelector("#myInput").value.trim() != ""
  )
    addItem();
});
addItem = () => {
  count1 = count1 + 1;
  const item = document.createElement("div");
  console.log(item);
  item.classList.add("shoppingItems1");
  const listItem = document.createElement("span");
  listItem.textContent = document.querySelector("#myInput").value;
  const remove = document.createElement("span");
  const txt = document.createTextNode("\u00D7");
  remove.appendChild(txt);
  item.appendChild(remove);
  item.appendChild(listItem);
  remove.classList.add("remove");
  listItem.classList.add("listItem");
  remove.addEventListener("click", () => {
    if (item.style.backgroundColor == "green") {
      marked = marked - 1;
    }
    count1 = count1 - 1;
    item.remove();
    totalCount.innerHTML = count1;
    markedCount.innerHTML = marked;
    unmarkedCount.innerHTML = count1 - marked;
    console.log(count1);
    console.log(marked);
  });

  listItem.addEventListener("click", () => {
    if (item.style.backgroundColor != "green") {
      marked = marked + 1;
      item.style.backgroundColor = "green";
    } else {
      marked = marked - 1;
      item.style.backgroundColor = "#6e726f";
    }
    item.classList.toggle("change1");
    listItem.classList.toggle("change2");
    totalCount.innerHTML = count1;
    markedCount.innerHTML = marked;
    unmarkedCount.innerHTML = count1 - marked;
  });
  hide.addEventListener("click", () => {
    const items = document.getElementsByClassName("shoppingItems1");
    for (i = 0; i < count1; i++) {
      if (items[i].style.backgroundColor == "green") {
        {
          toggling_block(items[i]);
          toggling_button(hide);
        }
      }
    }
  });
  function toggling_block(element) {
    if (element.style.display == "none") {
      element.style.display = "block";
    } else {
      element.style.display = "none";
    }
  }
  function toggling_button(hide) {
    if (hide.value == "Hide") {
      hide.value = "Show";
    } else {
      hide.value = "Hide";
    }
  }
  document.querySelector("#shoppingItems").appendChild(item);
  document.querySelector("#myInput").value = "";
  totalCount.innerHTML = count1;
  markedCount.innerHTML = marked;
  unmarkedCount.innerHTML = count1 - marked;
};
