import React from 'react'
import { shallow } from "enzyme";
import { GifGrid } from "../../components/GifGrid";
import { useFecthGifs } from '../../hooks/useFetchGifs';
jest.mock('../../hooks/useFetchGifs');

describe('Pruebas en GifGrid', () => {

    const category = "One Punch";
    test('Se debe mostrar correctamente', () => {
    useFecthGifs.mockReturnValue({
        data:[],
        loading:true
    });
    const wrapper = shallow(<GifGrid category={category}/>);
    expect(wrapper).toMatchSnapshot();
    });

    test('debe de mostrar items cuando se carga imagenes con useFetchGifs', () => {

        const gifs=[{
            id:'ABC',
            url: 'https://localhost/cualquiercosa.jpg',
            title: 'Cualquier cosa'
        },
        {
            id:'DFG',
            url: 'https://localhost/cualquiercosa.jpg',
            title: 'Cualquier cosa'
        }];

        useFecthGifs.mockReturnValue({
            data:gifs,
            loading:false
        });
        
        const wrapper = shallow(<GifGrid category={category}/>);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('p').exists()).toBe(false);
        expect(wrapper.find('GifGridItem').length).toBe(gifs.length);
        
    });
});
