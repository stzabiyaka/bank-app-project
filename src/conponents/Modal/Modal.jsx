import { createPortal } from 'react-dom';
import { Backdrop, CloseButton, ModalContainer, Icon, Welcome, Name } from './Modal.styled';
import { icons } from '../../assets';
import { useModal } from '../../utilities/appContext/appContext';
import { useState } from 'react';
import Form from '../Form/Form';

const modalRoot = document.querySelector('#modal-root');

const Modal = () => {
  const { hide } = useModal();
  const [data, setData] = useState(null);
  return createPortal(
    <Backdrop>
      <ModalContainer>
        <CloseButton title="Close modal" onClick={hide}>
          <Icon>
            <use href={`${icons}#icon-close`} aria-label="Close modal" />
          </Icon>
        </CloseButton>
        {data ? (
          <>
            <Welcome>Thank you, </Welcome>
            <Name>{data.name}</Name>
            <Welcome> We'll contact you soon.</Welcome>
          </>
        ) : (
          <Form onSuccess={data => setData(data)} />
        )}
      </ModalContainer>
    </Backdrop>,
    modalRoot
  );
};

export default Modal;
