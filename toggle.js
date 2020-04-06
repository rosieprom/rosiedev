import React from "react";
import styled from "styled-components";

const ToggleControl = styled.span`
  display: none;
`;

const Toggle = ({ checked, onChange }) => (
  <ToggleControl>
    <input
      className="dmcheck"
      type="checkbox"
      checked={checked}
      onChange={onChange}
      id="dmcheck"
    />
    <label htmlFor="dmcheck" />
  </ToggleControl>
);

export default Toggle;
