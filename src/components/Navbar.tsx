import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Speakers", path: "/speakers" },
  { label: "Venue", path: "/venue" },
  { label: "Team", path: "/team" },
  { label: "Sponsors", path: "/sponsors" },
];

const Navbar = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 50);
  });

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 pointer-events-none flex justify-between items-start py-6 px-6 sm:px-12">
      {/* Logo on top left */}
      <Link to="/" className="pointer-events-auto flex items-center">
        <motion.img
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          src="/tedxiceas-logo.png"
          alt="TEDxICEAS Logo"
          className="h-10 sm:h-12 w-auto object-contain drop-shadow-2xl"
        />
      </Link>


      {/* Desktop Right Side Hover Pill */}
      <div className="hidden md:flex flex-col items-end pointer-events-auto">
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className={`flex items-center overflow-hidden rounded-full border transition-colors duration-500 ease-out ${scrolled || isHovered
            ? "glass border-white/10 shadow-lg shadow-black/20 bg-background/50"
            : "bg-transparent border-transparent"
            }`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          layout
        >
          <div className="flex items-center h-[56px] px-5">
            <AnimatePresence>
              {isHovered && (
                <motion.div
                  initial={{ width: 0, opacity: 0 }}
                  animate={{ width: "auto", opacity: 1 }}
                  exit={{ width: 0, opacity: 0 }}
                  transition={{ type: "spring", stiffness: 100, damping: 20, mass: 0.8 }}
                  className="flex items-center gap-6 whitespace-nowrap overflow-hidden"
                >
                  {navItems.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      className={`text-sm font-medium transition-colors duration-200 hover:text-primary ${location.pathname === item.path
                        ? "text-primary"
                        : "text-muted-foreground"
                        }`}
                    >
                      {item.label}
                    </Link>
                  ))}
                  <Link
                    to="/register"
                    className="bg-primary text-primary-foreground px-5 py-2 rounded-full text-sm font-semibold hover:bg-primary/90 transition-colors"
                  >
                    Register
                  </Link>
                  {/* Divider */}
                  <div className="w-px h-6 bg-white/20 mx-2" />
                </motion.div>
              )}
            </AnimatePresence>
            <Menu className="w-6 h-6 text-foreground shrink-0 cursor-pointer" />
          </div>
        </motion.div>
      </div>

      {/* Mobile toggle */}
      <button
        onClick={() => setMobileOpen(!mobileOpen)}
        className="md:hidden text-foreground pointer-events-auto bg-black/50 p-3 rounded-full glass border border-white/10"
      >
        {mobileOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile menu dropdown */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="absolute top-24 right-6 md:hidden glass border border-white/10 rounded-2xl p-4 w-56 pointer-events-auto flex flex-col gap-4 shadow-2xl"
          >
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-medium transition-colors ${location.pathname === item.path
                  ? "text-primary"
                  : "text-muted-foreground"
                  }`}
              >
                {item.label}
              </Link>
            ))}
            <div className="h-px bg-white/10 w-full" />
            <Link
              to="/register"
              className="bg-primary text-primary-foreground px-5 py-2.5 rounded-lg text-sm font-semibold text-center"
            >
              Register
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
