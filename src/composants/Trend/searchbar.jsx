import React from "react";

export default function SearchBar() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "6%",
        backgroundColor: "#202327",
        padding: "0  2vw",
        width: "225px",
        height: "30px",
        borderRadius: "30px",
        margin: "2vh",
      }}
    >
      <svg
        width="25"
        height="25"
        viewBox="0 0 18 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M16.1475 15.3525L13.4025 12.6075C14.3963 11.43 15 9.9105 15 8.25C15 4.5225 11.9775 1.5 8.25 1.5C4.5225 1.5 1.5 4.5225 1.5 8.25C1.5 11.9775 4.5225 15 8.25 15C9.91125 15 11.43 14.397 12.606 13.4025L15.351 16.1475C15.4613 16.257 15.606 16.3125 15.7485 16.3125C15.891 16.3125 16.0373 16.2578 16.146 16.1475C16.3673 15.9278 16.3673 15.5722 16.1475 15.3525ZM2.625 8.25C2.625 5.14875 5.14875 2.625 8.25 2.625C11.3513 2.625 13.875 5.14875 13.875 8.25C13.875 11.3512 11.3513 13.875 8.25 13.875C5.14875 13.875 2.625 11.3512 2.625 8.25Z"
          fill="#6E767D"
        />
      </svg>

      <input
        className="input"
        type="text"
        placeholder="Search"
        style={{
          backgroundColor: "transparent",
          border: "none",
          height: "3.5vw",
          fontSize: "15px",
          color: "gray",
          outline: "none",
        }}
      />
    </div>
  );
}
