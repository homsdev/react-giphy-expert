import { getAllByRole, render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components/GifGrid";
import { useFetchGifs } from '../../src/hooks/useFetchGifs';

jest.mock("../../src/hooks/useFetchGifs");

describe('Tests on <GifGrid/> component', () => {

    test('should show loading', () => {

        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true
        });

        const category = 'Death Note'
        render(<GifGrid category={category} />);
        expect(screen.getByText('Loading...'));
        expect(screen.getByText(category));
    });

    test('should show GitItems', () => {
        const category = "Saitama";
        const gif = [
            {
                id: 'ABC',
                title: 'Saitama',
                url: 'https://localhost/saitama.jpg'
            },
            {
                id: '123',
                title: 'Goku',
                url: 'https://localhost/goku.jpg'
            }
        ]

        useFetchGifs.mockReturnValue({
            images: gif,
            isLoading: true
        });

        render(<GifGrid category={category} />);
        
        expect(screen.getAllByRole('img').length).toBe(2);
        //screen.debug();
    })


})
