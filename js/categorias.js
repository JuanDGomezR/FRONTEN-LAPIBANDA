
const listCategory = async () => {
    const response = await fetch(
      `https://fathomless-tor-77077.herokuapp.com/api/v1/categories`
    );
  
    let tableBody = ``;
  
    const category = await response.json();
    category.forEach((category, index) => {
        tableBody += `<tr>
           <td>${category.categoryId}</td>
           <td><a href="https://fathomless-tor-77077.herokuapp.com/api/v1/products">${category.productId}</a></td>
           <td>${category.nameC}</td>
         </tr>`;
    });
  
    // document.getElementById("tableBody_Category").innerHTML = tableBody
  
  
    console.log(category);
  
    tableBody_Category.innerHTML = tableBody;
  };
  
  window.addEventListener("load", function () {
    listCategory();
  });
  