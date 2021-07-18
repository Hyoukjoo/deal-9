const SendIcon = ({ color = "#222222" }) => {
  const icon = `
    <defs>
      <g id="send-icon">
        <path d="M22 2L11 13" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M22 2L15 22L11 13L2 9L22 2Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </g>
    </defs>
    <use href="#send-icon" stroke="${color}" /> 
    `;

  return icon;
};

export default SendIcon;
