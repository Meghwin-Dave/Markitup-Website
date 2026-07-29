import { ReactNode } from "react";
import { motion } from "framer-motion";

interface SEOContentBlockProps {
  title: string;
  children: ReactNode;
}

export default function SEOContentBlock({ title, children }: SEOContentBlockProps) {
  return (
    <section className="py-12 md:py-16 relative overflow-hidden bg-white">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(108,59,255,0.05),transparent_40%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(255,122,0,0.05),transparent_40%)] pointer-events-none" />
      <div className="absolute top-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>
      
      <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-12 xl:px-[72px] relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative rounded-[2.5rem] p-8 md:p-12 lg:p-16 max-w-5xl mx-auto overflow-hidden shadow-[0_20px_60px_rgba(15,23,42,0.04)] border border-[#E7D8FF] bg-gradient-to-br from-white via-white to-[#F5F0FF]"
        >
          {/* Decorative Corner Gradients */}
          <div className="absolute -top-24 -right-24 w-48 h-48 bg-[#6C3BFF]/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-[#FF7A00]/10 rounded-full blur-3xl"></div>

          <div className="relative z-10">
            <h2 className="text-[clamp(1.75rem,3vw,2.5rem)] font-extrabold text-slate-900 mb-8 text-center tracking-tight leading-tight">
              {title}
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-[#6C3BFF] to-[#FF7A00] rounded-full mx-auto mb-8"></div>
            
            <div className="prose prose-slate prose-p:text-slate-600 prose-p:leading-loose prose-strong:text-[#0F172A] prose-strong:font-extrabold prose-strong:bg-[#6C3BFF]/10 prose-strong:px-1 prose-strong:py-0.5 prose-strong:rounded-md prose-a:text-[#6C3BFF] prose-a:font-bold prose-a:no-underline hover:prose-a:underline hover:prose-a:text-[#FF7A00] max-w-none text-[15px] md:text-[1.05rem] md:text-justify prose-headings:font-bold prose-headings:text-slate-800 prose-headings:mt-10 prose-headings:mb-4">
              {children}
            </div>
          </div>

        </motion.div>
      </div>
    </section>
  );
}
