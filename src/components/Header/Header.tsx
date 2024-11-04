import "./Header.css";

function Header() {
  return (
    <div className="header">
      <p>
        Entdecke unbegrenzte Möglichkeiten mit Locker Pro{" "}
        <svg
          width="6"
          height="9"
          viewBox="0 0 6 9"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.35352 1.27344L4.52416 4.44408L1.35352 7.61472"
            stroke="white"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </p>
    </div>
  );
}

export default Header;
