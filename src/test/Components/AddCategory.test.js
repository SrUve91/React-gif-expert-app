import React from 'react'
import { shallow } from "enzyme"
import { AddCategory } from "../../components/AddCategory"

describe('Pruebas en AddCategory', () => {

    const setCategories = jest.fn();
    let wrapper = shallow(<AddCategory setCategories =  { setCategories }/>);

    beforeEach(()=>{
        jest.clearAllMocks();
        wrapper = shallow(<AddCategory setCategories =  { setCategories }/>);
    });

    test('Debe coincidir con el snapshot', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('debe de cambiar la caja de texto', () => {
        const input = wrapper.find('input');
        const value = 'Hola Mundo';
        input.simulate('change',{ target:{ value: value} });

        const inputAfter = wrapper.find('input');
        expect( inputAfter.props().value).toBe(value);

    });    

    test('No debe de hacer post de la informacion OnSubmit', () => {
        wrapper.find('form').simulate('submit', {preventDefault(){}})

        expect(setCategories).not.toHaveBeenCalled();
    });

    test('debe de llamar el setCategories y limpiar la caja de texto', () => {
        const input = wrapper.find('input');
        const value = 'Hola Mundo';
        input.simulate('change',{ target:{ value: value} });
        wrapper.find('form').simulate('submit', {preventDefault(){}});
        const inputAfter = wrapper.find('input');

        expect(setCategories).toHaveBeenCalled();
        expect(setCategories).toHaveBeenCalledTimes(1);
        expect(setCategories).toHaveBeenCalledWith(expect.any(Function));
        expect( inputAfter.props().value).toBe('');
    })
    
    
});
