import React from "react";

export default function FileCenterActions({ id }: { id?: string }) {
  return (
    <div className="file-actions">
      <button onClick={() => console.log("download", id)}>Download</button>
      <button onClick={() => console.log("delete", id)}>Delete</button>
    </div>
  );
}



