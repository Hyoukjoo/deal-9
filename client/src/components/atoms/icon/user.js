const UserIcon = ({ color = "#222222" }) => {
  const icon = `
    <defs>
      <g id="user-icon">
        <path d="M18 18.3333C18 17.4493 17.6839 17.6014 17.1213 16.9763C16.5587 16.3512 15.7956 16 15 16H9C8.20435 16 7.44129 16.3512 6.87868 16.9763C6.31607 17.6014 6 17.4493 6 18.3333" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <circle cx="12" cy="12" r="9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </g>
    </defs>
    <use href="#user-icon" stroke="${color}" /> 
    `;

  return icon;
};

export default UserIcon;
