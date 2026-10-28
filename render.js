(function () {
  'use strict';
  const email = 'hejunchen0401@connect.hku.hk';
  const escape = value => String(value).replace(/[&<>"']/g, c => ({'&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'}[c]));
  const e = escape;
  const ids = ['about', 'education', 'experience', 'work', 'systems', 'awards', 'contact'];
  const bullets = items => `<ul class="contributions">${items.map(item => `<li>${e(item)}</li>`).join('')}</ul>`;
  const rows = items => `<dl class="record-list">${items.map(([date, text]) => `<div><dt>${e(date)}</dt><dd>${e(text)}</dd></div>`).join('')}</dl>`;
  const contributions = (t, items, full, open = false) => full ? bullets(items) : `<details${open ? ' open' : ''}><summary>${e(t.contribution)}</summary>${bullets(items)}</details>`;
  function resourceLinks(links = []) {
    return links.length ? `<div class="resource-links">${links.map(link => {
      if (!/^https?:\/\//.test(link.url)) throw new Error('Expected an HTTP resource link');
      return `<a class="text-link" href="${e(link.url)}" target="_blank" rel="noopener noreferrer">${e(link.label)} <span aria-hidden="true">↗</span></a>`;
    }).join('')}</div>` : '';
  }
  function education(t) {
    return t.educationEntries.map(item => `<article class="education-entry"><p class="date">${e(item.date)}</p><div><h3>${e(item.degree)}</h3><p class="institution">${e(item.school)}</p><p class="muted">${e(item.detail)}</p></div></article>`).join('');
  }
  function projects(t, full) {
    return t.projects.map((item, i) => `<article class="work-entry${i === 0 ? ' featured-work' : ''}"><div class="work-meta"><span class="tag">${e(i === 0 ? t.thesisLabel : t.projectLabel)}</span><span class="date">${e(item.date)}</span></div><h3 class="project-title">${e(item.title)}</h3><p class="work-description">${e(item.summary)}</p>${contributions(t, item.bullets, full || i === 0)}<p class="outcome"><span aria-hidden="true">↗</span> ${e(item.outcome)}</p><ul class="keywords">${item.tags.map(tag => `<li>${e(tag)}</li>`).join('')}</ul>${resourceLinks([...(item.repository ? [{label: t.codeLabel, url: item.repository}] : []), ...(item.video ? [{label: t.videoLabel, url: item.video}] : [])])}</article>`).join('');
  }
  function internships(t, full = false) {
    return t.internships.map(item => `<article class="work-entry"><div class="work-meta"><span class="tag">${e(t.internshipLabel)}</span><span class="date">${e(item.date)}</span></div><div class="experience-heading"><h3 class="project-title">${e(item.company)}</h3><img class="company-logo" src="${e(item.logo)}" alt="${e(item.company)}" loading="lazy" decoding="async"></div><p class="work-description role-label">${e(item.role)}</p>${contributions(t, item.bullets, full, true)}</article>`).join('');
  }
  function skills(t) {
    return `<dl class="skill-list">${t.skillGroups.map(([label, text]) => `<div><dt>${e(label)}</dt><dd>${e(text)}</dd></div>`).join('')}</dl>`;
  }
  function systems(t, full = false) {
    return `<div class="project-list">${t.systemEntries.map(item => `<article class="work-entry"><div class="work-meta"><span class="tag">${e(t.systemsLabel)}</span></div><h3 class="project-title">${e(item.title)}</h3><p class="work-description">${e(item.summary)}</p>${contributions(t, item.bullets, full)}<ul class="keywords">${item.tags.map(tag => `<li>${e(tag)}</li>`).join('')}</ul>${resourceLinks(item.links)}</article>`).join('')}</div>`;
  }
  const heading = (number, title, id) => `<div class="section-heading"><span class="section-number" aria-hidden="true">${number}</span><h2 id="${id}-heading">${e(title)}</h2></div>`;
  const section = (number, title, id, content, extra = '') => `<section class="section ${extra}" id="${id}" aria-labelledby="${id}-heading">${heading(number, title, id)}${content}</section>`;
  function home(t, lang) {
    return {
      header: `<nav aria-label="${lang === 'zh' ? '主导航' : 'Main navigation'}">${t.nav.map((label, i) => `<a href="#${ids[i]}">${e(label)}</a>`).join('')}</nav>`,
      profile: `<img class="portrait" src="images/portrait.png" alt="${e(t.name)}" width="857" height="1200" decoding="async"><p class="profile-name">${e(t.name)}</p><p class="profile-role">${e(t.role)}<br>${e(t.university)}</p><p class="location"><span aria-hidden="true">⌖</span> ${e(t.location)}</p><a class="text-link" href="mailto:${email}">${email} <span aria-hidden="true">↗</span></a>`,
      main: `<section class="intro" id="about" aria-labelledby="about-heading"><h1 class="eyebrow" id="about-heading"><span class="tiny-rule" aria-hidden="true"></span>${e(t.aboutLabel)}</h1>${t.bio.map(p => `<p>${e(p)}</p>`).join('')}<div class="intro-footer"><a class="text-link" href="#work">${e(t.explore)} <span aria-hidden="true">↓</span></a><span class="availability"><i aria-hidden="true"></i>${e(t.status)}</span></div></section>`
        + section('01', t.education, 'education', education(t))
        + section('02', t.experience, 'experience', `<div class="project-list">${internships(t)}</div>`)
        + section('03', t.work, 'work', `<p class="section-lede">${e(t.workLede)}</p><div class="project-list">${projects(t, false)}</div>`)
        + section('04', t.systems, 'systems', `<p class="section-lede">${e(t.systemsLede)}</p>${systems(t)}`)
        + section('05', t.awards, 'awards', rows(t.awardEntries))
        + section('06', t.skills, 'skills', skills(t))
        + section('07', t.service, 'service', rows(t.activities))
        + section('08', t.contact, 'contact', `<p>${e(t.contactText)}</p><a class="contact-email" href="mailto:${email}">${email} <span aria-hidden="true">↗</span></a><div class="contact-details"><p>${e(t.role)}<br>${e(t.university)} · ${e(t.location)}</p></div>`, 'contact')
        + `<footer><span>© 2026 ${e(t.name)}</span><a href="#top">${e(t.footer)} ↑</a></footer>`
    };
  }
  globalThis.academicRender = {home};
}());
