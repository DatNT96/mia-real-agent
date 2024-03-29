import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed, 
  figure, figcaption, footer, header, hgroup, 
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure, 
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  i, input, button {
    cursor: pointer;
    outline: none;
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  body *{
    box-sizing: border-box;
  }
  body {
    font-family: 'Open Sans', sans-serif;
    font-size: 14px;
    color: #000;
    @media (max-width: 480px){
      font-size: 12px;
    }
  }
  body.fontLoaded {
    font-family: 'Open Sans', sans-serif;
  }
  html {
    scroll-behavior: smooth;
  }
  html, body {
    height: 100%;
    min-height: 100%;
    min-width: 100%;
  }
  #app {
    background-color: #fafafa;
    min-height: 100%;
    min-width: 100%;
  }
  .ant-popover-inner-content {
    padding: 0px !important;
  }
  .ant-popover-title {
    font-weight: 700 !important;
  }
  .ant-menu-item {
    cursor: pointer;
    margin: 0px !important;
    border-bottom: 1px solid #d9d9d9;
    height: 32px;
    line-height: 32px;
    font-size: 13px;
    &:last-child {
      border-bottom: none !important;
    }
    &:hover {
      background-color: #ff5402;
      border-bottom: 1px solid #ff5402;
      color: #fff;
    }
  }
  .ant-menu-item.ant-menu-item-selected {
    background-color: #ff5402;
    border-bottom: 1px solid #ff5402;
    color: #fff;
  }
  .ant-dropdown-menu {
    padding: 0 !important;
    .ant-dropdown-menu-item {
      cursor: pointer;
      margin: 0px !important;
      border-bottom: 1px solid #d9d9d9;
      height: 32px;
      font-size: 13px;
      &:hover {
        background-color: #ff5402 !important;
        border-bottom: 1px solid #ff5402;
        color: #fff;
      }
    }
  }
  input{
    &:focus {
      outline: 0;
      box-shadow: none !important;
    }
    &[type='number'] {
      &::-webkit-inner-spin-button,
      &::-webkit-outer-spin-button {
        -webkit-appearance: none;
        margin: 0;
      }
    }
    &::-webkit-input-placeholder {
      color: #262626;
      font-style: italic;
    }
    &::-moz-placeholder {
      color: #262626;
      font-style: italic;
    }
    &::-moz-placeholder {
      color: #262626;
      font-style: italic;
    }
    &::-ms-input-placeholder {
      color: #262626;
      font-style: italic;
    }
  }
  .ant-select-selection--single {
    height: 36px !important;
  }
`;

export default GlobalStyle;
