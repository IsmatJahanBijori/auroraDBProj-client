// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
const Footer = () => {
    return (
        <div>
            <footer className="footer p-10 bg-[#ebf1ec] text-base-content rounded-t-lg">
                <div>
                    <div className="avatar">
                        <div className="w-24 rounded-full">
                            <img src="https://i.ibb.co/30vSHtY/logo.jpg" className='h-20' alt="" />
                        </div>
                    </div>
                    <p className='font-serif text-2xl'>Aurora Shopping Center<br />Providing reliable tech since 2023</p>
                </div>
                <div className='font-serif'>
                    <span className="footer-title">Services</span>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </div>
                <div className='font-serif'>
                    <span className="footer-title">Company</span>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact: </a>
                    <li>Email: linguacampha@gmail.com</li>
                    <li>Phone no: 01911108125</li>
                </div>
                <div className='font-serif'>
                    <span className="footer-title">Legal</span>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </div>
                <div className='font-serif'>
                    <span className="footer-title">Social</span>
                    <div className="flex flex-row justify-center p-4">
                        <Link href='' className='me-4 text-reset '>
                            <FaFacebook style={{ color: '#3B5998' }} />
                        </Link>
                        <Link href='' className='me-4 text-reset'>
                            <FaTwitter style={{ color: '#00ACEE' }} />
                        </Link>
                        <Link href='' className='me-4 text-reset'>
                            <FaInstagram style={{ color: 'red' }} />
                        </Link>
                        <Link href='' className='me-4 text-reset'>
                            <FaGoogle style={{ color: '#DB4437' }}></FaGoogle>
                        </Link>
                        <Link href='' className='me-4 text-reset'>
                            <FaLinkedin style={{ color: '#0072B1' }} />
                        </Link>
                        <Link href='' className='me-4 text-reset'>
                            <FaGithub style={{ color: '#1a1110' }} />
                        </Link>
                    </div>
                </div>
            </footer>
            <footer className="footer footer-center mt-0 bg-[#ebf1ec] text-base-content pb-10 rounded-b-lg">
                <div className='font-serif text-xl'>
                    <p>Copyright © 2023 - All right reserved by Aurora Shopping Center</p>
                </div>
            </footer>
        </div>
    );
};

export default Footer;