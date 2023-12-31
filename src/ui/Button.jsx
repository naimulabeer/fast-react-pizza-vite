import { Link } from "react-router-dom";

function Button({ children, disabled, to, type, onClick }) {
  const base =
    "inline-block text-sm rounded-full bg-[#57cc99] font-semibold uppercase tracking-wide text-stone-800 transition-colors duration-300 hover:bg-[#17a584] focus:bg-[#c7f9cc] focus:outline-none focus:ring focus:ring-green-300 focus:ring-offset-2 disabled:cursor-not-allowed";

  const styles = {
    primary: base + " px-4 py-3 md:px-6 md:py-4 text-white",
    small: base + " px-4 py-2 md:px-5 md:py-2.5 text-xs",
    round:
      base +
      " px-2.5 py-1 md:px-3.5 md:py-2 text-sm border-2 border-[#d8e2dc] bg-[#f2e9e4] hover:bg-[#a2d2ff] focus:bg-[#a2d2ff] focus:ring-blue-300",
    delete:
      "px-4 py-2 md:px-5 md:py-2.5 inline-block text-xs rounded-full bg-[#d90429] uppercase tracking-wide text-white transition-colors duration-300 hover:bg-[#e63946] focus:bg-[#e63946] focus:outline-none focus:ring focus:ring-red-300 focus:ring-offset-2 disabled:cursor-not-allowed",
    secondary:
      "inline-block text-sm rounded-full border-2 border-stone-300 font-semibold uppercase tracking-wide text-stone-400 transition-colors duration-300 hover:bg-stone-300 hover:text-stone-800 focus:bg-stone-300 focus:text-stone-800 focus:outline-none focus:ring focus:ring-stone-200 focus:ring-offset-2 disabled:cursor-not-allowed px-4 py-2.5 md:px-6 md:py-3.5",
  };

  if (to)
    return (
      <Link to={to} className={styles[type]}>
        {children}
      </Link>
    );

  if (onClick)
    return (
      <button onClick={onClick} disabled={disabled} className={styles[type]}>
        {children}
      </button>
    );

  return (
    <button disabled={disabled} className={styles[type]}>
      {children}
    </button>
  );
}

export default Button;
