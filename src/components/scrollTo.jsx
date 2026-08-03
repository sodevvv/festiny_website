"use client";

export default function scrollTo(id) {
    const el = document.getElementById(id);
    if (!el) return;

    const HEADER_OFFSET = 100;

    const elementPosition = el.getBoundingClientRect().top + window.pageYOffset;

    const offsetPosition = elementPosition - HEADER_OFFSET;

    window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
    });
}