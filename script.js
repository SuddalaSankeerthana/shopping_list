var marked=0;
var count1=0;
var unmarked=0;
const totalCount=document.getElementById("count");
const markedCount=document.getElementById("count1");
const unmarkedCount=document.getElementById("count2");
const hide=document.getElementById("hide");
document.querySelector("#myInput").addEventListener("keydown", (event) => {
    if(event.key == "Enter" && document.querySelector("#myInput").value.trim()!='' )
      addItem();
  });
  addItem = () => {
    count1=count1+1;
    const item = document.createElement("div");
    item.classList.add("shoppingItems1");
    const listItem= document.createElement("span");
    listItem.textContent = document.querySelector("#myInput").value;
    const remove = document.createElement("span");
    const txt = document.createTextNode("\u00D7");
    remove.appendChild(txt);
    item.appendChild(remove)
    item.appendChild(listItem);
    remove.classList.add("remove");
    listItem.classList.add("listItem");
    remove.addEventListener("click",()=>{
      if(item.style.backgroundColor=="green")
      {
        marked=marked-1;
        console.log("Bug2")
      }
      count1=count1-1;
      item.remove()
      totalCount.innerHTML=count1;
      markedCount.innerHTML=marked;
      unmarkedCount.innerHTML=count1-marked; 
      console.log(count1);
      console.log(marked);
  });
    listItem.addEventListener("click", () => {
      if(item.style.backgroundColor!="green")
      { item.style.backgroundColor="green";
      marked=marked+1;
      }
      else
      {item.style.backgroundColor="#6e726f"
        marked=marked-1;
      }
      //item.classList.toggle("change1")
      listItem.classList.toggle("change2")
      totalCount.innerHTML=count1;
      markedCount.innerHTML=marked;
      unmarkedCount.innerHTML=count1-marked; 
      console.log(count1);
      console.log(marked);
    });
    hide.addEventListener("click",()=>{
      itemList=document.getElementById("shoppingItems");
      for (i = 0; i < itemList.length; i++) {
        console.log(itemList.item(i));
        if(itemsList.item(i).style.backgroundColor=="green"){
          itemList.item(i).remove()
        }
      }
      marked=0;
    });
    document.querySelector("#shoppingItems").appendChild(item);
    document.querySelector("#myInput").value = "";
    totalCount.innerHTML=count1;
    markedCount.innerHTML=marked;
    unmarkedCount.innerHTML=count1-marked; 
  }