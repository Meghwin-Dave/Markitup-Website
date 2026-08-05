import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cookie, X, Sliders, Check } from "lucide-react";
import { Link } from "wouter";

interface CookiePreferences {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
  timestamp: string;
}

const COOKIE_CONSENT_KEY = "markitup_cookie_consent";

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    openCookiePreferences?: () => void;
  }
}

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);
  const [preferences, setPreferences] = useState({
    necessary: true,
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    // Expose global trigger for reopening cookie preferences (e.g. from footer or cookie policy page)
    window.openCookiePreferences = () => {
      const stored = localStorage.getItem(COOKIE_CONSENT_KEY);
      if (stored) {
        try {
          const parsed = JSON.parse(stored);
          setPreferences({
            necessary: true,
            analytics: !!parsed.analytics,
            marketing: !!parsed.marketing,
          });
        } catch {
          // ignore
        }
      }
      setShowPreferences(true);
      setIsVisible(true);
    };

    const storedConsent = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (!storedConsent) {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1000);
      return () => clearTimeout(timer);
    } else {
      try {
        const parsed: CookiePreferences = JSON.parse(storedConsent);
        applyGtagConsent(parsed.analytics, parsed.marketing);
      } catch {
        setIsVisible(true);
      }
    }
  }, []);

  const applyGtagConsent = (analytics: boolean, marketing: boolean) => {
    if (typeof window !== "undefined" && typeof window.gtag === "function") {
      window.gtag("consent", "update", {
        analytics_storage: analytics ? "granted" : "denied",
        ad_storage: marketing ? "granted" : "denied",
        ad_user_data: marketing ? "granted" : "denied",
        ad_personalization: marketing ? "granted" : "denied",
      });
    }
  };

  const saveConsent = (analytics: boolean, marketing: boolean) => {
    const consentData: CookiePreferences = {
      necessary: true,
      analytics,
      marketing,
      timestamp: new Date().toISOString(),
    };
    localStorage.setItem(COOKIE_CONSENT_KEY, JSON.stringify(consentData));
    applyGtagConsent(analytics, marketing);
    setIsVisible(false);
    setShowPreferences(false);
  };

  const handleAcceptAll = () => {
    saveConsent(true, true);
  };

  const handleRejectNonEssential = () => {
    saveConsent(false, false);
  };

  const handleSavePreferences = () => {
    saveConsent(preferences.analytics, preferences.marketing);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 max-w-[390px] sm:max-w-[420px] w-[calc(100vw-2rem)]">
          <motion.div
            initial={{ opacity: 0, y: 25, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] as const }}
            className="rounded-2xl sm:rounded-3xl border border-slate-200/90 bg-white/95 backdrop-blur-xl p-5 sm:p-6 shadow-[0_15px_45px_rgba(15,23,42,0.16)]"
          >
            {!showPreferences ? (
              // COMPACT CORNER BANNER
              <div className="space-y-4">
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-[#6C3BFF]/10 text-[#6C3BFF]">
                      <Cookie size={20} />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="text-sm font-bold text-slate-900">Cookie Notice</h3>
                        <span className="rounded-full bg-emerald-50 px-1.5 py-0.5 text-[9px] font-extrabold text-emerald-700 border border-emerald-200">
                          UK GDPR
                        </span>
                      </div>
                      <p className="text-[11px] text-slate-400 font-medium">MarkitUp Group Limited</p>
                    </div>
                  </div>
                  <button
                    onClick={handleRejectNonEssential}
                    className="text-slate-400 hover:text-slate-600 p-1 transition-colors"
                    aria-label="Dismiss and reject non-essential"
                  >
                    <X size={16} />
                  </button>
                </div>

                <p className="text-xs leading-relaxed text-slate-600 font-medium">
                  We use cookies to improve your browsing experience, deliver personalized content, and analyze traffic in compliance with UK privacy laws.
                </p>

                <div className="flex items-center justify-between pt-1 text-[11px]">
                  <div className="flex items-center gap-2">
                    <Link href="/cookie-policy" className="font-bold text-[#6C3BFF] hover:underline">
                      Cookie Policy
                    </Link>
                    <span className="text-slate-300">•</span>
                    <Link href="/privacy-policy" className="font-bold text-[#6C3BFF] hover:underline">
                      Privacy
                    </Link>
                  </div>
                  <button
                    onClick={() => setShowPreferences(true)}
                    className="inline-flex items-center gap-1 font-bold text-slate-600 hover:text-[#6C3BFF] transition-colors"
                  >
                    <Sliders size={12} /> Customise
                  </button>
                </div>

                <div className="grid grid-cols-2 gap-2 pt-1 border-t border-slate-100">
                  <button
                    onClick={handleRejectNonEssential}
                    className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-xs font-bold text-slate-700 transition-all hover:bg-slate-100 hover:text-slate-900"
                  >
                    Reject Non-Essential
                  </button>
                  <button
                    onClick={handleAcceptAll}
                    className="rounded-xl bg-[var(--color-brand-purple)] px-3 py-2 text-xs font-bold text-white shadow-md shadow-[#6C3BFF]/20 transition-all hover:brightness-110"
                  >
                    Accept All
                  </button>
                </div>
              </div>
            ) : (
              // COMPACT PREFERENCES MODAL IN CORNER
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                  <div className="flex items-center gap-2">
                    <div className="flex size-7 items-center justify-center rounded-lg bg-[#6C3BFF]/10 text-[#6C3BFF]">
                      <Sliders size={14} />
                    </div>
                    <h3 className="text-sm font-bold text-slate-900">Customise Preferences</h3>
                  </div>
                  <button
                    onClick={() => setShowPreferences(false)}
                    className="rounded-full p-1 text-slate-400 hover:bg-slate-100 hover:text-slate-700 transition-colors"
                    aria-label="Back to summary"
                  >
                    <X size={15} />
                  </button>
                </div>

                <div className="space-y-2.5 max-h-[50vh] overflow-y-auto pr-1 text-xs">
                  {/* Strictly Necessary */}
                  <div className="rounded-xl border border-slate-200 bg-slate-50/80 p-3">
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-bold text-slate-900">Strictly Necessary</span>
                      <span className="rounded bg-slate-200 px-1.5 py-0.5 text-[9px] font-extrabold text-slate-700">
                        ALWAYS ON
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-500 leading-snug">
                      Required for security, core features, and navigation. Cannot be disabled.
                    </p>
                  </div>

                  {/* Analytics */}
                  <div className="rounded-xl border border-slate-200 bg-white p-3">
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-bold text-slate-900">Analytics (Google Analytics)</span>
                      <label className="relative inline-flex cursor-pointer items-center">
                        <input
                          type="checkbox"
                          checked={preferences.analytics}
                          onChange={(e) => setPreferences({ ...preferences, analytics: e.target.checked })}
                          className="peer sr-only"
                        />
                        <div className="h-4 w-7 rounded-full bg-slate-200 peer peer-checked:bg-[#6C3BFF] peer-focus:ring-2 peer-focus:ring-[#6C3BFF]/30 after:absolute after:left-[2px] after:top-[2px] after:h-3 after:w-3 after:rounded-full after:bg-white after:transition-all peer-checked:after:translate-x-3"></div>
                      </label>
                    </div>
                    <p className="text-[11px] text-slate-500 leading-snug">
                      Helps us measure traffic and improve page loading performance anonymously.
                    </p>
                  </div>

                  {/* Marketing */}
                  <div className="rounded-xl border border-slate-200 bg-white p-3">
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-bold text-slate-900">Marketing & Integrations</span>
                      <label className="relative inline-flex cursor-pointer items-center">
                        <input
                          type="checkbox"
                          checked={preferences.marketing}
                          onChange={(e) => setPreferences({ ...preferences, marketing: e.target.checked })}
                          className="peer sr-only"
                        />
                        <div className="h-4 w-7 rounded-full bg-slate-200 peer peer-checked:bg-[#6C3BFF] peer-focus:ring-2 peer-focus:ring-[#6C3BFF]/30 after:absolute after:left-[2px] after:top-[2px] after:h-3 after:w-3 after:rounded-full after:bg-white after:transition-all peer-checked:after:translate-x-3"></div>
                      </label>
                    </div>
                    <p className="text-[11px] text-slate-500 leading-snug">
                      Used for tailored campaigns and social media integrations.
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-between gap-2 pt-2 border-t border-slate-100">
                  <button
                    onClick={() => setShowPreferences(false)}
                    className="text-[11px] font-bold text-slate-500 hover:text-slate-800 transition-colors"
                  >
                    ← Back
                  </button>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={handleRejectNonEssential}
                      className="rounded-xl border border-slate-200 bg-slate-50 px-2.5 py-1.5 text-[11px] font-bold text-slate-700 hover:bg-slate-100 transition-colors"
                    >
                      Reject All
                    </button>
                    <button
                      onClick={handleSavePreferences}
                      className="rounded-xl bg-[var(--color-brand-purple)] px-3 py-1.5 text-[11px] font-bold text-white hover:brightness-110 transition-colors shadow-sm shadow-[#6C3BFF]/20"
                    >
                      Save
                    </button>
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
