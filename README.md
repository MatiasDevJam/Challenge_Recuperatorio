# Challenge Recuperatorio	

A lo largo de todo el proyecto podés probar loguearte con el usuario:
- Usuario: butcher
- Contraseña: 1234

## 1. Modelo
Encontrarás que la página de detalle de producto no está funcionando.
Esto se debe a que el modelo de las Categorías se encuentra incompleto.
Tu trabajo es completar dicho archivo. Trabajando únicamente en dicho archivo la página de
detalle del producto debería funcionar.
Para este punto va a ser necesario que tengas abierto MySQL Workbench (o tu programa
de elección) para poder ver cómo está armada la base de datos. Sin embargo, no deberías
editar nada de la base de datos sino trabajar exclusivamente en el archivo de modelo.
Por último, el alias de dicho modelo debe ser Categoria para que todo funcione
correctamente. (Esto ya se encuentra configurado en el archivo)
  
## 2. Ruta
Notarás que al intentar registrarte, la página no esta funcionando. En este caso se debe a
que la ruta que procesa la registración no está definida.
Tu trabajo será completarla en usuario.js para que todo funcione.
El método que debe ejecutar dicha ruta se llama registroCheck y se encuentra en
usuarioController.js.
Seguramente necesites también analizar el formulario de registración para completar esta
consigna.

## 3. Vista  
Para esta consigna probablemente sea importante que primero te loguees. Te
recomendamos hacerlo con el usuario butcher que aparece al principio de este documento
ya que ya tiene productos generados.
Al loguearte observaras que la página de “Mis Productos”... no muestra los productos.
Esto se debe a que el archivo misProductos.ejs se encuentra incompleto.
Tu objetivo será completarlo para que se muestren las imágenes y el nombre de cada uno
de los productos.
Nótese que la imagen se encuentra en la base de datos cómo una URL completa
proveniente de la internet.
Será importante que revises el archivo productosController.js en el método
misProductos para saber qué variables tenes que utilizar en la vista.

## 4. Create
Para esta consigna probablemente sea importante que primero te loguees. Te
recomendamos hacerlo con el usuario butcher que aparece al principio de este documento.
En el archivo productosController.js el método productoSubmit se encuentra incompleto.
Esto se debe a que falta la instrucción que crea el registro en la base de datos.
Tu objetivo es completarlo para que dicho producto se pueda crear.
Va a ser importante que revises el archivo agregarProducto.ejs que contiene el formulario
de creación de producto del cuál se obtiene la información.

## 5. Búsqueda
En el archivo productosController.js el método buscar se encuentra vacío.
Tu reto es completar este controller para que el buscador de productos funcione.
Esta consigna involucra múltiples desafíos. Entre otros:
- Tenes que obtener que fue lo que el usuario buscó
- Tenes que obtener los resultados de la base de datos (lo buscado debe matchear
con el nombre del producto)
- Tenes que compartir los resultados con la vista (resultadoBusqueda.ejs) -
Importante: La vista espera recibir una variable llamada resultados.
