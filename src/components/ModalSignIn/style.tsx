import styled from 'styled-components';

interface ModalProps {
  isOpen: boolean;
}

export const OpenModal = styled.button`
  background-color: #e6e8e6;
  border: none;
`;

export const Modal = styled.div<ModalProps>`
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  position: fixed;
  flex-direction: column;
  justify-content: space-around;
  width: 30%;
  height: 50%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #e6e8e6;
  padding: 20px;
  border: 1px solid #000;
  box-shadow: 5px 5px rgba(0, 0, 0, 0.3);
  z-index: 1;
`;

export const DarkerBackGround = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: #535353;
  z-index: 5;
`;
