const CloseIcon = ({ color = "#222222" }) => {
  const icon = `
    <defs>
      <g id="close-icon">
        <path d="M18 6L6 18" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M6 6L18 18" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </g>
    </defs>
    <use href="#close-icon" stroke="${color}" /> 
    `;

  return icon;
};

export default CloseIcon;
