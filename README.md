# SOLID

## _Single responsibility principle (SRP)_
## _Open-Closed Principle (OCP)_
## _Liskov substitution principle (LSP)_
## _Interface segregation principle (ISP)_
## _Dependency inversion principle (DIP)_

## -Single responsibility principle (SRP)
- Este principio dicta en la sola responsibilidad (aplicado a react) en un solo componente, es decir, que cada componente tenga su propia responsabilidad, por ejempplo:
-- Tenemos este sistema que consulta a una api que nos trae una todo list y tenemos que mostrar por pantalla las tareas pendientes, nosotros podemos tener un solo componente donde: (Renderizemos la data, fetcheamos a la api, actualicemos la data).
Pero no estariamos aplicando a este principio.
--Entonces si aplicamos al principio (SRP) tendremos: 
---El index principal de nuestro sistema, que será el encargado de renderizar toda nuestra todo list.
---useFetchTodo, es nuestro hook personalizado, que sera la encargada de retornar la data que le peguemos a la api.
---todoService, es nuestro service que será consumido por 'useFetchTodo' que nos revolvera lo que retorne el fetching de la misma.

## - Open-Closed Principle (OPC)

-Entidades que tengamos en nuestor software, tienen que estar abiertas para extender, pero cerradas para ser modificadas, es decir por ejemplo: en vez de modificar nuestro componente que probablemente se este usando en toda nuestra aplicacion y que una sola modificacion podria llegar a romper otras cosas, tener la capacidad de añadir/extender funcionalidad de ese componente.

-En este ejemplo, tenemos el siguiente boton, que podria llegar a tener distintos comportamientos, un boton normal y un boton con link, entonces separamos responsabilidades, haciendo que estos comportamientos sean componentes totalmente externos y un futuro aparte, si necesitamos otro boton con otro compoertamiento, solamente tenemos que crear el componente y listo.
