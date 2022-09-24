import { Icon, Button } from './BackScrollButton.styled';
import { icons } from '../../assets';
import { useState, useEffect } from 'react';

const OFFSET_TRIGGER = 100;

const BackScrollButton = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', handleVisibility);
  }, []);

  const handleVisibility = () => {
    const offset = window.pageYOffset;
    if (offset > OFFSET_TRIGGER && !visible) {
      return setVisible(true);
    }
    if (offset <= OFFSET_TRIGGER) {
      return setVisible(false);
    }
  };
  const handleClick = () =>
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });

  return (
    <Button
      type="button"
      className={visible ? '' : 'hidden'}
      title="Back to top"
      onClick={handleClick}
    >
      <Icon aria-label="Back to top">
        <use href={`${icons}#icon-back-top`} />
      </Icon>
    </Button>
  );
};

export default BackScrollButton;
