const CheckIcon = ({ color = "#222222" }) => {
  const icon = `
    <defs>
      <g id="check-icon">
        <path d="M21 6L8.625 18L3 12.5455" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </g>
    </defs>
    <use href="#check-icon"  stroke="${color}" /> 
    `;

  return icon;
};

export default CheckIcon;
