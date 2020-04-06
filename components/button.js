import styled from "styled-components";

const Button = styled.button`
  background: ${props => props.theme.bg.secondary};
  color: ${props => props.theme.text.primary};
`;

Button.defaultProps = {
  theme: {
    bg: {
      primary: "#eff0f5",
      secondary: "#ffffff",
      inset: "#e2e4e8",
      input: "rgba(65,67,78,0.12)"
    },
    text: {
      primary: "#050505",
      secondary: "#2f3037",
      tertiary: "#525560",
      quarternary: "#9194a1",
      placeholder: "rgba(82,85,96,0.5)",
      onPrimary: "#ffffff"
    }
  }
};

export default Button;
