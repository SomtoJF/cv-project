import { React, Component } from 'react';
import '../Styles/Header.css'

class Header extends Component
{
    constructor()
    {
        super();
    };

    render()
    {
        return(
            <header id='header'>
                <h1 id='title'>resume generator</h1>
            </header>
        )
    };
};

export default Header;