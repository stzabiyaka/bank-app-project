import { Icon, Button } from './BackScrollButton.styled';
import { icons } from '../../assets';
import { useState, useEffect } from 'react';

const BackScrollButton = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', handleVisibility);
  }, []);

  const handleVisibility = () => {
    const offset = window.pageYOffset;
    if (offset > 100 && !visible) {
      return setVisible(true);
    }
    if (offset <= 100) {
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
