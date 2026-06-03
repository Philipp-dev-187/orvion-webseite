const page = document.body.dataset.page || "";
const legalPage = document.body.dataset.legalPage || "";
const downloadUrl = "https://github.com/Philipp-dev-187/orvion-webseite/releases/latest/download/Orvion.dmg";
const buyUrl = "https://orvion-app.lemonsqueezy.com/checkout/buy/cc1af687-59b8-4466-ba9e-64219466e10c";
const previewPassword = "orvion-preview";

const translations = {
  en: {
    nav_features: "Features",
    nav_pricing: "Pricing",
    nav_privacy: "Privacy",
    nav_imprint: "Imprint",
    nav_terms: "Terms",
    nav_download: "Download",
    footer_kicker: "macOS download",
    footer_title: "Bring your desktop controls together.",
    footer_text: "Try Orvion free for 7 days, then unlock all features with a one-time license.",
    footer_download: "Download for macOS",
    footer_explore: "Explore",
    footer_home: "Home",
    footer_features: "Features",
    footer_contact: "Contact",
    footer_legal: "Legal",
    footer_privacy: "Privacy Policy",
    footer_imprint: "Imprint",
    footer_terms: "Terms",
    footer_rights: "Orvion. All rights reserved.",
    language_label: "Language",
    theme_label: "Theme",
    theme_dark: "Dark",
    theme_light: "Light",

    hero_eyebrow: "macOS utility · 7-day free trial",
    hero_title: "Make your Mac’s top edge useful.",
    hero_text: "Orvion turns the notch and menu bar into a compact workspace for notes, media, focus sessions, system stats, clipboard history, window layouts, and quick controls.",
    download_mac: "Download for macOS",
    see_pricing: "See pricing",
    hero_note: "Use every feature free for 7 days. Unlock permanently for 7.99 EUR once.",
    trust_trial: "Full 7-day trial",
    trust_license: "One-time license",
    trust_updates: "Secure Sparkle updates",
    preview_notch_label: "Notch Control Center",
    preview_notch_title: "Widgets, pages, and controls where your eyes already are.",
    preview_focus_label: "Focus Timer",
    preview_focus_state: "Focus running",
    preview_windows_label: "Window Layouts",
    preview_stats_label: "Live Stats",
    preview_music_label: "Media",
    preview_music_title: "Now Playing",
    intro_kicker: "Why Orvion",
    intro_title: "Real controls, right where your attention already goes.",
    intro_text: "Orvion brings everyday Mac actions into one modular place: quick enough for tiny checks, powerful enough for repeated workflows.",
    features_kicker: "Features",
    features_title: "Designed around the moments that interrupt your flow.",
    features_text: "Open the right control, act, and get back to work. Enable the parts you want and leave everything else out of the way.",
    feature_notch_kicker: "Notch workspace",
    feature_notch_title: "Notch Control Center",
    feature_notch_text: "Build your own pages with music controls, calendar, notes, drop shelf, mirror, focus timer, and quick tools. The notch becomes a compact workspace instead of unused screen space.",
    feature_notes_kicker: "Mini notes",
    feature_notes_title: "Keep throwaway thoughts in the notch.",
    feature_notes_text: "Create small notes, switch between them, and keep temporary ideas close without opening a full notes app.",
    feature_windows_title: "Window Management",
    feature_windows_text: "Snap windows into halves, thirds, quarters, or custom layouts with editable command-led shortcuts.",
    feature_focus_title: "Focus Timer",
    feature_focus_text: "Start focus sessions from the top edge and keep the timer visible without pulling you into another app.",
    feature_media_title: "Music Overlay",
    feature_media_text: "Control playback in a compact floating player and decide per moment whether it should stay above other windows.",
    feature_remap_title: "Input Remapping",
    feature_remap_text: "Remap keys, shortcuts, mouse buttons, media keys, and scroll behavior globally or for specific apps.",
    feature_stats_kicker: "Live diagnostics",
    feature_stats_title: "System Stats",
    feature_stats_text: "Watch CPU, memory, network, and disk from the menu bar, then open detailed charts and top-process lists with one click.",
    feature_clipboard_title: "Clipboard History",
    feature_clipboard_text: "Open recent copied text from the menu bar or your own shortcut. Long histories stay scrollable and stored locally on your Mac.",
    feature_dropdown_title: "Menu Bar Controls",
    feature_dropdown_text: "Use fast toggles, update actions, stats, focus controls, and clipboard access from a single compact dropdown.",
    feature_permissions_title: "Permission-aware",
    feature_permissions_text: "macOS permissions are requested only for features that need them, such as Accessibility, Input Monitoring, Camera, Calendars, Reminders, or Automation.",
    story_notch_kicker: "Top-edge workspace",
    story_notch_title: "Turn the notch into a useful place, not dead space.",
    story_notch_text: "Use Orvion for the small things you check all the time: current music, focus status, notes, calendar, quick stats, and temporary tools.",
    story_flow_kicker: "Desktop flow",
    story_flow_title: "Fewer interruptions when you are already moving fast.",
    story_flow_text: "Window layouts, input remaps, media control, and clipboard history stay close to your current work without becoming another full-screen dashboard.",
    story_tile_windows: "Custom layouts and fast snapping",
    story_tile_focus: "Automatic focus and break cycles",
    story_tile_media: "Playback controls without tab hunting",
    pricing_kicker: "Pricing",
    pricing_title: "Try everything first. Pay once if it fits.",
    pricing_text: "No account is required for the trial. After 7 days, Orvion requires a license to keep using the app.",
    pricing_badge: "One-time license",
    pricing_subtitle: "Full access after the 7-day trial.",
    pricing_item_trial: "7 days free with all features",
    pricing_item_license: "One-time payment, no subscription",
    pricing_item_updates: "Secure update delivery with Sparkle",
    pricing_item_activation: "License activation through Lemon Squeezy",
    buy_license: "Buy License",
    download_trial: "Download trial",
    pricing_note_title: "What happens after 7 days?",
    pricing_note_text: "If no valid license is active, Orvion locks app features. Settings, License, About, Updates, and Quit remain available so you can activate or manage the app.",
    privacy_kicker: "Privacy posture",
    privacy_title: "Local-first where the feature allows it.",
    privacy_text: "Orvion stores settings and license state locally, checks license status through Lemon Squeezy, and uses Sparkle for update checks. The website is hosted on Vercel and downloads are distributed through GitHub Releases.",
    privacy_local_title: "Local app data",
    privacy_local_text: "Feature settings, layouts, shortcuts, and local app state are stored on your Mac.",
    privacy_license_title: "License checks",
    privacy_license_text: "License activation and validation are handled through Lemon Squeezy's license API.",
    privacy_updates_title: "Updates",
    privacy_updates_text: "Sparkle checks the public appcast and downloads signed, notarized updates.",
    faq_title: "Good things to know before installing.",
    faq_trial_q: "Do I need to pay before trying Orvion?",
    faq_trial_a: "No. The app starts with a 7-day full trial on first launch.",
    faq_features_q: "Can I disable features I do not use?",
    faq_features_a: "Yes. Orvion is modular, so you can keep only the tools that fit your setup.",
    faq_permissions_q: "Why does Orvion ask for macOS permissions?",
    faq_permissions_a: "Some features need system permissions: Accessibility for window management, Input Monitoring for remapping, Camera for mirror, Calendars and Reminders for widgets, and Automation for supported app control.",
    faq_updates_q: "How are updates installed?",
    faq_updates_a: "Updates are delivered with Sparkle using signed and notarized release files.",
    download_kicker: "Download",
    download_title: "Start your 7-day Orvion trial.",
    download_text: "Download the signed macOS app, move it to Applications, and use all features before deciding."
  },
  de: {
    nav_features: "Funktionen",
    nav_pricing: "Preis",
    nav_privacy: "Datenschutz",
    nav_imprint: "Impressum",
    nav_terms: "AGB",
    nav_download: "Download",
    footer_kicker: "macOS Download",
    footer_title: "Bring deine Desktop-Werkzeuge zusammen.",
    footer_text: "Teste Orvion 7 Tage kostenlos und schalte danach alle Funktionen mit einer einmaligen Lizenz frei.",
    footer_download: "Für macOS laden",
    footer_explore: "Entdecken",
    footer_home: "Startseite",
    footer_features: "Funktionen",
    footer_contact: "Kontakt",
    footer_legal: "Rechtliches",
    footer_privacy: "Datenschutz",
    footer_imprint: "Impressum",
    footer_terms: "AGB",
    footer_rights: "Orvion. Alle Rechte vorbehalten.",
    language_label: "Sprache",
    theme_label: "Design",
    theme_dark: "Dunkel",
    theme_light: "Hell",

    hero_eyebrow: "macOS Tool · 7 Tage kostenlos testen",
    hero_title: "Mach den oberen Rand deines Macs nützlich.",
    hero_text: "Orvion macht Notch und Menüleiste zu einer kompakten Arbeitsfläche für Notizen, Medien, Fokus-Sessions, Systemwerte, Clipboard-Verlauf, Fensterlayouts und schnelle Controls.",
    download_mac: "Für macOS laden",
    see_pricing: "Preis ansehen",
    hero_note: "Teste alle Funktionen 7 Tage kostenlos. Danach einmalig für 7,99 EUR dauerhaft freischalten.",
    trust_trial: "7 Tage Vollzugriff",
    trust_license: "Einmalige Lizenz",
    trust_updates: "Sichere Sparkle Updates",
    preview_notch_label: "Notch Control Center",
    preview_notch_title: "Widgets, Seiten und Controls dort, wo du ohnehin hinschaust.",
    preview_focus_label: "Focus Timer",
    preview_focus_state: "Fokus läuft",
    preview_windows_label: "Fensterlayouts",
    preview_stats_label: "Live-Systemwerte",
    preview_music_label: "Medien",
    preview_music_title: "Läuft gerade",
    intro_kicker: "Warum Orvion",
    intro_title: "Echte Controls dort, wo deine Aufmerksamkeit ohnehin landet.",
    intro_text: "Orvion bringt alltägliche Mac-Aktionen an einen modularen Ort: schnell genug für kleine Checks, stark genug für wiederholte Workflows.",
    features_kicker: "Funktionen",
    features_title: "Gebaut für die Momente, die deinen Flow unterbrechen.",
    features_text: "Öffne das richtige Control, erledige die Aktion und arbeite weiter. Aktiviere, was du brauchst, alles andere bleibt aus dem Weg.",
    feature_notch_kicker: "Notch-Arbeitsfläche",
    feature_notch_title: "Notch Control Center",
    feature_notch_text: "Baue eigene Seiten mit Musiksteuerung, Kalender, Notizen, Drop Shelf, Spiegel, Focus Timer und schnellen Tools. So wird aus leerem Raum eine kompakte Arbeitsfläche.",
    feature_notes_kicker: "Mini-Notizen",
    feature_notes_title: "Kurze Gedanken direkt in der Notch behalten.",
    feature_notes_text: "Erstelle kleine Notizen, wechsle zwischen ihnen und behalte temporäre Ideen nah bei dir, ohne eine komplette Notizen-App zu öffnen.",
    feature_windows_title: "Fenstermanagement",
    feature_windows_text: "Ordne Fenster in Hälften, Drittel, Viertel oder eigene Layouts mit editierbaren Command-Shortcuts.",
    feature_focus_title: "Focus Timer",
    feature_focus_text: "Starte Fokus-Sessions am oberen Rand und behalte den Timer im Blick, ohne in eine andere App gezogen zu werden.",
    feature_media_title: "Music Overlay",
    feature_media_text: "Steuere Wiedergabe in einem kompakten Floating Player und entscheide direkt dort, ob er über anderen Fenstern bleiben soll.",
    feature_remap_title: "Input Remapping",
    feature_remap_text: "Belege Tasten, Shortcuts, Maustasten, Medientasten und Scrollverhalten global oder für einzelne Apps neu.",
    feature_stats_kicker: "Live-Diagnose",
    feature_stats_title: "System Stats",
    feature_stats_text: "Behalte CPU, Speicher, Netzwerk und Festplatte in der Menüleiste im Blick und öffne mit einem Klick detaillierte Charts und Prozesslisten.",
    feature_clipboard_title: "Clipboard-Verlauf",
    feature_clipboard_text: "Öffne zuletzt kopierte Texte aus der Menüleiste oder per eigenem Shortcut. Lange Verläufe bleiben scrollbar und lokal auf deinem Mac.",
    feature_dropdown_title: "Menüleisten-Controls",
    feature_dropdown_text: "Nutze schnelle Toggles, Update-Aktionen, Stats, Focus Controls und Clipboard-Zugriff in einem kompakten Dropdown.",
    feature_permissions_title: "Berechtigungen mit Sinn",
    feature_permissions_text: "macOS-Berechtigungen werden nur für Funktionen benötigt, die sie verwenden, etwa Bedienungshilfen, Input Monitoring, Kamera, Kalender, Erinnerungen oder Automation.",
    story_notch_kicker: "Arbeitsfläche am oberen Rand",
    story_notch_title: "Mach die Notch zu einem nützlichen Ort, nicht zu leerem Raum.",
    story_notch_text: "Nutze Orvion für Dinge, die du ständig kurz prüfst: aktuelle Musik, Fokusstatus, Notizen, Kalender, Systemwerte und kleine Werkzeuge.",
    story_flow_kicker: "Desktop-Flow",
    story_flow_title: "Weniger Unterbrechung, wenn du gerade schnell arbeitest.",
    story_flow_text: "Fensterlayouts, Input-Remaps, Mediensteuerung und Clipboard-Verlauf bleiben nah an deiner Arbeit, ohne ein weiteres großes Dashboard zu werden.",
    story_tile_windows: "Eigene Layouts und schnelles Snapping",
    story_tile_focus: "Automatische Fokus- und Pausenzyklen",
    story_tile_media: "Mediensteuerung ohne Tab-Suche",
    pricing_kicker: "Preis",
    pricing_title: "Erst alles testen. Dann einmalig zahlen, wenn es passt.",
    pricing_text: "Für den Test ist kein Account nötig. Nach 7 Tagen braucht Orvion eine Lizenz, damit du die App weiter nutzen kannst.",
    pricing_badge: "Einmalige Lizenz",
    pricing_subtitle: "Vollzugriff nach dem 7-Tage-Test.",
    pricing_item_trial: "7 Tage kostenlos mit allen Funktionen",
    pricing_item_license: "Einmalzahlung, kein Abo",
    pricing_item_updates: "Sichere Updates über Sparkle",
    pricing_item_activation: "Lizenzaktivierung über Lemon Squeezy",
    buy_license: "Lizenz kaufen",
    download_trial: "Testversion laden",
    pricing_note_title: "Was passiert nach 7 Tagen?",
    pricing_note_text: "Wenn keine gültige Lizenz aktiv ist, sperrt Orvion die App-Funktionen. Settings, License, About, Updates und Quit bleiben erreichbar, damit du aktivieren oder verwalten kannst.",
    privacy_kicker: "Datenschutz",
    privacy_title: "Lokal zuerst, soweit es die Funktion erlaubt.",
    privacy_text: "Orvion speichert Einstellungen und Lizenzstatus lokal, prüft Lizenzen über Lemon Squeezy und nutzt Sparkle für Updatechecks. Die Website läuft über Vercel, Downloads über GitHub Releases.",
    privacy_local_title: "Lokale App-Daten",
    privacy_local_text: "Feature-Einstellungen, Layouts, Shortcuts und lokaler App-Zustand werden auf deinem Mac gespeichert.",
    privacy_license_title: "Lizenzprüfung",
    privacy_license_text: "Lizenzaktivierung und -validierung laufen über die License API von Lemon Squeezy.",
    privacy_updates_title: "Updates",
    privacy_updates_text: "Sparkle prüft den öffentlichen Appcast und lädt signierte, notarized Updates.",
    faq_title: "Gut zu wissen vor der Installation.",
    faq_trial_q: "Muss ich vor dem Test bezahlen?",
    faq_trial_a: "Nein. Die App startet beim ersten Öffnen mit einem vollständigen 7-Tage-Test.",
    faq_features_q: "Kann ich ungenutzte Funktionen deaktivieren?",
    faq_features_a: "Ja. Orvion ist modular, du kannst nur die Werkzeuge aktiv lassen, die zu deinem Setup passen.",
    faq_permissions_q: "Warum fragt Orvion nach macOS-Berechtigungen?",
    faq_permissions_a: "Einige Funktionen brauchen Systemrechte: Bedienungshilfen für Fenstermanagement, Input Monitoring für Remapping, Kamera für Mirror, Kalender und Erinnerungen für Widgets sowie Automation für unterstützte App-Steuerung.",
    faq_updates_q: "Wie werden Updates installiert?",
    faq_updates_a: "Updates laufen über Sparkle mit signierten und notarisierten Release-Dateien.",
    download_kicker: "Download",
    download_title: "Starte deinen 7-Tage-Test von Orvion.",
    download_text: "Lade die signierte macOS-App, verschiebe sie in Programme und nutze alle Funktionen, bevor du dich entscheidest."
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
    { href: "/#pricing", label: t("nav_pricing"), key: "pricing" },
    { href: "/privacy/", label: t("nav_privacy"), key: "privacy" },
    { href: "/imprint/", label: t("nav_imprint"), key: "imprint" },
    { href: "/terms/", label: t("nav_terms"), key: "terms" }
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
        <div class="footer-cta">
          <p class="kicker kicker-light">${t("footer_kicker")}</p>
          <h2>${t("footer_title")}</h2>
          <p>${t("footer_text")}</p>
          <a class="button button-light" href="${downloadUrl}">${t("footer_download")}</a>
        </div>
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
      <div class="shell footer-meta">
        <span>© ${year} ${t("footer_rights")}</span>
        <div class="footer-language-note">
          <span>${t("language_label")}</span>
          ${renderLanguageSwitcher("language-switcher-footer")}
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

function setupPreviewGate() {
  if (sessionStorage.getItem("orvion-preview-unlocked") === "true") return;

  document.body.classList.add("is-preview-locked");
  const gate = document.createElement("div");
  gate.className = "preview-gate";
  gate.innerHTML = `
    <form class="preview-gate-panel" data-preview-gate>
      <span class="brand-mark" aria-hidden="true"></span>
      <p class="preview-gate-kicker">Private Preview</p>
      <h1>Orvion is not public yet.</h1>
      <p>Enter the preview password to open the website and download page.</p>
      <label>
        <span>Password</span>
        <input type="password" name="password" autocomplete="current-password" autofocus />
      </label>
      <button class="button button-primary" type="submit">Unlock</button>
      <p class="preview-gate-error" role="alert" hidden>Wrong password.</p>
    </form>
  `;

  document.body.appendChild(gate);

  gate.querySelector("form").addEventListener("submit", (event) => {
    event.preventDefault();
    const input = gate.querySelector("input");
    const error = gate.querySelector(".preview-gate-error");
    if (input.value === previewPassword) {
      sessionStorage.setItem("orvion-preview-unlocked", "true");
      document.body.classList.remove("is-preview-locked");
      gate.remove();
      return;
    }
    error.hidden = false;
    input.select();
  });
}

mountSharedChrome();
applyTheme();
setupLanguageSwitchers();
setupThemeToggle();
applyTranslations();
setupPreviewGate();
