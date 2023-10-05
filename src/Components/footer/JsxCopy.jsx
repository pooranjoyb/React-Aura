import React, { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import './CodeBox.css'; // You can create a separate CSS file for styling
import Toast from '../Toastify/Toast';

const CodeBox = () => {
    const [code, setCode] = useState(`
  // eslint-disable-next-line no-unused-vars
  import React from "react";
  import {
    Box,
    Container,
    Row,
    Column,
    FooterLink,
    Heading,
  } from "./FooterStyles";
    
  const Footer = () => {
    return (
      <Box>
        <h1 style={{ color: "green", 
                     textAlign: "center", 
                     marginTop: "-50px" }}>
        </h1>
        
        <Container>
          <Row>
            <Column>
              <Heading>About Us</Heading>
              <FooterLink href="#">Aim</FooterLink>
              <FooterLink href="#">Vision</FooterLink>
              <FooterLink href="#">Testimonials</FooterLink>
            </Column>
            <Column>
              <Heading>Services</Heading>
              <FooterLink href="#">Writing</FooterLink>
              <FooterLink href="#">Internships</FooterLink>
              <FooterLink href="#">Coding</FooterLink>
              <FooterLink href="#">Teaching</FooterLink>
            </Column>
            <Column>
              <Heading>Contact Us</Heading>
              <FooterLink href="#">Uttar Pradesh</FooterLink>
              <FooterLink href="#">Ahemdabad</FooterLink>
              <FooterLink href="#">Indore</FooterLink>
              <FooterLink href="#">Mumbai</FooterLink>
            </Column>
            <Column>
              <Heading>Social Media</Heading>
              <FooterLink href="#">
                <i className="fab fa-facebook-f">
                  <span style={{ marginLeft: "10px" }}>
                    Facebook
                  </span>
                </i>
              </FooterLink>
              <FooterLink href="#">
                <i className="fab fa-instagram">
                  <span style={{ marginLeft: "10px" }}>
                    Instagram
                  </span>
                </i>
              </FooterLink>
              <FooterLink href="#">
                <i className="fab fa-twitter">
                  <span style={{ marginLeft: "10px" }}>
                    Twitter
                  </span>
                </i>
              </FooterLink>
              <FooterLink href="#">
                <i className="fab fa-youtube">
                  <span style={{ marginLeft: "10px" }}>
                    Youtube
                  </span>
                </i>
              </FooterLink>
            </Column>
          </Row>
        </Container>
      </Box>
    );
  };
  export default Footer;`);

  const [showToast, setShowToast] = useState(false);

  const handleCopy = () => {
    setShowToast(true);
  };
  return (
    <div className="w-full md:w-1/2 p-4 mx-auto">
    <div className="bg-white shadow-md rounded px-4 py-4">
      <h1 className="text-lg font-bold mb-4 flex ml-2">
        <img src="https://api.iconify.design/ph:terminal-window.svg?color=%231c1c1c" alt="code" className='w-5 h-5 mt-1 mr-2' />
        JSX Code for Footer</h1>
      <pre className="text-sm text-black whitespace-pre-wrap overflow-x-auto border rounded-lg p-2 ">
        {code}
      </pre>
      <CopyToClipboard text={code} onCopy={handleCopy}>
        <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none">
          Copy Code
        </button>
      </CopyToClipboard>
      {showToast && (
        <Toast status="success" >
          Code has been copied to clipboard!
        </Toast>
      )}
    </div>
  </div>
  );
};

export default CodeBox;
