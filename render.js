(function () {
  'use strict';
  const email = 'hejunchen0401@connect.hku.hk';
  const escape = value => String(value).replace(/[&<>"']/g, c => ({'&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'}[c]));
  const e = escape;
  const ids = ['about', 'research', 'education', 'experience', 'awards', 'contact'];
  const cvLink = lang => `cv.html?lang=${lang}`;
  const bullets = items => `<ul class="contributions">${items.map(item => `<li>${e(item)}</li>`).join('')}</ul>`;
  const rows = items => `<dl class="record-list">${items.map(([date, text]) => `<div><dt>${e(date)}</dt><dd>${e(text)}</dd></div>`).join('')}</dl>`;
  function education(t) {
    return t.educationEntries.map(item => `<article class="education-entry"><p class="date">${e(item.date)}</p><div><h3>${e(item.degree)}</h3><p class="institution">${e(item.school)}</p><p class="muted">${e(item.detail)}</p></div></article>`).join('');
  }
  function projects(t, full) {
    return t.projects.map((item, i) => `<article class="work-entry${i === 0 ? ' featured-work' : ''}"><div class="work-meta"><span class="tag">${e(i === 0 ? t.thesisLabel : t.projectLabel)}</span><span class="date">${e(item.date)}</span></div><h3 class="project-title">${e(item.title)}</h3><p class="work-description">${e(item.summary)}</p>${full || i === 0 ? bullets(item.bullets) : `<details><summary>${e(t.contribution)}</summary>${bullets(item.bullets)}</details>`}<p class="outcome"><span aria-hidden="true">↗</span> ${e(item.outcome)}</p><ul class="keywords">${item.tags.map(tag => `<li>${e(tag)}</li>`).join('')}</ul></article>`).join('');
  }
  function internships(t) {
    return t.internships.map(item => `<article class="work-entry"><div class="work-meta"><span class="date">${e(item.date)}</span></div><h3>${e(item.company)}</h3><p class="muted role-label">${e(item.role)}</p>${bullets(item.bullets)}</article>`).join('');
  }
  function skills(t) {
    return `<dl class="skill-list">${t.skillGroups.map(([label, text]) => `<div><dt>${e(label)}</dt><dd>${e(text)}</dd></div>`).join('')}</dl>`;
  }
  const heading = (number, title, id) => `<div class="section-heading"><span class="section-number" aria-hidden="true">${number}</span><h2 id="${id}-heading">${e(title)}</h2></div>`;
  const section = (number, title, id, content, extra = '') => `<section class="section ${extra}" id="${id}" aria-labelledby="${id}-heading">${heading(number, title, id)}${content}</section>`;
  function home(t, lang) {
    return {
      header: `<a class="wordmark" href="#top">${e(t.name)}<span class="wordmark-dot" aria-hidden="true">.</span></a><nav aria-label="${lang === 'zh' ? '主导航' : 'Main navigation'}">${t.nav.map((label, i) => `<a href="#${ids[i]}">${e(label)}</a>`).join('')}<a class="nav-cv" href="${cvLink(lang)}">CV <span aria-hidden="true">↗</span></a></nav>`,
      profile: `<div class="monogram" aria-hidden="true"><span>JH</span><i></i><small>RESEARCH & ENGINEERING</small></div><p class="eyebrow">${e(t.discipline)}</p><p class="profile-name">${e(t.name)}</p><p class="profile-role">${e(t.role)}<br>${e(t.university)}</p><p class="location"><span aria-hidden="true">⌖</span> ${e(t.location)}</p><a class="text-link" href="mailto:${email}">${email} <span aria-hidden="true">↗</span></a><a class="button button-outline" href="${cvLink(lang)}">${e(t.viewCV)} <span aria-hidden="true">↗</span></a>`,
      main: `<section class="intro" id="about" aria-labelledby="about-heading"><p class="eyebrow"><span class="tiny-rule" aria-hidden="true"></span>${e(t.aboutLabel)}</p><h1 id="about-heading">${e(t.name)}</h1><p class="intro-line">${e(t.headline).replace('\n', '<br>')}</p>${t.bio.map(p => `<p>${e(p)}</p>`).join('')}<div class="intro-footer"><a class="text-link" href="#work">${e(t.explore)} <span aria-hidden="true">↓</span></a><span class="availability"><i aria-hidden="true"></i>${e(t.status)}</span></div></section>`
        + section('01', t.research, 'research', `<p class="section-lede">${e(t.researchLede)}</p><div class="interests">${t.interests.map(([title, text]) => `<article><span class="interest-marker" aria-hidden="true">↗</span><h3>${e(title)}</h3><p>${e(text)}</p></article>`).join('')}</div>`)
        + section('02', t.education, 'education', education(t))
        + section('03', t.work, 'work', `<p class="section-lede">${e(t.workLede)}</p>${projects(t, false)}`)
        + section('04', t.experience, 'experience', internships(t))
        + section('05', t.awards, 'awards', rows(t.awardEntries))
        + section('06', t.skills, 'skills', skills(t))
        + section('07', t.service, 'service', rows(t.activities))
        + section('08', t.contact, 'contact', `<p>${e(t.contactText)}</p><a class="contact-email" href="mailto:${email}">${email} <span aria-hidden="true">↗</span></a><div class="contact-details"><p>${e(t.role)}<br>${e(t.university)} · ${e(t.location)}</p><a class="text-link" href="${cvLink(lang)}">${e(t.viewCV)} <span aria-hidden="true">↗</span></a></div>`, 'contact')
        + `<footer><span>© 2026 ${e(t.name)}</span><a href="#top">${e(t.footer)} ↑</a></footer>`
    };
  }
  function cv(t) {
    const block = (title, body) => `<section class="cv-section"><h2>${e(title)}</h2>${body}</section>`;
    return `<header class="cv-header"><p class="eyebrow">${e(t.cvTitle)}</p><h1>${e(t.name)}</h1><p>${e(t.role)} · ${e(t.university)}<br>${e(t.location)} · <a href="mailto:${email}">${email}</a></p></header>`
      + block(t.research, `<p>${t.interests.map(([title]) => e(title)).join(' · ')}</p>`)
      + block(t.education, education(t))
      + block(t.work, projects(t, true))
      + block(t.experience, internships(t))
      + block(t.awards, rows(t.awardEntries))
      + block(t.skills, skills(t))
      + block(t.service, rows(t.activities))
      + block(t.hobbies, `<p>${e(t.hobbyText)}</p>`);
  }
  globalThis.academicRender = {home, cv};
}());
