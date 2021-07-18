const ShortArrowLeftIcon = ({ color = "#222222" }) => {
  const icon = `
    <defs>
      <g id="short-arrow-left-icon">
        <path d="M16 20L8 12L16 4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </g>
    </defs>
    <use href="#short-arrow-left-icon" stroke="${color}" /> 
    `;

  return icon;
};

export default ShortArrowLeftIcon;
