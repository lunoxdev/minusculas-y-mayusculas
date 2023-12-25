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
      newText = currentText.replace(/[ \t]+/g, " ").trim();
    } else if (convertTo === "capitalizar") {
      newText = currentText
        .toLowerCase()
        .replace(/([.!?])\s*(\w)/g, (match) => match.toUpperCase());
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
        className="py-3 w-full text-sm rounded-md border-t-2 border-b-2 border-[#3B757F] hover:scale-105 hover:font-bold bg-gradient-to-r from-[#1A2C32] to-[#2D464C]"
      >
        {title}
      </button>
    </>
  );
};

export default ConvertBtn;
