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

## - Liskov substitution Principle (LSP)

- Liskov Sustitution Principle (LSP)

-El objetivo principal del principio de substitucion de liskov, es que podamos reemplazar los objetos de la clase hija por objetos de su clase padre sin afectar el comportamiento del programa

---En otras palabras, si una clase B hereda de una clase A, cualquier instancia de B debe poder ser utilizada en cualquier lugar donde se espera una instancia de A, sin cambiar el comportamiento del programa. Esto se debe a que B debe cumplir con todas las reglas y contratos que A establece, y no debe añadir nuevas reglas o suprimir las que A ya tiene.

---Este principio es muy importante para lograr la reutilización de código y para hacer que nuestros programas sean más flexibles y extensibles. En el caso de React, el principio de sustitución de Liskov se aplica al crear componentes que puedan ser intercambiados sin afectar el comportamiento del programa.

## - Interface segregation Principle (ISP)

	-Este principio dicta que una clase o componente, debe recibir la misma cantidad de props que su inteface o type definida lo dicte: por ejemplo
	--Si tenemos la siguiente props con el siguiente componente

	type Props = {
		title: string;
		body: string;
		img: string
	}

	export const Thumbnail = ({title, body, img}:Props) = > {
		return <img href={img}>
		</img>
	}

	--Vemos que la props definida para el componente Thumbnail es (titulo, body, img) pero la unica que se aplica o esta en uso, dentro del componente, es img (la URL de la imagen), esto podemos corregirlo de la siguiente manera

		export const Thumbnail = ({ img: string }) = > {
		return <img href={img}>
		</img>
	}

	-En el ejemplo del repositorio, vemos que en las props del componente _PostDate_ y _PostTitle_ solamente estan en uso (title) para el caso de _PostDate_ y (createdAt) en el caso de _PostTitle_
