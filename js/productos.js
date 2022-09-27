
const listProducts = async () => {
  const response = await fetch(
    `https://fathomless-tor-77077.herokuapp.com/api/v1/products`
  );

  let tarjeta = ``;
  let tableBody = ``;

  const products = await response.json();
  products.forEach((products, index) => {
    //   tableBody += `<tr>
    //      <td><p>${products.id}<p></td>
    //      <td>${products.name}</td>
    //      <td>${products.price}</td>
    //      <td>${products.image}</td>
    //    </tr>`;
    //   let arrd = [products];
    // console.log(arrd)
  });

  // document.getElementById("tableBody_Products").innerHTML = tableBody
  // products.forEach((products, index) => {

  for (let i = 0; i < products.length; i++) {
    tableBody += `
        <tr>
    <div class="container">
              <div class="card">
                  <img src="${products[i].image}">
                  <div id="card_body ">
                      <p><h5 class="card-title"></h5><h6>ID:</h6>${products[i].id}</p>
                      <p><h5 class="card-title"></h5><h6>Nombre del producto:</h6>${products[i].name}</p>
                      <p class="card-text"><h6>Precio:</h6>${products[i].price}</p>
                      <!--  -->
                      <div class="d-flex justify-content-between aling-items-center">
                          <div class="btn-group">
                              <a href="#" class="btn btn-primary">Ver más</a>
                          </div>
                          <a href="#" class="btn btn-success">Agregar al carrito</a>
                      </div>
                      <!--  -->
                  </div>
              </div>
          
      
  </div></tr>
  <footer class="w-100 d-flex align-items-center justify-content-center flex-wrap">
      <p class="fs-5 px-3 pt-3">Tiendita. &copy; Todos los derechos Reservados 2022</p>
      <p class="fs-5 px-3 pt-3"><a href="doc.html">Docs</a></p>
  </footer>
  `;
  }

  // console.log(typeof(products))
  console.log(products);

  tableBody_Products.innerHTML = tableBody;
  card_body.innerHTML = tarjeta;
};

window.addEventListener("load", function () {
  listProducts();
});
