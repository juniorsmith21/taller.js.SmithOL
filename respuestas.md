1. ¿QUE DIFERENCIAS HAY ENTRE UN LET UN VAR Y CONST?

La diferencia que hay entre estos tres es que el LET se usa mas que todo cuando el valor de una variable puede cambiar.

El VAR es una forma antigua de declarar variables y tiende a generar errores.

El CONST se utiliza cuando un valor no puede ser cambiado despues que le ponemos un valor.

2. ¿Qué tipo de dato es edad?

El tipo de dato edad es "Number"

3. ¿Qué es una variable?

Una variable es como un espacio de memoria donde se guarda un dato, para despues poder usarlo

2. -¿PARA QUE SIRVE UNA FUNCION?

Una funcion sirve para realizar una tarea especifica, puede recibir datos, ejecutar instrucciones y devolver una resultado para 

ser reutilizado en diferentes partes del programa.

-¿Que es un return?

Un return es una palabra clave que se usa dentro de una función para devolver un valor y terminar la ejecución de esa función.

-3. ¿Qué pasa si una función no tiene return?

Si una funcion no tiene return, no va a devolver ningun valor devuelve un "indefined"

3.	¿QUE SON PARAMETROS?

-Los parámetros son variables que se definen en una función y sirven para recibir datos cuando la función es llamada.

-2.	¿Qué son argumentos?

-Los argumentos son los valores reales que se envían a la función cuando se ejecuta.

3-¿Cuál es la diferencia entre ambos?

Los parámetros se definen en la función, mientras que los argumentos son los valores que se pasan a esos parámetros al llamar la 

función.

4. -¿QUE ES UN OBJETO EN JAVA SCRIP?

Un objeto en JavaScript es una estructura que permite agrupar varios datos relacionados en una sola variable, usando pares de 

clave y valor.

-¿Qué es una propiedad?

Una propiedad es una característica o dato que pertenece a un objeto y se define mediante una clave y un valor.

-¿Cómo se accede a una propiedad?

A una propiedad se accede con el la notacion de punto ejemplo (objeto.propiedad)

5.	¿COMO SE AGREGA UNA NUEVA PROPIEDAD A UN OBJETO?

Se agrega usando la notación de punto o de corchetes, asignando un valor a una nueva clave del objeto.

¿Se puede modificar un objeto declarado con `const`? Explica.

-Sí. A un objeto con `const` se le pueden cambiar o agregar datos por dentro.  Lo que no se puede hacer es cambiar el objeto 

completo por otro.

6. ¿PORQUE USAMOS EL OBJETO COMPLETO?

-Porque así la función puede usar toda la información del objeto sin tener que enviar cada dato por separado.

¿Qué ventaja tiene enviar objetos a funciones?

-Permite trabajar con varios datos al mismo tiempo de forma más sencilla y mantener el código más ordenado.

7. ¿COMO SE ACCEDE A UNA PROPIEDAD DENTRO DE OTRO OBJETO?

Se accede usando la notación de punto, escribiendo primero el objeto principal y luego el objeto interno y su propiedad.

9. ¿QUE OCURRE SI LA PROPIEDAD NO EXISTE?

Si la propiedad no existe, el programa no se daña, simplemente devuelve `undefined`, lo que indica que ese dato no está en el 

objeto.

-¿Por qué es importante validar datos?

Porque ayuda a evitar errores y asegura que la información que se usa en el programa sea correcta antes de trabajar con ella.


10. ¿COMO SE MODIFICA UNA PROPIEDAD?

Una propiedad se modifica asignandole un nuevo valor ejemplo persona.edad = 25

11.	¿Qué diferencia hay entre modificar y copiar un objeto como harías la copia sin spread investiga?

Modificar un objeto significa cambiar la información del mismo objeto que ya existe.

Copiar un objeto significa crear uno nuevo con los mismos datos para no alterar el original.

Una forma de hacer una copia sin usar spread es usando `Object.assign`, que permite duplicar un objeto en otro nuevo.

12. ¿QUE ES DESTRUCTURACION?

La desestructuración es una forma de sacar valores de un objeto o arreglo y guardarlos en variables de manera más fácil y rápida.

-¿Qué ventaja tiene frente al acceso con punto?

Tiene la ventaja de que hace el código más corto y fácil de leer, porque no hay que escribir el nombre del objeto cada vez que se 

usa una propiedad.

13. ¿QUE PASA SI EL NOMBRE DE UNA VARIABLE NO COINCIDE CON LA PROPIEDAD?

Si el nombre no coincide, la variable queda con el valor `undefined`, porque JavaScript no encuentra esa propiedad en el objeto.

- ¿Es obligatorio usar el mismo nombre?

No es obligatorio. Se puede usar otro nombre para la variable usando un alias durante la desestructuración.

14. ¿PORQUE SE USAN LLAVES DENTRO DE OTRAS LLAVES?

Porque se está entrando a un objeto que está dentro de otro objeto, y cada par de llaves representa un nivel diferente.

-¿Qué significa el anidamiento en desestructuración?

Significa sacar datos que están dentro de un objeto que a su vez está dentro de otro objeto.

15. ¿Qué significa desestructurar en el parámetro?

Significa sacar las propiedades del objeto directamente en la función, sin tener que usar el objeto completo dentro de ella.

-¿Qué ventaja tiene esta técnica?

La ventaja es que las llamas directamente las propiedades que se nececitan

16. 1.	¿Por qué no necesitas usar punto dentro del return?


Porque al desestructurar, los datos ya quedan guardados en variables, entonces se pueden usar directamente sin escribir el objeto 

ni el punto.

-Si el objeto no tiene esa propiedad, la variable queda como `undefined` y el programa puede fallar si no se valida antes.

17. Desestructura e investiga si le puedo dar un nuevo nombre en los objetos destructurados investiga:

Si se puede dar un nuevo nombre eso se llamma un alias

- ¿Qué es el renombramiento?

Es cambiar el nombre de la variable cuando se desestructura un objeto, para usar un nombre diferente al de la propiedad original.

-¿Cuándo es útil cambiar el nombre de una variable?

Cambiar el nombre de una variable es útil principalmente cuando el nombre original no refleja claramente su propósito o contenido.

18. ¿Qué hace el operador spread (...)?

El operador spread (...) sirve para expandir elementos de un arreglo u objeto en otro contexto.

Copiar arreglos u objetos

Combinar arreglos

-¿La copia es profunda o superficial?

El operador spread (...) hace una copia superficial, no profunda.

19.  ¿Por qué se debe copiar también el objeto interno?

Se debe copiar también el objeto interno para evitar que los cambios en la copia afecten al original.

- ¿Qué pasa si no lo haces?

Sin copiar los objetos internos, no tienes independencia entre original y copia.

20.	¿Qué tan recomendable es hacer desestructuración muy larga? 

Hacer desestructuración muy larga no es muy recomendable.

Razones:

Reduce la legibilidad

Si extraes muchas propiedades a la vez, el código se vuelve difícil de leer y mantener.

Difícil de depurar

Identificar errores o cambios en variables individuales es más complicado.

Acoplamiento excesivo

Extraer demasiadas propiedades puede hacer que la función dependa de muchos detalles internos del objeto, dificultando 

reutilización y refactorización.

-	¿Cuándo es mejor dividir la desestructuración?

Es mejor dividir la desestructuración cuando el objeto es grande o solo necesitas algunas propiedades en un contexto específico.

- ¿Qué errores comunes se pueden cometer?

Los errores comunes en desestructuración incluyen extraer propiedades que no existen, usar nombres de variables distintos a los de 

las propiedades, sobreescribir variables existentes por accidente, hacer desestructuración profunda sin validar que los objetos 

anidados existan, y confundir {} y [] al desestructurar objetos y arreglos.