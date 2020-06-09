import React from 'react';
import ReactDOM from 'react-dom';
import GenreSelector from './GenreSelector';
import { BrowserRouter } from 'react-router-dom';

describe('GenreSelector component', () => {

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<BrowserRouter> <GenreSelector /> </BrowserRouter>, div);
        ReactDOM.unmountComponentAtNode(div);
    });

});