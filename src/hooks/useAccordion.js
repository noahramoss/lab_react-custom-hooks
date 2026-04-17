import { useState, useEffect } from "react";

export default function useAccordion() {
  const [isOpen, setIsOpen] = useState(false);

  const open = () => {
    setIsOpen(true);
  };

  const close = () => {
    setIsOpen(false);
  };

  const toggle = () => {
    setIsOpen((prevState) => !prevState);
  };
  return { isOpen, toggle, open, close };
}
