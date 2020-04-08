import React from "react";
import styled from "styled-components";

const ToggleControl = styled.span`
  display: none;
`;

const Toggle = ({ checked, onChange }) => (
  <ToggleControl>
    <input type="checkbox" checked={checked} onChange={onChange} />
  </ToggleControl>
);

export default Toggle;
