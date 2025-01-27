import React from 'react';

const Home: React.FC = () => (
  <div className="d-flex justify-content-center mt-5">
    <div className="card" style={{ width: '18rem' }}>
      <img src="https://via.placeholder.com/150" className="card-img-top" alt="Home" />
      <div className="card-body">
        <h5 className="card-title">Home</h5>
        <p className="card-text">Welcome to our SPA! This is the home page.</p>
      </div>
    </div>
  </div>
);

export default Home;
