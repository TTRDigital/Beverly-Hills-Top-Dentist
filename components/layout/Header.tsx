"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import type { Img, Link as LinkT, MenuItem } from "@/lib/types";
import { ChevronDown, ChevronLeft, CloseIcon, MenuIcon } from "@/components/ui/Icons";

const norm = (p: string) => (p.endsWith("/") ? p : `${p}/`);

/** True when the item (or one of its children) is the current page. */
function isActive(item: MenuItem, path: string): boolean {
  if (item.href !== "/" && !item.href.startsWith("#") && norm(item.href) === path) return true;
  if (item.href === "/" && path === "/") return true;
  return !!item.children?.some((c) => isActive(c, path));
}

/**
 * Sticky header like the old Blocksy header: sage bar, logo left, uppercase
 * menu right. Services opens a dropdown whose items open a second level to
 * the left. Below 1200px a hamburger opens a side panel with accordion menus.
 */
export function Header({ menu, cta, phone, phoneHref, logo, siteName }: { menu: MenuItem[]; cta: LinkT; phone: string; phoneHref: string; logo: Img; siteName: string }) {
  const path = norm(usePathname() || "/");
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});
  const closeRef = useRef<HTMLButtonElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  // Close the panel on navigation and with Escape; keep the page from scrolling behind it.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    document.documentElement.style.overflow = "hidden";
    closeRef.current?.focus();
    return () => {
      document.removeEventListener("keydown", onKey);
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  const close = () => {
    setOpen(false);
    triggerRef.current?.focus();
  };

  const linkCls = (active: boolean) => `transition-colors hover:text-brand-2 ${active ? "text-brand-2" : "text-ink"}`;

  return (
    <header className="sticky top-0 z-50 bg-header">
      <div className="container-x flex h-20 items-center justify-between gap-6">
        <Link href="/" className="shrink-0" aria-label={`${siteName}, home`}>
          <Image src={logo.src} alt={logo.alt || siteName} width={logo.width} height={logo.height} loading="eager" sizes="(min-width: 1024px) 260px, 200px" className="h-auto max-h-[61px] w-[200px] object-contain object-left lg:w-[260px]" />
        </Link>

        {/* Desktop menu */}
        <nav aria-label="Main menu" className="hidden min-[1200px]:block">
          <ul className="flex items-center gap-[10px]">
            {menu.map((item) => (
              <li key={item.label} className="group/top relative">
                {item.children?.length ? (
                  <>
                    {/* A link (not a button) so the hub page, e.g. /services/, is linked from every page; hover and focus still open the dropdown. */}
                    <Link
                      href={item.href}
                      aria-current={norm(item.href) === path ? "page" : undefined}
                      className={`flex items-center gap-2 whitespace-nowrap px-[7.5px] py-3 text-[15.1px] font-bold uppercase leading-[1.2] ${linkCls(isActive(item, path))}`}
                    >
                      {item.label}
                      <ChevronDown className="h-2 w-2 transition-transform duration-200 group-hover/top:rotate-180" />
                    </Link>
                    <Dropdown items={item.children} path={path} />
                  </>
                ) : (
                  <Link href={item.href} aria-current={isActive(item, path) ? "page" : undefined} className={`block whitespace-nowrap px-[7.5px] py-3 text-[15.1px] font-bold uppercase leading-[1.2] ${linkCls(isActive(item, path))}`}>
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
            <li>
              <Link
                href={cta.href}
                data-track="book_appointment"
                aria-current={norm(cta.href) === path ? "page" : undefined}
                className={`block whitespace-nowrap border-b-2 border-ink px-2 py-2 text-[15.1px] font-bold uppercase leading-[1.2] ${linkCls(norm(cta.href) === path)}`}
              >
                {cta.label}
              </Link>
            </li>
            <li>
              <a href={phoneHref} data-track="click_to_call" className="block whitespace-nowrap px-[7.5px] py-3 text-[15.1px] font-bold leading-[1.2] text-ink transition-colors hover:text-brand-2">
                {phone}
              </a>
            </li>
          </ul>
        </nav>

        {/* Mobile trigger */}
        <button
          ref={triggerRef}
          type="button"
          onClick={() => setOpen(true)}
          aria-expanded={open}
          aria-controls="offcanvas"
          aria-label="Open menu"
          className="-mr-2 flex h-11 w-11 items-center justify-center text-ink min-[1200px]:hidden"
        >
          <MenuIcon />
        </button>
      </div>

      {/* Mobile side panel */}
      <div className={`fixed inset-0 z-[60] min-[1200px]:hidden ${open ? "" : "pointer-events-none"}`} aria-hidden={!open}>
        <div className={`absolute inset-0 bg-black/30 transition-opacity duration-300 ${open ? "opacity-100" : "opacity-0"}`} onClick={close} />
        <div
          id="offcanvas"
          role="dialog"
          aria-modal="true"
          aria-label="Menu"
          className={`absolute inset-y-0 right-0 flex w-[80vw] flex-col overflow-y-auto bg-white shadow-[0_0_70px_rgba(0,0,0,0.35)] transition-transform duration-300 min-[690px]:w-[65vw] ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
          inert={!open}
        >
          <div className="flex justify-end p-4">
            <button ref={closeRef} type="button" onClick={close} aria-label="Close menu" className="flex h-11 w-11 items-center justify-center text-black transition-colors hover:text-brand-2">
              <CloseIcon />
            </button>
          </div>
          <nav aria-label="Mobile menu" className="flex flex-1 flex-col justify-center px-[25px] pb-16">
            <ul className="space-y-1">
              {menu.map((item) => (
                <MobileItem key={item.label} item={item} path={path} depth={0} expanded={expanded} setExpanded={setExpanded} onNavigate={() => setOpen(false)} />
              ))}
              <li>
                <Link href={cta.href} data-track="book_appointment" onClick={() => setOpen(false)} className={`block py-1.5 text-lg font-bold ${linkCls(norm(cta.href) === path)}`}>
                  {cta.label}
                </Link>
              </li>
              <li>
                <a href={phoneHref} className="block py-1.5 text-lg font-bold text-[#191919]">
                  {phone}
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

/** First-level dropdown; items with children open a flyout to the left (as on the old site). */
function Dropdown({ items, path }: { items: MenuItem[]; path: string }) {
  return (
    <ul className="invisible absolute right-0 top-full z-10 w-[250px] translate-y-1 rounded-menu bg-dropdown py-1 opacity-0 shadow-menu transition-all duration-200 group-focus-within/top:visible group-focus-within/top:translate-y-0 group-focus-within/top:opacity-100 group-hover/top:visible group-hover/top:translate-y-0 group-hover/top:opacity-100 mt-[26px] before:absolute before:-top-[26px] before:left-0 before:h-[26px] before:w-full">
      {items.map((item) => (
        <li key={item.label} className="group/sub relative">
          <Link
            href={item.href}
            className={`flex items-center justify-between gap-3 px-[18px] py-[12px] text-[15px] font-semibold leading-[1.3] transition-colors hover:text-brand-2 ${isActive(item, path) ? "text-brand-2" : "text-ink"}`}
          >
            {item.label}
            {item.children?.length ? <ChevronLeft /> : null}
          </Link>
          {item.children?.length ? (
            <ul className="invisible absolute right-full top-0 mr-[5px] w-[250px] rounded-menu bg-dropdown py-1 opacity-0 shadow-menu transition-all duration-200 group-focus-within/sub:visible group-focus-within/sub:opacity-100 group-hover/sub:visible group-hover/sub:opacity-100 after:absolute after:-right-[5px] after:top-0 after:h-full after:w-[5px]">
              {item.children.map((c) => (
                <li key={c.label}>
                  <Link
                    href={c.href}
                    aria-current={isActive(c, path) ? "page" : undefined}
                    className={`block px-[18px] py-[12px] text-[15px] font-semibold leading-[1.3] transition-colors hover:text-brand-2 ${isActive(c, path) ? "text-brand-2" : "text-ink"}`}
                  >
                    {c.label}
                  </Link>
                </li>
              ))}
            </ul>
          ) : null}
        </li>
      ))}
    </ul>
  );
}

function MobileItem({
  item,
  path,
  depth,
  expanded,
  setExpanded,
  onNavigate,
}: {
  item: MenuItem;
  path: string;
  depth: number;
  expanded: Record<string, boolean>;
  setExpanded: React.Dispatch<React.SetStateAction<Record<string, boolean>>>;
  onNavigate: () => void;
}) {
  const key = `${depth}-${item.label}`;
  const isOpen = !!expanded[key];
  const active = isActive(item, path);
  const text = depth === 0 ? "text-lg font-bold" : "text-base font-bold";
  return (
    <li className={depth > 0 ? "relative pl-[30px] before:absolute before:left-0 before:top-[1.05em] before:h-[3px] before:w-[3px] before:rounded-full before:bg-black/30" : ""}>
      <div className="flex items-center justify-between gap-3">
        {item.children?.length && depth === 0 ? (
          <button type="button" onClick={() => setExpanded((e) => ({ ...e, [key]: !isOpen }))} aria-expanded={isOpen} className={`flex-1 py-1.5 text-left ${text} ${active || isOpen ? "text-brand-2" : "text-[#191919]"}`}>
            {item.label}
          </button>
        ) : (
          <Link href={item.href} onClick={onNavigate} aria-current={norm(item.href) === path ? "page" : undefined} className={`flex-1 py-1.5 ${text} ${active ? "text-brand-2" : depth ? "text-black" : "text-[#191919]"}`}>
            {item.label}
          </Link>
        )}
        {item.children?.length ? (
          <button
            type="button"
            onClick={() => setExpanded((e) => ({ ...e, [key]: !isOpen }))}
            aria-expanded={isOpen}
            aria-label={`${isOpen ? "Collapse" : "Expand"} ${item.label}`}
            className="flex h-9 w-9 shrink-0 items-center justify-center text-ink"
          >
            <ChevronDown className={`h-2.5 w-2.5 transition-transform ${isOpen ? "rotate-180" : ""}`} />
          </button>
        ) : null}
      </div>
      {item.children?.length && isOpen ? (
        <ul className="space-y-0.5 pb-1">
          {item.children.map((c) => (
            <MobileItem key={c.label} item={c} path={path} depth={depth + 1} expanded={expanded} setExpanded={setExpanded} onNavigate={onNavigate} />
          ))}
        </ul>
      ) : null}
    </li>
  );
}
