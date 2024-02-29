import React from 'react';

type FooterProps = {
    children: React.ReactNode
}
const Footer = ({children}:FooterProps) => {
    return (
        <footer className='bg-black'>
            <div className='container mx-auto justify-center font-sans  items-center flex flex-col'>
                {children}
            </div>
        </footer>
    )
};
export default Footer;