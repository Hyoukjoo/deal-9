const ShortArrowDownIcon = ({ color = "#222222" }) => {
  const icon = `
    <defs>
      <g id="short-arrow-down-icon">
        <path d="M4 8L12 16L20 8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </g>
    </defs>
    <use href="#short-arrow-down-icon" stroke="${color}" /> 
    `;

  return icon;
};

export default ShortArrowDownIcon;
