import React from 'react';
import './FAQ.css'; // Import the CSS for styling

const FAQ = () => {
  return (
    <div className='bg-black-100'>
    <div className="faq-container bg-black-100" >
      <h2>Frequently Asked Questions</h2>
      <div className="faq-item">
        <h3>❓ What is AlzCare?</h3>
        <p>
          AlzCare is an innovative platform that provides tools for Alzheimer’s detection, symptom monitoring, memory aids, and caregiver support.
        </p>
      </div>
      <hr />
      <div className="faq-item">
        <h3>❓ How does the MRI-Based Alzheimer’s Detection work?</h3>
        <p>
          Our AI analyzes MRI scans to detect early signs of Alzheimer’s, offering data-driven insights and predictive accuracy.
        </p>
      </div>
      <hr />
      <div className="faq-item">
        <h3>❓ Can I use AlzCare to track my symptoms?</h3>
        <p>
          Yes, AlzCare allows you to log symptoms and track cognitive decline over time with interactive tools.
        </p>
      </div>
      <hr />
      <div className="faq-item">
        <h3>❓ What support is available for caregivers?</h3>
        <p>
          AlzCare provides caregivers with educational resources, forums, and a support system to ease the burden of care.
        </p>
      </div>
    </div></div>
  );
};

export default FAQ;
