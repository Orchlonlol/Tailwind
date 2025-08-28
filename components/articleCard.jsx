import React from "react";

export default function ArticleCard({ title, content }) {
  return (
    <div className="p-4 bg-gray-50 rounded shadow hover:shadow-lg transition">
      <h3 className="text-lg font-bold mb-2">{title}</h3>
      <p className="text-gray-600">{content}</p>
    </div>
  );
}