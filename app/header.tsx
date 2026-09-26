"use client";

import { useEffect, useId, useRef, useState } from "react";
import Link from "next/link";

const nav = [
  { href: "/docs/layouts", label: "키보드 배열" },
  { href: "/docs/mac", label: "macOS 입력기" },
  { href: "/docs/iphone", label: "iOS 키보드" },
  { href: "/docs/editor", label: "편집기" },
  // { href: "/docs/develop", label: "개발 문서" },
] as const;

function MenuIcon({ open }: { open: boolean }) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      aria-hidden
    >
      {open ? (
        <path d="M6 6l12 12M18 6L6 18" />
      ) : (
        <path d="M4 7h16M4 12h16M4 17h16" />
      )}
    </svg>
  );
}

export default function Header() {
  const [open, setOpen] = useState(false);
  const menuId = useId();
  const openButtonRef = useRef<HTMLButtonElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    const media = window.matchMedia("(min-width: 768px)");
    const onViewportChange = () => {
      if (media.matches) setOpen(false);
    };

    window.addEventListener("keydown", onKeyDown);
    media.addEventListener("change", onViewportChange);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
      media.removeEventListener("change", onViewportChange);
      openButtonRef.current?.focus();
    };
  }, [open]);

  return (
    <header className="bg-gray-50 dark:bg-zinc-900">
      <div className="mx-auto flex max-w-240 flex-row items-center justify-between px-4 py-4">
        <div className="flex min-w-0 flex-row items-baseline gap-x-4">
          <h1>
            <Link href="/">타닥</Link>
          </h1>
          <nav className="hidden flex-row items-baseline gap-x-4 md:flex">
            {nav.map((item) => (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
        <button
          ref={openButtonRef}
          type="button"
          className="shrink-0 p-1 text-gray-900 md:hidden dark:text-zinc-100"
          aria-controls={menuId}
          aria-expanded={open}
          aria-label="메뉴 열기"
          onClick={() => setOpen(true)}
        >
          <MenuIcon open={false} />
        </button>
      </div>
      {open ? (
        <div
          id={menuId}
          className="fixed inset-0 z-50 flex flex-col bg-white md:hidden dark:bg-black"
          role="dialog"
          aria-modal="true"
          aria-label="메뉴"
        >
          <div className="flex flex-row items-center justify-between bg-gray-50 px-4 py-4 dark:bg-zinc-900">
            <h1>
              <Link href="/" onClick={() => setOpen(false)}>
                타닥
              </Link>
            </h1>
            <button
              ref={closeButtonRef}
              type="button"
              className="shrink-0 p-1 text-gray-900 dark:text-zinc-100"
              aria-label="메뉴 닫기"
              onClick={() => setOpen(false)}
            >
              <MenuIcon open />
            </button>
          </div>
          <nav className="flex flex-1 flex-col justify-center gap-8 px-8 text-2xl font-semibold text-gray-900 dark:text-zinc-100">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      ) : null}
    </header>
  );
}
