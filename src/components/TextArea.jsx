import { useState } from "react";
import CopyBtn from "./CopyBtn";
import ConvertBtn from "../components/ConvertBtn";

const TextArea = () => {
  const [newText, setNewText] = useState("");
  const [lineCount, setLineCount] = useState(0);

  // Guarda el nuevo valor en modifiedText
  const textvalue = (e) => {
    const dinamicText = e.target.value;
    setNewText(dinamicText);

    // Contador de lineas
    const lines = dinamicText.split(/\r\n|\r|\n/);
    setLineCount(lines.length);
  };

  // Contador de letras
  const countLetters = (newText) => {
    const letters = newText.replace(/\s/g, "");
    return letters.length;
  };

  // Contador de palabras y si no hay, devuelve 0 palabras
  const countWords = (newText) => {
    if (newText.trim() === "") {
      return 0;
    }
    const words = newText.trim().split(/\s+/);
    return words.length;
  };

  // Variables para contador de letras y palabras
  const lettersCount = countLetters(newText);
  const wordsCount = countWords(newText);

  const handleClear = () => {
    setNewText("");
    setLineCount(0);
  };

  return (
    <div>
      <form className="w-full mt-5 rounded-lg bg-[#1a2c32] shadow-[#356169] shadow-lg relative">
        <div className="px-4 py-2 rounded-t-lg bg-[#1e3239] border-b-2 border-[#325158]">
          <textarea
            rows="4"
            className="w-full h-52 text-sm outline-none pr-24 py-3 bg-[#1e3239] placeholder:text-[#ddeff0]"
            placeholder="Coloque su texto aquí..."
            onChange={textvalue}
            spellCheck="true"
            value={newText}
          ></textarea>
          {newText && (
            <button
              className="absolute top-1 right-0 mt-2 mr-8 px-2 py-1 border-t-2 border-b-2 border-[#ddeff0] text-xs rounded hover:bg-[#325158]"
              onClick={handleClear}
            >
              Borrar
            </button>
          )}
        </div>
        <div className="flex items-center justify-between px-3 py-2">
          <CopyBtn textCopied={newText} />
          <p className="text-xs">
            <span>{lettersCount}</span>{" "}
            {`${lettersCount === 1 ? "Letra" : "Letras"} | `}
            <span>{wordsCount}</span>{" "}
            {`${wordsCount === 1 ? "Palabra" : "Palabras"} | `}
            <span>{lineCount}</span> {`${lineCount === 1 ? "Línea" : "Líneas"}`}
          </p>
        </div>
      </form>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-7">
        <ConvertBtn
          title="Convertir a Mayúscula"
          convertTo="mayusculas"
          setNewText={setNewText}
        />
        <ConvertBtn
          title="Convertir a Minúscula"
          convertTo="minusculas"
          setNewText={setNewText}
        />
        <ConvertBtn
          title="Eliminar espacios extra"
          convertTo="eliminarespacios"
          setNewText={setNewText}
        />
        <ConvertBtn
          title="Capitalizar el texto"
          convertTo="capitalizar"
          setNewText={setNewText}
        />
      </div>
    </div>
  );
};

export default TextArea;
