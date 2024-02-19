import { NAVBAR } from "config";
import { createRef, useEffect, useRef } from "react";

export const NavLinks = () => {
  const linksRef = useRef(NAVBAR.links.map(() => createRef()));

  useEffect(() => {
    const onScroll = () => {
      linksRef.current.forEach((ref, index) => {
        const section = document.querySelector(NAVBAR.links[index].href)!;
        const rect = section.getBoundingClientRect();
        if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
          ref.current.classList.add("active");
        } else {
          ref.current.classList.remove("active");
        }
      });
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="grid gap-4 max-w-fit">
      {NAVBAR.links.map((link, index) => {
        return (
          <a
            href={link.href}
            className="grid items-center grid-cols-[20px_100px_100px] gap-8"
          >
            <span className="text-md">0{index + 1}</span>
            <span className="w-full h-[0.20rem] bg-[#003566]/[0.5]" />
            <span className="font-medium tracking-wider uppercase text-md">
              {link.title}
            </span>
          </a>
        );
      })}
    </div>
  );
};
