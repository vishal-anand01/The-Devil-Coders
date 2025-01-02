import { useEffect } from 'react';

const DisableRightClick = () => {
  useEffect(() => {
    const handleContextMenu = (e) => {
      e.preventDefault(); // Disable right-click menu
    };

    document.addEventListener('contextmenu', handleContextMenu);

    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
    };
  }, []);

  return null;
};

export default DisableRightClick;
