import React from "react";

type FileRow = { id: string; name: string; size?: string };

const mock: FileRow[] = [
  { id: "1", name: "document.pdf", size: "120 KB" },
  { id: "2", name: "image.png", size: "450 KB" }
];

export default function FileCenterTable() {
  return (
    <table>
      <thead><tr><th>Name</th><th>Size</th></tr></thead>
      <tbody>
        {mock.map(f => (
          <tr key={f.id}><td>{f.name}</td><td>{f.size}</td></tr>
        ))}
      </tbody>
    </table>
  );
}



