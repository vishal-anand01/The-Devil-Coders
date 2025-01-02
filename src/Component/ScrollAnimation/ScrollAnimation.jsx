import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import '../Assets/CSS/ScrollAnimation.css'; // Import CSS for animations

const ScrollAnimation = ({ children }) => {
    const { ref, inView } = useInView({
        threshold: 0.1,
        triggerOnce: false,
    });

    const [isVisible, setIsVisible] = useState(false);
    const [scrollDirection, setScrollDirection] = useState('down');

    useEffect(() => {
        let lastScrollY = window.scrollY;
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            if (currentScrollY > lastScrollY) {
                setScrollDirection('down');
            } else {
                setScrollDirection('up');
            }
            lastScrollY = currentScrollY;
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        if (inView && scrollDirection === 'down') {
            setIsVisible(true);
        } else if (!inView && scrollDirection === 'up' && window.scrollY < 50) {
            setIsVisible(false); // Reset visibility when scrolling up and near the top
        }
    }, [inView, scrollDirection]);

    return (
        <div ref={ref} className={`slide-in ${isVisible ? 'visible' : 'hidden'}`}>
            {children}
        </div>
    );
};

export default ScrollAnimation;
