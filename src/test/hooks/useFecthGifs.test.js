import {renderHook} from '@testing-library/react-hooks';
import { useFecthGifs } from '../../hooks/useFetchGifs';

describe('Pruebas en el custom hook useFecthGifs', () => {
    test('Debe devolver el estado inicial', async() => {
        
        const {result,  waitForNextUpdate} = renderHook( ()=> useFecthGifs('One punch') );
        const {data, loading}= result.current;

        await waitForNextUpdate();

        expect(data).toEqual([]);
        expect(loading).toBe(true);
    });    

    test('Debe devolver un array de imagenes y el loading en false', async() => {
        const {result, waitForNextUpdate} = renderHook( ()=> useFecthGifs('One punch') );
        await waitForNextUpdate();
        const {data, loading}= result.current;

        expect(data.length).toBe(10);
        expect(loading).toBe(false);
    });    
});
