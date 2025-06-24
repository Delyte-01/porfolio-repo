import React from 'react'

const Footer = () => {
  return (
    <footer className="py-8 px-4 border-t border-slate-200 dark:border-slate-700">
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-slate-600 dark:text-slate-300 flex flex-col">
          Crafted with precision and passion by <strong>DelyteTech💡.</strong>
          <span>
            {" "}
            Delivering sleek, responsive, and intelligent web experiences
            powered by GSAP,Framer Motion, Next.js, and Tailwind CSS. <br />
            &copy; {new Date().getFullYear()} All rights reserved.
          </span>
        </p>
      </div>
    </footer>
  );
}

export default Footer