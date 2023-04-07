/*document.querySelector("#eraser").addEventListener("click", () => {
    document.querySelector("#groceryItems").textContent = "";
  })
  */
  document.querySelector("#userInput").addEventListener("keydown", (event) => {
    if(event.key == "Enter")
      addItem();
  });
  
  addItem = () => {
    /*var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t); */
    const item = document.createElement("h2");
    const list= document.createElement("list");
    list.textContent = document.querySelector("#userInput").value;
    const span = document.createElement("span");
    var txt = document.createTextNode("\u00D7");

    span.className = "close";
    span.appendChild(txt);
    item.append(list)
    item.appendChild(span);
    list.addEventListener("click", () => {
      if(list.style.textDecoration != "line-through")
        list.style.textDecoration = "line-through";
      else
        list.style.textDecoration = "none";
    })
  
    document.querySelector("#groceryItems").appendChild(item);
    document.querySelector("#userInput").value = "";
  }