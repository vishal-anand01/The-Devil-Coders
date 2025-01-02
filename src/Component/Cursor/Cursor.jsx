import { useEffect } from 'react';
import '../Assets/CSS/Cursor.css'; // Import CSS

const RippleEffect = () => {
  useEffect(() => {
    const handleMouseMove = (e) => {
      // Create the ripple element
      const ripple = document.createElement('div');
      ripple.classList.add('ripple');
      ripple.style.left = `${e.pageX}px`; // Adjust to consider the entire page, not just the viewport
      ripple.style.top = `${e.pageY}px`; // Adjust to consider the entire page, not just the viewport
      document.body.appendChild(ripple);

      // Remove the ripple element after animation ends
      ripple.addEventListener('animationend', () => {
        ripple.remove();
      });
    };

    // Attach event listener to the document
    document.addEventListener('mousemove', handleMouseMove);

    // Cleanup event listener on component unmount
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return null; // This component doesn't render anything
};

export default RippleEffect;
