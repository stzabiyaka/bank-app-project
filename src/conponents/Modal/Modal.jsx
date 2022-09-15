import { createPortal } from 'react-dom';
import { Backdrop, CloseButton, ModalContainer, Icon } from './Modal.styled';
import { icons } from '../../assets';
import { useModal } from '../../utilities/appContext/appContext';

const modalRoot = document.querySelector('#modal-root');

const Modal = ({ children }) => {
  const { toggle } = useModal();
  return createPortal(
    <Backdrop>
      <ModalContainer>
        <CloseButton title="Close modal" onClick={toggle}>
          <Icon>
            <use href={`${icons}#icon-close`} aria-label="Close modal" />
          </Icon>
        </CloseButton>
        {children}
      </ModalContainer>
    </Backdrop>,
    modalRoot
  );
};

export default Modal;
