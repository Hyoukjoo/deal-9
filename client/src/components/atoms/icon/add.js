const AddIcon = ({ color = "#222222" }) => {
  const icon = `
    <defs>
      <g id="add-icon">
        <path
          d="M12 5V19"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M5 12H19"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
    </defs>
    <use href="#add-icon" stroke="${color}"  /> 
    
    `;

  return icon;
};

export default AddIcon;
