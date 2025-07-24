
# 🚀 Actividad Práctica: Ejercicios de Ciclos en JavaScript

[![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-yellow.svg)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![GitHub](https://img.shields.io/badge/GitHub-Repository-black.svg)](https://github.com/jfinfocesde/act_web1_s3)

## 📋 Instrucciones para la Actividad

> **⚠️ IMPORTANTE: Configuración del Repositorio**
> 
> Antes de comenzar con los ejercicios, debes crear un fork del repositorio de la actividad:

### 🔧 Configuración Inicial

1. **📂 Accede al repositorio base**: 
   - Ve a [https://github.com/jfinfocesde/act_web1_s3.git](https://github.com/jfinfocesde/act_web1_s3.git)

2. **🍴 Crear Fork**: 
   - Haz clic en el botón "Fork" en la esquina superior derecha

3. **💻 Clonar tu fork**: 
   ```bash
   git clone https://github.com/TU-USUARIO/act_web1_s3.git
   cd act_web1_s3
   ```

4. **📁 Estructura del proyecto**:
   ```
   act_web1_s3/
   ├── ejercicios-while/     # Ejercicios con ciclo while
   ├── ejercicios-for/       # Ejercicios con ciclo for
   ├── activities.json       # Configuración de actividades
   └── README.md            # Instrucciones detalladas
   ```

5. **📤 Entrega**: 
   - Una vez completados los ejercicios, haz push a tu fork y comparte el enlace

---

## 🔄 Ejercicios con Ciclo `while`

> **📝 Instrucciones**: Resuelve los siguientes ejercicios utilizando **exclusivamente** el ciclo `while` en JavaScript. Cada ejercicio debe implementarse en un archivo separado dentro de la carpeta `ejercicios-while/`.

### 🔄 Ejercicio While 1: Contador Descendente
**📄 Archivo**: `ejercicio_while_01.js`

Crea un programa que use un ciclo `while` para mostrar una cuenta regresiva desde 20 hasta 1, mostrando cada número en la consola. Al final debe mostrar "¡Despegue!".

### 🔄 Ejercicio While 2: Suma de Números Pares
**📄 Archivo**: `ejercicio_while_02.js`

Utiliza un ciclo `while` para calcular la suma de todos los números pares entre 1 y 50. Muestra el resultado final y cuántos números pares se sumaron.

### 🔄 Ejercicio While 3: Validador de Contraseña
**📄 Archivo**: `ejercicio_while_03.js`

Implementa un sistema que use un ciclo `while` para solicitar una contraseña al usuario hasta que ingrese "admin123". Debe mostrar cuántos intentos fallidos hubo antes del acceso correcto.

### 🔄 Ejercicio While 4: Generador de Números Aleatorios
**📄 Archivo**: `ejercicio_while_04.js`

Crea un programa que use un ciclo `while` para generar números aleatorios entre 1 y 100 hasta que salga un número mayor a 95. Muestra cada número generado y al final indica cuántos números se generaron.

### 🔄 Ejercicio While 5: Calculadora de Factorial
**📄 Archivo**: `ejercicio_while_05.js`

Desarrolla una función que use un ciclo `while` para calcular el factorial de un número dado. Debe mostrar paso a paso cómo se va calculando el factorial.

### 🔄 Ejercicio While 6: Búsqueda en Array
**📄 Archivo**: `ejercicio_while_06.js`

Dado un array de nombres, usa un ciclo `while` para buscar un nombre específico. El programa debe mostrar en qué posición se encontró el nombre o indicar si no existe.

### 🔄 Ejercicio While 7: Contador de Dígitos
**📄 Archivo**: `ejercicio_while_07.js`

Implementa un programa que use un ciclo `while` para contar cuántos dígitos tiene un número entero positivo. Por ejemplo, 12345 tiene 5 dígitos.

### 🔄 Ejercicio While 8: Secuencia de Fibonacci
**📄 Archivo**: `ejercicio_while_08.js`

Utiliza un ciclo `while` para generar los primeros 15 números de la secuencia de Fibonacci. Muestra cada número de la secuencia.

### 🔄 Ejercicio While 9: Juego de Adivinanza Mejorado
**📄 Archivo**: `ejercicio_while_09.js`

Crea un juego que use un ciclo `while` donde el usuario debe adivinar un número entre 1 y 50. Proporciona pistas ("muy alto", "muy bajo", "cerca") y limita a 7 intentos máximo.

### 🔄 Ejercicio While 10: Procesador de Calificaciones
**📄 Archivo**: `ejercicio_while_10.js`

Desarrolla un programa que use un ciclo `while` para procesar calificaciones de estudiantes. Debe continuar pidiendo calificaciones hasta que se ingrese -1, luego calcular y mostrar el promedio, la calificación más alta y más baja.

---

## ➰ Ejercicios con Ciclo `for`

> **📝 Instrucciones**: Resuelve los siguientes ejercicios utilizando **exclusivamente** el ciclo `for` en JavaScript. Cada ejercicio debe implementarse en un archivo separado dentro de la carpeta `ejercicios-for/`.

### ➰ Ejercicio For 1: Tabla de Multiplicar Completa
**📄 Archivo**: `ejercicio_for_01.js`

Usa un ciclo `for` anidado para crear las tablas de multiplicar del 1 al 10. Cada tabla debe mostrarse claramente separada y formateada.

### ➰ Ejercicio For 2: Patrón de Asteriscos
**📄 Archivo**: `ejercicio_for_02.js`

Implementa un programa que use ciclos `for` anidados para crear el siguiente patrón:
```
*
**
***
****
*****
****
***
**
*
```

### ➰ Ejercicio For 3: Análisis de Array de Números
**📄 Archivo**: `ejercicio_for_03.js`

Dado un array de 20 números aleatorios, usa un ciclo `for` para encontrar: el número mayor, el menor, la suma total, el promedio, y cuántos números son pares e impares.

### ➰ Ejercicio For 4: Generador de Números Primos
**📄 Archivo**: `ejercicio_for_04.js`

Utiliza ciclos `for` anidados para encontrar y mostrar todos los números primos entre 1 y 100. Debe indicar cuántos números primos se encontraron.

### ➰ Ejercicio For 5: Invertir Cadenas de Texto
**📄 Archivo**: `ejercicio_for_05.js`

Crea un programa que use un ciclo `for` para invertir una cadena de texto carácter por carácter. Muestra tanto la cadena original como la invertida.

### ➰ Ejercicio For 6: Calculadora de Potencias
**📄 Archivo**: `ejercicio_for_06.js`

Implementa una función que use un ciclo `for` para calcular la potencia de un número sin usar Math.pow(). Debe mostrar el proceso paso a paso.

### ➰ Ejercicio For 7: Matriz de Suma
**📄 Archivo**: `ejercicio_for_07.js`

Usa ciclos `for` anidados para crear una matriz 5x5 donde cada elemento sea la suma de sus índices (fila + columna). Muestra la matriz formateada.

### ➰ Ejercicio For 8: Contador de Vocales
**📄 Archivo**: `ejercicio_for_08.js`

Desarrolla un programa que use un ciclo `for` para contar cuántas vocales (a, e, i, o, u) hay en una frase dada. Debe mostrar el conteo de cada vocal por separado.

### ➰ Ejercicio For 9: Secuencia Matemática
**📄 Archivo**: `ejercicio_for_09.js`

Utiliza un ciclo `for` para generar la siguiente secuencia: 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024. Debe mostrar cada término y la suma total de la secuencia.

### ➰ Ejercicio For 10: Validador de Palíndromo
**📄 Archivo**: `ejercicio_for_10.js`

Implementa un programa que use un ciclo `for` para verificar si una palabra o frase es un palíndromo (se lee igual de izquierda a derecha que de derecha a izquierda). Ignora espacios y mayúsculas.

---

## 📁 Estructura de Archivos

```
act_web1_s3/
├── ejercicios-while/
│   ├── ejercicio_while_01.js
│   ├── ejercicio_while_02.js
│   ├── ejercicio_while_03.js
│   ├── ejercicio_while_04.js
│   ├── ejercicio_while_05.js
│   ├── ejercicio_while_06.js
│   ├── ejercicio_while_07.js
│   ├── ejercicio_while_08.js
│   ├── ejercicio_while_09.js
│   └── ejercicio_while_10.js
├── ejercicios-for/
│   ├── ejercicio_for_01.js
│   ├── ejercicio_for_02.js
│   ├── ejercicio_for_03.js
│   ├── ejercicio_for_04.js
│   ├── ejercicio_for_05.js
│   ├── ejercicio_for_06.js
│   ├── ejercicio_for_07.js
│   ├── ejercicio_for_08.js
│   ├── ejercicio_for_09.js
│   └── ejercicio_for_10.js
├── activities.json
├── info.json
└── README.md
```

## 🎯 Objetivos de Aprendizaje

- ✅ Dominar el uso de ciclos `while` y `for` en JavaScript
- ✅ Aplicar estructuras de control repetitivas en problemas reales
- ✅ Desarrollar lógica de programación mediante ejercicios prácticos
- ✅ Implementar algoritmos básicos usando ciclos
- ✅ Practicar buenas prácticas de programación y documentación

## 🛠️ Tecnologías Utilizadas

- **JavaScript ES6+**
- **Node.js** (opcional para ejecución)
- **Git & GitHub** para control de versiones

## 📚 Recursos Adicionales

### 📖 Documentación Oficial
- [JavaScript - Estructuras de Control](https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Control_flow_and_error_handling)
- [JavaScript - Bucles e Iteración](https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Loops_and_iteration)

### 🎓 Tutoriales
- [W3Schools - JavaScript Loops](https://www.w3schools.com/js/js_loop_for.asp)
- [JavaScript.info - Loops](https://javascript.info/while-for)

### 💻 Práctica Adicional
- [CodeWars - JavaScript Challenges](https://www.codewars.com/)
- [HackerRank - JavaScript Domain](https://www.hackerrank.com/domains/javascript)
- [LeetCode - JavaScript Problems](https://leetcode.com/)

---

## 📝 Notas Importantes

> **💡 Consejos para el desarrollo:**
> - Utiliza `console.log()` para mostrar resultados
> - Comenta tu código para explicar la lógica
> - Prueba cada ejercicio con diferentes valores de entrada
> - Asegúrate de que los ciclos tengan condiciones de salida claras

**¡Buena suerte con los ejercicios! 🚀**




