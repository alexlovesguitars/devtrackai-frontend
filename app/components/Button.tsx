import Image from "next/image";

export function Button({ children, className = "", ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={`mt-8 flex px-4 w-full py-2 rounded-s bg-linear-to-r from-gradient-from to-gradient-to text-white justify-center font-semibold hover:opacity-90 transition-opacity ${className}`}
      {...props}
    >
      <Image src="/GitHub_Invertocat_White.svg" alt="GitHub Logo" width={20} height={20} className="mr-2" />
      {children}
    </button>
  );
}
