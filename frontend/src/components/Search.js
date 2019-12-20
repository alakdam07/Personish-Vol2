import React from "react";

export const Search = () => {
  return (
    <div style={{ position: "fixed", top: "40%", left: "45%" }}>
      <input
        placeholder="Type the person Alak, Silja"
        style={{
          margin: "15px 0",
          padding: "15px 10px",
          width: "100%",
          outline: "none",
          border: "1px solid #bbb",
          borderRadius: "20px",
          display: "inline-block"
        }}
      />
    </div>
  );
};

export default Search;
