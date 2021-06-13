import { shallow } from 'enzyme';
import React from 'react';
import { GiftExpertApp } from '../GiftExpertApp';

describe('Pruebas en GifExpertApp', () => {
   test('Se debe mostrar correctamente', () => {
      const wrapper = shallow(<GiftExpertApp/>);
      
      expect(wrapper).toMatchSnapshot();
   });

   test('Debe de mostrar una lista de categorias', () => {
      const categories = ['One punch', 'Dragon Ball'];
      const wrapper = shallow(<GiftExpertApp defaultCategories={categories}/>);

      expect(wrapper).toMatchSnapshot();
      expect(wrapper.find('GifGrid').length).toBe(categories.length);
   })
   
});
