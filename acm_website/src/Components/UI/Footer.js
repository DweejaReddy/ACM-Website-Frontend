import React from "react";
const Footer = () => {
  return (
    <footer className="text-center text-lg-start text-white mt-5" style={{ backgroundColor: "#1a5b75" }}>
      <section className="d-flex justify-content-between p-3" style={{ backgroundColor: "#1a5b75" }}>
        <div className="me-5">
          <h6>Get connected with us on social networks:</h6>
        </div>
        <div>
          <a href="/" className="text-white me-4">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="/" className="text-white me-4">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="/" className="text-white me-4">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="/" className="text-white me-4">
            <i className="fab fa-youtube"></i>
          </a>
        </div>
      </section>
      <section className="border">
        <div className="container text-center text-md-start mt-5">
          <div className="row mt-3">
            <div className="col-md-3 col-lg-4 col-xl-3 mb-4 d-lg-flex flex-lg-column">
              {/* <h6 className="text-uppercase fw-bold">ACM VNIT</h6> */}
              {/* <hr className="mt-0 d-inline-block mx-auto" style={{ width: "60px", backgroundColor: "#fff", height: "2px" }} /> */}
              <img src="https://drive.google.com/uc?export=view&id=1saqVt7YDhxYcamJFyhAt64elrxJ2DULg" alt="acm" width="400px" />
            </div>
            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold">Products</h6>
              <hr className="mt-0 d-inline-block mx-auto" style={{ width: "60px", backgroundColor: "#fff", height: "2px" }} />
              <ul className="list-unstyled">
                <li className="mb-2"><a href="#!" className="text-white">Contest</a></li>
                <li className="mb-2"><a href="#!" className="text-white">Contest</a></li>
                <li className="mb-2"><a href="#!" className="text-white">Contest</a> </li>
              </ul>
            </div>
            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold">Useful links</h6>
              <hr className="mt-0 d-inline-block mx-auto" style={{ width: "60px", backgroundColor: "#fff", height: "2px" }} />
              <ul className="list-unstyled">
                <li className="mb-2"><a href="#!" className="text-white">Codepen</a></li>
                <li className="mb-2"><a href="#!" className="text-white">Forum</a></li>
                <li className="mb-2"><a href="#!" className="text-white">Complier</a> </li>
              </ul>
            </div>
            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold">Contact</h6>
              <hr className="mt-0 d-inline-block mx-auto" style={{ width: "60px", backgroundColor: "#fff", height: "2px" }} />
              <ul className="list-unstyled">
                <li><i className="fas fa-home mr-3 mb-3"></i> ACM VNIT</li>
                <li><i className="fas fa-envelope mr-3 mb-3"></i> <a href="mailto:proclubvnit@gmail.com" style={{ color: "#fff" }}>proclubvnit @gmail.com</a></li>
                <li><i className="fas fa-phone mr-3 mb-3"></i> XXXX-XXXXX</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <div className="text-center p-3" style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}>
        © &nbsp;
        <a className="text-white" href="https://acm.vnit.com/">ACM VNIT CLUB</a>
      </div>
    </footer>
  );
};

export default Footer;
