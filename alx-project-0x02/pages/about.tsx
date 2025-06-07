import React from 'react';
import Button from '@/components/common/Button';
import Header from '@/components/layout/Header';
const AboutPage = () => {
  return (
    <div className="p-4">
            <Header />
      <div className="flex gap-4 mb-4">
        <Button size="small" shape="rounded-sm" />
        <Button size="medium" shape="rounded-md" />
        <Button size="large" shape="rounded-full" />
      </div>
    </div>
  );
};

export default AboutPage;