import { Component } from "react";
import '../Styles/Footer.css'

class Footer extends Component
{
    constructor()
    {
        super();
    };

    render()
    {
        return(
            <footer id='footer'>
                <p>
                    view code <a href="https://github.com/SomtoJF/cv-project">here</a>
                </p>
            </footer>
        )
    };
};

export default Footer;