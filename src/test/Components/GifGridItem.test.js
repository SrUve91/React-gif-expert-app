import React from 'react'

import { shallow } from "enzyme";
import { GifGridItem } from "../../components/GifGridItem";

import '../../setupTests';

describe('Pruebas en GifGridItem', () => {

    const title ="Titulo prueba";
    const url ="https://localhost/test.gif"
    const wrapper = shallow(<GifGridItem title={title} url={url}/>);

   test('Debe mostrar el componente correctamente', () => {
       expect(wrapper).toMatchSnapshot();
   });

   test('debe de tener un parrafo con el titulo', () => {
        const p = wrapper.find('p');
        expect(p.text().trim()).toBe(title);
   });

   test('debe de tener una imagen, url como src y title como alt', () => {
      const img = wrapper.find('img');
      expect(img.props().src).toBe(url);
      expect(img.props().alt).toBe(title);
   });
   
   test('Comprobar que el div tiene la clase animateFadeIn ', () => {
       const div = wrapper.find('div');
       
       expect(div.hasClass("animate__fadeIn")).toBe(true);
   })
   
    
});
