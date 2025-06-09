const Contact = () => {
  return (
    <section id="contact" className="py-32 bg-card relative z-10">
      <div className="max-w-6xl mx-auto px-8 text-center">
        <div className="scroll-reveal space-y-16">
          {/* Enhanced Main heading */}
          <h2 className="text-7xl md:text-9xl font-display font-bold mb-16 leading-tight tracking-tighter">
            Let's craft
            <br />
            <span className="text-primary">something</span>
            <br />
            <span className="text-accent">extraordinary</span>
          </h2>

          {/* Enhanced Description */}
          <div className="scroll-reveal">
            <p className="text-2xl md:text-3xl text-muted-foreground max-w-4xl mx-auto leading-relaxed font-body font-light">
              Ready to transform your vision into reality? I'd love to explore
              your project and collaborate on creating{" "}
              <span className="text-primary font-medium">
                innovative solutions
              </span>{" "}
              that make a lasting impact.
            </p>
          </div>



          {/* Enhanced CTA Button */}
          <div className="pt-20 scroll-reveal">
            <a
              href="mailto:hello@kong.design"
              className="inline-block bg-primary text-primary-foreground hover:bg-accent hover:text-accent-foreground transition-all duration-500 px-16 py-6 text-xl font-body font-semibold rounded-full hover:scale-105"
            >
              Start a Project
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
