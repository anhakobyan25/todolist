    const addBtn = document.getElementById("addToDo");
    const inputField = document.getElementById("inputField");
    const toDoContainer = document.getElementById("toDoContainer");
  
    addBtn.addEventListener("click", addItem);
    inputField.addEventListener("keypress", function(e) {
      if (e.key === "Enter") {
        addItem();
      }
    });
  
    function addItem() {
      const itemValue = inputField.value;
      if (!itemValue) return; // Prevent adding empty items
  
      const item = document.createElement("div");
      item.classList.add("item");
  
      const inputItem = document.createElement("input");
      inputItem.classList.add("text");
      inputItem.type = "text";
      inputItem.value = itemValue;
      inputItem.readOnly = true;
      inputItem.addEventListener("dblclick", function() {
        inputItem.style.textDecoration = "line-through";
      });
  
      const deleteItem = document.createElement("button");
      deleteItem.classList.add("delete", "btn", "btn-danger", "fa", "fa-trash");
      deleteItem.addEventListener("click", function() {
        toDoContainer.removeChild(item);
      });
  
      const itemContent = document.createElement("div");
      itemContent.classList.add("content");
      itemContent.appendChild(inputItem);
  
      const itemActions = document.createElement("div");
      itemActions.classList.add("actions");
      itemActions.appendChild(deleteItem);
  
      item.appendChild(itemContent);
      item.appendChild(itemActions);
  
      toDoContainer.appendChild(item);
  
      inputField.value = "";
    }

  