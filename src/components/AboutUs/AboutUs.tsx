import React from 'react';

const AboutUs: React.FC = () => (
  <div className="d-flex justify-content-center mt-5">
    <div className="card" style={{ width: '18rem' }}>
      <img src="https://via.placeholder.com/150" className="card-img-top" alt="About Us" />
      <div className="card-body">
        <h5 className="card-title">About Us</h5>
        <p className="card-text">We deliver quality software solutions to our clients.</p>
      </div>
    </div>
  </div>
);

export default AboutUs;
