// pages/home.tsx
import React from 'react';
import Card from '../components/common/Card';

const HomePage = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-8">Card Component Demo</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card
          title="First Card"
          content="This is the content for the first card component."
          className="border-l-4 border-blue-500"
        />
        
        <Card
          title="Second Card"
          content="Different content for the second card."
          className="bg-gray-50"
        />
        
        <Card
          title="Third Card"
          content="Yet another card with unique content."
        />
      </div>
    </div>
  );
};

export default HomePage;