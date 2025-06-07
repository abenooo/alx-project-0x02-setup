import React from 'react';
import Button from '../components/common/Button';

const AboutPage = () => {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-8">Button Component Demo</h1>
      
      <div className="space-y-6">
        <section>
          <h2 className="text-xl font-semibold mb-4">Size Variants</h2>
          <div className="flex items-center space-x-4">
            <Button size="small" onClick={() => alert('Small button clicked!')}>
              Small Button
            </Button>
            <Button size="medium" onClick={() => alert('Medium button clicked!')}>
              Medium Button
            </Button>
            <Button size="large" onClick={() => alert('Large button clicked!')}>
              Large Button
            </Button>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">Shape Variants</h2>
          <div className="flex items-center space-x-4">
            <Button shape="rounded-sm" className="bg-blue-600 text-white hover:bg-blue-700">
              Slightly Rounded
            </Button>
            <Button shape="rounded-md" className="bg-green-600 text-white hover:bg-green-700">
              Medium Rounded
            </Button>
            <Button shape="rounded-full" className="bg-purple-600 text-white hover:bg-purple-700">
              Fully Rounded
            </Button>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">Combination Examples</h2>
          <div className="flex items-center space-x-4">
            <Button 
              size="large" 
              shape="rounded-full" 
              className="bg-red-500 text-white hover:bg-red-600"
            >
              Big Round Button
            </Button>
            <Button 
              size="small" 
              shape="rounded-sm" 
              className="bg-gray-200 hover:bg-gray-300"
            >
              Small Square
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;