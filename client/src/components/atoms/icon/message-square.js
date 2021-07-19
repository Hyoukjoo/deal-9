const MessageSquareIcon = ({ color = "#222222" }) => {
  const icon = `
    <defs>
      <g id="message-square-icon">
        <path d="M21 15C21 15.5304 20.7893 16.0391 20.4142 16.4142C20.0391 16.7893 19.5304 17 19 17H7L3 21V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V15Z" stroke="#222222" stroke-linecap="round" stroke-linejoin="round"/>
      </g>
    </defs>
    <use href="#message-square-icon" stroke="${color}" /> 
    `;

  return icon;
};

export default MessageSquareIcon;