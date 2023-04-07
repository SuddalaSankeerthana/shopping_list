document.querySelector("#userInput").addEventListener("keydown", (event) => {
    if(event.key == "Enter")
      addItem();
  });
  
  addItem = () => {
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
    span.addEventListener("click",()=>{
      for (i = 0; i < close.length; i++) {
        span[i].onclick = function() {
          var div = this.parentElement;
          div.style.display = "none";
        }
      }
    });
  
    document.querySelector("#shoppingItems").appendChild(item);
    document.querySelector("#userInput").value = "";
  }