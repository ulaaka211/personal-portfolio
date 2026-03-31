export const Footer = () => {
  return (
    <footer className="w-full bg-[#0a0a0a] border-t border-white/10 py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <span className="text-2xl font-bold gradient-text">&lt;S /&gt;</span>
        <p className="text-sm text-gray-500 text-center">
          © {new Date().getFullYear()} Saikhanbayar. All rights reserved.
        </p>
        <p className="text-sm text-gray-600 font-mono">
          Built with Next.js & Tailwind
        </p>
      </div>
    </footer>
  );
};
