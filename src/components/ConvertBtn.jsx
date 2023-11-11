const ConvertBtn = ({ title, convertTo, setNewText }) => {
    const handleClick = () => {
      const textArea = document.querySelector("textarea");
      const currentText = textArea.value;
  
      let newText;
  
      if (convertTo === "mayusculas") {
        newText = currentText.toUpperCase();

      } else if (convertTo === "minusculas") {
        newText = currentText.toLowerCase();

      } else if (convertTo === "eliminarespacios") {
        newText = currentText.replace(/\s+/g, ' ').trim();

      } else if (convertTo === "capitalizar") {
        newText = currentText.replace(/([.!?])\s*(\w)/g, (match) => match.toUpperCase());
        newText = newText.charAt(0).toUpperCase() + newText.slice(1);

      } else {
        newText = currentText;

      }
      textArea.value = newText;
      textArea.dispatchEvent(new Event("input"));
      
      setNewText(newText);
    };
  
    return (
      <>
        <button
          onClick={handleClick}
          className="py-3 px-1 w-1/4 text-xs rounded-md border-t-2 border-b-2 border-gray-600 hover:bg-gray-800"
        >
          {title}
        </button>
      </>
    );
  };
  
  export default ConvertBtn;
  