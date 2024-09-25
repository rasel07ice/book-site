import React from "react";

const Footer = () => {
  return (
    <div className="bg-backSecondary py-8">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 text-left gap-y-3">
        <div className="col-span-2">
          <div className="flex flex-row items-center gap-2">
            <img
              className="size-16 p-2 "
              src="../../../public/logo.png"
              alt="logo"
            />
            <p className="text-xl font-semibold font-Ubuntu mb-3">
              Risan Book Corner
            </p>
          </div>

          <address>
            <p>
              <i className="fa-solid fa-location-dot text-primary"></i> Tetulia
              chowrasta, Tetulia, Panchagarh
            </p>
          </address>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-6">Information</h3>
          <p>Home</p>
          <p>About</p>
          <p>Blog</p>
          <p>FAQ</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-6">Categories</h3>
          <p>Novel</p>
          <p>Poem</p>
          <p>Mystry</p>
          <p>Thriller</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-6">Social</h3>
          <p>
            <span>
              <i className="fa-brands fa-facebook-f"></i> Facebook
            </span>
          </p>
          <p>
            <span>
              <i className="fa-brands fa-twitter"></i> Twitter
            </span>
          </p>
          <p>
            <span>
              <i className="fa-brands fa-instagram"></i> Instragram
            </span>
          </p>
          <p>
            <span>
              <i className="fa-brands fa-whatsapp"></i> WhatsApp
            </span>
          </p>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-6">Help</h3>
          <p>Contact</p>
          <p>Help Center</p>
          <p>Terms of Services</p>
          <p>Privacy Policy</p>
        </div>
      </div>
      <hr className="w-10/12 mx-auto mt-4" />
      <div className="text-left py-6">
        <p>
          &copy;2024 Design by{" "}
          <span className="italic font-Ubuntu">Saren Tech</span>
        </p>
      </div>
    </div>
  );
};

export default Footer;
