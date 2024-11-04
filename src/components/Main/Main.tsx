import "./Main.css";
import { useState, useEffect, useRef } from "react";
import Locker from "../../assets/locker.png";

function Main() {
  const [showHeader, setShowHeader] = useState(false);
  const [activeDesignButton, setActiveDesignButton] = useState(null);
  const [activeStylesButton, setActiveStylesButton] = useState(null);
  const [headerTextDesign, setHeaderTextDesign] = useState("");
  const [headerTextStyles, setHeaderTextStyles] = useState("");
  const [buttonColor, setButtonColor] = useState("#0372e433");

  const [allowDesignScroll, setAllowDesignScroll] = useState(true);
  const [allowStylesScroll, setAllowStylesScroll] = useState(true);

  const section2Ref = useRef(null);
  const section3Ref = useRef(null);

  const scrollToStylesSection = (ref: any) => {
    if (allowDesignScroll === true) {
      setTimeout(() => {
        ref.current.scrollIntoView({ behavior: "smooth" });
      }, 150);
    }
  };

  const scrollToUploadSection = (ref: any) => {
    if (allowStylesScroll === true) {
      setTimeout(() => {
        ref.current.scrollIntoView({ behavior: "smooth" });
      }, 150);
    }
  };

  const toggleAllowDesignScroll = () => {
    setAllowDesignScroll(false);
  };

  const toggleAllowStylesScroll = () => {
    setAllowStylesScroll(false);
  };

  if (headerTextDesign === "designPro") {
    setHeaderTextDesign("Gewähltes Design: Design Pro,");
    toggleAllowDesignScroll();
  } else if (headerTextDesign === "presentation") {
    setHeaderTextDesign("Gewähltes Design:  Präsentation,");
    toggleAllowDesignScroll();
  } else if (headerTextDesign === "brochure") {
    setHeaderTextDesign("Gewähltes Design:  Broschüre,");
    toggleAllowDesignScroll();
  } else if (headerTextDesign === "summary") {
    setHeaderTextDesign("Gewähltes Design:  Zusammenfassung,");
    toggleAllowDesignScroll();
  }

  if (headerTextStyles === "Funky") {
    setHeaderTextStyles("Gewählter Style: Funky");
    toggleAllowStylesScroll();
  } else if (headerTextStyles === "Forest") {
    setHeaderTextStyles("Gewählter Style: Forest");
    toggleAllowStylesScroll();
  } else if (headerTextStyles === "Dark") {
    setHeaderTextStyles("Gewählter Style: Dark");
    toggleAllowStylesScroll();
  } else if (headerTextStyles === "Light") {
    setHeaderTextStyles("Gewählter Style: Light");
    toggleAllowStylesScroll();
  }

  // input

  const [fileName, setFileName] = useState(""); // Initially no file name
  const fileInputRef = useRef(null);

  // Handle file selection
  const handleFileChange = (event: any) => {
    const file = event.target.files[0];
    const allowedTypes = [
      "application/pdf", // PDF
      "image/png", // PNG images
      "image/jpeg", // JPEG images (includes .jpg and .jpeg)
      "text/plain", // Plain text files
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document", // .docx
      "application/msword", // .doc
    ];

    if (file && allowedTypes.includes(file.type)) {
      setFileName(file.name);
      setButtonColor("#0071e3");
    } else {
      setFileName("");
      setButtonColor("#0372e433");
    }
  };

  // Trigger file input click
  const handleButtonClick = () => {
    if (fileInputRef.current) {
      (fileInputRef.current as HTMLInputElement).click(); // Type assertion added here
    }
  };

  const handleScroll = () => {
    const scrollY = window.scrollY;
    if (scrollY > 150 && scrollY < 2100) {
      setShowHeader(true);
    } else {
      setShowHeader(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleDesignClick = (buttonName: any) => {
    setActiveDesignButton(buttonName);
    setHeaderTextDesign(buttonName);
  };

  const handleStylesClick = (buttonName: any) => {
    setActiveStylesButton(buttonName);
    setHeaderTextStyles(buttonName);
  };

  return (
    <>
      <header className={`altHeader ${showHeader ? "visible" : ""}`}>
        <div className="headingContainer hc1">
          <h2 className="lockerHeading">Locker</h2>

          <h2 className="selectorText">
            {headerTextDesign} {headerTextStyles} <span>│</span> Ab 169,00 €
          </h2>
        </div>
        <hr style={{ border: "0.5px solid #E8E8EC", marginTop: "10px" }} />
        <div className="headingContainer">
          <div />

          <h2 className="selectorTextDown">
            <svg
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="conSvg"
            >
              <path
                d="M13.75 10.3438L9.9 15.1562L8.25 13.2278"
                stroke="black"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M6.875 6.5625V5.1875C6.875 4.09348 7.3096 3.04427 8.08318 2.27068C8.85677 1.4971 9.90598 1.0625 11 1.0625C12.094 1.0625 13.1432 1.4971 13.9168 2.27068C14.6904 3.04427 15.125 4.09348 15.125 5.1875V6.5625M3.4375 6.5625C3.25516 6.5625 3.0803 6.63493 2.95136 6.76386C2.82243 6.8928 2.75 7.06766 2.75 7.25V16.5312C2.75 17.8306 3.85688 18.9375 5.15625 18.9375H16.8438C18.1431 18.9375 19.25 17.8843 19.25 16.585V7.25C19.25 7.06766 19.1776 6.8928 19.0486 6.76386C18.9197 6.63493 18.7448 6.5625 18.5625 6.5625H3.4375Z"
                stroke="black"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>{" "}
            Beim Store abholen{" "}
            <svg
              width="2"
              height="18"
              viewBox="0 0 2 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="coSvg"
            >
              <path d="M1 0L1 18" stroke="#D4D4D9" />
            </svg>
            <svg
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="conSvg"
            >
              <path
                d="M13.75 10.3438L9.9 15.1562L8.25 13.2278"
                stroke="black"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M6.875 6.5625V5.1875C6.875 4.09348 7.3096 3.04427 8.08318 2.27068C8.85677 1.4971 9.90598 1.0625 11 1.0625C12.094 1.0625 13.1432 1.4971 13.9168 2.27068C14.6904 3.04427 15.125 4.09348 15.125 5.1875V6.5625M3.4375 6.5625C3.25516 6.5625 3.0803 6.63493 2.95136 6.76386C2.82243 6.8928 2.75 7.06766 2.75 7.25V16.5312C2.75 17.8306 3.85688 18.9375 5.15625 18.9375H16.8438C18.1431 18.9375 19.25 17.8843 19.25 16.585V7.25C19.25 7.06766 19.1776 6.8928 19.0486 6.76386C18.9197 6.63493 18.7448 6.5625 18.5625 6.5625H3.4375Z"
                stroke="black"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>{" "}
            Beim Store abholen{" "}
          </h2>
        </div>
        <hr style={{ border: "0.5px solid #E8E8EC", marginTop: "10px" }} />
      </header>
      <div className="gridContainer">
        <div className="leftColumn lcf">
          <h1>Locker</h1>
          <br />
          <p>Dokument hochladen, Design wählen, und die Magie geschieht.</p>
        </div>
        <div className="rightColumn rcf">
          <h2>
            Dein Dokument -<br />
            professionell in Sekunden.
          </h2>
        </div>

        <div className="lcsContainer">
          <div className="leftColumn lcs">
            <img src={Locker} className="sticky-image" alt="Locker Bild" />
          </div>
        </div>
        <div className="rcs">
          <div className="scrollContainer">
            <h2>
              <span>Design.</span> Wähle die passende Umwandlung aus.
            </h2>
            <button
              className={`designPro bop1 ${
                activeDesignButton === "designPro" ? "active" : ""
              }`}
              onClick={() => {
                scrollToStylesSection(section2Ref);
                handleDesignClick("designPro");
              }}
            >
              <h4>Design Pro</h4>
              <br />
              <p>
                Deine Dokumente erstrahlen in einem Professionellen Design und
                werden Inhaltlich strukturiert und optimiert.
              </p>
            </button>
            <button
              className={`presentation bop2 ${
                activeDesignButton === "presentation" ? "active" : ""
              }`}
              onClick={() => {
                scrollToStylesSection(section2Ref);
                handleDesignClick("presentation");
              }}
            >
              <div className="buttonGrid">
                <div className="tb1">
                  <h4>Präsentation</h4>
                  <br />
                  <p>kostenlos</p>
                </div>
                <div className="tb2">
                  <p>
                    Powerpoint <br />
                    Google Slides <br />
                    Keynote <br />
                    Prezi
                  </p>
                </div>
              </div>
            </button>
            <button
              className={`brochure bop2 ${
                activeDesignButton === "brochure" ? "active" : ""
              }`}
              onClick={() => {
                scrollToStylesSection(section2Ref);
                handleDesignClick("brochure");
              }}
            >
              <div className="buttonGrid">
                <div className="tb1">
                  <h4>Broschüren</h4>
                  <br />
                  <svg
                    width="60"
                    height="12"
                    viewBox="0 0 56 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.744141 9V0.544922H2.25586V7.72852H6.09375V9H0.744141ZM9.66211 9.12305C7.83398 9.12305 6.65625 7.9043 6.65625 5.89453V5.88281C6.65625 3.89062 7.85156 2.66016 9.65625 2.66016C11.4668 2.66016 12.668 3.87891 12.668 5.88281V5.89453C12.668 7.91016 11.4844 9.12305 9.66211 9.12305ZM9.66797 7.94531C10.5879 7.94531 11.1797 7.19531 11.1797 5.89453V5.88281C11.1797 4.58789 10.582 3.84375 9.65625 3.84375C8.74805 3.84375 8.14453 4.59375 8.14453 5.88281V5.89453C8.14453 7.20117 8.73633 7.94531 9.66797 7.94531ZM16.3477 9.12305C14.502 9.12305 13.3477 7.88086 13.3477 5.88867V5.88281C13.3477 3.90234 14.5195 2.66016 16.3301 2.66016C17.9648 2.66016 18.9844 3.69727 19.0723 4.93945L19.0781 4.98633H17.7012L17.6895 4.93359C17.5664 4.33008 17.1211 3.84375 16.3477 3.84375C15.4277 3.84375 14.8359 4.62305 14.8359 5.89453V5.90039C14.8359 7.19531 15.4336 7.94531 16.3535 7.94531C17.0918 7.94531 17.5605 7.50586 17.6953 6.85547L17.707 6.80273H19.084L19.0781 6.84375C18.9668 8.13867 17.918 9.12305 16.3477 9.12305ZM20.0215 9V0.544922H21.4805V5.36719H21.5098L23.8301 2.78906H25.5176L23.0566 5.46094L25.6172 9H23.9355L21.9727 6.32812L21.4805 6.84375V9H20.0215ZM28.6172 9.12305C26.7539 9.12305 25.6289 7.88672 25.6289 5.91211V5.90625C25.6289 3.94922 26.7715 2.66016 28.5469 2.66016C30.3223 2.66016 31.4238 3.9082 31.4238 5.7832V6.25195H27.0762C27.0996 7.3418 27.6973 7.98633 28.6465 7.98633C29.373 7.98633 29.8477 7.59961 29.9883 7.18359L30 7.14258H31.3652L31.3477 7.20703C31.1543 8.16211 30.2402 9.12305 28.6172 9.12305ZM28.5645 3.80273C27.791 3.80273 27.2109 4.32422 27.0938 5.2793H30.0059C29.9004 4.29492 29.3379 3.80273 28.5645 3.80273ZM32.3672 9V2.78906H33.8262V3.86133H33.8555C34.0488 3.11133 34.5645 2.66016 35.2793 2.66016C35.4609 2.66016 35.6309 2.68945 35.7422 2.71875V4.03711C35.6191 3.99023 35.3965 3.95508 35.1504 3.95508C34.3242 3.95508 33.8262 4.47656 33.8262 5.39648V9H32.3672ZM39.041 9V0.544922H42.2988C44.0098 0.544922 45.1758 1.67578 45.1758 3.36914V3.38086C45.1758 5.06836 44.0098 6.20508 42.2988 6.20508H40.5527V9H39.041ZM41.9238 1.78125H40.5527V4.98633H41.9238C43.0078 4.98633 43.6406 4.40039 43.6406 3.38672V3.375C43.6406 2.36133 43.0078 1.78125 41.9238 1.78125ZM46.1367 9V2.78906H47.5957V3.86133H47.625C47.8184 3.11133 48.334 2.66016 49.0488 2.66016C49.2305 2.66016 49.4004 2.68945 49.5117 2.71875V4.03711C49.3887 3.99023 49.166 3.95508 48.9199 3.95508C48.0938 3.95508 47.5957 4.47656 47.5957 5.39648V9H46.1367ZM52.7754 9.12305C50.9473 9.12305 49.7695 7.9043 49.7695 5.89453V5.88281C49.7695 3.89062 50.9648 2.66016 52.7695 2.66016C54.5801 2.66016 55.7812 3.87891 55.7812 5.88281V5.89453C55.7812 7.91016 54.5977 9.12305 52.7754 9.12305ZM52.7812 7.94531C53.7012 7.94531 54.293 7.19531 54.293 5.89453V5.88281C54.293 4.58789 53.6953 3.84375 52.7695 3.84375C51.8613 3.84375 51.2578 4.59375 51.2578 5.88281V5.89453C51.2578 7.20117 51.8496 7.94531 52.7812 7.94531Z"
                      fill="url(#paint0_radial_76_415)"
                    />
                    <defs>
                      <radialGradient
                        id="paint0_radial_76_415"
                        cx="0"
                        cy="0"
                        r="1"
                        gradientUnits="userSpaceOnUse"
                        gradientTransform="translate(57 0.500049) rotate(168.593) scale(58.1485 867.014)"
                      >
                        <stop offset="0.127955" stop-color="#EA994F" />
                        <stop offset="0.350166" stop-color="#E46F90" />
                        <stop offset="0.562436" stop-color="#CC6DEB" />
                        <stop offset="0.832314" stop-color="#65B9F9" />
                      </radialGradient>
                    </defs>
                  </svg>
                </div>
                <div className="tb2">
                  <p>
                    Produktbroschüren <br />
                    Dienstleistungsbroschüren <br /> digitale Broschüren
                  </p>
                </div>
              </div>
            </button>
            <button
              className={`summary bop2 ${
                activeDesignButton === "summary" ? "active" : ""
              }`}
              onClick={() => {
                scrollToStylesSection(section2Ref);
                handleDesignClick("summary");
              }}
            >
              <div className="buttonGrid">
                <div className="tb1">
                  <h4>Zusammenfassung</h4>
                  <br />
                  <svg
                    width="60"
                    height="12"
                    viewBox="0 0 56 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.744141 9V0.544922H2.25586V7.72852H6.09375V9H0.744141ZM9.66211 9.12305C7.83398 9.12305 6.65625 7.9043 6.65625 5.89453V5.88281C6.65625 3.89062 7.85156 2.66016 9.65625 2.66016C11.4668 2.66016 12.668 3.87891 12.668 5.88281V5.89453C12.668 7.91016 11.4844 9.12305 9.66211 9.12305ZM9.66797 7.94531C10.5879 7.94531 11.1797 7.19531 11.1797 5.89453V5.88281C11.1797 4.58789 10.582 3.84375 9.65625 3.84375C8.74805 3.84375 8.14453 4.59375 8.14453 5.88281V5.89453C8.14453 7.20117 8.73633 7.94531 9.66797 7.94531ZM16.3477 9.12305C14.502 9.12305 13.3477 7.88086 13.3477 5.88867V5.88281C13.3477 3.90234 14.5195 2.66016 16.3301 2.66016C17.9648 2.66016 18.9844 3.69727 19.0723 4.93945L19.0781 4.98633H17.7012L17.6895 4.93359C17.5664 4.33008 17.1211 3.84375 16.3477 3.84375C15.4277 3.84375 14.8359 4.62305 14.8359 5.89453V5.90039C14.8359 7.19531 15.4336 7.94531 16.3535 7.94531C17.0918 7.94531 17.5605 7.50586 17.6953 6.85547L17.707 6.80273H19.084L19.0781 6.84375C18.9668 8.13867 17.918 9.12305 16.3477 9.12305ZM20.0215 9V0.544922H21.4805V5.36719H21.5098L23.8301 2.78906H25.5176L23.0566 5.46094L25.6172 9H23.9355L21.9727 6.32812L21.4805 6.84375V9H20.0215ZM28.6172 9.12305C26.7539 9.12305 25.6289 7.88672 25.6289 5.91211V5.90625C25.6289 3.94922 26.7715 2.66016 28.5469 2.66016C30.3223 2.66016 31.4238 3.9082 31.4238 5.7832V6.25195H27.0762C27.0996 7.3418 27.6973 7.98633 28.6465 7.98633C29.373 7.98633 29.8477 7.59961 29.9883 7.18359L30 7.14258H31.3652L31.3477 7.20703C31.1543 8.16211 30.2402 9.12305 28.6172 9.12305ZM28.5645 3.80273C27.791 3.80273 27.2109 4.32422 27.0938 5.2793H30.0059C29.9004 4.29492 29.3379 3.80273 28.5645 3.80273ZM32.3672 9V2.78906H33.8262V3.86133H33.8555C34.0488 3.11133 34.5645 2.66016 35.2793 2.66016C35.4609 2.66016 35.6309 2.68945 35.7422 2.71875V4.03711C35.6191 3.99023 35.3965 3.95508 35.1504 3.95508C34.3242 3.95508 33.8262 4.47656 33.8262 5.39648V9H32.3672ZM39.041 9V0.544922H42.2988C44.0098 0.544922 45.1758 1.67578 45.1758 3.36914V3.38086C45.1758 5.06836 44.0098 6.20508 42.2988 6.20508H40.5527V9H39.041ZM41.9238 1.78125H40.5527V4.98633H41.9238C43.0078 4.98633 43.6406 4.40039 43.6406 3.38672V3.375C43.6406 2.36133 43.0078 1.78125 41.9238 1.78125ZM46.1367 9V2.78906H47.5957V3.86133H47.625C47.8184 3.11133 48.334 2.66016 49.0488 2.66016C49.2305 2.66016 49.4004 2.68945 49.5117 2.71875V4.03711C49.3887 3.99023 49.166 3.95508 48.9199 3.95508C48.0938 3.95508 47.5957 4.47656 47.5957 5.39648V9H46.1367ZM52.7754 9.12305C50.9473 9.12305 49.7695 7.9043 49.7695 5.89453V5.88281C49.7695 3.89062 50.9648 2.66016 52.7695 2.66016C54.5801 2.66016 55.7812 3.87891 55.7812 5.88281V5.89453C55.7812 7.91016 54.5977 9.12305 52.7754 9.12305ZM52.7812 7.94531C53.7012 7.94531 54.293 7.19531 54.293 5.89453V5.88281C54.293 4.58789 53.6953 3.84375 52.7695 3.84375C51.8613 3.84375 51.2578 4.59375 51.2578 5.88281V5.89453C51.2578 7.20117 51.8496 7.94531 52.7812 7.94531Z"
                      fill="url(#paint0_radial_76_415)"
                    />
                    <defs>
                      <radialGradient
                        id="paint0_radial_76_415"
                        cx="0"
                        cy="0"
                        r="1"
                        gradientUnits="userSpaceOnUse"
                        gradientTransform="translate(57 0.500049) rotate(168.593) scale(58.1485 867.014)"
                      >
                        <stop offset="0.127955" stop-color="#EA994F" />
                        <stop offset="0.350166" stop-color="#E46F90" />
                        <stop offset="0.562436" stop-color="#CC6DEB" />
                        <stop offset="0.832314" stop-color="#65B9F9" />
                      </radialGradient>
                    </defs>
                  </svg>
                </div>
                <div className="tb2">
                  <p>
                    Produktübersichten <br />
                    Unternehmensinfos <br />
                    Marktanalysen <br />
                    Infografiken <br />
                    Eventinformationen
                  </p>
                </div>
              </div>
            </button>
            <button className="bop3">
              <div className="buttonContainer">
                <div className="tbh1">
                  <p className="bop3heading">
                    Du möchtest mehr über die Umwandlung deiner Dokumente
                    wissen?
                  </p>
                  <p className="bop3text">
                    Mach dir ein besseres Bild davon, welche Möglichkeiten du
                    hast.
                  </p>
                </div>
                <div className="svgh2">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15.75 9C15.75 5.27344 12.7266 2.25 9 2.25C5.27344 2.25 2.25 5.27344 2.25 9C2.25 12.7266 5.27344 15.75 9 15.75C12.7266 15.75 15.75 12.7266 15.75 9Z"
                      stroke="black"
                      stroke-width="1.125"
                      stroke-miterlimit="10"
                    />
                    <path
                      d="M9 6.1875V11.8125M11.8125 9H6.1875"
                      stroke="black"
                      stroke-width="1.125"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </button>
            <div ref={section2Ref}>
              <br />
              <h2 className="marginheading">
                <span>Styles.</span> Wähle deinen Lieblingsstyle.
              </h2>
              <div className="styleButtonGrid">
                <button
                  className={`Funky styleButton ${
                    activeStylesButton === "Funky" ? "active" : ""
                  }`}
                  onClick={() => {
                    scrollToUploadSection(section3Ref);
                    handleStylesClick("Funky");
                  }}
                >
                  <div>
                    <svg
                      width="28"
                      height="28"
                      viewBox="0 0 28 28"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M14 0C12.1615 -2.1924e-08 10.341 0.362121 8.64243 1.06569C6.94387 1.76925 5.40053 2.80048 4.1005 4.10051C2.80048 5.40053 1.76925 6.94387 1.06569 8.64243C0.362121 10.341 -5.84397e-08 12.1615 0 14C5.84397e-08 15.8385 0.362121 17.659 1.06569 19.3576C1.76925 21.0561 2.80049 22.5995 4.10051 23.8995C5.40053 25.1995 6.94387 26.2307 8.64243 26.9343C10.341 27.6379 12.1615 28 14 28L14 14V0Z"
                        fill="#F3F1E9"
                      />
                      <path
                        d="M14 28C15.8385 28 17.659 27.6379 19.3576 26.9343C21.0561 26.2307 22.5995 25.1995 23.8995 23.8995C25.1995 22.5995 26.2307 21.0561 26.9343 19.3576C27.6379 17.659 28 15.8385 28 14C28 12.1615 27.6379 10.341 26.9343 8.64243C26.2307 6.94387 25.1995 5.40052 23.8995 4.1005C22.5995 2.80048 21.0561 1.76925 19.3576 1.06569C17.659 0.36212 15.8385 -5.18697e-07 14 0L14 14L14 28Z"
                        fill="#FE91E7"
                      />
                    </svg>
                  </div>
                  <div>
                    <p>Funky</p>
                  </div>
                </button>
                <button
                  className={`Forest styleButton ${
                    activeStylesButton === "Forest" ? "active" : ""
                  }`}
                  onClick={() => {
                    scrollToUploadSection(section3Ref);
                    handleStylesClick("Forest");
                  }}
                >
                  <div>
                    <svg
                      width="28"
                      height="28"
                      viewBox="0 0 28 28"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M14 0C12.1615 -2.1924e-08 10.341 0.362121 8.64243 1.06569C6.94387 1.76925 5.40053 2.80048 4.1005 4.10051C2.80048 5.40053 1.76925 6.94387 1.06569 8.64243C0.362121 10.341 -5.84397e-08 12.1615 0 14C5.84397e-08 15.8385 0.362121 17.659 1.06569 19.3576C1.76925 21.0561 2.80049 22.5995 4.10051 23.8995C5.40053 25.1995 6.94387 26.2307 8.64243 26.9343C10.341 27.6379 12.1615 28 14 28L14 14V0Z"
                        fill="#AE9BD2"
                      />
                      <path
                        d="M14 28C15.8385 28 17.659 27.6379 19.3576 26.9343C21.0561 26.2307 22.5995 25.1995 23.8995 23.8995C25.1995 22.5995 26.2307 21.0561 26.9343 19.3576C27.6379 17.659 28 15.8385 28 14C28 12.1615 27.6379 10.341 26.9343 8.64243C26.2307 6.94387 25.1995 5.40052 23.8995 4.1005C22.5995 2.80048 21.0561 1.76925 19.3576 1.06569C17.659 0.36212 15.8385 -5.18697e-07 14 0L14 14L14 28Z"
                        fill="#77CF6F"
                      />
                    </svg>
                  </div>
                  <div>
                    <p>Forest</p>
                  </div>
                </button>
                <button
                  className={`Dark styleButton ${
                    activeStylesButton === "Dark" ? "active" : ""
                  }`}
                  onClick={() => {
                    scrollToUploadSection(section3Ref);
                    handleStylesClick("Dark");
                  }}
                >
                  <div>
                    <svg
                      width="28"
                      height="28"
                      viewBox="0 0 28 28"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="14" cy="14" r="14" fill="#292929" />
                    </svg>
                  </div>
                  <div>
                    <p>Dark</p>
                  </div>
                </button>
                <button
                  className={`Light styleButton ${
                    activeStylesButton === "Light" ? "active" : ""
                  }`}
                  onClick={() => {
                    scrollToUploadSection(section3Ref);
                    handleStylesClick("Light");
                  }}
                >
                  <div>
                    <svg
                      width="28"
                      height="28"
                      viewBox="0 0 28 28"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="14" cy="14" r="14" fill="#DADBDF" />
                    </svg>
                  </div>
                  <div>
                    <p>Light</p>
                  </div>
                </button>
              </div>
            </div>
            <br />
            <div ref={section3Ref}>
              <br />
              <h2 className="finishheading">
                <span>Finish.</span> Lade dein Dokument hoch und die Magie
                geschieht.
              </h2>
              <input
                type="file"
                accept="application/pdf, image/png, image/jpeg, text/plain, application/vnd.openxmlformats-officedocument.wordprocessingml.document, application/msword" // Accept PDF, PNG, JPG, JPEG, TXT, DOC, and DOCX files
                ref={fileInputRef}
                style={{ display: "none" }}
                onChange={handleFileChange}
              />
              <button className="uploadButton" onClick={handleButtonClick}>
                <div>
                  <h3>Dokument hochladen</h3>
                </div>
                {!fileName ? (
                  <span>
                    Hochladen{" "}
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 15 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M13.125 7.5C13.125 4.39453 10.6055 1.875 7.5 1.875C4.39453 1.875 1.875 4.39453 1.875 7.5C1.875 10.6055 4.39453 13.125 7.5 13.125C10.6055 13.125 13.125 10.6055 13.125 7.5Z"
                        stroke="#0071E3"
                        stroke-width="0.9375"
                        stroke-miterlimit="10"
                      />
                      <path
                        d="M7.5 5.15625V9.84375M9.84375 7.5H5.15625"
                        stroke="#0071E3"
                        stroke-width="0.9375"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </span>
                ) : (
                  // Display the uploaded file name
                  <span>
                    {fileName}{" "}
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 15 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M13.125 7.5C13.125 4.39453 10.6055 1.875 7.5 1.875C4.39453 1.875 1.875 4.39453 1.875 7.5C1.875 10.6055 4.39453 13.125 7.5 13.125C10.6055 13.125 13.125 10.6055 13.125 7.5Z"
                        stroke="#0071E3"
                        stroke-width="0.9375"
                        stroke-miterlimit="10"
                      />
                      <path
                        d="M7.5 5.15625V9.84375M9.84375 7.5H5.15625"
                        stroke="#0071E3"
                        stroke-width="0.9375"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </span>
                )}
              </button>
              <button
                className="convertButton"
                style={{ backgroundColor: buttonColor }}
              >
                <h5>Jetzt Umwandeln</h5>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Main;
