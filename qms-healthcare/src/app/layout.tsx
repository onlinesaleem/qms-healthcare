// src/app/layout.tsx
import { FC, ReactNode } from 'react';
import Header from '../components/Header';
import '../styles/globals.css';

const RootLayout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <Header />
        <main className="container">
          {children}
        </main>
        <footer>
          <p>&copy; 2024 QMS Healthcare. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
};

export default RootLayout;
