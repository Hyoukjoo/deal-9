const ShortArrowRightIcon = ({ color = "#222222" }) => {
  const icon = `
    <defs>
      <g id="short-arrow-right-icon">
        <path d="M8 20L16 12L8 4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </g>
    </defs>
    <use href="#short-arrow-right-icon" stroke="${color}" /> 
    `;

  return icon;
};

export default ShortArrowRightIcon;
