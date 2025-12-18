/* eslint-disable @next/next/no-img-element */
import React from 'react';
import '@/components/File.css'; // Import the CSS for styling
// import mriImage from './your-mri-image-path'; // Import the MRI image

const MRIAlzDetection = () => {
  return (
    <div className="mri-section">
      <div className="mri-image">
        <img src="https://images.pexels.com/photos/7089331/pexels-photo-7089331.jpeg" alt="MRI Scan" />
      </div>
      <div className="mri-content">
        <h2>MRI-Based Alzheimer’s Detection</h2>
        <div className="mri-feature">
          <h3>AI-Powered Diagnostics</h3>
          <p>
            Our AI analyzes MRI scans to detect early signs of Alzheimer’s, providing accurate and timely diagnostic insights.
          </p>
        </div>
        <div className="mri-feature">
          <h3>Predictive Accuracy</h3>
          <p>
            Leveraging advanced algorithms, we offer predictive results that help identify potential Alzheimer’s onset.
          </p>
        </div>
        <div className="mri-feature">
          <h3>Data-Driven Insights</h3>
          <p>
            Detailed reports with data-driven insights to assist healthcare professionals in creating effective treatment plans.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MRIAlzDetection;
