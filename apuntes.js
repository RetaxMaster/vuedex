// mount recibe dos parámetros, el componente y las opciones que van a inicializar el componente que vamos a probar
import { mount } from '@vue/test-utils'

import App from '@/App.vue'

const wrapper = mount(App)
const vm = wrapper.vm // <- Contiene la instancia de Vue del componente en cuestión

/*

Algunas de las propiedades a las cuales podemos acceder son:

vm.$data
Tipo: Object
Descripción: este elemento es la propiedad data donde están nuestros estados.

vm.$props
Tipo: Object
Descripción: estas son las propiedades que recibe el componente.

vm.$el
Tipo: Element
Descripción: el elemento raíz del DOM, el cual está manejando Vue.

vm.$children
Tipo: Array < Vue instance >
Descripción: Array de las instancias de los nodos hijos del componente de la instancia.

Existen 4 definiciones en las pruebas: Anomalía, Defecto, Fallo, Error

*/

// Set de pruebas, el primero parametro es el nombre del set y el segundo la función que contendrá las pruebas
describe('Se probará la calidad de los productos', ()=>{

    // Las pruebas en si, el primer parámetro es el nombre de la prueba y el segundo es la función que hará la prueba
    test('Calidad del huevo', ()  => {
        //escriba aquí sus validaciones
    });
    
    test('Calidad de la espinaca', ()  => {
        //escriba aquí sus validaciones
    });

}); 


// toBe Compara valores primitivos. Utiliza la función Object.is para hacer las validaciones, la cual es mucho más confiable que un ===.
expect(coso).toBe(valorEsperado)

// toEqual Compara recursivamente los valores de las propiedades de la instancia del objeto enviado (esto se le conoce como “deep equality”). Utiliza de igual manera la función Object.is para hacer las validaciones.
expect(coso).toEqual(valorEsperado)

// Recibe un string o un componente y regresa el primer elemento que encuentra con ese selector.
find()

// Lanza un evento del elemento que se seleccionó. Recibe un string con el nombre del evento.
trigger()
