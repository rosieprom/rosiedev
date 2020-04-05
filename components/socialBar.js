import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 2rem;
  @media (max-width: 700px) {
    justify-items: center;
  }
`;

const StyledIcon = styled.svg`
  fill: #000;
  opacity: 0.6;
  transition: 0.3s;
  &:hover {
    opacity: 1;
  }
`;

function SocialBar() {
  return (
    <Container>
      {/* Twitter */}
      <a href="https://twitter.com/rosalie_dev" target="_blank">
        <StyledIcon
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
        >
          <path d="M19.633,7.997c0.013,0.175,0.013,0.349,0.013,0.523c0,5.325-4.053,11.461-11.46,11.461c-2.282,0-4.402-0.661-6.186-1.809	c0.324,0.037,0.636,0.05,0.973,0.05c1.883,0,3.616-0.636,5.001-1.721c-1.771-0.037-3.255-1.197-3.767-2.793	c0.249,0.037,0.499,0.062,0.761,0.062c0.361,0,0.724-0.05,1.061-0.137c-1.847-0.374-3.23-1.995-3.23-3.953v-0.05	c0.537,0.299,1.16,0.486,1.82,0.511C3.534,9.419,2.823,8.184,2.823,6.787c0-0.748,0.199-1.434,0.548-2.032	c1.983,2.443,4.964,4.04,8.306,4.215c-0.062-0.3-0.1-0.611-0.1-0.923c0-2.22,1.796-4.028,4.028-4.028	c1.16,0,2.207,0.486,2.943,1.272c0.91-0.175,1.782-0.512,2.556-0.973c-0.299,0.935-0.936,1.721-1.771,2.22	c0.811-0.088,1.597-0.312,2.319-0.624C21.104,6.712,20.419,7.423,19.633,7.997z" />
        </StyledIcon>
      </a>
      {/* Instagram */}
      <a href="https://www.instagram.com/rosie.dev/" target="_blank">
        <StyledIcon
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
        >
          <path d="M20.947,8.305c-0.011-0.757-0.151-1.508-0.419-2.216c-0.469-1.209-1.424-2.165-2.633-2.633 c-0.699-0.263-1.438-0.404-2.186-0.42C14.747,2.993,14.442,2.981,12,2.981s-2.755,0-3.71,0.055 c-0.747,0.016-1.486,0.157-2.185,0.42C4.896,3.924,3.94,4.88,3.472,6.089C3.209,6.788,3.067,7.527,3.053,8.274 c-0.043,0.963-0.056,1.268-0.056,3.71s0,2.754,0.056,3.71c0.015,0.748,0.156,1.486,0.419,2.187 c0.469,1.208,1.424,2.164,2.634,2.632c0.696,0.272,1.435,0.426,2.185,0.45c0.963,0.043,1.268,0.056,3.71,0.056s2.755,0,3.71-0.056 c0.747-0.015,1.486-0.156,2.186-0.419c1.209-0.469,2.164-1.425,2.633-2.633c0.263-0.7,0.404-1.438,0.419-2.187 c0.043-0.962,0.056-1.267,0.056-3.71C21.003,9.572,21.003,9.262,20.947,8.305z M11.994,16.602c-2.554,0-4.623-2.069-4.623-4.623 s2.069-4.623,4.623-4.623c2.552,0,4.623,2.069,4.623,4.623S14.546,16.602,11.994,16.602z M16.801,8.263 c-0.597,0-1.078-0.482-1.078-1.078s0.481-1.078,1.078-1.078c0.595,0,1.077,0.482,1.077,1.078S17.396,8.263,16.801,8.263z" />
          <circle cx="11.994" cy="11.979" r="3.003" />
        </StyledIcon>
      </a>
      {/* Email */}
      <a href="mailto:rosalinda.prom@gmail.com" target="_blank">
        <StyledIcon
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
        >
          <path d="M20,4H4C2.896,4,2,4.896,2,6v12c0,1.104,0.896,2,2,2h16c1.104,0,2-0.896,2-2V6C22,4.896,21.104,4,20,4z M20,8.7l-8,5.334 L4,8.7V6.297l8,5.333l8-5.333V8.7z" />
        </StyledIcon>
      </a>
      {/* Github */}
      <a href="https://github.com/developerpeachy" target="_blank">
        <StyledIcon
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12.026,2c-5.509,0-9.974,4.465-9.974,9.974c0,4.406,2.857,8.145,6.821,9.465	c0.499,0.09,0.679-0.217,0.679-0.481c0-0.237-0.008-0.865-0.011-1.696c-2.775,0.602-3.361-1.338-3.361-1.338	c-0.452-1.152-1.107-1.459-1.107-1.459c-0.905-0.619,0.069-0.605,0.069-0.605c1.002,0.07,1.527,1.028,1.527,1.028	c0.89,1.524,2.336,1.084,2.902,0.829c0.091-0.645,0.351-1.085,0.635-1.334c-2.214-0.251-4.542-1.107-4.542-4.93	c0-1.087,0.389-1.979,1.024-2.675c-0.101-0.253-0.446-1.268,0.099-2.64c0,0,0.837-0.269,2.742,1.021	c0.798-0.221,1.649-0.332,2.496-0.336c0.849,0.004,1.701,0.115,2.496,0.336c1.906-1.291,2.742-1.021,2.742-1.021	c0.545,1.372,0.203,2.387,0.099,2.64c0.64,0.696,1.024,1.587,1.024,2.675c0,3.833-2.33,4.675-4.552,4.922	c0.355,0.308,0.675,0.916,0.675,1.846c0,1.334-0.012,2.41-0.012,2.737c0,0.267,0.178,0.577,0.687,0.479	C19.146,20.115,22,16.379,22,11.974C22,6.465,17.535,2,12.026,2z"
          />
        </StyledIcon>
      </a>
      {/* Linkedin */}
      <a
        href="https://www.linkedin.com/in/rosalinda-prom-15508a85/"
        target="_blank"
      >
        <StyledIcon
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
        >
          <circle cx="4.983" cy="5.009" r="2.188" />
          <path d="M9.237 8.855v12.139h3.769v-6.003c0-1.584.298-3.118 2.262-3.118 1.937 0 1.961 1.811 1.961 3.218v5.904H21v-6.657c0-3.27-.704-5.783-4.526-5.783-1.835 0-3.065 1.007-3.568 1.96h-.051v-1.66H9.237zM3.095 8.855H6.87V20.994H3.095z" />
        </StyledIcon>
      </a>
      {/* Telegram */}
      <a href="https://t.me/rosalieprom" target="_blank">
        <StyledIcon
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
        >
          <path d="M20.665,3.717l-17.73,6.837c-1.21,0.486-1.203,1.161-0.222,1.462l4.552,1.42l10.532-6.645	c0.498-0.303,0.953-0.14,0.579,0.192l-8.533,7.701l0,0l0,0H9.841l0.002,0.001l-0.314,4.692c0.46,0,0.663-0.211,0.921-0.46	l2.211-2.15l4.599,3.397c0.848,0.467,1.457,0.227,1.668-0.785l3.019-14.228C22.256,3.912,21.474,3.351,20.665,3.717z" />
        </StyledIcon>
      </a>
      {/* Spotify */}
      <a
        href="https://open.spotify.com/user/1271090101?si=rRp14tFxSkqpXFEMeRScDg"
        target="_blank"
      >
        <StyledIcon
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
        >
          <path d="M12.01,2.019c-5.495,0-9.991,4.496-9.991,9.991c0,5.494,4.496,9.99,9.991,9.99c5.494,0,9.99-4.496,9.99-9.99	C22,6.515,17.554,2.019,12.01,2.019z M16.605,16.455c-0.199,0.299-0.549,0.4-0.85,0.201c-2.349-1.45-5.296-1.75-8.793-0.951	c-0.348,0.102-0.648-0.148-0.748-0.449c-0.101-0.35,0.149-0.648,0.45-0.749c3.795-0.85,7.093-0.499,9.69,1.1	C16.704,15.756,16.754,16.155,16.605,16.455L16.605,16.455z M17.805,13.708c-0.251,0.349-0.7,0.499-1.051,0.249	c-2.697-1.646-6.792-2.148-9.939-1.148c-0.398,0.101-0.85-0.1-0.949-0.498c-0.101-0.402,0.1-0.852,0.499-0.952	c3.646-1.098,8.143-0.548,11.239,1.351C17.904,12.859,18.054,13.358,17.805,13.708L17.805,13.708z M17.904,10.909	c-3.197-1.897-8.542-2.097-11.59-1.146c-0.499,0.148-1-0.151-1.148-0.6c-0.15-0.502,0.148-1.001,0.599-1.151	c3.547-1.049,9.392-0.85,13.089,1.351c0.449,0.249,0.599,0.849,0.349,1.298C18.953,11.011,18.354,11.159,17.904,10.909z" />
        </StyledIcon>
      </a>
    </Container>
  );
}

export default SocialBar;
