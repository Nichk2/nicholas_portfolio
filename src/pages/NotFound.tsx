import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import useScrollReveal from "@/hooks/useScrollReveal";

const NotFound = () => {
  const location = useLocation();
  useScrollReveal();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background relative overflow-hidden">
      <div className="text-center scroll-reveal glass-card p-16 rounded-3xl max-w-2xl mx-8">
        <h1 className="text-8xl md:text-9xl font-display font-bold mb-8 text-foreground leading-tight tracking-tighter">
          404
        </h1>
        <p className="text-2xl md:text-3xl text-muted-foreground mb-12 font-body font-light">
          Page not found in this dimension
        </p>
        <Link
          to="/"
          className="inline-block bg-primary text-primary-foreground hover:bg-accent hover:text-accent-foreground transition-all duration-500 px-12 py-4 text-lg font-body font-semibold rounded-full hover:scale-105"
        >
          Return to Reality
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
