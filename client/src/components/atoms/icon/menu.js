const MenuIcon = ({ color = "#222222" }) => {
  const icon = `
    <defs>
      <g id="menu-icon">
        <path d="M3 6H21" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M3 12H21" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M3 18H21" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </g>
    </defs>
    <use href="#menu-icon" stroke="${color}" /> 
    `;

  return icon;
};

export default MenuIcon;
