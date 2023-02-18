import React from "react";
import styled from "styled-components";

const Modal = ({ children, open, close, titulo }) => {
  return (
    <>
      {open && (
        <Overlay>
          <Contenedor>
            <Encabezado>
              <h3 className="font-semibold text-base">{titulo}</h3>
            </Encabezado>
            <BotonCerrar onClick={() => close(false)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-x"
                viewBox="0 0 16 16"
              >
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
              </svg>
            </BotonCerrar>
            {children}
          </Contenedor>
        </Overlay>
      )}
    </>
  );
};
export default Modal;

const Overlay = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  padding: 40px;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const Contenedor = styled.div`
  width: 500px;
  min-height: 100px;
  background: #fff;
  position: relative;
  border-radius: 5px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  padding: 20px;
`;
const Encabezado = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
  padding-bottom: 20px;
  border-bottom: 2px solid #e8e8e8;

  h3 {
    font-weight: 500;
    font-size: 16px;
    color: #1766dc;
  }
`;

const BotonCerrar = styled.div`
  position: absolute;
  top: 15px;
  right: 20px;

  background: #ffffff;
  width: 30px;
  height: 30px;
  border: none;
  cursor: pointer;
  transition: 0.3s ease all;
  border-radius: 5px;
  color: #1766dc;
  &:hover {
    background: #a3a0a0;
  }

  svg {
    width: 100%;
    height: 100%;
  }
`;
