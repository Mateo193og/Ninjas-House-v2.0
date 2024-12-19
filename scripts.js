$(document).ready(function () {
    const carritoKey = 'carritoProductos';
  
    // Cargar el carrito desde LocalStorage
    const cargarCarrito = () => {
      const carrito = JSON.parse(localStorage.getItem(carritoKey)) || [];
      return carrito;
    };
  
    // Guardar el carrito en LocalStorage
    const guardarCarrito = (carrito) => {
      localStorage.setItem(carritoKey, JSON.stringify(carrito));
    };
  
    // Actualizar el listado del carrito
    const actualizarCarritoUI = () => {
      const carrito = cargarCarrito();
      const listaCarrito = $('#listaCarrito');
  
      listaCarrito.empty();
      if (carrito.length === 0) {
        listaCarrito.append('<li class="list-group-item">El carrito está vacío</li>');
      } else {
        carrito.forEach((producto, index) => {
          listaCarrito.append(`
            <li class="list-group-item">
              ${producto}
              <button class="btn btn-sm btn-danger float-end btnEliminar" data-index="${index}">X</button>
            </li>
          `);
        });
      }
    };
  
    // Agregar producto al carrito
    $('.btnAgregarCarrito').on('click', function () {
      const producto = $(this).closest('.card').find('.card-title').text();
      const carrito = cargarCarrito();
      carrito.push(producto);
      guardarCarrito(carrito);
      alert(`${producto} ha sido agregado al carrito.`);
    });
  
    // Eliminar producto del carrito
    $(document).on('click', '.btnEliminar', function () {
      const index = $(this).data('index');
      const carrito = cargarCarrito();
      carrito.splice(index, 1);
      guardarCarrito(carrito);
      actualizarCarritoUI();
    });
  
    // Actualizar el carrito al cargar la página
    if ($('#listaCarrito').length) {
      actualizarCarritoUI();
    }
  });
  $(document).ready(function () {
    // Manejar el envío del formulario
    $("#commentForm").on("submit", function (e) {
      e.preventDefault(); // Evitar que la página se recargue
  
      // Obtener los valores del formulario
      const userName = $("#userName").val().trim();
      const userComment = $("#userComment").val().trim();
  
      if (userName && userComment) {
        // Crear un nuevo elemento para el comentario
        const commentHtml = `
          <li class="list-group-item">
            <strong>${userName}</strong>
            <p>${userComment}</p>
          </li>
        `;
  
        // Agregar el comentario a la lista
        $("#commentList").append(commentHtml);
  
        // Limpiar el formulario
        $("#commentForm")[0].reset();
      } else {
        alert("Por favor, completa todos los campos.");
      }
    });
  });
  