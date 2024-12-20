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
      <form className="relative w-full mt-8 sm:mt-7 rounded-lg shadow-sm shadow-white/20 divide-y-2 divide-white/10">
        <textarea
          rows="4"
          className="w-full h-72 outline-none pr-24 bg-gradient-to-b from-[#202030]/95 to-[#0A0A0A] py-3 rounded-md p-4 placeholder:text-gray-300"
          placeholder="Coloque el texto aquí..."
          onChange={textvalue}
          spellCheck="true"
          value={newText}
        ></textarea>
        {newText && (
          <button
            className="absolute top-1 right-0 mt-2 mr-5 px-2 py-1 text-sm rounded-md hover:bg-gray-700 shadow-white/20 shadow-sm"
            onClick={handleClear}
          >
            Borrar
          </button>
        )}
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
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-3">
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
