// Este archivo junto a jestTest.js debería estar en test/unit pero lo sacamos a la raíz para que no moleste con las demás pruebas

import { mount } from '@vue/test-utils'
import App from '@/App.vue'
import {huevo, espinaca} from  "./jestTest";

const wrapper = mount(App)
const vm = wrapper.vm

describe('Se probará la calidad de los productos', ()=>{

	test('Calidad del huevo', ()  => {

    expect(huevo().estado[0]).toBe('fresco')

  });

  test('Calidad de la espinaca', ()  => {
    
    expect(espinaca()).toEqual({
      estado: 1,
      color: "verde"
    })

  });

}); 

describe('Probar que se cambió la propiedad changeTest ', () => {

  test('should click a button', () => {

    const lastValue = vm.changeTest
    wrapper.find('button').trigger('click')

    expect(vm.changeTest).toBe(lastValue+1)

  })

})
