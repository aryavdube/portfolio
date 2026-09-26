(function () {
  const CAT = { sped: 'Special ed', tech: 'Engineering', research: 'Research', lead: 'Leadership' };
  const NOW = new Date();
  const M = { Jan: 0, Feb: 1, Mar: 2, Apr: 3, May: 4, Jun: 5, Jul: 6, Aug: 7, Sep: 8, Oct: 9, Nov: 10, Dec: 11 };
  const d = (s) => { if (!s || s === 'Present') return NOW; const [m, y] = s.split(' '); return new Date(+y, M[m], 1); };
  const dur = (a, b) => {
    const s = d(a), e = d(b); let months = (e.getFullYear() - s.getFullYear()) * 12 + e.getMonth() - s.getMonth() + (b === 'Present' ? 0 : 1);
    months = Math.max(1, months); const y = Math.floor(months / 12), m = months % 12;
    return [y ? `${y} yr${y > 1 ? 's' : ''}` : '', m ? `${m} mo` : ''].filter(Boolean).join(' ');
  };

  const items = [
    { id: 'donormozo', label: 'DonorMozo · Dukami', cat: ['tech', 'lead'], org: 'Dukami Enterprises LLC', role: 'Jr. Software Intern · DonorMozo team lead', start: 'Sep 2022', end: 'Mar 2026', logo: './donormozo-logo.png', short: 'Full-stack temple donation and booking platform, taken from concept to launch.',
      points: ['Built DonorMozo with full-stack web development, API integrations, database optimization, and scalable system design', 'Led a 4-person team from concept to launch', 'Now used by 250+ temples, with $5M+ in transactions processed'],
      metrics: [['250+', 'temples'], ['$5M+', 'processed'], ['4', 'person team']], skills: ['Full-stack web', 'API integrations', 'Database optimization', 'System design'], links: [['donormozo.com', 'https://donormozo.com/']] },
    { id: 'teachshare', mono: 'TS', label: 'TeachShare R&D', cat: ['tech', 'research'], org: 'TeachShare', role: 'Research & Development Intern', start: 'Jun 2025', end: 'Aug 2025', short: 'Evaluated AI/ML features for a teacher platform: adaptive learning, instructional support, and student analytics.',
      points: ['Led market and user research, model testing, and technical and legal analyses that guided product strategy', 'Evaluated and proposed AI/ML integrations: adaptive learning tools, AI-assisted instructional support, and student analytics', 'Worked closely across teams to improve accessibility and personalized learning outcomes'],
      metrics: [['AI/ML', 'feature proposals'], ['3', 'feature areas']], skills: ['AI/ML evaluation', 'Model testing', 'User research'], links: [['teachshare.com', 'https://www.teachshare.com/']] },
    { id: 'mindluminary', label: 'MindLuminary', cat: ['research', 'tech', 'sped'], org: 'MindLuminary', role: 'Founder · Independent Researcher', start: 'Aug 2023', end: 'Present', logo: './mindluminary-logo.png', short: 'AI-powered adaptive training platform for neurodiverse students.',
      points: ['Designed and developed an AI-powered adaptive platform for communication, social, and life skills', 'Led research and development, including predictive statistical models for personalized learning pathways', 'Won the APA Research in Psychological Science Award (Mar 2025) and was a Diamond Challenge semifinalist (Feb 2025)'],
      metrics: [['APA', 'award'], ['AI', 'adaptive pathways']], skills: ['Predictive statistics', 'AI/ML', 'Adaptive learning'], links: [['mindluminary.com', 'https://www.mindluminary.com/']] },
    { id: 'specialthinkers', label: 'SpecialThinkers', cat: ['sped', 'lead'], org: 'SpecialThinkers.com', role: 'Founder', start: 'Apr 2024', end: 'Present', logo: './specialthinkers-logo.png', short: 'Neurodiversity resource platform for families and educators worldwide.',
      points: ['Directed content, community outreach, web design, and event coordination', 'Wrote blogs on how AI/ML and VR can improve accessibility, engagement, and learning in special education', 'Grew to 1,500 members in three countries and helped raise $30K for nonprofits'],
      metrics: [['1,500', 'members'], ['3', 'countries'], ['$30K', 'raised'], ['175+', 'partners']], skills: ['WordPress', 'Web design', 'Community'], links: [['specialthinkers.com', 'https://specialthinkers.com/']] },
    { id: 'ta', mono: 'TA', label: 'Special Ed TA', cat: ['sped'], org: 'Washington High School', role: 'Teacher Assistant, Special Ed Classroom', start: 'Aug 2024', end: 'Jun 2025', short: 'Classroom support with assistive technology, ABA work, and personalized materials.',
      points: ['Supported students with academic assignments, assistive technology, ABA work, and personalized learning materials', 'Researched hands-on how technology fits into the classroom, which later informed my AAC research'],
      metrics: [['1', 'school year'], ['AAC', 'in practice']], skills: ['Assistive tech', 'ABA support'], links: [] },
    { id: 'volunteer', mono: '5K+', cat: ['sped'], org: 'Special Education Classroom', role: 'Volunteer', start: null, end: null, span: '3+ years', short: 'More than 5,000 service hours supporting students.',
      points: ['Volunteered for 3+ years in a special education classroom', 'Helped students with physical, vocational, recreation, and foundational math skills', 'Logged 5,000+ service hours'],
      metrics: [['5,000+', 'hours'], ['3+', 'years']], skills: ['Assistive tech'], links: [] },
    { id: 'paper', label: 'Vanderbilt paper', logo: './vanderbilt-logo.png', cat: ['research', 'sped'], org: 'Young Scientist Journal · Vanderbilt', role: 'Author · Research Publication', point: 'Jun 2025', span: '2025 issue', short: 'Enhancing AAC Systems Through Artificial Intelligence: Parent and Family Perspective.',
      points: ['Mixed-methods study of what families find limiting in AAC systems and how AI could help', 'Interviewed 14 families over 11 weeks, finding seven limitations and matching AI solutions', 'Published in the 2025 issue of Vanderbilt\u2019s Young Scientist Journal'],
      metrics: [['14', 'families'], ['11', 'weeks'], ['7', 'limitations']], skills: ['Mixed methods', 'Family interviews', 'AAC'], links: [['Read the paper', 'https://www.vanderbilt.edu/youngscientistjournal/article/enhancing-aac-systems-through-artificial-intelligence-parent-and-family-perspective-on-limitations-and-solutions/']] },
    { id: 'seed', cat: ['research'], org: 'UCLA SEED Lab · Semel Institute', role: 'Incoming Research', start: null, end: null, span: 'Incoming · UCLA', logo: './ucla-logo.png', short: 'Signatures of Early Emergence and Divergence, led by Brittany Wolff, Ph.D.',
      points: ['Research on behavioral and digital signals relevant to early developmental and mental-health outcomes', 'Brings together neurocognition, physiology, digital phenotyping, and longitudinal data'],
      metrics: [['UCLA', 'Semel Institute']], skills: ['Research methods', 'Statistics'], links: [['SEED Lab', 'https://www.semel.ucla.edu/initiatives/seedlab/']] },
    { id: 'casc', mono: 'CASC', label: 'CASC Region 4', cat: ['lead'], org: 'California Association of Student Councils', role: 'Communications Director, Region 4', start: 'May 2025', end: 'May 2026', short: 'Regional communications strategy reaching 800K students.',
      points: ['Directed regional outreach, communications strategy, and marketing for leadership and advocacy initiatives across Northern California', 'Led social media campaigns and organized workshops', 'Advocated for special education funding and technology use'],
      metrics: [['800K', 'students'], ['5', 'counties']], skills: ['Communications', 'Advocacy'], links: [['casc.net', 'https://casc.net/']] },
    { id: 'yac', mono: 'YAC', label: 'Fremont Youth Commission', cat: ['lead', 'sped'], org: 'City of Fremont', role: 'Co-Chair, Youth Advisory Commission', start: 'Aug 2024', end: 'Present', short: 'Advises City Council on youth policy for 50,000 young people.',
      points: ['Co-chair of a 13-member commission representing 50,000 youth citywide', 'Identify key teen concerns and advise City Council on youth policy', 'Advocate for special education accessibility and technology in education and communication'],
      metrics: [['50K', 'youth'], ['13', 'commissioners']], skills: ['Policy', 'Advocacy'], links: [['Commission page', 'https://www.fremont.gov/government/departments/city-clerk/boards-commissions-committees/youth-advisory-commission']] }
  ];

  const awards = [
    { id: 'aw-cameron', date: 'Sep 2025', title: 'Cameron Impact Scholarship', tier: 'Finalist', note: '2026 Cameron Impact Scholarship finalist, from the Bryan Cameron Education Foundation.', link: ['Scholarship', 'https://www.bryancameroneducationfoundation.org/scholarship'] },
    { id: 'aw-apa', date: 'Mar 2025', title: 'Research in Psychological Science Award', tier: 'Winner · APA', note: 'Given by the American Psychological Association for my MindLuminary research.', link: ['APA student research', 'https://www.apa.org/education-career/k12/science-fair'], rel: 'mindluminary' },
    { id: 'aw-acsef', date: 'Mar 2025', title: 'Alameda County Science & Engineering Fair', tier: '2nd place', note: 'Second place at the county science and engineering fair.', link: ['acsef.org', 'https://www.acsef.org/'] },
    { id: 'aw-diamond', date: 'Feb 2025', title: 'Diamond Challenge', tier: 'Semifinalist', note: 'Semifinalist in this global high school entrepreneurship competition for an AI project.', link: ['diamondchallenge.org', 'https://diamondchallenge.org/'], rel: 'mindluminary' },
    { id: 'aw-pres', date: 'Oct 2024', title: 'President\u2019s Lifetime Achievement Award', tier: 'Service', note: 'Presidential recognition for lifetime volunteer service.' },
    { id: 'aw-ap', date: 'Jul 2025', title: 'AP Scholar', tier: 'College Board', note: 'College Board recognition for AP exam performance.' }
  ];

  const edu = [
    { id: 'ed-ucla', feature: true, school: 'University of California, Los Angeles', what: 'Computer Science + Linguistics', start: 'Sep 2026', end: 'Jun 2029', logo: './ucla-logo.png', note: 'Class of 2029, focused on language, computation, and accessible AI.', chips: ['Linguistics', 'Computer Science', 'NLP'] },
    { id: 'ed-whs', school: 'Washington High School, Fremont', what: '3.89 UW · 4.3 W GPA', start: 'Aug 2022', end: 'Jun 2026', note: 'Coursework included AP Calculus BC, AP Statistics, AP Economics, Principles of Engineering, AP Environmental Science, and AP Computer Science. I was also a special education teacher assistant.', chips: ['AP Calc BC', 'AP Stats', 'AP CompSci', 'Engineering'] },
    { id: 'ed-ohlone', school: 'Ohlone College · Dual Enrollment', what: '5 college courses', start: 'Jun 2024', end: 'May 2026', note: 'PSY 101 General Psychology, BA 102 Macroeconomics, CS 101 Intro to Programming with C++, PSY 108 Human Development, and DAID-104B User Interface Design.', chips: ['C++', 'UI Design', 'Psychology'] },
    { id: 'ed-stanford', school: 'Stanford Pre-Collegiate Summer Institutes', what: 'Introduction to Human-Computer Interaction', start: 'Jun 2025', end: 'Aug 2025', note: 'A Stanford summer course in Human-Computer Interaction.', chips: ['HCI'], link: ['Program', 'https://summerinstitutes.spcs.stanford.edu/'] },
    { id: 'ed-umich', school: 'University of Michigan (Coursera)', what: 'Advanced Python Capstone · Generative AI Essentials', start: 'May 2023', end: 'Mar 2026', note: 'Advanced Python Capstone (May–Aug 2023), then Generative AI Essentials: Overview and Impact (Jan–Mar 2026).', chips: ['Python', 'GenAI'] },
    { id: 'ed-atdp', school: 'UC Berkeley ATDP', what: 'Web Design & Dev · Innovation & Entrepreneurship', start: 'Jun 2022', end: 'Jul 2023', note: 'Web Design and Development with HTML, CSS, and JS (Jun–Jul 2022), and Introduction to Innovation and Entrepreneurship (Jun–Jul 2023).', chips: ['HTML/CSS/JS', 'Entrepreneurship'], link: ['ATDP', 'https://atdp.berkeley.edu/'] }
  ];

  const skills = [
    ['JavaScript', ['donormozo'], 'Full-stack web development on DonorMozo.'],
    ['Python', [], 'JSON and RESTful/API integration, plus the University of Michigan Advanced Python Capstone.'],
    ['REST APIs', ['donormozo'], 'API integrations for DonorMozo.'],
    ['MySQL', ['donormozo'], 'Database optimization for DonorMozo transactions and bookings.'],
    ['Java', [], 'Object-oriented programming from AP Computer Science.'],
    ['C++', [], 'Ohlone College CS 101: Intro to Programming with C++.'],
    ['Basic NLP', ['paper'], 'Language-focused AI, central to my AAC research.'],
    ['Statistics', ['mindluminary'], 'Predictive statistical models for personalized learning pathways, plus AP Statistics.'],
    ['UI / HCI', ['specialthinkers'], 'Stanford HCI and Ohlone UI Design, applied to the sites I design.'],
    ['WordPress', ['specialthinkers'], 'Built and run SpecialThinkers.com.'],
    ['Research methods', ['paper', 'mindluminary', 'teachshare'], 'Interviews, thematic analysis, and user research.'],
    ['Assistive tech', ['ta', 'paper'], 'Hands-on assistive technology in the classroom, and AAC research.']
  ];

  const byId = Object.fromEntries(items.map((i) => [i.id, i]));
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const range = (i) => i.start ? `${i.start} – ${i.end}` : (i.span || i.point);
  const length = (i) => i.start ? dur(i.start, i.end) : (i.span || '');
  const catDots = (cats) => cats.map((c) => `<span class="rz-cat c-${c}"><i></i>${CAT[c]}</span>`).join('');
  const linkHtml = (links) => links && links.length ? `<div class="rz-tip-links">${links.map(([t, u]) => `<a href="${u}" target="_blank" rel="noopener noreferrer">${esc(t)} ↗</a>`).join('')}</div>` : '';

  const tipFor = (key) => {
    if (byId[key]) {
      const i = byId[key];
      return `<div class="rz-tip-head">${catDots(i.cat)}</div><strong>${esc(i.role)}</strong><span class="rz-tip-org">${esc(i.org)}</span>
        <div class="rz-tip-when"><span>${esc(range(i))}</span>${length(i) ? `<b>${esc(length(i))}</b>` : ''}</div>
        <div class="rz-tip-metrics">${i.metrics.map(([n, l]) => `<span><b>${esc(n)}</b>${esc(l)}</span>`).join('')}</div>
        <ul>${i.points.map((p) => `<li>${esc(p)}</li>`).join('')}</ul>${linkHtml(i.links)}`;
    }
    const a = awards.find((x) => x.id === key);
    if (a) return `<div class="rz-tip-head"><span class="rz-cat c-award"><i></i>${esc(a.tier)}</span></div><strong>${esc(a.title)}</strong><div class="rz-tip-when"><span>${esc(a.date)}</span></div><p>${esc(a.note)}</p>${a.rel ? `<p class="rz-tip-rel">Related: ${esc(byId[a.rel].org)}</p>` : ''}${a.link ? linkHtml([a.link]) : ''}`;
    const e = edu.find((x) => x.id === key);
    if (e) return `<div class="rz-tip-head"><span class="rz-cat c-edu"><i></i>Education</span></div><strong>${esc(e.school)}</strong><span class="rz-tip-org">${esc(e.what)}</span><div class="rz-tip-when"><span>${esc(e.start)} – ${esc(e.end)}</span><b>${esc(dur(e.start, e.end))}</b></div><p>${esc(e.note)}</p>${e.link ? linkHtml([e.link]) : ''}`;
    const s = skills.find((x) => 'sk-' + x[0] === key);
    if (s) return `<div class="rz-tip-head"><span class="rz-cat c-tech"><i></i>Skill</span></div><strong>${esc(s[0])}</strong><p>${esc(s[2])}</p>${s[1].length ? `<p class="rz-tip-rel">Used in: ${s[1].map((id) => esc(byId[id].org.split(' ·')[0])).join(', ')}</p>` : ''}`;
    return '';
  };

  // KPIs
  document.querySelector('[data-kpis]').innerHTML = [['5000', '+', 'Special ed service hours', 'volunteer'], ['1500', '', 'SpecialThinkers members', 'specialthinkers'], ['250', '+', 'Temples on DonorMozo', 'donormozo'], ['800', 'K', 'Students reached via CASC', 'casc'], ['6', '', 'Awards and honors', null]]
    .map(([n, s, l, id], k) => `<div class="reveal" style="--d:${k * 90}ms" ${id ? `data-tip="${id}" tabindex="0"` : ''}><dd><b data-count="${n}">0</b>${s}</dd><dt>${l}</dt></div>`).join('');

  // Gantt
  const T0 = new Date(2022, 5, 1), T1 = new Date(2029, 6, 1);
  const pct = (dt) => ((dt - T0) / (T1 - T0)) * 100;
  const yrs = []; for (let y = 2023; y <= 2029; y++) yrs.push(`<span style="left:${pct(new Date(y, 0, 1))}%">${y}</span>`);
  document.querySelector('[data-years]').innerHTML = yrs.join('');
  const ganttItems = [...items.filter((i) => i.start || i.point), { id: 'ed-ucla', label: 'UCLA Ling + CS', cat: ['edu'], org: 'UCLA', role: 'UCLA · CS + Linguistics', start: 'Sep 2026', end: 'Jun 2029' }];
  ganttItems.sort((a, b) => d(a.start || a.point) - d(b.start || b.point));
  document.querySelector('[data-rows]').innerHTML = ganttItems.map((i) => {
    const s = d(i.start || i.point); const e = i.point ? new Date(s.getFullYear(), s.getMonth() + 1, 1) : (i.end === 'Present' ? NOW : new Date(d(i.end).getFullYear(), d(i.end).getMonth() + 1, 1));
    const left = Math.max(0, pct(s)), width = Math.max(1.2, pct(e) - left);
    return `<div class="rz-row" data-cats="${i.cat.join(' ')}" data-row="${i.id}"><span class="rz-row-label">${esc(i.label || i.org)}</span><div class="rz-track"><button type="button" class="rz-bar c-${i.cat[0]} ${i.point ? 'is-point' : ''} ${i.end === 'Present' ? 'is-live' : ''}" style="--l:${left}%;--w:${width}%" data-tip="${i.id}" data-open="${i.id}" aria-label="${esc(i.role)}, ${esc(range(i))}"><span>${esc(i.role.split(' · ')[0])}</span></button></div></div>`;
  }).join('');
  const now = document.querySelector('[data-now]'); now.style.setProperty('--xf', (pct(NOW) / 100).toFixed(4));
  document.querySelectorAll('.rz-row').forEach((r, k) => r.style.setProperty('--i', k));
  document.addEventListener('pointermove', (e) => { const c = e.target.closest && e.target.closest('.rz-card'); if (c) { const r = c.getBoundingClientRect(); c.style.setProperty('--mx', `${e.clientX - r.left}px`); c.style.setProperty('--my', `${e.clientY - r.top}px`); } }, { passive: true });

  // Cards
  document.querySelector('[data-cards]').innerHTML = items.map((i, k) => `
    <article class="rz-card reveal" data-cats="${i.cat.join(' ')}" data-tip="${i.id}" data-open="${i.id}" tabindex="0" style="--d:${(k % 3) * 90}ms" aria-label="${esc(i.role)} at ${esc(i.org)}. Press Enter for details.">
      <div class="rz-card-top">${catDots(i.cat)}<span class="rz-card-len">${esc(length(i))}</span></div>
      ${i.logo ? `<img class="rz-card-logo" src="${i.logo}" alt="" loading="lazy">` : `<span class="rz-card-mono" aria-hidden="true">${esc(i.mono || i.org[0])}</span>`}
      <h3>${esc(i.role)}</h3><span class="rz-card-org">${esc(i.org)}</span>
      <p>${esc(i.short)}</p>
      <div class="rz-card-foot"><span>${esc(range(i))}</span><span class="rz-card-more">Details <i aria-hidden="true">+</i></span></div>
    </article>`).join('');

  // Skills
  document.querySelector('[data-skills]').innerHTML = skills.map(([n, rel]) => `<button type="button" class="rz-skill" data-tip="sk-${esc(n)}" data-rel="${rel.join(' ')}">${esc(n)}<small>${rel.length || '·'}</small></button>`).join('');

  // Awards
  document.querySelector('[data-awards]').innerHTML = awards.slice().sort((a, b) => d(b.date) - d(a.date)).map((a, k) => `<li class="rz-award reveal" style="--d:${k * 70}ms" data-tip="${a.id}" tabindex="0"><span class="rz-award-date">${esc(a.date)}</span><b>${esc(a.title)}</b><em>${esc(a.tier)}</em><i aria-hidden="true">✦</i></li>`).join('');

  // Education
  document.querySelector('[data-edu]').innerHTML = edu.map((e, k) => `<article class="rz-edu-card reveal ${e.feature ? 'is-feature' : ''}" style="--d:${(k % 3) * 80}ms" data-tip="${e.id}" tabindex="0">${e.logo ? `<img src="${e.logo}" alt="UCLA logo" loading="lazy">` : ''}<span class="rz-edu-when">${esc(e.start)} – ${esc(e.end)}</span><h3>${esc(e.school)}</h3><p>${esc(e.what)}</p><div class="rz-edu-chips">${e.chips.map((c) => `<span>${esc(c)}</span>`).join('')}</div></article>`).join('');

  // Tooltip engine
  const tip = document.querySelector('[data-tip-box]');
  let current = null, hideT = null;
  const place = (el) => {
    const r = el.getBoundingClientRect(); const tw = tip.offsetWidth, th = tip.offsetHeight; const pad = 12;
    let x = r.left + r.width / 2 - tw / 2; x = Math.max(pad, Math.min(innerWidth - tw - pad, x));
    let y = r.bottom + 12; let below = true;
    if (y + th > innerHeight - pad) { y = r.top - th - 12; below = false; }
    if (y < pad) { y = Math.max(pad, innerHeight - th - pad); }
    tip.style.transform = `translate(${Math.round(x)}px, ${Math.round(y)}px)`;
    tip.dataset.side = below ? 'below' : 'above';
  };
  const show = (el) => {
    clearTimeout(hideT);
    const key = el.dataset.tip; const html = tipFor(key); if (!html) return;
    if (current !== el) { tip.innerHTML = html; current = el; }
    tip.hidden = false; requestAnimationFrame(() => { place(el); tip.classList.add('on'); });
    el.setAttribute('aria-describedby', 'rz-tip');
    highlight(key);
  };
  const hide = () => { hideT = setTimeout(() => { tip.classList.remove('on'); current = null; highlight(null); setTimeout(() => { if (!current) tip.hidden = true; }, 200); }, 120); };
  const highlight = (key) => {
    document.querySelectorAll('.rz-row.is-hot').forEach((r) => r.classList.remove('is-hot'));
    if (!key) return;
    let ids = [key];
    const s = skills.find((x) => 'sk-' + x[0] === key); if (s) ids = s[1];
    const a = awards.find((x) => x.id === key); if (a && a.rel) ids = [a.rel];
    ids.forEach((id) => { const r = document.querySelector(`[data-row="${id}"]`); if (r) r.classList.add('is-hot'); });
  };
  const hoverable = window.matchMedia('(hover: hover)').matches;
  document.addEventListener('pointerover', (e) => { if (!hoverable) return; const el = e.target.closest('[data-tip]'); if (el) show(el); });
  document.addEventListener('pointerout', (e) => { if (!hoverable) return; const el = e.target.closest('[data-tip]'); if (el && !el.contains(e.relatedTarget) && !tip.contains(e.relatedTarget)) hide(); });
  tip.addEventListener('pointerenter', () => clearTimeout(hideT));
  tip.addEventListener('pointerleave', hide);
  document.addEventListener('focusin', (e) => { const el = e.target.closest('[data-tip]'); if (el && el.matches(':focus-visible')) show(el); });
  document.addEventListener('focusout', (e) => { if (!tip.contains(e.relatedTarget)) hide(); });
  window.addEventListener('scroll', () => { if (current && !tip.hidden) place(current); }, { passive: true });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') { tip.classList.remove('on'); tip.hidden = true; current = null; highlight(null); } });

  // Detail dialog (click / tap)
  const dlg = document.querySelector('[data-dialog]'); const body = document.querySelector('[data-dialog-body]');
  const open = (id) => {
    const i = byId[id]; if (!i) return;
    tip.classList.remove('on'); tip.hidden = true;
    body.innerHTML = `<button type="button" class="rz-dlg-close" data-close aria-label="Close">×</button>
      <div class="rz-dlg-top">${i.logo ? `<img src="${i.logo}" alt="">` : ''}<div>${catDots(i.cat)}</div></div>
      <h3 id="dlg-title">${esc(i.role)}</h3><span class="rz-tip-org">${esc(i.org)}</span>
      <div class="rz-tip-when"><span>${esc(range(i))}</span>${length(i) ? `<b>${esc(length(i))}</b>` : ''}</div>
      <div class="rz-dlg-metrics">${i.metrics.map(([n, l]) => `<span><b>${esc(n)}</b>${esc(l)}</span>`).join('')}</div>
      <ul>${i.points.map((p) => `<li>${esc(p)}</li>`).join('')}</ul>
      <div class="rz-dlg-skills">${i.skills.map((s) => `<span>${esc(s)}</span>`).join('')}</div>${linkHtml(i.links)}`;
    dlg.showModal();
  };
  document.addEventListener('click', (e) => {
    if (e.target.closest('a')) return;
    const el = e.target.closest('[data-open]'); if (el) { open(el.dataset.open); return; }
    const t = e.target.closest('[data-tip]');
    if (t && !hoverable) { current === t && !tip.hidden ? (tip.classList.remove('on'), tip.hidden = true, current = null) : show(t); }
    else if (!hoverable && !tip.contains(e.target)) { tip.classList.remove('on'); tip.hidden = true; current = null; }
  });
  document.addEventListener('keydown', (e) => { if (e.key === 'Enter' && e.target.matches('.rz-card[data-open]')) open(e.target.dataset.open); });
  dlg.addEventListener('click', (e) => { if (e.target === dlg || e.target.closest('[data-close]')) dlg.close(); });

  // Filters
  const filters = document.querySelector('[data-filters]');
  filters.addEventListener('click', (e) => {
    const b = e.target.closest('button[data-filter]'); if (!b) return;
    filters.querySelectorAll('button').forEach((x) => { x.classList.toggle('is-active', x === b); x.setAttribute('aria-pressed', String(x === b)); });
    const f = b.dataset.filter;
    document.querySelectorAll('.rz-row, .rz-card').forEach((el) => {
      const on = f === 'all' || el.dataset.cats.split(' ').includes(f);
      el.classList.toggle('is-dim', !on);
    });
  });

  // Reveal + count for generated nodes
  const io = new IntersectionObserver((es) => es.forEach((x) => { if (x.isIntersecting) { x.target.classList.add('in'); io.unobserve(x.target); } }), { threshold: 0.1 });
  document.querySelectorAll('.reveal:not(.in)').forEach((el) => io.observe(el));
  const gantt = document.querySelector('[data-gantt]');
  new IntersectionObserver((es, o) => es.forEach((x) => { if (x.isIntersecting) { gantt.classList.add('in'); o.disconnect(); } }), { threshold: 0.2 }).observe(gantt);
  document.querySelectorAll('.rz-kpis [data-count]').forEach((el) => {
    const t = +el.dataset.count, st = performance.now();
    const step = (n) => { const k = Math.min(1, (n - st) / 1500); el.textContent = Math.round(t * (1 - Math.pow(1 - k, 4))).toLocaleString('en-US'); if (k < 1) requestAnimationFrame(step); };
    requestAnimationFrame(step);
  });
})();
