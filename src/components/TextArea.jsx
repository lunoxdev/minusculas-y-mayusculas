import { useState } from "react";
import CopyBtn from "./CopyBtn";
import ConvertBtn from "../components/ConvertBtn";

const TextArea = () => {
  const [newText, setNewText] = useState("");
  const [lineCount, setLineCount] = useState(1);

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
  };

  return (
    <>
      <form className="w-full mt-5 border rounded-lg bg-black border-gray-600 relative">
        <div className="px-4 py-2 rounded-t-lg bg-[#121212]">
          <textarea
            rows="4"
            className="w-full h-40 text-sm bg-[#121212] outline-none pr-24 py-3"
            placeholder="Convierta su texto pegándolo aquí..."
            onChange={textvalue}
            spellCheck="true"
            value={newText}
          ></textarea>
          {newText && (
            <button
              className="absolute top-1 right-0 mt-2 mr-9 px-2 py-1 border text-white text-xs rounded hover:bg-gray-800"
              onClick={handleClear}
            >
              Borrar
            </button>
          )}
        </div>
        <div className="flex items-center justify-between px-3 py-2 border-t border-gray-600">
          <CopyBtn textCopied={newText} />
          <p className="text-xs text-gray-400">
            <span className="text-white">{lettersCount}</span>{" "}
            {`${lettersCount === 1 ? "Letra" : "Letras"} | `}
            <span className="text-white">{wordsCount}</span>{" "}
            {`${wordsCount === 1 ? "Palabra" : "Palabras"} | `}
            <span className="text-white">{lineCount}</span>{" "}
            {`${lineCount === 1 ? "Línea" : "Líneas"}`}
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
    </>
  );
};

export default TextArea;
