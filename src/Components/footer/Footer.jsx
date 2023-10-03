import './Footer.css'
import CodeCopy from './CodeCopy'

function Footer() {

  const jsxCode = `
        <footer>
        <footer>
        <div className="container flex footer-container">
          <div className="link-column flex">
            <h4>Product</h4>
            <a href="#" className="hover-links">Overview</a>
            <a href="#" className="hover-links">Pricing</a>
            <a href="#" className="hover-links">Usability Hub</a>
            <a href="#" className="hover-links">Customer Page</a>
            <a href="#" className="hover-links">Status Page </a>

          </div>
          <div className="link-column flex">
            <h4>Product</h4>
            <a href="#" className="hover-links">Overview</a>
            <a href="#" className="hover-links">Pricing</a>
            <a href="#" className="hover-links">Usability Hub</a>
            <a href="#" className="hover-links">Customer Page</a>
            <a href="#" className="hover-links">Status Page </a>

          </div>
          <div className="link-column flex">
            <h4>Product</h4>
            <a href="#" className="hover-links">Overview</a>
            <a href="#" className="hover-links">Pricing</a>
            <a href="#" className="hover-links">Usability Hub</a>
            <a href="#" className="hover-links">Customer Page</a>
            <a href="#" className="hover-links">Status Page </a>

          </div>
        </div>
      </footer>
      <div className="subfooter">
        <div className="container flex subfooter-container">
          <a href="#" className="hover-links">Privacy policy</a> <a href="#" className="hover-links">Term & Condition</a>
          <a href="#" className="hover-links">Security Information</a>

          <a href="#" className="hover-links"><i className="fa-brands fa-facebook"></i></a>
          <a href="#" className="hover-links"><i className="fa-brands fa-twitter"></i></a>
          <a href="#" className="hover-links"><i className="fa-brands fa-instagram"></i></a>
          <a href="#" className="hover-links"><i className="fa-brands fa-youtube"></i></a>

        </div>
      </div>
      </footer>
  `;

  const cssCode = `
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&family=Roboto:wght@400;700&display=swap');

  :root {
    --primary-text-color: #183b56;
    --secondary-text-color: #577592;
    --accent-color: #2294ed;
    --accent-color-dark: #1d69a3;
    --padding-inline-section: 20px;
  }
  
  body {
    font-family: 'Poppins', sans-serif;
    color: var(--primary-text-color);
  
  }
  .container {
    max-width: 1180px;
    margin-inline: auto;
    overflow: hidden;
    padding-inline: var(--padding-inline-section);
  }
  
  .flex {
    display: flex;
    align-items: center;
  }
  
  .hover-links {
    color: var(--paccent-color-dark);
    transition: 0.2s ease-out;
  
  }
  
  .hover-links:hover {
    color: var(--accent-color);
  }
  
  footer {
    padding-block: 80px;
    background-color: #ebf2fa;
  }
  
  .link-column {
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
  
  }
  
  .footer-container {
    align-items: flex-start;
    justify-content: space-evenly;
  }
  
  .subfooter {
    background-color: #b9cde4;
    padding: var(--padding-inline-section);
  }
  
  .subfooter-container {
    justify-content: center;
    gap: 30px;
    flex-wrap: wrap;
  }
  
  
  `;


  return (
    <footer>
      <footer>
        <div className="container flex footer-container">
          <div className="link-column flex">
            <h4>Product</h4>
            <a href="#" className="hover-links">Overview</a>
            <a href="#" className="hover-links">Pricing</a>
            <a href="#" className="hover-links">Usability Hub</a>
            <a href="#" className="hover-links">Customer Page</a>
            <a href="#" className="hover-links">Status Page </a>

          </div>
          <div className="link-column flex">
            <h4>Product</h4>
            <a href="#" className="hover-links">Overview</a>
            <a href="#" className="hover-links">Pricing</a>
            <a href="#" className="hover-links">Usability Hub</a>
            <a href="#" className="hover-links">Customer Page</a>
            <a href="#" className="hover-links">Status Page </a>

          </div>
          <div className="link-column flex">
            <h4>Product</h4>
            <a href="#" className="hover-links">Overview</a>
            <a href="#" className="hover-links">Pricing</a>
            <a href="#" className="hover-links">Usability Hub</a>
            <a href="#" className="hover-links">Customer Page</a>
            <a href="#" className="hover-links">Status Page </a>

          </div>
        </div>
      </footer>
      <div className="subfooter">
        <div className="container flex subfooter-container">
          <a href="#" className="hover-links">Privacy policy</a> <a href="#" className="hover-links">Term & Condition</a>
          <a href="#" className="hover-links">Security Information</a>

          <a href="#" className="hover-links"><i className="fa-brands fa-facebook"></i></a>
          <a href="#" className="hover-links"><i className="fa-brands fa-twitter"></i></a>
          <a href="#" className="hover-links"><i className="fa-brands fa-instagram"></i></a>
          <a href="#" className="hover-links"><i className="fa-brands fa-youtube"></i></a>
        </div>
      </div>
      <div className=''>
        <CodeCopy code={jsxCode} label="JSX Code" />
        <CodeCopy code={cssCode} label="CSS Code" />
      </div>
    </footer>
  )
}

export default Footer