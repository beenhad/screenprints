import Link from "next/link";

const pages = [
  {
    url: "/art-requirements",
    text: "Art requirements",
  },
  {
    url: "/contact",
    text: "Contact",
  },
  {
    url: "/faq",
    text: "Faq",
  },
  {
    url: "/services",
    text: "Services",
  },
];
const Footer = () => {
  return (
    <footer className="container text-center __text_sm mt-[60px] space-y-4 pb-8">
      <Link
        className="duration-200 opacity-50 hover:opacity-80"
        href="/terms-and-conditions"
      >
        Terms of Service
      </Link>
      <p className="opacity-50">© 2023 GrayShapes, Inc.</p>

      {/* <div className="flex flex-wrap justify-center gap-5 __text_sm">
        {pages.map((page, i) => (
          <Link
            className="opacity-50 hover:opacity-100"
            href={page.url}
            key={i}
          >
            {page.text}
          </Link>
        ))}
      </div> */}
    </footer>
  );
};

export default Footer;
