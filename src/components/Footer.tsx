import React from "react";
import Lottie from "react-lottie";
import { Button } from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import animationData from "../assets/lotties/footer.json";
import { Link } from "react-router-dom";

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};
export const Footer = () => {
  const isContactPage = window.location.href.includes("/contact");

  return (
    <div>
      {!isContactPage ? ContactUsCTA : null}
      <div className="footer">
        <div className="footer-row max-possible-width-constraint">
          <div className="footer-column">
            <div className="footer-column-content">
              <Link to="/">
                <span className="text-logo">devent.studio</span>
              </Link>
              <div className="illustration">
                <svg
                  viewBox="0 0 92 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g style={{ mixBlendMode: "luminosity" }} fill="#A6A6C2">
                    <path d="M25.177 17.684c-1.495 0-2.896-.645-4.168-1.695l.31-1.481.013-.055c.276-1.578 1.151-4.226 3.845-4.226 2.02 0 3.664 1.674 3.664 3.732-.007 2.05-1.65 3.725-3.664 3.725Zm0-11.236c-3.441 0-6.108 2.277-7.192 6.022-1.657-2.53-2.91-5.57-3.643-8.128h-3.704v9.816c0 1.934-1.55 3.512-3.448 3.512-1.9 0-3.448-1.578-3.448-3.512V4.342H.038v9.816c-.014 4.02 3.198 7.319 7.145 7.319 3.946 0 7.159-3.3 7.159-7.32v-1.645c.72 1.53 1.602 3.072 2.673 4.444l-2.27 10.866h3.792l1.643-7.882c1.441.94 3.098 1.53 4.997 1.53 4.06 0 7.367-3.389 7.367-7.525 0-4.13-3.306-7.497-7.367-7.497ZM43.852 6.873l2.39 9.816 2.634-9.816h3.138l-4.047 14.185h-3.139l-2.485-9.877-2.478 9.87h-3.138L32.679 6.866h3.139l2.633 9.816 2.39-9.816h3.01v.007Zm15.67-.425c-4.074 0-7.373 3.368-7.373 7.51 0 4.15 3.306 7.512 7.373 7.512 4.075 0 7.381-3.361 7.381-7.511s-3.306-7.511-7.38-7.511Zm0 11.935c-2.397 0-4.336-1.976-4.336-4.417 0-2.442 1.946-4.418 4.337-4.418 2.397 0 4.336 1.976 4.336 4.418 0 2.435-1.939 4.417-4.337 4.417Zm16.345-8.334c-2.108 0-3.812 1.742-3.812 3.882v7.12h-3.158V6.873h3.158v2.181s1.347-2.188 4.115-2.188h.97v3.183h-1.273Zm10.6 3.361a7.542 7.542 0 0 0 3.764-6.544h-3.158c0 2.367-1.886 4.287-4.21 4.287h-.424V.027h-3.158v21.024h3.158v-6.68h.378c.31 0 .714.205.896.459l4.484 6.221h3.785l-5.515-7.64Z"></path>
                  </g>
                </svg>
              </div>
              <div className="footer-text">coming soon</div>
              <div className="illustration">
                <svg
                  viewBox="0 0 97 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M29.645 9.585c1.11 0 2.009-.905 2.009-2.021 0-1.117-.9-2.022-2.01-2.022-1.11 0-2.009.905-2.009 2.022 0 1.116.9 2.021 2.01 2.021Zm66.313 6.907c-.305-.216-.541-.252-.737.168-3.375 7.352-9.062 3.683-8.497 4.006 1.261-.58 4.58-3.257 4.078-6.952-.305-2.258-2.232-3.26-4.278-2.901-3.57.626-4.884 4.5-4.215 7.929.117.589.326 1.074.535 1.55-4.035 3.3-5.637-2.954-5.82-3.702-.006-.04 3.117-2.658 3.985-8.896.91-6.538-1.163-7.728-3.284-7.691-3.924.069-4.984 8.314-3.56 15.187-.119.031-.674.34-1.567.375-.641-2.032-3.385-3.813-4.103-3.126-1.796 1.716.436 5.073 2.007 5.336-.944 5.846-6.845 4.398-5.747-2.926 1.922-3.59 3.384-8.927 3.123-12.149-.092-1.14-.931-2.67-2.827-2.593-3.648.145-4.045 8.393-3.617 14.247-.021-.144-.224.711-1.719 1.137-.354-1.974-3.514-3.955-4.258-3.003-1.392 1.783 1.021 4.962 2.164 5.184-.943 5.845-6.845 4.397-5.746-2.927 1.922-3.589 3.383-8.926 3.122-12.148-.092-1.141-.93-2.67-2.827-2.594-3.648.145-4.044 8.393-3.617 14.248-.021-.147-.229.737-1.785 1.155-.052-2.561-3.223-3.735-3.985-2.918-1.358 1.457.31 4.445 1.855 5.184-.944 5.845-6.846 4.397-5.747-2.927 1.922-3.589 3.384-8.926 3.123-12.148-.093-1.141-.931-2.67-2.828-2.594-3.647.145-3.941 8.808-3.513 14.662-1.202 5.177-5.23 11.643-4.707-1.309.051-.909.108-1.253-.343-1.594-.337-.264-1.105-.137-1.524-.126-.51.02-.638.32-.75.774-.263 1.17-.31 2.306-.347 3.855-.025.725-.083 1.063-.36 2.05-.277.988-1.858 2.794-2.723 2.492-1.201-.415-.807-3.824-.582-6.166.187-1.852-.413-2.683-1.951-2.985-.9-.189-1.448-.16-2.386-.457-.887-.281-1.087-1.969-2.979-1.406-1.034.308-.37 2.512-.618 4.146-1.222 8.039-3.766 8.26-4.946 4.355C16.772 5.202 12.994.04 10.783.04c-2.302 0-4.935 1.595-3.82 11.803-.542-.159-.709-.244-1.302-.244-3.356 0-5.642 2.728-5.642 6.094 0 3.365 2.286 6.094 5.642 6.094 1.981 0 3.372-.906 4.425-2.308.687.99 1.524 2.323 3.055 2.263 4.561-.178 5.888-9.59 6.045-10.115.487.076.948.219 1.399.295.75.113.805.412.788 1.17-.2 6.401.975 8.642 3.639 8.642 1.484 0 2.807-1.466 3.718-2.515.681 1.413 1.766 2.472 3.22 2.515 3.526.088 4.876-5.563 4.753-4.82-.097.584 1.144 4.788 4.774 4.804 4.496.019 5.332-4.954 5.431-5.787.013-.166.018-.149 0 0l-.003.05c1.427-.267 2.163-1.036 2.163-1.036s1.147 6.85 5.392 6.773c4.409-.08 5.24-4.576 5.35-5.452.014-.208.022-.184 0 0l-.002.026c1.695-.62 2.141-1.244 2.141-1.244s.911 6.715 5.392 6.773c3.993.053 5.473-4.06 5.481-5.781.674.007 1.92-.402 1.89-.425 0 0 1.463 5.87 5.547 6.172 1.918.141 3.357-1.085 4.177-1.645 1.927 1.57 8.344 3.575 12.396-3.335.572-.991-.658-2.163-.874-2.316ZM5.5 21.51c-1.958 0-3.213-1.821-3.213-3.784 0-1.963 1.152-3.784 3.11-3.784.881 0 1.371.097 2.057.698.125.493.477 1.63.649 2.147.23.691.503 1.28.78 1.92-.395 1.642-1.686 2.803-3.383 2.803Zm4.771-6.813c-.081-.13-.064-.05-.155-.173-.36-.982-1.05-3.174-1.131-5.663-.09-2.816.376-6.117 1.752-6.117.932 0 1.922 6.69-.466 11.953Zm27.567-2.934c-.221-1.67-.233-9.12 1.545-8.915.982.4-.622 7.43-1.545 8.915Zm12.983 0c-.22-1.67-.232-9.12 1.546-8.915.982.4-.623 7.43-1.546 8.915Zm12.881.104c-.221-1.671-.232-9.12 1.546-8.916.981.4-.623 7.43-1.546 8.916Zm14.22-9.455c1.626-.17 1.559 6.97-1.704 11.478-.42-1.63-1.066-10.919 1.704-11.478Zm6.833 15.364c-.522-2.653.827-4.395 2.218-4.586.486-.078 1.19.239 1.331.83.231 1.117-.033 2.772-3.146 4.873a4.323 4.323 0 0 1-.403-1.117Z"
                    fill="#A6A6C2"
                  ></path>
                </svg>
              </div>
              <div className="footer-text">coming soon</div>
            </div>
          </div>
          <div className="footer-column">
            <div className="footer-column-content">
              <h2 className="footer-column-title">Menu</h2>

              <a href="/services" className="footer-link footer-text">
                Services
              </a>
              <a href="/work" className="footer-link footer-text">
                Work
              </a>
              <a href="/about" className="footer-link footer-text">
                About
              </a>
              <a href="/contact" className="footer-link footer-text">
                Contact
              </a>
            </div>
          </div>
          <div className="footer-column">
            <div className="footer-column-content">
              <h2 className="footer-column-title">Call</h2>
              <a
                target="_blank"
                rel="noreferrer"
                className="footer-text footer-link"
                href="https://wa.me/40745884215?call"
              >
                Whatsapp
              </a>
              <a
                className="footer-text phone footer-link"
                href="tel:+40745884215"
              >
                +40 745 884 215
              </a>
            </div>
          </div>

          <div className="footer-column">
            <div className="footer-column-content">
              <h2 className="footer-column-title">Write</h2>
              <a
                target="_blank"
                rel="noreferrer"
                className="footer-text footer-link"
                href="https://wa.me/40745884215?text=Hi%20Ovi,%20I%20want%20you%20to%20help%20me%20with"
              >
                Whatsapp
              </a>
              <a
                className="footer-text phone footer-link"
                href="tel:+40745884215"
              >
                +40 745 884 215
              </a>
              <address className="footer-text address footer-link">
                Romania, Bucharest, 06041
              </address>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const ContactUsCTA = ({ showButton = true }) => (
  <div className="footer-contact max-possible-width-constraint">
    <div className="contact-container">
      <span className="big-header">Do you have a</span>
      <span className="big-header gradient">cool idea?</span>
      {showButton ? (
        <Link to="/">
          <Button
            rightIcon={<ArrowForwardIcon />}
            colorScheme="pink"
            size="lg"
            bgColor={"black"}
            borderRadius={5}
            style={{
              margin: "25px 0 0 0",
              // marginLeft: 25,
              paddingLeft: "4rem",
              paddingRight: "4rem",
            }}
          >
            Tell us about it
          </Button>
        </Link>
      ) : null}
    </div>
    <Lottie
      style={{ cursor: "inherit" }}
      options={defaultOptions}
      height={400}
      width={500}
    />
  </div>
);
