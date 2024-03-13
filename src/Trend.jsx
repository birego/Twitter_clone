export default function Trend() {
  return (
    <div className="trend">
      <div className="trend-column">
        <input type="text" placeholder="Search Twitter" />
      </div>

      <div className="trend-column trends">
        <div className="flex">
          <h3 style={{ marginLeft: 20 }}>Trends for your</h3>
          <svg
            style={{ marginTop: 22, marginLeft: 20 }}
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.0001 6.84167C8.25846 6.84167 6.8418 8.25834 6.8418 10C6.8418 11.7417 8.25846 13.1583 10.0001 13.1583C11.7418 13.1583 13.1585 11.7417 13.1585 10C13.1585 8.25834 11.7418 6.84167 10.0001 6.84167ZM10.0001 11.9083C8.94846 11.9083 8.0918 11.0533 8.0918 10C8.0918 8.94668 8.95013 8.09167 10.0001 8.09167C11.0501 8.09167 11.9085 8.94668 11.9085 10C11.9085 11.0533 11.0518 11.9083 10.0001 11.9083Z"
              fill="#EFF3F4"
            />
            <path
              d="M10.3 18.6459H9.69837C8.71254 18.6459 7.90337 17.9059 7.81337 16.9259L7.80171 16.8034C7.78087 16.5642 7.62921 16.3592 7.40837 16.2667C7.17004 16.1667 6.92337 16.2125 6.74337 16.3625L6.64671 16.4434C5.92337 17.0475 4.76921 16.9959 4.09671 16.3267L3.67171 15.9017C2.97504 15.2017 2.92504 14.1067 3.55504 13.3517L3.63671 13.2534C3.79171 13.0684 3.82837 12.8175 3.73837 12.5975C3.64671 12.3709 3.44004 12.2192 3.20004 12.1975L3.07504 12.1859C2.09171 12.0967 1.35254 11.2859 1.35254 10.3009V9.69919C1.35254 8.71335 2.09254 7.90419 3.07254 7.81419L3.20254 7.80252C3.44004 7.78169 3.64421 7.63002 3.73754 7.40835C3.82921 7.18335 3.79171 6.93085 3.63754 6.74585L3.55921 6.64919C2.92837 5.89252 2.97754 4.79669 3.67337 4.09919L4.10004 3.67252C4.77004 3.00252 5.92337 2.95169 6.65004 3.55585L6.74671 3.63752C6.92837 3.79085 7.18671 3.82919 7.40504 3.73919C7.63004 3.64585 7.78171 3.44085 7.80254 3.20335L7.81421 3.07585C7.90337 2.09252 8.71421 1.35419 9.69921 1.35419H10.3009C11.2867 1.35419 12.0959 2.09419 12.1859 3.07419L12.1975 3.20419C12.2184 3.44169 12.3692 3.64585 12.5909 3.73752C12.8217 3.83502 13.0742 3.78919 13.2525 3.64002L13.3525 3.55502C14.075 2.95252 15.2309 3.00335 15.9025 3.67169L16.3275 4.09835C17.0242 4.79669 17.0742 5.89252 16.4442 6.64835L16.3609 6.74669C16.2042 6.93002 16.1659 7.18169 16.2584 7.40335C16.3517 7.62835 16.5584 7.77835 16.7967 7.80169L16.9234 7.81335C17.9067 7.90252 18.6459 8.71335 18.6459 9.69835V10.3009C18.6459 11.2867 17.9059 12.0959 16.9259 12.1859L16.7967 12.1975C16.56 12.2175 16.355 12.3684 16.2634 12.5892C16.1692 12.8159 16.2075 13.0675 16.3609 13.2517L16.4442 13.3517C17.0742 14.1059 17.0242 15.2017 16.3275 15.9017L15.9025 16.3267C15.23 16.9967 14.0775 17.0467 13.3525 16.4434L13.2567 16.3634C13.0759 16.2109 12.815 16.1717 12.5984 16.2617C12.3709 16.3567 12.2192 16.5617 12.1984 16.8L12.1867 16.925C12.0975 17.9025 11.2867 18.6417 10.3017 18.6417L10.3 18.6459ZM7.15587 14.9625C7.40587 14.9625 7.65004 15.0125 7.88087 15.1084C8.53921 15.3817 8.98421 15.9867 9.04754 16.6884L9.05921 16.8109C9.09004 17.1442 9.36504 17.3942 9.70087 17.3942H10.3025C10.6359 17.3942 10.9109 17.1442 10.9425 16.8109L10.9542 16.6875C11.0175 15.9859 11.4625 15.3817 12.1142 15.1109C12.775 14.8359 13.5275 14.9592 14.0584 15.4025L14.1525 15.4809C14.3009 15.6042 14.4575 15.6309 14.5634 15.6309C14.735 15.6309 14.8967 15.5642 15.0184 15.4417L15.4434 15.0167C15.68 14.78 15.6975 14.4084 15.4834 14.1517L15.4 14.0517C14.9484 13.51 14.8359 12.7684 15.1067 12.1159C15.3784 11.4575 15.9834 11.0159 16.685 10.9517L16.8142 10.94C17.145 10.9092 17.3975 10.6342 17.3975 10.2984V9.69669C17.3975 9.36335 17.145 9.08835 16.8125 9.05669L16.6859 9.04502C15.9809 8.98002 15.3775 8.53669 15.1067 7.88419C14.835 7.22752 14.9484 6.48585 15.4009 5.94502L15.4842 5.84669C15.6984 5.58835 15.6809 5.21669 15.4442 4.98002L15.0192 4.55502C14.8975 4.43252 14.7359 4.36585 14.5642 4.36585C14.4584 4.36585 14.3017 4.39252 14.1542 4.51585L14.0542 4.59919C13.5259 5.03919 12.7625 5.15752 12.1192 4.89419C11.4625 4.62169 11.0192 4.01752 10.955 3.31419L10.9434 3.18502C10.9142 2.85419 10.6392 2.60169 10.3042 2.60169H9.70171C9.36837 2.60169 9.09337 2.85419 9.06171 3.18669L9.05004 3.31335C8.98671 4.01585 8.54337 4.62002 7.89171 4.89085C7.23587 5.16252 6.48087 5.04335 5.95004 4.59919L5.85171 4.51919C5.70171 4.39419 5.54504 4.36919 5.43921 4.36919C5.26754 4.36919 5.10587 4.43585 4.98421 4.55752L4.55754 4.98252C4.32254 5.21919 4.30504 5.59085 4.51921 5.84752L4.60254 5.94585C5.05254 6.49002 5.16671 7.23252 4.89587 7.88335C4.62337 8.54002 4.01921 8.98335 3.31671 9.04752L3.18671 9.05919C2.85587 9.09002 2.60337 9.36502 2.60337 9.70085V10.3025C2.60337 10.6359 2.85587 10.9109 3.18837 10.9425L3.31337 10.9542C4.02004 11.0192 4.62421 11.4642 4.89421 12.1175C5.16504 12.7725 5.05254 13.5134 4.60004 14.055L4.52004 14.1509C4.30337 14.4092 4.32171 14.7809 4.55837 15.0175L4.98337 15.4425C5.10504 15.565 5.26671 15.6317 5.43837 15.6317C5.54421 15.6317 5.70087 15.6067 5.84837 15.4817L5.94504 15.4017C6.28337 15.1217 6.71421 14.965 7.15587 14.965V14.9625Z"
              fill="#EFF3F4"
            />
          </svg>
        </div>
        <div className="flex">
          <div className="flex">
            <p style={{ marginLeft: 20, fontSize: 14 }}>Trending turkey</p>
            <svg
              style={{ marginTop: 16, marginLeft: 20 }}
              width="42"
              height="18"
              viewBox="0 0 42 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="42" height="18" fill="#202327" />
              <path
                d="M11.75 10.5C12.5784 10.5 13.25 9.82843 13.25 9C13.25 8.17157 12.5784 7.5 11.75 7.5C10.9216 7.5 10.25 8.17157 10.25 9C10.25 9.82843 10.9216 10.5 11.75 10.5Z"
                fill="#6E767D"
              />
              <path
                d="M17 10.5C17.8284 10.5 18.5 9.82843 18.5 9C18.5 8.17157 17.8284 7.5 17 7.5C16.1716 7.5 15.5 8.17157 15.5 9C15.5 9.82843 16.1716 10.5 17 10.5Z"
                fill="#6E767D"
              />
              <path
                d="M22.25 10.5C23.0784 10.5 23.75 9.82843 23.75 9C23.75 8.17157 23.0784 7.5 22.25 7.5C21.4216 7.5 20.75 8.17157 20.75 9C20.75 9.82843 21.4216 10.5 22.25 10.5Z"
                fill="#6E767D"
              />
            </svg>
          </div>
        </div>
      </div>

      <div className="trend-column">Who to follow</div>
    </div>
  );
}
