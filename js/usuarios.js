
const listUser = async () => {
    const response = await fetch(
      `https://fathomless-tor-77077.herokuapp.com/api/v1/users`
    );
  
    let tableBody = ``;
  
    const user = await response.json();
    user.forEach((user, index) => {
        tableBody += `<tr>
           <td>${user.idUser}</td>
           <td>${user.nameUser}</td>
           <td>${user.emailUser}</td>
         </tr>`;
    });
  
    // document.getElementById("tableBody_User").innerHTML = tableBody
  
  
    console.log(user);
  
    tableBody_User.innerHTML = tableBody;
  };
  
  window.addEventListener("load", function () {
    listUser();
  });
  