import React from 'react';
import Navbar from './Navbar';

function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-6 md:px-6 lg:px-8">
        {children}
      </main>
    </div>
  );
}

export default Layout;