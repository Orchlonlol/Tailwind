import React, { useState } from "react";
import Header from "./header";
import Footer from "./footer";
import ArticleCard from "./articleCard";

export default function Page() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="flex flex-col h-screen">
      <Header />

      <div className="flex flex-1">
        
        <aside
          className={`${
            sidebarOpen ? "w-64" : "w-16"
          } bg-gray-100 border-r p-4 transition-all duration-300`}
        >
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="mb-4 p-2 bg-gray-200 rounded w-full text-center"
          >
            {sidebarOpen ? "Collapse" : "Expand"}
          </button>
          <nav className="flex flex-col space-y-2">
            <a href="#" className="p-2 rounded hover:bg-gray-200">
              Dashboard
            </a>
            <a href="#" className="p-2 rounded hover:bg-gray-200">
              Analytics
            </a>
            <a href="#" className="p-2 rounded hover:bg-gray-200">
              Settings
            </a>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6 bg-white">
          <h2 className="text-2xl font-bold mb-4">Main Content Area</h2>
          <div className="grid grid-cols-3 gap-4">
            <ArticleCard title="Widget 1" content="Some content here" />
            <ArticleCard title="Widget 2" content="Some content here" />
            <ArticleCard title="Widget 3" content="Some content here" />
          </div>
        </main>
      </div>

      <Footer />
    </div>
  );
}
