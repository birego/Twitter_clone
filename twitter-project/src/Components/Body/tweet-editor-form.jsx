export default function Form() {
  return (
    <div className="tweet-edit-form">
      <div>
        <input
          className="tweet-editor-input"
          type="text"
          placeholder="What's happening?"
        />
      </div>
      <div className="tweet-editor-buttons">

        <div className="tweet-editor-actions">
          <svg
            width="34"
            height="34"
            viewBox="0 0 34 34"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="34" height="34" rx="17" fill="black" />
            <path
              d="M23.4583 8.66667H10.5416C9.50829 8.66667 8.66663 9.50834 8.66663 10.5417V23.4583C8.66663 24.4917 9.50829 25.3333 10.5416 25.3333H23.4583C24.4916 25.3333 25.3333 24.4917 25.3333 23.4583V10.5417C25.3333 9.50834 24.4916 8.66667 23.4583 8.66667ZM10.5416 9.91667H23.4583C23.8025 9.91667 24.0833 10.1975 24.0833 10.5417V18.605L20.8683 15.39C20.7516 15.2733 20.5933 15.2067 20.4266 15.2067H20.4241C20.2575 15.2067 20.0966 15.2733 19.9808 15.3933L16.3833 19.0467L14.8725 17.5417C14.7558 17.425 14.5975 17.3583 14.4308 17.3583C14.27 17.3333 14.1016 17.425 13.985 17.5475L9.91663 21.7017V10.5417C9.91663 10.1975 10.1975 9.91667 10.5416 9.91667ZM9.92163 23.4833L14.4366 18.8717L19.6716 24.0833H10.5416C10.2066 24.0833 9.93579 23.815 9.92163 23.4833ZM23.4583 24.0833H21.4416L17.2691 19.9275L20.4291 16.7192L24.0833 20.3725V23.4583C24.0833 23.8025 23.8025 24.0833 23.4583 24.0833Z"
              fill="#1D9BF0"
            />
            <path
              d="M14.39 15.2092C15.0997 15.2092 15.675 14.6339 15.675 13.9242C15.675 13.2145 15.0997 12.6392 14.39 12.6392C13.6803 12.6392 13.105 13.2145 13.105 13.9242C13.105 14.6339 13.6803 15.2092 14.39 15.2092Z"
              fill="#1D9BF0"
            />
          </svg>
          <svg
            width="34"
            height="34"
            viewBox="0 0 34 34"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="34" height="34" rx="17" fill="black" />
            <path
              d="M22.8333 15.75V14.3333H19.1666V19.6667H20.5833V18H22.2499V16.5833H20.5833V15.75H22.8333ZM16.7499 14.3333H18.1666V19.6667H16.7499V14.3333ZM13.7499 15.6667C14.0833 15.6667 14.4999 15.8333 14.7499 16.0833L15.7499 15.25C15.2499 14.6667 14.4999 14.3333 13.7499 14.3333C12.2499 14.3333 11.0833 15.5 11.0833 17C11.0833 18.5 12.2499 19.6667 13.7499 19.6667C14.5833 19.6667 15.2499 19.3333 15.7499 18.75V16.6667H13.4166V17.6667H14.4166V18.1667C14.2499 18.25 13.9999 18.3333 13.7499 18.3333C12.9999 18.3333 12.4166 17.75 12.4166 17C12.4166 16.3333 12.9999 15.6667 13.7499 15.6667Z"
              fill="#1D9BF0"
            />
            <path
              d="M24.0833 8.68333H9.91663C8.88329 8.68333 8.04163 9.5225 8.04163 10.5558V23.4783C8.04163 24.51 8.88329 25.35 9.91663 25.35H24.0833C25.1166 25.35 25.9583 24.51 25.9583 23.4783V10.5558C25.9583 9.5225 25.1166 8.68333 24.0833 8.68333ZM24.7083 23.4783C24.7083 23.82 24.4283 24.1 24.0833 24.1H9.91663C9.57163 24.1 9.29163 23.82 9.29163 23.4783V10.5558C9.29163 10.2125 9.57163 9.93333 9.91663 9.93333H24.0833C24.4283 9.93333 24.7083 10.2125 24.7083 10.5558V23.4783Z"
              fill="#1D9BF0"
            />
          </svg>
          <svg
            width="34"
            height="34"
            viewBox="0 0 34 34"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="34" height="34" rx="17" fill="black" />
            <path
              d="M23.8516 14.6333H22.74C22.7525 14.5583 22.7633 14.4817 22.7633 14.4025V12.475C22.7633 11.6583 22.0991 10.9942 21.2816 10.9942H9.91663V9.79834C9.91663 9.45334 9.63663 9.17334 9.29163 9.17334C8.94663 9.17334 8.66663 9.45334 8.66663 9.79834V24.3583C8.66663 24.7042 8.94663 24.9833 9.29163 24.9833C9.63663 24.9833 9.91663 24.7042 9.91663 24.3583V23.1633H18.7133C19.53 23.1633 20.195 22.4992 20.195 21.6825V19.755C20.195 19.6758 20.1833 19.5992 20.1716 19.5233H23.8525C24.6691 19.5233 25.3341 18.8583 25.3341 18.0417V16.1167C25.3341 15.2975 24.67 14.6333 23.8525 14.6333H23.8516ZM21.2833 12.2442C21.41 12.2442 21.5141 12.3475 21.5141 12.475V14.4C21.5141 14.5283 21.41 14.6333 21.2825 14.6333H9.91663V12.2417H21.2833V12.2442ZM18.9441 19.7558V21.6825C18.9441 21.81 18.84 21.9133 18.7125 21.9133H9.91663V19.5233H18.7133C18.8408 19.5233 18.9441 19.6283 18.9441 19.7567V19.7558ZM24.0833 18.0417C24.0833 18.1692 23.9791 18.2725 23.8516 18.2725H9.91663V15.8833H23.8516C23.9791 15.8833 24.0833 15.9867 24.0833 16.1142V18.0417Z"
              fill="#1D9BF0"
            />
          </svg>
          <svg
            width="34"
            height="34"
            viewBox="0 0 34 34"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="34" height="34" rx="17" fill="black" />
            <path
              d="M17 25.9583C12.06 25.9583 8.04163 21.94 8.04163 17C8.04163 12.06 12.06 8.04167 17 8.04167C21.94 8.04167 25.9583 12.06 25.9583 17C25.9583 21.94 21.94 25.9583 17 25.9583ZM17 9.29167C12.75 9.29167 9.29163 12.75 9.29163 17C9.29163 21.25 12.75 24.7083 17 24.7083C21.25 24.7083 24.7083 21.25 24.7083 17C24.7083 12.75 21.25 9.29167 17 9.29167Z"
              fill="#1D9BF0"
            />
            <path
              d="M16.9999 21.2625C15.4233 21.2625 13.9724 20.4708 13.1199 19.1425C12.9333 18.8525 13.0174 18.4675 13.3083 18.28C13.5983 18.0917 13.9849 18.1767 14.1716 18.4683C14.7941 19.4367 15.8516 20.0142 17.0008 20.0142C18.1499 20.0142 19.2074 19.4367 19.8308 18.4692C20.0174 18.1775 20.4041 18.0942 20.6941 18.2817C20.9858 18.4683 21.0691 18.855 20.8824 19.145C20.0283 20.4733 18.5774 21.2658 17.0008 21.2658L16.9999 21.2625Z"
              fill="#1D9BF0"
            />
            <path
              d="M19.2816 16.1133C19.9618 16.1133 20.5133 15.5619 20.5133 14.8817C20.5133 14.2014 19.9618 13.65 19.2816 13.65C18.6014 13.65 18.0499 14.2014 18.0499 14.8817C18.0499 15.5619 18.6014 16.1133 19.2816 16.1133Z"
              fill="#1D9BF0"
            />
            <path
              d="M14.7182 16.1133C15.3985 16.1133 15.9499 15.5619 15.9499 14.8817C15.9499 14.2014 15.3985 13.65 14.7182 13.65C14.038 13.65 13.4866 14.2014 13.4866 14.8817C13.4866 15.5619 14.038 16.1133 14.7182 16.1133Z"
              fill="#1D9BF0"
            />
          </svg>
          <svg
            width="34"
            height="34"
            viewBox="0 0 34 34"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="34" height="34" rx="17" fill="black" />
            <g clip-path="url(#clip0_14_438)">
              <path
                d="M-24.5833 22C-24.6666 21.9167 -24.6666 21.9167 -24.6666 21.8333C-24.5833 21.8333 -24.5833 21.9167 -24.5833 22ZM22 8.83334H20.9167V8.58334C20.9167 8.25001 20.6667 7.91667 20.25 7.91667C19.9167 7.91667 19.5834 8.16667 19.5834 8.58334V8.83334H13.4167V8.58334C13.4167 8.25001 13.1667 7.91667 12.75 7.91667C12.4167 7.91667 12.0834 8.16667 12.0834 8.58334V8.83334H11C9.83337 8.83334 8.91671 9.75001 8.91671 10.9167V21.8333C8.91671 23 9.83337 23.9167 11 23.9167H13.4167C13.75 23.9167 14.0834 23.6667 14.0834 23.25C14.0834 22.9167 13.8334 22.5833 13.4167 22.5833H11C10.5 22.5833 10.1667 22.1667 10.1667 21.75V13.5833C10.1667 13.3333 10.5 13 11 13H22C22.5 13 22.8334 13.3333 22.8334 13.5833V15.0833C22.8334 15.4167 23.0834 15.75 23.5 15.75C23.8334 15.75 24.1667 15.5 24.1667 15.0833V10.9167C24.0834 9.75001 23.1667 8.83334 22 8.83334ZM22.8334 11.9167C22.5834 11.8333 22.25 11.75 22 11.75H11C10.6667 11.75 10.4167 11.8333 10.1667 11.9167V10.9167C10.1667 10.4167 10.5834 10.0833 11 10.0833H12.0834V10.5C12.0834 10.8333 12.3334 11.1667 12.75 11.1667C13.0834 11.1667 13.4167 10.9167 13.4167 10.5V10.0833H19.6667V10.5C19.6667 10.8333 19.9167 11.1667 20.3334 11.1667C20.6667 11.1667 21 10.9167 21 10.5V10.0833H22C22.5 10.0833 22.8334 10.5 22.8334 10.9167V11.9167Z"
                fill="#1D9BF0"
              />
              <path
                d="M19.9167 15.6667C17.0833 15.6667 14.75 18 14.75 20.8333C14.75 23.6667 17.0833 26 19.9167 26C22.75 26 25.0833 23.6667 25.0833 20.8333C25.0833 18 22.75 15.6667 19.9167 15.6667ZM19.9167 24.8333C17.75 24.8333 16 23.0833 16 20.9167C16 18.75 17.75 17 19.9167 17C22.0833 17 23.8333 18.75 23.8333 20.9167C23.8333 23 22.0833 24.8333 19.9167 24.8333Z"
                fill="#1D9BF0"
              />
              <path
                d="M22.75 22.5833C22.6667 22.75 22.4167 22.9167 22.25 22.9167C22.1667 22.9167 22 22.9167 21.9167 22.8333L19.3334 21.1667V18.6667C19.3334 18.3333 19.5834 18 20 18C20.3334 18 20.6667 18.25 20.6667 18.6667V20.5L22.6667 21.75C22.8334 21.9167 22.9167 22.25 22.75 22.5833Z"
                fill="#1D9BF0"
              />
            </g>
            <defs>
              <clipPath id="clip0_14_438">
                <rect
                  width="20"
                  height="20"
                  fill="white"
                  transform="translate(7 7)"
                />
              </clipPath>
            </defs>
          </svg>
    
        </div>
        <button className="button">tweet</button>
      </div>
      
    </div>
  );
}
