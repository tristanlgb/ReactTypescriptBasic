import React from 'react';

const Contact: React.FC = () => (
  <div className="d-flex justify-content-center mt-5">
    <div className="card" style={{ width: '18rem' }}>
      <img src="https://via.placeholder.com/150" className="card-img-top" alt="Contact" />
      <div className="card-body">
        <h5 className="card-title">Contact</h5>
        <p className="card-text">Email: contact@example.com</p>
        <p className="card-text">Phone: +123 456 7890</p>
      </div>
    </div>
  </div>
);

export default Contact;

