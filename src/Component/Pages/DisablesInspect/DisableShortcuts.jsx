import { useEffect } from 'react';

const DisableShortcuts = () => {
    useEffect(() => {
        const handleKeyDown = (e) => {
            // Disable F12, Ctrl+Shift+I, Ctrl+Shift+C, Ctrl+U (Windows/Linux)
            // Disable Command+Shift+C (macOS)
            if (
                e.key === 'F12' ||
                (e.ctrlKey && e.shiftKey && e.key === 'I') ||
                (e.ctrlKey && e.shiftKey && e.key === 'C') ||
                (e.ctrlKey && e.key === 'U') ||
                (e.metaKey && e.shiftKey && e.key === 'C') // Command + Shift + C (macOS)
            ) {
                e.preventDefault();
            }
        };

        document.addEventListener('keydown', handleKeyDown);

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    return null;
};

export default DisableShortcuts;
