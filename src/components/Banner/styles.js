import styled from "styled-components";

export const Container = styled.div`
    padding: 200px 150px;
    position: relative; 
    background-position: center; 
    overflow: hidden;
`;

export const BackgroundImage = styled.div`
    position: absolute; 
    top: 0; 
    left: 0; 
    width: 100%; 
    height: 100%; background-image: url('https://media.istockphoto.com/id/487313304/pt/foto/luxuosa-sala-de-estar.jpg?b=1&s=612x612&w=0&k=20&c=62mFeqUYFqo6DqQQ4Q2_a4m9alEGEwbxVu9bM4rgIoA='); 
    background-size: cover; 
    background-position: center; 
    z-index: 0;
    ::before{
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.2);
      z-index:1 ;  
    }
`

export const Text = styled.div`
    width: 55%;
    position: relative;
    z-index: 1;
    h2{
        color: var(--white);
        font-size: 62px;
        font-weight: 700;
        margin-bottom: 35px;
    }

    p{
        color: var(--white);
        margin-bottom: 25px;
    }

    span{
        background-color: var(--blue);
        border: 0;
        color: var(--white);
        font-size: 14px;
        font-weight: 600;
        padding: 12px 120px;
        cursor: pointer;
        line-height: 24px;
        border-radius: 3px;
    }
`