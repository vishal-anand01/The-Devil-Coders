import React from 'react';
import Lottie from 'lottie-react';
import ScrollAnimation from '../../ScrollAnimation/ScrollAnimation';
import BlogHeroBackground from '../../Assets/Json/BlogPageHeroBackground.json';

const BlogSlider = () => {
    return (
        <>
            <div className='blog-background'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-sm-6 BlogHeroText d-flex align-items-center justify-content-center'>
                            <ScrollAnimation >
                                <h1>Blog</h1>
                            </ScrollAnimation>
                        </div>
                        <div className='col-sm-6 d-flex align-items-center justify-content-center'>
                            <ScrollAnimation >
                                <Lottie animationData={BlogHeroBackground} className='hero-bg-blog' />
                            </ScrollAnimation></div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BlogSlider;
