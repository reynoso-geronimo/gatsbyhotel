import React from 'react';
import {css} from '@emotion/react'
import Navegacion from './nav';
import styled from '@emotion/styled';
import { Link } from 'gatsby';

const EnlaceHome= styled(Link)`
    color:#fff;
    text-align: center;
    text-decoration:none;

`

const Footer = ({title}) => {
    const year = new Date().getFullYear() 
    return ( <>
        <footer
            css={css`
                margin-top: 5rem;
                background-color: rgba(44,62,80);
                padding:1rem;

            `}
        >
            <div
                css={css`
                    max-width: 1200px;
                    margin: 0 auto;
                    @media(min-width:768px){
                        display: flex;
                        align-items: center;
                        justify-content: space-between;
                    }
                `}
            >
                <Navegacion/>
                <EnlaceHome
                    to='/'
                >
                <h1>Hotel Gatsby</h1>
                    </EnlaceHome>
                
            </div>
        </footer>
        <p
            css={css`
                text-align:center;
                color:#fff;
                margin:0;
                padding:1;
                background-color: rgb(33,44,55);
            `}
        >{title}. Todos los derecho reservados &copy; {year}</p>
        </>
     );
}
 
export default Footer;