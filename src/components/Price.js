import React, { useState, useEffect } from 'react';

const Price = () => {
  const [selectedPackage, setSelectedPackage] = useState(null);

  const handleSelectPackage = (packageName) => {
    setSelectedPackage(packageName);
    setTimeout(() => {
      setSelectedPackage(null);
    }, 1000);
  };

  useEffect(() => {
    if (selectedPackage) {
      setTimeout(() => {
        setSelectedPackage(null);
      }, 1000);
    }
  }, [selectedPackage]);

  return (
    <div className="main">
      <section className="price" id="price">
        <h1 className="heading"> our <span>price</span> </h1>
        <div className="box-container">
          <div className="box">
            <h3 className="title">Training Workshops & Seminars</h3>
            <h3 className="amount">Rs. 30,000</h3>
            <ul>
              <li><i className="fas fa-check"></i> full services </li>
              <li> <i className="fas fa-check"></i> decorations </li>
              <li> <i className="fas fa-check"></i> photos </li>
              <li> <i className="fas fa-check"></i> food and drinks </li>
              <li> <i className="fas fa-check"></i> invitation card </li>
            </ul>
            <button onClick={() => handleSelectPackage("Training Workshops & Seminars")} className="btn">Select this package</button>
          </div>
          <div className="box">
            <h3 className="title">charity & fundraising events</h3>
            <h3 className="amount">Rs. 45,000</h3>
            <ul>
              <li><i className="fas fa-check"></i> full services </li>
              <li> <i className="fas fa-check"></i> decorations </li>
              <li> <i className="fas fa-check"></i> photos </li>
              <li> <i className="fas fa-check"></i> food and drinks </li>
              <li> <i className="fas fa-check"></i> invitation card </li>
            </ul>
            <button onClick={() => handleSelectPackage("charity & fundraising events")} className="btn">Select this package</button>
          </div>
          <div className="box">
            <h3 className="title">Awards Ceremonies</h3>
            <h3 className="amount">Rs. 60,000</h3>
            <ul>
              <li><i className="fas fa-check"></i> full services </li>
              <li> <i className="fas fa-check"></i> decorations </li>
              <li> <i className="fas fa-check"></i> photos </li>
              <li> <i className="fas fa-check"></i> food and drinks </li>
              <li> <i className="fas fa-check"></i> invitation card </li>
            </ul>
            <button onClick={() => handleSelectPackage("Awards Ceremonies")} className="btn">Select this package</button>
          </div>
          <div className="box">
            <h3 className="title">Board Meetings and Shareholder Meetings</h3>
            <h3 className="amount">Rs. 60,000</h3>
            <ul>
              <li><i className="fas fa-check"></i> full services </li>
              <li> <i className="fas fa-check"></i> decorations </li>
              <li> <i className="fas fa-check"></i> photos </li>
              <li> <i className="fas fa-check"></i> food and drinks </li>
              <li> <i className="fas fa-check"></i> invitation card </li>
            </ul>
            <button onClick={() => handleSelectPackage("Board Meetings and Shareholder Meetings")} className="btn">Select this package</button>
          </div>
          <div className="box">
            <h3 className="title">conferences & seminars</h3>
            <h3 className="amount">Rs. 120,000</h3>
            <ul>
              <li><i className="fas fa-check"></i> full services </li>
              <li> <i className="fas fa-check"></i> decorations </li>
              <li> <i className="fas fa-check"></i> photos </li>
              <li> <i className="fas fa-check"></i> food and drinks </li>
              <li> <i className="fas fa-check"></i> invitation card </li>
            </ul>
            <button onClick={() => handleSelectPackage("conferences & seminars")} className="btn">Select this package</button>
          </div>

          

        </div>
      </section>
      {selectedPackage && (
        <div className="popup">
          <p>Your Package "{selectedPackage}" is selected!</p>
        </div>
      )}
    </div>
  );
}

export default Price;
