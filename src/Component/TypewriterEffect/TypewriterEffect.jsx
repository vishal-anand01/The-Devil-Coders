// typewriter.js

import Typewriter from 'typewriter-effect/dist/core';

const initializeTypewriter = (configurations) => {
    configurations.forEach(config => {
        const { elementId, text } = config;
        const app = document.getElementById(elementId);
        if (!app) return;

        const typewriter = new Typewriter(app, {
            loop: true
        });

        typewriter
            .typeString(text)
            .pauseFor(2500)
            .deleteAll()
            .typeString(text)
            .pauseFor(2500)
            .deleteAll()
            .typeString(text)
            .pauseFor(2500)
            .start();
    });
};

export default initializeTypewriter;
