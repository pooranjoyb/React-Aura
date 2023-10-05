import  {React, useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import './CodeBox.css'; 
import Toast from '../Toastify/Toast';


const CssCopy = () => {
    const [code, setCode] = useState(`

    // Styled Components

    Box:
      padding: 80px 60px;
      background: black;
      position: absolute;
      top: 200px;
      width: 100%;
    
      @media (max-width: 1000px) {
        padding: 70px 30px;
      }
    
    Container:
      display: flex;
      flex-direction: column;
      justify-content: center;
      max-width: 1000px;
      margin: 0 auto;
    
    Column:
      display: flex;
      flex-direction: column;
      text-align: left;
      margin-left: 60px;
    
    Row:
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(185px, 1fr));
      grid-gap: 20px;
    
      @media (max-width: 1000px) {
        grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
      }
    
    FooterLink:
      color: #fff;
      margin-bottom: 20px;
      font-size: 18px;
      text-decoration: none;
    
      &:hover {
        color: green;
        transition: 200ms ease-in;
      }
    
    Heading:
      font-size: 24px;
      color: #fff;
      margin-bottom: 40px;
      font-weight: bold;
    

    `);

  const [showToast, setShowToast] = useState(false);

  const handleCopy = () => {
    setShowToast(true);
  };

  return (
    <div className="w-full md:w-1/2 p-4 mx-auto">
    <div className="bg-white shadow-md rounded px-4 py-4">
      <h1 className="flex text-lg font-bold mb-4">
      <img src="https://api.iconify.design/ph:terminal-window.svg?color=%231c1c1c" alt="code" className='w-5 h-5 mt-1 mr-2' />
        JSX Code for Footer</h1>
      <pre className="text-sm text-black whitespace-pre-wrap overflow-x-auto border rounded-lg p-2">
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

export default CssCopy;
