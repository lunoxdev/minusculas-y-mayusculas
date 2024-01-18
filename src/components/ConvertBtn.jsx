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
      <button className="relative mt-4" onClick={handleClick}>
        <div className="absolute top-0 flex w-full justify-center">
          <div className="h-[1px] animate-border-width rounded-full bg-gradient-to-r from-[rgba(17,17,17,0)] via-white to-[rgba(17,17,17,0)] transition-all duration-1000" />
        </div>
        <div className="block text-center text-balance h-full w-full rounded-lg border border-slate-800 px-3 py-3 focus:outline-none focus:ring-1 focus:ring-slate-400 focus:ring-offset-1 focus:ring-offset-slate-50 hover:bg-gray-900">
          {title}
        </div>
      </button>
    </>
  );
};

export default ConvertBtn;
