// Template for consistent dark theme styling across all case study pages
// This ensures all pages follow the same design logic with:
// - Enhanced noise background
// - Dark theme colors (ultra dark with muted grays)
// - Glass morphism effects
// - Scroll animations
// - Strong typography with Space Grotesk + Inter
// - Sober color palette

const CASE_STUDY_STYLES = {
  background: "bg-background relative overflow-hidden",
  navigation: "glass-nav border-b border-border/20",
  heroSection: "pt-32 pb-20 bg-background relative z-10",
  contentSection: "py-20 bg-secondary/30 relative z-10",
  nextProjectSection: "py-20 bg-card relative z-10",
  glassCard: "glass-card rounded-3xl",
  scrollReveal: "scroll-reveal",
  typography: {
    category: "text-sm text-accent font-body font-medium tracking-widest uppercase",
    mainTitle: "text-7xl md:text-9xl font-display font-bold text-foreground leading-tight tracking-tighter",
    subtitle: "text-2xl md:text-3xl text-muted-foreground max-w-4xl mx-auto leading-relaxed font-body font-light",
    sectionTitle: "text-5xl md:text-7xl font-display font-bold text-foreground mb-12 leading-tight tracking-tighter",
    body: "text-xl md:text-2xl text-muted-foreground leading-relaxed font-body font-light"
  }
};

export default CASE_STUDY_STYLES;

