const page = document.body.dataset.page || "";
const legalPage = document.body.dataset.legalPage || "";

function renderHeader() {
  const navItems = [
    { href: "/#features", label: "Features", key: "features" },
    { href: "/#permissions", label: "Permissions", key: "permissions" },
    { href: "/privacy/", label: "Privacy", key: "privacy" },
    { href: "/imprint/", label: "Imprint", key: "imprint" },
    { href: "/terms/", label: "Terms", key: "terms" }
  ];

  const navMarkup = navItems.map((item) => {
    const isCurrent = page === item.key || legalPage === item.key;
    return `<a href="${item.href}"${isCurrent ? ' aria-current="page"' : ""}>${item.label}</a>`;
  }).join("");

  return `
    <header class="site-header">
      <div class="shell nav-shell">
        <a class="brand" href="/" aria-label="Orvion home">
          <span class="brand-mark" aria-hidden="true"></span>
          <span class="brand-word">Orvion</span>
        </a>
        <nav class="site-nav" aria-label="Primary">
          ${navMarkup}
          <a class="button button-primary button-small" href="mailto:hello@getorvion.app?subject=Download%20Orvion">Download</a>
        </nav>
      </div>
    </header>
  `;
}

function renderFooter() {
  const year = new Date().getFullYear();
  const showLanguageControls = document.querySelector("[data-legal-switcher]") ? `
    <div class="footer-language-note">
      <span>Language</span>
      <div class="language-switcher language-switcher-footer" role="tablist" aria-label="Footer language switcher">
        <button type="button" class="language-button is-active" data-lang-target="en" role="tab" aria-selected="true">English</button>
        <button type="button" class="language-button" data-lang-target="de" role="tab" aria-selected="false">Deutsch</button>
      </div>
    </div>
  ` : "";

  return `
    <footer class="site-footer">
      <div class="shell footer-panel">
        <div class="footer-cta">
          <p class="kicker kicker-light">macOS download</p>
          <h2>Bring your desktop controls together.</h2>
          <p>Use Orvion as a calmer control layer for media, windows, overlays, shortcuts, and quick utilities.</p>
          <a class="button button-light" href="mailto:hello@getorvion.app?subject=Download%20Orvion">Download for macOS</a>
        </div>
        <div class="footer-links">
          <div>
            <strong>Explore</strong>
            <a href="/">Home</a>
            <a href="/#features">Features</a>
            <a href="/contact/">Contact</a>
          </div>
          <div>
            <strong>Legal</strong>
            <a href="/privacy/">Privacy Policy</a>
            <a href="/imprint/">Imprint</a>
            <a href="/terms/">Terms</a>
          </div>
        </div>
      </div>
      <div class="shell footer-meta">
        <span>© ${year} Orvion. All rights reserved.</span>
        ${showLanguageControls}
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

function setupLegalLanguageSwitcher() {
  const switchers = document.querySelectorAll(".language-switcher");
  if (!switchers.length) return;

  switchers.forEach((switcher) => {
    const buttons = [...switcher.querySelectorAll("[data-lang-target]")];
    const panels = [...document.querySelectorAll("[data-lang-panel]")];

    function activate(lang) {
      buttons.forEach((button) => {
        const active = button.dataset.langTarget === lang;
        button.classList.toggle("is-active", active);
        button.setAttribute("aria-selected", String(active));
      });

      panels.forEach((panel) => {
        const active = panel.dataset.langPanel === lang;
        panel.classList.toggle("is-active", active);
      });
    }

    buttons.forEach((button) => {
      button.addEventListener("click", () => activate(button.dataset.langTarget));
    });
  });
}

mountSharedChrome();
setupLegalLanguageSwitcher();
