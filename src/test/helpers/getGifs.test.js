import { getGifts } from "../../helpers/getGifs";

describe('Pruebas con getGifs Fetch', () => {
    test('Debe de traer 10 elementos', async() => {
        const gifs = await getGifts('One Punch');

        expect( gifs.length ).toBe(10);
    });

    test('Debe recibir un array vacio cuando no recibe categoria', async() => {
        const gifs = await getGifts('');

        expect( gifs.length ).toBe(0);
    });
    
})
