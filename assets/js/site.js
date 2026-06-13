const page = document.body.dataset.page || "";
const legalPage = document.body.dataset.legalPage || "";
const downloadUrl = "https://github.com/Philipp-dev-187/orvion-webseite/releases/latest/download/Orvion.dmg";
const buyUrl = "https://orvion-app.lemonsqueezy.com/checkout/buy/cc1af687-59b8-4466-ba9e-64219466e10c";

const translations = {
  en: {
    nav_features: "Features",
    nav_pricing: "Pricing",
    nav_privacy: "Privacy",
    nav_imprint: "Imprint",
    nav_terms: "Terms",
    nav_download: "Download",
    footer_kicker: "Orvion for macOS",
    footer_title: "Keep the small controls close.",
    footer_text: "Try the full app for 7 days. If it earns a place on your Mac, keep it with a one-time license.",
    footer_download: "Download for macOS",
    footer_buy: "Buy license",
    footer_explore: "Explore",
    footer_home: "Home",
    footer_features: "Features",
    footer_contact: "Contact",
    footer_legal: "Legal",
    footer_privacy: "Privacy Policy",
    footer_imprint: "Imprint",
    footer_terms: "Terms",
    footer_rights: "Orvion. All rights reserved.",
    contact_page_title: "Contact | Orvion",
    contact_kicker: "Contact",
    contact_title: "How can we help?",
    contact_intro: "App support, license help, product questions, privacy requests, and formal notices.",
    contact_support_title: "Support",
    contact_support_text: "Installation help, license activation, update issues, and questions about using Orvion.",
    contact_general_title: "General",
    contact_general_text: "Product feedback, privacy questions, legal requests, and general inquiries.",
    contact_postal_title: "Postal address",
    contact_country: "Germany",
    legal_kicker: "Legal",
    legal_last_updated: "Last updated: 26 May 2026",
    legal_privacy_page_title: "Privacy Policy | Orvion",
    legal_privacy_title: "Privacy Policy",
    legal_imprint_page_title: "Imprint | Orvion",
    legal_imprint_title: "Imprint",
    legal_imprint_intro: "Provider information for the Orvion website and macOS app.",
    legal_terms_page_title: "Terms of Service | Orvion",
    legal_terms_title: "Terms of Service",
    language_label: "Language",
    theme_label: "Theme",
    theme_dark: "Dark",
    theme_light: "Light",

    hero_eyebrow: "macOS productivity app · 7-day full trial",
    hero_title: "Control your Mac from the notch.",
    hero_text: "Tools that stay close to your work. Notes, media, focus, system stats, clipboard, and window tools stay available from the notch and menu bar. Choose only the modules that fit your workflow. Everything else stays quiet until you need it.",
    download_mac: "Download for macOS",
    see_pricing: "See pricing",
    trust_trial: "7-day full trial",
    trust_license: "Pay once, keep it",
    trust_updates: "Signed automatic updates",
    preview_notch_label: "Notch Control Center",
    preview_notch_title: "Widgets, pages, and controls in the place you already check.",
    preview_focus_label: "Focus Timer",
    preview_focus_state: "Focus running",
    preview_windows_label: "Window Layouts",
    preview_stats_label: "Live Stats",
    preview_music_label: "Media",
    preview_music_title: "Now Playing",
    features_kicker: "Features",
    feature_notch_kicker: "Notch workspace",
    feature_notch_title: "Notch Control Center",
    feature_notch_text: "Create your own pages for music, calendar, notes, drop shelf, mirror, focus timer, and quick tools. The notch becomes a useful command space instead of unused screen space.",
    feature_notes_kicker: "Notes",
    feature_notes_title: "Quick Notes",
    feature_notes_text: "Save small thoughts, reminders, and temporary ideas without opening a full notes app.",
    feature_windows_title: "Window Management",
    feature_windows_text: "Move windows into halves, thirds, quarters, or your own layouts with shortcuts you can actually shape around your workflow.",
    feature_focus_title: "Focus Timer",
    feature_focus_text: "Start a session from the notch and keep the timer visible without opening another app or losing your current context.",
    feature_media_title: "Music Overlay",
    feature_media_text: "Control playback from a compact floating player, pin it when you need it, and stop hunting for the right browser tab.",
    feature_remap_title: "Input Remapping",
    feature_remap_text: "Turn keys, shortcuts, mouse buttons, media keys, and scroll behavior into inputs that match the way you work.",
    feature_stats_kicker: "Live diagnostics",
    feature_stats_title: "System Stats",
    feature_stats_text: "Keep an eye on CPU, memory, network, and disk from the menu bar, then open charts and process details when something feels off.",
    feature_clipboard_title: "Clipboard History",
    feature_clipboard_text: "Bring back recently copied text from the menu bar or a shortcut. Long histories stay scrollable and local to your Mac.",
    feature_dropdown_title: "Menu Bar Controls",
    feature_dropdown_text: "Open toggles, update actions, stats, focus controls, and clipboard access from one compact menu instead of digging through settings.",
    feature_permissions_title: "Permission-aware",
    feature_permissions_text: "Orvion asks for macOS permissions only when a feature needs them, and keeps each permission tied to a clear purpose.",
    story_notch_kicker: "Notch workspace",
    story_notch_title: "The notch stops being wasted space.",
    story_notch_text: "Use Orvion for the things you check constantly: music, focus status, notes, calendar, system stats, and temporary tools.",
    story_flow_kicker: "Desktop flow",
    story_flow_title: "Less app switching. More staying with the task.",
    story_flow_text: "Window layouts, input remaps, media control, and clipboard history stay close to your work without turning into another dashboard you have to manage.",
    story_tile_windows: "Custom layouts and fast snapping",
    story_tile_focus: "Focus and break cycles at a glance",
    story_tile_media: "Playback controls without tab hunting",
    pricing_kicker: "Pricing",
    pricing_title: "Try it properly. Keep it if it sticks.",
    pricing_text: "No account is needed for the trial. After 7 days, a one-time license keeps Orvion unlocked on your Mac.",
    pricing_badge: "One-time license",
    pricing_subtitle: "Full access after your 7-day trial.",
    pricing_item_trial: "All features included during the trial",
    pricing_item_license: "One purchase, no subscription",
    pricing_item_updates: "Signed updates delivered securely",
    pricing_item_activation: "Simple license activation after purchase",
    buy_license: "Buy license",
    download_trial: "Download trial",
    pricing_note_title: "What happens after 7 days?",
    pricing_note_text: "If no license is active after the trial, Orvion pauses the app features. You can still open settings, activate a license, check updates, or quit normally.",
    privacy_kicker: "Privacy",
    privacy_title: "Your workspace should stay yours.",
    privacy_text: "Orvion stores app settings and local state on your Mac. License checks run through Lemon Squeezy, updates are handled by Sparkle, and downloads are served through GitHub Releases.",
    privacy_local_title: "Local app data",
    privacy_local_text: "Feature settings, layouts, shortcuts, and app state stay on your Mac.",
    privacy_license_title: "License checks",
    privacy_license_text: "Purchases and license validation are handled by Lemon Squeezy.",
    privacy_updates_title: "Updates",
    privacy_updates_text: "Sparkle checks for signed, notarized updates and installs them through the standard macOS flow.",
    faq_title: "A few things worth knowing.",
    faq_trial_q: "Can I try Orvion before buying?",
    faq_trial_a: "Yes. The first launch starts a 7-day trial with all features unlocked.",
    faq_features_q: "Can I disable features I do not use?",
    faq_features_a: "Yes. Orvion is modular, so you can keep your setup focused and turn off tools you do not need.",
    faq_permissions_q: "Why does Orvion ask for macOS permissions?",
    faq_permissions_a: "Only specific features need permissions: Accessibility for window management, Input Monitoring for remapping, Camera for mirror, Calendars and Reminders for widgets, and Automation for supported app control.",
    faq_updates_q: "How are updates installed?",
    faq_updates_a: "Orvion uses Sparkle to deliver signed and notarized app updates.",
    download_kicker: "Download",
    download_title: "Try Orvion on your Mac today.",
    download_text: "Download the signed macOS app, move it to Applications, and take the full feature set for a 7-day test run."
  },
  de: {
    nav_features: "Funktionen",
    nav_pricing: "Preis",
    nav_privacy: "Datenschutz",
    nav_imprint: "Impressum",
    nav_terms: "AGB",
    nav_download: "Download",
    footer_kicker: "Orvion für macOS",
    footer_title: "Die kleinen Werkzeuge bleiben griffbereit.",
    footer_text: "Teste Orvion 7 Tage vollständig. Wenn es auf deinen Mac gehört, schaltest du es einmalig frei.",
    footer_download: "Für macOS laden",
    footer_buy: "Lizenz kaufen",
    footer_explore: "Entdecken",
    footer_home: "Startseite",
    footer_features: "Funktionen",
    footer_contact: "Kontakt",
    footer_legal: "Rechtliches",
    footer_privacy: "Datenschutz",
    footer_imprint: "Impressum",
    footer_terms: "AGB",
    footer_rights: "Orvion. Alle Rechte vorbehalten.",
    contact_page_title: "Kontakt | Orvion",
    contact_kicker: "Kontakt",
    contact_title: "Wie können wir helfen?",
    contact_intro: "Support zur App, Hilfe mit Lizenzen, Produktfragen, Datenschutzanfragen und formelle Mitteilungen.",
    contact_support_title: "Support",
    contact_support_text: "Hilfe bei Installation, Lizenzaktivierung, Updates und Fragen zur Nutzung von Orvion.",
    contact_general_title: "Allgemeine Anfragen",
    contact_general_text: "Produktfeedback, Datenschutzfragen, rechtliche Anliegen und allgemeine Anfragen.",
    contact_postal_title: "Postanschrift",
    contact_country: "Deutschland",
    legal_kicker: "Rechtliches",
    legal_last_updated: "Zuletzt aktualisiert: 26. Mai 2026",
    legal_privacy_page_title: "Datenschutzerklärung | Orvion",
    legal_privacy_title: "Datenschutzerklärung",
    legal_imprint_page_title: "Impressum | Orvion",
    legal_imprint_title: "Impressum",
    legal_imprint_intro: "Anbieterinformationen für die Orvion-Website und die macOS-App.",
    legal_terms_page_title: "Nutzungsbedingungen | Orvion",
    legal_terms_title: "Nutzungsbedingungen",
    language_label: "Sprache",
    theme_label: "Design",
    theme_dark: "Dunkel",
    theme_light: "Hell",

    hero_eyebrow: "Produktivitäts-App für macOS · 7 Tage Vollzugriff",
    hero_title: "Steuere deinen Mac aus der Notch.",
    hero_text: "Werkzeuge, die nah an deiner Arbeit bleiben. Notizen, Medien, Fokus, Systemwerte, Zwischenablage und Fensterwerkzeuge bleiben direkt über Notch und Menüleiste erreichbar. Aktiviere nur die Module, die zu deinem Arbeitsfluss passen. Alles andere bleibt ruhig, bis du es brauchst.",
    download_mac: "Für macOS laden",
    see_pricing: "Preis ansehen",
    trust_trial: "7 Tage alles testen",
    trust_license: "Einmal zahlen, dauerhaft nutzen",
    trust_updates: "Signierte automatische Updates",
    preview_notch_label: "Notch Control Center",
    preview_notch_title: "Widgets, Seiten und Controls genau dort, wo dein Blick ohnehin landet.",
    preview_focus_label: "Focus Timer",
    preview_focus_state: "Fokus läuft",
    preview_windows_label: "Fensterlayouts",
    preview_stats_label: "Live-Systemwerte",
    preview_music_label: "Medien",
    preview_music_title: "Läuft gerade",
    features_kicker: "Funktionen",
    feature_notch_kicker: "Notch-Arbeitsfläche",
    feature_notch_title: "Notch Control Center",
    feature_notch_text: "Stelle dir eigene Seiten für Musik, Kalender, Notizen, Drop Shelf, Spiegel, Fokus-Timer und schnelle Tools zusammen. Aus der Notch wird ein Ort, der wirklich etwas kann.",
    feature_notes_kicker: "Notizen",
    feature_notes_title: "Schnelle Notizen",
    feature_notes_text: "Kleine Ideen, Zwischenstände und Erinnerungen bleiben griffbereit, ohne dass du dafür eine große Notizen-App öffnen musst.",
    feature_windows_title: "Fenstermanagement",
    feature_windows_text: "Lege Fenster in Hälften, Drittel, Viertel oder eigene Layouts. Die Shortcuts passt du so an, wie du wirklich arbeitest.",
    feature_focus_title: "Focus Timer",
    feature_focus_text: "Starte Fokus-Sessions direkt in der Notch und behalte die Zeit im Blick, ohne dafür eine weitere App zu öffnen.",
    feature_media_title: "Music Overlay",
    feature_media_text: "Steuere Musik in einem kompakten Floating Player, pinne ihn bei Bedarf nach oben und spare dir die Suche nach dem richtigen Tab.",
    feature_remap_title: "Input Remapping",
    feature_remap_text: "Passe Tasten, Shortcuts, Maustasten, Medientasten und Scrollverhalten an deinen Arbeitsstil an, global oder pro App.",
    feature_stats_kicker: "Live-Diagnose",
    feature_stats_title: "System Stats",
    feature_stats_text: "Sieh CPU, Speicher, Netzwerk und Festplatte direkt in der Menüleiste. Wenn etwas auffällt, öffnest du Charts und Prozesse mit einem Klick.",
    feature_clipboard_title: "Clipboard-Verlauf",
    feature_clipboard_text: "Hol kopierte Texte schnell zurück, ohne den Kontext zu wechseln. Dein Verlauf bleibt lokal, scrollbar und per Shortcut erreichbar.",
    feature_dropdown_title: "Menüleisten-Steuerung",
    feature_dropdown_text: "Toggles, Updates, Systemwerte, Fokus und Clipboard sitzen in einem kompakten Menü statt verteilt in mehreren Einstellungen.",
    feature_permissions_title: "Berechtigungen mit Sinn",
    feature_permissions_text: "Orvion fragt nur nach macOS-Berechtigungen, wenn eine Funktion sie wirklich braucht, und macht den Zweck klar.",
    story_notch_kicker: "Notch-Arbeitsfläche",
    story_notch_title: "Die Notch hört auf, ungenutzter Platz zu sein.",
    story_notch_text: "Musik, Fokusstatus, Notizen, Kalender, Systemwerte und kleine Werkzeuge liegen dort, wo du ohnehin kurz hinschaust.",
    story_flow_kicker: "Desktop-Flow",
    story_flow_title: "Weniger Wechsel zwischen Apps. Mehr beim Gedanken bleiben.",
    story_flow_text: "Fensterlayouts, Remapping, Mediensteuerung und Zwischenablage bleiben nah an deiner Arbeit, ohne sich wie ein weiteres Dashboard anzufühlen.",
    story_tile_windows: "Eigene Layouts und schnelles Snapping",
    story_tile_focus: "Fokus- und Pausenzeiten im Blick",
    story_tile_media: "Musiksteuerung ohne Tab-Suche",
    pricing_kicker: "Preis",
    pricing_title: "Erst richtig testen. Dann behalten, wenn es passt.",
    pricing_text: "Du brauchst keinen Account für den Test. Nach 7 Tagen hält eine einmalige Lizenz Orvion dauerhaft freigeschaltet.",
    pricing_badge: "Einmalige Lizenz",
    pricing_subtitle: "Vollzugriff nach deinem 7-Tage-Test.",
    pricing_item_trial: "Alle Funktionen während der Testphase",
    pricing_item_license: "Einmal kaufen, kein Abo",
    pricing_item_updates: "Signierte Updates sicher ausgeliefert",
    pricing_item_activation: "Einfache Aktivierung nach dem Kauf",
    buy_license: "Lizenz kaufen",
    download_trial: "Testversion laden",
    pricing_note_title: "Was passiert nach 7 Tagen?",
    pricing_note_text: "Ohne aktive Lizenz pausiert Orvion nach der Testphase die App-Funktionen. Einstellungen, Lizenzaktivierung, Updates und Beenden bleiben weiter erreichbar.",
    privacy_kicker: "Datenschutz",
    privacy_title: "Dein Arbeitsbereich soll deiner bleiben.",
    privacy_text: "Orvion speichert Einstellungen und lokalen App-Zustand auf deinem Mac. Lizenzprüfungen laufen über Lemon Squeezy, Updates über Sparkle, Downloads über GitHub Releases.",
    privacy_local_title: "Lokale App-Daten",
    privacy_local_text: "Feature-Einstellungen, Layouts, Shortcuts und App-Zustand bleiben auf deinem Mac.",
    privacy_license_title: "Lizenzprüfung",
    privacy_license_text: "Kauf, Aktivierung und Lizenzprüfung werden über Lemon Squeezy abgewickelt.",
    privacy_updates_title: "Updates",
    privacy_updates_text: "Sparkle prüft signierte und notarierte Updates und installiert sie über den gewohnten macOS-Ablauf.",
    faq_title: "Ein paar Dinge vor der Installation.",
    faq_trial_q: "Kann ich Orvion vor dem Kauf ausprobieren?",
    faq_trial_a: "Ja. Beim ersten Start beginnt automatisch ein 7-Tage-Test mit allen Funktionen.",
    faq_features_q: "Kann ich ungenutzte Funktionen deaktivieren?",
    faq_features_a: "Ja. Orvion ist modular aufgebaut, damit du nur die Werkzeuge aktiv lässt, die wirklich zu deinem Setup passen.",
    faq_permissions_q: "Warum fragt Orvion nach macOS-Berechtigungen?",
    faq_permissions_a: "Nur bestimmte Funktionen brauchen Berechtigungen: Bedienungshilfen für Fenstermanagement, Input Monitoring fürs Remapping, Kamera für Mirror, Kalender und Erinnerungen für Widgets sowie Automation für unterstützte App-Steuerung.",
    faq_updates_q: "Wie werden Updates installiert?",
    faq_updates_a: "Orvion nutzt Sparkle, um signierte und notarisierte Updates auszuliefern.",
    download_kicker: "Download",
    download_title: "Teste Orvion direkt auf deinem Mac.",
    download_text: "Lade die signierte macOS-App, verschiebe sie in Programme und probiere den vollen Funktionsumfang 7 Tage lang aus."
  }
};

function currentLang() {
  const stored = localStorage.getItem("orvion-language");
  if (stored === "de" || stored === "en") return stored;
  return navigator.language.toLowerCase().startsWith("de") ? "de" : "en";
}

function t(key) {
  const lang = currentLang();
  return translations[lang][key] || translations.en[key] || key;
}

function renderLanguageSwitcher(className = "") {
  return `
    <div class="language-switcher ${className}" role="tablist" aria-label="${t("language_label")}">
      <button type="button" class="language-button" data-set-lang="en" role="tab">EN</button>
      <button type="button" class="language-button" data-set-lang="de" role="tab">DE</button>
    </div>
  `;
}

function preferredSystemTheme() {
  return window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
}

function currentTheme() {
  const stored = localStorage.getItem("orvion-theme");
  if (stored === "dark" || stored === "light") return stored;
  return preferredSystemTheme();
}

function applyTheme() {
  const theme = currentTheme();
  document.documentElement.dataset.theme = theme;
  const themeColor = document.querySelector('meta[name="theme-color"]');
  if (themeColor) {
    themeColor.setAttribute("content", theme === "dark" ? "#080d16" : "#f5f7fb");
  }

  document.querySelectorAll("[data-theme-toggle]").forEach((button) => {
    button.dataset.themeState = theme;
    button.setAttribute("aria-label", `${t("theme_label")}: ${theme === "dark" ? t("theme_dark") : t("theme_light")}`);
    const label = button.querySelector("[data-theme-toggle-label]");
    if (label) label.textContent = theme === "dark" ? t("theme_dark") : t("theme_light");
  });
}

function renderThemeToggle() {
  const theme = currentTheme();
  return `
    <button type="button" class="theme-toggle" data-theme-toggle data-theme-state="${theme}" aria-label="${t("theme_label")}">
      <span class="theme-toggle-icon" aria-hidden="true"></span>
      <span data-theme-toggle-label>${theme === "dark" ? t("theme_dark") : t("theme_light")}</span>
    </button>
  `;
}

function renderHeader() {
  const navItems = [
    { href: "/#features", label: t("nav_features"), key: "features" },
    { href: "/#pricing", label: t("nav_pricing"), key: "pricing" }
  ];

  const navMarkup = navItems.map((item) => {
    const isCurrent = page === item.key || legalPage === item.key;
    return `<a href="${item.href}"${isCurrent ? ' aria-current="page"' : ""}>${item.label}</a>`;
  }).join("");

  return `
    <header class="site-header" data-site-header>
      <div class="shell nav-shell">
        <a class="brand" href="/" aria-label="Orvion home">
          <span class="brand-mark" aria-hidden="true"></span>
          <span class="brand-word">Orvion</span>
        </a>
        <nav class="site-nav" aria-label="Primary">
          ${navMarkup}
          ${renderThemeToggle()}
          ${renderLanguageSwitcher("language-switcher-nav")}
          <a class="button button-primary button-small" href="${downloadUrl}">${t("nav_download")}</a>
        </nav>
      </div>
    </header>
  `;
}

function renderFooter() {
  const year = new Date().getFullYear();

  return `
    <footer class="site-footer" data-site-footer>
      <div class="shell footer-panel">
        <div class="footer-top">
          <div class="footer-cta">
            <p class="kicker">${t("footer_kicker")}</p>
            <h2>${t("footer_title")}</h2>
            <p>${t("footer_text")}</p>
          </div>
          <div class="footer-actions">
            <a class="button button-primary" href="${downloadUrl}">${t("footer_download")}</a>
            <a class="button button-secondary" href="${buyUrl}">${t("footer_buy")}</a>
          </div>
        </div>
        <div class="footer-directory">
          <a class="brand footer-brand" href="/" aria-label="Orvion home">
            <span class="brand-mark" aria-hidden="true"></span>
            <span class="brand-word">Orvion</span>
          </a>
          <div class="footer-links">
            <div>
              <strong>${t("footer_explore")}</strong>
              <a href="/">${t("footer_home")}</a>
              <a href="/#features">${t("footer_features")}</a>
              <a href="/contact/">${t("footer_contact")}</a>
            </div>
            <div>
              <strong>${t("footer_legal")}</strong>
              <a href="/privacy/">${t("footer_privacy")}</a>
              <a href="/imprint/">${t("footer_imprint")}</a>
              <a href="/terms/">${t("footer_terms")}</a>
            </div>
          </div>
        </div>
        <div class="footer-meta">
          <span>© ${year} ${t("footer_rights")}</span>
        </div>
      </div>
    </footer>
  `;
}

function mountSharedChrome() {
  const headerMount = document.querySelector("[data-site-header]");
  if (headerMount) {
    headerMount.outerHTML = renderHeader();
  }

  const footerMount = document.querySelector("[data-site-footer]");
  if (footerMount) {
    footerMount.outerHTML = renderFooter();
  }
}

function applyTranslations() {
  const lang = currentLang();
  document.documentElement.lang = lang;

  document.querySelectorAll("[data-i18n]").forEach((node) => {
    const key = node.dataset.i18n;
    const value = translations[lang][key];
    if (value) node.textContent = value;
  });

  document.querySelectorAll("[data-set-lang]").forEach((button) => {
    const active = button.dataset.setLang === lang;
    button.classList.toggle("is-active", active);
    button.setAttribute("aria-selected", String(active));
  });

  document.querySelectorAll("[data-lang-panel]").forEach((panel) => {
    const active = panel.dataset.langPanel === lang;
    panel.classList.toggle("is-active", active);
  });
}

function setupLanguageSwitchers() {
  document.addEventListener("click", (event) => {
    const button = event.target.closest("[data-set-lang], [data-lang-target]");
    if (!button) return;
    const lang = button.dataset.setLang || button.dataset.langTarget;
    if (lang !== "de" && lang !== "en") return;
    localStorage.setItem("orvion-language", lang);
    mountSharedChrome();
    applyTheme();
    applyTranslations();
  });
}

function setupThemeToggle() {
  document.addEventListener("click", (event) => {
    const button = event.target.closest("[data-theme-toggle]");
    if (!button) return;
    const nextTheme = currentTheme() === "dark" ? "light" : "dark";
    localStorage.setItem("orvion-theme", nextTheme);
    applyTheme();
  });

  const mediaQuery = window.matchMedia("(prefers-color-scheme: light)");
  mediaQuery.addEventListener("change", () => {
    if (!localStorage.getItem("orvion-theme")) applyTheme();
  });
}

mountSharedChrome();
applyTheme();
setupLanguageSwitchers();
setupThemeToggle();
applyTranslations();
