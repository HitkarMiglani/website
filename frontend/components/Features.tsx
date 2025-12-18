/* eslint-disable @next/next/no-img-element */
import React from 'react';
import './CoreFeatures.css'; // Custom CSS file for styling
// import featureImage from '@/images/photo.jpeg'; // Replace with the actual image path
import Image from 'next/image';
import featureImage from '@/images/photo.jpeg';

const CoreFeatures = () => {
  return (
    <div className="core-features-container bg-black-100 ">
        <div className="features-image">
          <Image 
            src={featureImage}
            alt="Core Features"
            
          />
        </div>
        <div className="features-list font-mono from-neutral-100">
          <h2>Our Core Features</h2>
          <ul>
            <li>
              <h3>MRI-Based Alzheimer’s Detection</h3>
              <p>Utilize AI to analyze MRI scans, offering predictive diagnostic results.</p>
            </li>
            <li>
              <h3>Symptom and Cognitive Function Monitoring</h3>
              <p>Track symptoms and cognitive decline with interactive tools and visual trends.</p>
            </li>
            <li>
              <h3>Memory Aids and Reminders</h3>
              <p>Personalized reminders for daily tasks to assist Alzheimer’s patients.</p>
            </li>
            <li>
              <h3>Caregiver Support</h3>
              <p>Access resources, forums, and educational materials tailored for caregivers.</p>
            </li>
          </ul>
        </div>
    </div>
  );
};

export default CoreFeatures;

