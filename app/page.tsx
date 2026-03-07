"use client";

import { useEffect, useState } from "react";
import { 
  ArrowUp, 
  Zap, 
  ArrowRight, 
  Globe, 
  Users, 
  TrendingUp, 
  Layers,
  Instagram,
  Target,
  Search,
  Monitor,
  Palette,
  Video,
  MessageCircle,
  Mail,
  Check
} from "lucide-react";

export default function Home() {
  const [navBg, setNavBg] = useState("rgba(15, 15, 15, 0.8)");
  const [isVisible, setIsVisible] = useState<Set<string>>(new Set());

  useEffect(() => {
    const handleScroll = () => {
      setNavBg(window.scrollY > 50 ? "rgba(15, 15, 15, 0.98)" : "rgba(15, 15, 15, 0.8)");
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => new Set([...prev, entry.target.id]));
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    document.querySelectorAll("[data-animate]").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  

  const pricingPlans = [
    {
      name: "Starter",
      price: "10K",
      currency: "KSH",
      period: "/month",
      description: "Perfect for small businesses just getting started online",
      features: [
        "Social media setup & management (2 platforms)",
        "Basic SEO optimization",
        "Monthly performance report",
        "2 social media posts per week",
        "WhatsApp Business integration"
      ],
      popular: false
    },
    {
      name: "Growth",
      price: "25K",
      currency: "KSH",
      period: "/month",
      description: "For businesses ready to expand their digital presence",
      features: [
        "Everything in Starter, plus:",
        "Social media management (4 platforms)",
        "Google My Business optimization",
        "4 social media posts per week",
        "Basic paid ads management",
        "Monthly content creation (4 reels)",
        "Website maintenance"
      ],
      popular: true
    },
    {
      name: "Premium",
      price: "55K",
      currency: "KSH",
      period: "/month",
      description: "Complete digital transformation for ambitious businesses",
      features: [
        "Everything in Growth, plus:",
        "Full social media management (all platforms)",
        "Advanced SEO & blog writing",
        "Daily social media posts",
        "Full paid ads management (Google + Meta)",
        "Weekly content creation",
        "Custom website design",
        "24/7 priority support"
      ],
      popular: false
    }
  ];

  return (
    <main className="min-h-screen bg-[#0f0f0f]">
      {/* Navigation */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 px-6 py-5 flex justify-between items-center backdrop-blur-md border-b border-white/5 transition-all duration-300"
        style={{ backgroundColor: navBg }}
      >
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-full flex items-center justify-center shadow-lg shadow-orange-500/30">
            <ArrowUp className="w-5 h-5 text-white" strokeWidth={3} />
          </div>
          <span className="text-2xl font-black tracking-widest">INUKA</span>
        </div>

        <ul className="hidden md:flex items-center gap-8">
          {["vision", "services", "pricing", "contact"].map((item) => (
            <li key={item}>
              <button
                onClick={() => scrollToSection(item)}
                className="text-sm text-gray-400 hover:text-white transition-colors relative group capitalize"
              >
                {item === "vision" ? "Our Vision" : item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full" />
              </button>
            </li>
          ))}
        </ul>

        <button className="md:hidden text-white p-2">
          <div className="w-6 h-0.5 bg-white mb-1.5" />
          <div className="w-6 h-0.5 bg-white mb-1.5" />
          <div className="w-6 h-0.5 bg-white" />
        </button>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center px-6 pt-24 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-radial-gold pointer-events-none" />
        
        {/* Enhanced Orbit Animation */}
        <div className="relative w-64 h-64 mb-10">
          {/* Outer glow ring */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-orange-500/10 via-yellow-500/10 to-orange-500/10 blur-2xl animate-pulse" />
          
          {/* Rotating container */}
          <div className="absolute inset-0 animate-orbit">
            {/* Orbit ring with gradient */}
            <div className="absolute inset-2 rounded-full border border-dashed border-yellow-500/40" 
                 style={{ 
                   background: "linear-gradient(135deg, rgba(212,168,83,0.1) 0%, transparent 50%, rgba(255,123,0,0.1) 100%)" 
                 }} />
            
            {/* Top dot with glow */}
            <div className="absolute top-2 left-1/2 -translate-x-1/2">
              <div className="w-4 h-4 bg-orange-500 rounded-full shadow-lg shadow-orange-500/80 animate-pulse" />
              <div className="absolute inset-0 w-4 h-4 bg-orange-400 rounded-full blur-sm animate-ping" style={{ animationDuration: "2s" }} />
            </div>
            
            {/* Bottom dot with glow */}
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2">
              <div className="w-4 h-4 bg-orange-500 rounded-full shadow-lg shadow-orange-500/80 animate-pulse" style={{ animationDelay: "1s" }} />
              <div className="absolute inset-0 w-4 h-4 bg-orange-400 rounded-full blur-sm animate-ping" style={{ animationDuration: "2s", animationDelay: "1s" }} />
            </div>

            {/* Side dots for more dynamic feel */}
            <div className="absolute top-1/2 left-2 -translate-y-1/2 w-2 h-2 bg-yellow-500/60 rounded-full" />
            <div className="absolute top-1/2 right-2 -translate-y-1/2 w-2 h-2 bg-yellow-500/60 rounded-full" />
          </div>

          {/* Static center */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-28 h-28 bg-[#0a0e27] rounded-full flex items-center justify-center shadow-2xl z-10 border border-white/10">
            <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-yellow-400 rounded-full flex items-center justify-center shadow-lg shadow-orange-500/50">
              <ArrowUp className="w-7 h-7 text-white" strokeWidth={3} />
            </div>
          </div>

          {/* Inner decorative ring */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-36 h-36 rounded-full border border-white/5 animate-spin-reverse" 
               style={{ animationDuration: "15s" }} />
        </div>

        {/* Location Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-600/10 border border-yellow-600/30 rounded-full text-xs font-semibold tracking-widest uppercase text-yellow-500 mb-6 backdrop-blur-sm">
          <span className="w-2 h-2 bg-orange-500 rounded-full animate-pulse" />
          Nairobi, Kenya 🇰🇪
        </div>

        <h1 className="text-6xl sm:text-7xl md:text-8xl font-black tracking-wider mb-2 text-center bg-gradient-to-b from-white to-gray-300 bg-clip-text text-transparent">
          INUKA
        </h1>
        
        <p className="text-sm md:text-base tracking-[0.3em] uppercase text-gray-500 mb-4 font-medium">
          Marketing Agency
        </p>
        
        <p className="font-serif italic text-2xl md:text-3xl text-yellow-600 mb-8 text-center">
          &ldquo;We Make Brands Rise&rdquo;
        </p>

        <p className="max-w-xl text-center text-gray-400 leading-relaxed mb-10 px-4">
          Is your business <span className="text-white font-semibold">invisible online?</span> We help small local businesses across Kenya build a powerful digital presence — so your customers can find you, trust you, and choose you.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 items-center mb-16">
          <button
            onClick={() => scrollToSection("contact")}
            className="group px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white rounded-full font-semibold flex items-center gap-2 transition-all hover:scale-105 hover:shadow-xl hover:shadow-orange-500/30"
          >
            <Zap className="w-5 h-5" />
            Get a Free Audit
          </button>
          
          <button
            onClick={() => scrollToSection("vision")}
            className="group px-8 py-4 border border-white/20 hover:border-orange-500 hover:text-orange-500 rounded-full font-medium transition-all flex items-center gap-2"
          >
            Our Vision
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="flex flex-col items-center gap-2 text-gray-500 text-xs tracking-widest uppercase animate-bounce">
          <span>Scroll</span>
          <ArrowRight className="w-4 h-4 rotate-90" />
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-[#0a0e27] py-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-orange-500/5 to-transparent pointer-events-none" />
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center relative">
          {[
            { number: "5M+", label: "Businesses without online presence in Kenya" },
            { number: "92%", label: "Consumers research online before buying" },
            { number: "3X", label: "More revenue with online presence" },
          ].map((stat, idx) => (
            <div
              key={idx}
              id={`stat-${idx}`}
              data-animate
              className={`fade-in ${isVisible.has(`stat-${idx}`) ? "visible" : ""} group`}
              style={{ transitionDelay: `${idx * 0.2}s` }}
            >
              <div className="text-5xl md:text-6xl font-black text-orange-500 mb-3 group-hover:scale-110 transition-transform duration-500">
                {stat.number}
              </div>
              <p className="text-gray-400 text-sm leading-relaxed uppercase tracking-wide max-w-[200px] mx-auto">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Vision Section */}
      <section id="vision" className="py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <div
            id="vision-header"
            data-animate
            className={`fade-in ${isVisible.has("vision-header") ? "visible" : ""}`}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-px bg-orange-500" />
              <span className="text-orange-500 text-xs font-bold tracking-[0.2em] uppercase">
                Our Vision
              </span>
            </div>

            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black uppercase leading-[0.95] mb-10">
              Empowering Local<br />
              <span className="text-orange-500">Businesses</span> to Rise<br />
              Online
            </h2>
          </div>

          <div className="space-y-6 text-gray-400 leading-relaxed text-lg">
            <p
              id="vision-p1"
              data-animate
              className={`fade-in ${isVisible.has("vision-p1") ? "visible" : ""}`}
            >
              Kenya is home to millions of <span className="text-white font-semibold">hardworking small business owners</span> — salon owners, restaurateurs, hardware shops, boutiques — who pour their hearts into what they do every single day.
            </p>

            <p
              id="vision-p2"
              data-animate
              className={`fade-in ${isVisible.has("vision-p2") ? "visible" : ""}`}
              style={{ transitionDelay: "0.1s" }}
            >
              Yet most of them remain <span className="text-white font-semibold">invisible online</span>, missing out on thousands of potential customers who are actively searching for exactly what they offer. That gap is what drives us.
            </p>

            <p
              id="vision-p3"
              data-animate
              className={`fade-in ${isVisible.has("vision-p3") ? "visible" : ""}`}
              style={{ transitionDelay: "0.2s" }}
            >
              At Inuka, our vision is simple: <span className="text-white font-semibold">to give every small local business in Kenya the digital tools, strategy, and presence</span> they need to compete, grow, and thrive in the modern world.
            </p>

            <blockquote
              id="vision-quote"
              data-animate
              className={`fade-in ${isVisible.has("vision-quote") ? "visible" : ""} border-l-4 border-orange-500 pl-6 py-4 my-10`}
              style={{ transitionDelay: "0.3s" }}
            >
              <p className="font-serif italic text-xl md:text-2xl text-yellow-600 leading-relaxed mb-4">
                &ldquo;We believe the best businesses shouldn&apos;t stay hidden. Every brand deserves to rise — and we&apos;re here to make that happen.&rdquo;
              </p>
              <cite className="text-yellow-600/80 text-sm not-italic font-medium">
                — Innocent Muthuri, Founder
              </cite>
            </blockquote>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: Globe, title: "Online Visibility for All", desc: "We believe every business, no matter how small, deserves to be found online. We make that possible affordably." },
            { icon: Users, title: "Built for Small Businesses", desc: "Our packages are designed specifically for local Kenyan SMEs — affordable, practical, and results-driven." },
            { icon: TrendingUp, title: "Real, Measurable Growth", desc: "We don't just post content — we build strategies that turn followers into paying customers and grow your revenue." },
            { icon: Layers, title: "Full Digital Support", desc: "From social media to websites, ads to SEO — we handle your entire digital presence so you can focus on your business." },
          ].map((feature, idx) => (
            <div
              key={idx}
              id={`feature-${idx}`}
              data-animate
              className={`fade-in ${isVisible.has(`feature-${idx}`) ? "visible" : ""} group p-8 rounded-2xl bg-[#0a0e27]/50 border border-white/5 hover:border-yellow-600/30 hover:bg-[#0a0e27] transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-yellow-600/10`}
              style={{ transitionDelay: `${idx * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-xl bg-yellow-600/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-7 h-7 text-yellow-600" />
              </div>
              <h3 className="text-lg font-bold mb-3 text-white">{feature.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 px-6 bg-[#0a0e27] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 via-transparent to-yellow-500/5 pointer-events-none" />
        <div className="max-w-6xl mx-auto relative">
          <div
            id="services-header"
            data-animate
            className={`fade-in ${isVisible.has("services-header") ? "visible" : ""} text-center mb-16`}
          >
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="w-12 h-px bg-orange-500" />
              <span className="text-orange-500 text-xs font-bold tracking-[0.2em] uppercase">
                What We Do
              </span>
              <div className="w-12 h-px bg-orange-500" />
            </div>
            
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black uppercase mb-6">
              Our Services
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto">
              Everything your business needs to show up, stand out, and grow online.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Instagram, title: "Social Media Management", desc: "We create, schedule, and manage your social media pages daily — keeping your audience engaged and growing." },
              { icon: Target, title: "Google & Meta Ads", desc: "Targeted ad campaigns on Google, Facebook and Instagram that put your business in front of ready-to-buy customers." },
              { icon: Search, title: "SEO", desc: "Rank higher on Google so customers find your business first when searching for products or services like yours." },
              { icon: Monitor, title: "Website Design", desc: "Professional, mobile-friendly websites that showcase your business 24/7 and convert visitors into customers." },
              { icon: Palette, title: "Branding & Logo Design", desc: "We create memorable brand identities — logos, colors, and visuals that make your business look professional and trustworthy." },
              { icon: Video, title: "Content Creation", desc: "Eye-catching photos, videos, reels and copywriting that tell your brand story and stop the scroll." },
            ].map((service, idx) => (
              <div
                key={idx}
                id={`service-${idx}`}
                data-animate
                className={`fade-in ${isVisible.has(`service-${idx}`) ? "visible" : ""} group p-8 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.05] hover:border-orange-500/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-orange-500/10`}
                style={{ transitionDelay: `${idx * 0.1}s` }}
              >
                <div className="w-16 h-16 rounded-2xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 group-hover:bg-orange-500/20">
                  <service.icon className="w-8 h-8 text-orange-500" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-white">{service.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-radial-gold pointer-events-none" />
        <div className="max-w-6xl mx-auto relative">
          <div
            id="pricing-header"
            data-animate
            className={`fade-in ${isVisible.has("pricing-header") ? "visible" : ""} text-center mb-16`}
          >
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="w-12 h-px bg-orange-500" />
              <span className="text-orange-500 text-xs font-bold tracking-[0.2em] uppercase">
                Pricing
              </span>
              <div className="w-12 h-px bg-orange-500" />
            </div>
            
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black uppercase mb-6">
              Simple, Transparent<br />
              <span className="text-orange-500">Pricing</span>
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto">
              Choose the plan that fits your business. No hidden fees, no surprises.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, idx) => (
              <div
                key={idx}
                id={`pricing-${idx}`}
                data-animate
                className={`fade-in ${isVisible.has(`pricing-${idx}`) ? "visible" : ""} relative rounded-2xl p-8 transition-all duration-500 hover:-translate-y-2 ${
                  plan.popular 
                    ? "bg-gradient-to-b from-orange-500/20 to-[#0a0e27] border-2 border-orange-500/50 shadow-xl shadow-orange-500/20" 
                    : "bg-[#0a0e27]/50 border border-white/10 hover:border-white/20"
                }`}
                style={{ transitionDelay: `${idx * 0.15}s` }}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-orange-500 text-white text-xs font-bold uppercase tracking-wider rounded-full">
                    Most Popular
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-400 text-sm mb-6">{plan.description}</p>
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-gray-400 text-lg">{plan.currency}</span>
                    <span className="text-5xl font-black text-white">{plan.price}</span>
                    <span className="text-gray-400">{plan.period}</span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, fidx) => (
                    <li key={fidx} className="flex items-start gap-3 text-sm text-gray-300">
                      <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                        plan.popular ? "bg-orange-500/20 text-orange-500" : "bg-green-500/20 text-green-500"
                      }`}>
                        <Check className="w-3 h-3" strokeWidth={3} />
                      </div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => scrollToSection("contact")}
                  className={`w-full py-4 rounded-full font-semibold transition-all hover:scale-105 ${
                    plan.popular
                      ? "bg-orange-500 hover:bg-orange-600 text-white shadow-lg shadow-orange-500/30"
                      : "bg-white/10 hover:bg-white/20 text-white border border-white/20"
                  }`}
                >
                  Get Started
                </button>
              </div>
            ))}
          </div>

          <p
            id="pricing-note"
            data-animate
            className={`fade-in ${isVisible.has("pricing-note") ? "visible" : ""} text-center text-gray-400 text-sm mt-12`}
            style={{ transitionDelay: "0.5s" }}
          >
            All plans include a free initial consultation. Custom packages available for enterprise needs.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-24 px-6 relative overflow-hidden bg-[#0a0e27]">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-orange-500/5 to-transparent pointer-events-none" />
        <div
          id="contact-content"
          data-animate
          className={`fade-in ${isVisible.has("contact-content") ? "visible" : ""} relative max-w-2xl mx-auto text-center`}
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-12 h-px bg-orange-500" />
            <span className="text-orange-500 text-xs font-bold tracking-[0.2em] uppercase">
              Get Started Today
            </span>
            <div className="w-12 h-px bg-orange-500" />
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black uppercase mb-6 leading-tight">
            Ready to <span className="text-orange-500">Rise?</span>
          </h2>

          <p className="text-gray-400 text-lg leading-relaxed mb-10">
            Let&apos;s get your business found online. Book a free audit and we&apos;ll show you exactly what&apos;s holding you back — and how to fix it.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="https://wa.me/254745751869?text=Hi%20INUKA,%20I'm%20interested%20in%20a%20free%20business%20audit"
              target="_blank"
              rel="noopener noreferrer"
              className="group w-full sm:w-auto px-8 py-4 bg-green-500 hover:bg-green-600 text-white rounded-full font-semibold flex items-center justify-center gap-3 transition-all hover:scale-105 hover:shadow-xl hover:shadow-green-500/30"
            >
              <MessageCircle className="w-5 h-5" />
              Chat on WhatsApp
            </a>
            
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=inukamarketingagency@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group w-full sm:w-auto px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white rounded-full font-semibold flex items-center justify-center gap-3 transition-all hover:scale-105 hover:shadow-xl hover:shadow-orange-500/30"
            >
              <Mail className="w-5 h-5" />
              Send Us an Email
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0a0e27] border-t border-white/5 py-12 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-2">
            <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-full flex items-center justify-center">
              <ArrowUp className="w-4 h-4 text-white" strokeWidth={3} />
            </div>
            <span className="text-xl font-black tracking-widest">INUKA MARKETING AGENCY</span>
          </div>
          
          <p className="font-serif italic text-yellow-600 mb-4">
            &ldquo;We Make Brands Rise&rdquo;
          </p>
          
          <p className="text-gray-500 text-sm">
            © 2025 Inuka Marketing Agency · Nairobi, Kenya
          </p>

          <p className="text-gray-500 text-sm mt-2">
            <a
              href="https://www.instagram.com/inukamarketing_agency/?__pwa=1#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white underline mr-2"
            >
              Follow us on Instagram
            </a>
            <span className="mx-2">·</span>
            Created by{' '}
            <a
              href="https://www.instagram.com/_.ben.nn_/?__pwa=1#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white underline ml-2"
            >
              Benedict
            </a>
          </p>
        </div>
      </footer>
    </main>
  );
}