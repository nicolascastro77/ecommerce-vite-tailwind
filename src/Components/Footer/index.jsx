import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-100  text-black py-2 w-full fixed bottom-0">
      <div className="container mx-auto text-center">
        <p className="text-sm">
          Proyecto realizado por Nicolas Castro &nbsp;
          <a href="mailto:diegonicolas.castrop@gmail.com" className="underline">
            diegonicolas.castrop@gmail.com
          </a>
          &nbsp; Curso de React.js con Vite.js y TailwindCSS
          <span role="img" aria-label="Corazones" className="mx-1">
            ❤️
          </span>
          <span role="img" aria-label="Desarrollador Web" className="mx-1">
            👨‍💻
          </span>
          &nbsp; Hecho con amor
        </p>
      </div>
    </footer>
  );
};

export default Footer;
