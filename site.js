(function () {
  'use strict';
  const isCV = document.body.dataset.page === 'cv';
  const buttons = document.querySelectorAll('[data-language]');
  const status = document.getElementById('language-status');
  let selected = 'en';
  const query = new URLSearchParams(window.location.search).get('lang');
  if (['en', 'zh'].includes(query)) selected = query;
  else {
    try {
      selected = localStorage.getItem('junchen-profile-language') === 'zh' ? 'zh' : 'en';
    } catch (_) { /* Storage is optional; a first visit defaults to English. */ }
  }
  function setLanguage(lang, announce) {
    const t = globalThis.academicContent[lang];
    document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';
    document.title = isCV ? `${t.name} · ${t.cvTitle}` : t.title;
    document.querySelector('meta[name="description"]').content = isCV ? t.cvDescription : t.description;
    document.querySelector('.skip-link').textContent = t.skip;
    document.querySelector('.language-switch').setAttribute('aria-label', t.language);
    if (isCV) {
      document.getElementById('cv').innerHTML = globalThis.academicRender.cv(t);
      const back = document.getElementById('back-profile');
      back.textContent = `← ${t.back}`;
      back.href = `index.html?lang=${lang}`;
      document.getElementById('print-cv').textContent = t.download;
    } else {
      const rendered = globalThis.academicRender.home(t, lang);
      document.getElementById('header-content').innerHTML = rendered.header;
      const profile = document.getElementById('profile');
      profile.innerHTML = rendered.profile;
      profile.setAttribute('aria-label', t.profileLabel);
      document.getElementById('main').innerHTML = rendered.main;
    }
    buttons.forEach(button => button.setAttribute('aria-pressed', String(button.dataset.language === lang)));
    if (announce) {
      status.textContent = lang === 'zh' ? '已切换至中文' : 'Switched to English';
      try { localStorage.setItem('junchen-profile-language', lang); } catch (_) { /* Optional persistence. */ }
      try {
        const url = new URL(window.location.href);
        url.searchParams.set('lang', lang);
        window.history.replaceState(null, '', url);
      } catch (_) { /* Language switching also works without History API access. */ }
    }
  }
  buttons.forEach(button => button.addEventListener('click', () => setLanguage(button.dataset.language, true)));
  setLanguage(selected, false);
}());
