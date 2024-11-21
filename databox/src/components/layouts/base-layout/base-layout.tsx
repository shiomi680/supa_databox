import React from "react";
import "./layout.css"; // Import the CSS file for styles

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
}

export const Layout: React.FC<LayoutProps> = ({ children, title }) => {
  return (
    <div className="layout">
      <header className="layout-header">
        <h1>{title}</h1>
      </header>
      <main className="layout-main">{children}</main>
      <footer className="layout-footer">
        <p>© 2024 databox. All rights reserved.</p>
      </footer>
    </div>
  );
};
