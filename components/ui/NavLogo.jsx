import React from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
const NavLogo = () => {
    return (
        <DotLottieReact
            src="/assets/logo.lottie"
            loop
            autoplay
            width={70}
            height={70}
            style={{ background: 'transparent' }}
        />
    );
};

export default NavLogo