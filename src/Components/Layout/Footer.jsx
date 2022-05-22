import React from "react";

function Footer() {
  return (
    <footer className="position-absolute w-100 mt-4 bottom-0 py-3 d-flex justify-content-center align-items-center">
      <h5> copyright of Esquire Yusuf &copy; {new Date()?.getFullYear()}</h5>
    </footer>
  );
}

export default Footer;
