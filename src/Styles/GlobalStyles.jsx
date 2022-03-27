import { createGlobalStyle } from "styled-components";

export const GlobalDataLayer = createGlobalStyle`

   *,*::after,*:before{
   box-sizing:border-box ;
   margin:0px ;
   padding:0px ;
    align-items:center ;
   }
body{
font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Apple Color Emoji,Helvetica,Arial,sans-serif,Segoe UI Emoji,Segoe UI Symbol;
    font-size: 13px;
        margin: auto auto auto 0;
    color: #202020;
    padding: 0!important;
    margin-bottom: 0!important;

    -webkit-font-smoothing: antialiased;
}
li,ul{
    text-decoration:none ;
    list-style-type:none;

}

a{
    text-decoration:none ;
}

`;
