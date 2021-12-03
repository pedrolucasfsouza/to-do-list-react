import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    color: white;
    overflow:auto;
    `
export const Content = styled.div`
margin-top: 4rem;
padding: 2rem;
border-radius: 0.5rem;
max-height: 600px;
width: 620px;
overflow:auto;
min-height: 500px;
box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 2px 0px;
background-color: #f5f5f5 ;
flex-direction:column;

article{
    background-color: white;
    color: #302b63;
    min-height: 80px;
    padding: 1rem 2rem;
    border-radius: 0.5rem;
    box-shadow: rgba(27, 31, 35, 0.04) 0px 1px 0px, rgba(255, 255, 255, 0.25) 0px 1px 0px inset;
    margin: 7px 0px;
}

h1{
    font-size: 1.2rem;
    color: #302b63;
}

span{
    text-decoration: underline;
    cursor: pointer;
}

`

export const Footer = styled.div`
display: flex;
flex-direction: column;
input{
      width: 100%;
      padding: 0 1.5rem;
      height: 4rem;
      margin-top: 1rem;
      border-radius: 0.25rem;
      border: 1px solid #d7d7d7;
      background-color: #e7e9ee;
      font-weight: 400;
      font-size: 1rem;
}
button{
      width: 100%;
      padding: 0 1.5rem;
      height: 4rem;
      background-color: #302b63;
      color:#fff;
      border: 0;
      border-radius: 0.25rem;
      margin-top: 0.5rem;
      transition: 0.9s;
      font-size: 1rem;
      font-weight: 600;
      cursor: pointer;
}
`
