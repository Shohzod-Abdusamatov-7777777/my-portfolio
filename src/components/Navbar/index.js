import React, { useState } from "react";
import { useScrollSections } from "react-scroll-section";
import {
  NavbarContainer,
  NavbarWrapper,
  NavbarItem,
  NavMenu,
  NavLogo,
  Icon,
  Bars,
  ScrollTop,
} from "./NavbarElements";
import { FaArrowUp, FaBars, FaTimes } from "react-icons/fa";

export const Navbar = () => {
  const sections = useScrollSections();
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  // scroll to top button
  var rootElement = document.documentElement;
  function scrollToTop() {
    rootElement.scrollTo({ top: 0, behavior: "smooth" });
  }
  function handleScrollTop() {
    // scroll to top button
    var scrollToTopBtn = document.querySelector(".scrollToTopBtn");
    function handleScroll() {
      var scrollTotal = rootElement.scrollHeight - rootElement.clientHeight;
      if (rootElement.scrollTop / scrollTotal > 0.4) {
        scrollToTopBtn.classList.add("showBtn");
      } else {
        scrollToTopBtn.classList.remove("showBtn");
      }
    }

    document.addEventListener("scroll", handleScroll);
  }
  document.addEventListener("scroll", handleScrollTop);

  // scroll navbar hide show
  var lastScroll = 0;
  window.addEventListener("scroll", () => {
    var navbar = document.querySelector(".scroll");
    const currentScroll = window.pageYOffset;

    if (currentScroll <= 0) {
      navbar.classList.remove("scroll-down");
      return;
    }
    if (
      currentScroll > lastScroll &&
      !navbar.classList.contains("scroll-down")
    ) {
      navbar.classList.remove("scroll-up");
      navbar.classList.add("scroll-down");
    } else if (
      currentScroll < lastScroll &&
      navbar.classList.contains("scroll-down")
    ) {
      navbar.classList.remove("scroll-down");
      navbar.classList.add("scroll-up");
    }
    lastScroll = currentScroll;
  });

  return (
    <>
      <NavbarContainer isOpen={isOpen} className="scroll scroll-up">
        <NavbarWrapper>
          <NavLogo href="/">
            <Icon />
            SHOHZOD
          </NavLogo>
          <Bars onClick={handleOpen}>{isOpen ? <FaTimes /> : <FaBars />}</Bars>
          <NavMenu isOpen={isOpen} onClick={handleOpen}>
            {sections.map(({ id, onClick, selected }) => (
              <NavbarItem key={id} onClick={onClick} selected={selected}>
                {id.toUpperCase()}
              </NavbarItem>
            ))}
          </NavMenu>
        </NavbarWrapper>
      </NavbarContainer>

      <ScrollTop className="scrollToTopBtn" onClick={scrollToTop}>
        <FaArrowUp />
        <span></span>
      </ScrollTop>
    </>
  );
};
