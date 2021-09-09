import React from 'react';
import Header from './header';
import { Helmet } from 'react-helmet';
import {Global, css} from '@emotion/react'

const Layout = (props) => {
    return (
        <>
        <Global
            styles={css`
               html{
                   font-size: 62.5%;
                   box-sizing: border-box;
               }
                        *, *:before, *:after {
            box-sizing: inherit;
            }
               body{
                    font-size:18px;
                    font-size:1.8rem;
                    line-height: 1.5;
                    font-family: "PT SANS",sans-serif;
                }
                h1 , h2 , h3 {
                    margin: 0;
                    line-height: 1.5;
                }
                h1,h2{
                    font-family: 'Roboto', serif;
                }
                h3{
                    font-family: 'PT Sans', sans-serif;
                }
                ul{
                    list-style: none;
                    margin: 0;
                    padding: 0;
                }
            `}

        />
        <Helmet>
            <title> Gatsby Hotel</title>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.css" integrity="sha512-oHDEc8Xed4hiW6CxD7qjbnI+B07vDdX7hEPTvn9pSZO1bcRqHp8mj9pyr+8RVC2GmtEfI2Bi9Ke9Ass0as+zpg==" crossorigin="anonymous" referrerpolicy="no-referrer" />

            <link rel="preconnect" href="https://fonts.googleapis.com"></link>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
            <link href="https://fonts.googleapis.com/css2?family=PT+Sans:wght@700&family=Roboto:wght@700&display=swap" rel="stylesheet"></link>
        </Helmet>


        <Header/>
         {props.children}
        </>
      );
}
 
export default Layout;