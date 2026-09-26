(function () {
  const root = document.documentElement;
  root.classList.add('js');
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const toggle = document.querySelector('[data-theme-toggle]');
  let theme = 'dark';
  root.dataset.theme = theme;
  if (toggle) toggle.addEventListener('click', () => {
    theme = theme === 'dark' ? 'light' : 'dark';
    root.dataset.theme = theme;
    toggle.setAttribute('aria-label', `Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`);
  });

  // Header state, scroll progress, parallax
  const header = document.querySelector('.site-header');
  const bar = document.querySelector('.scroll-progress span');
  const parallax = [...document.querySelectorAll('[data-parallax]')];
  let ticking = false;
  const onScroll = () => {
    ticking = false;
    const y = window.scrollY;
    if (header) header.classList.toggle('scrolled', y > 16);
    const max = document.documentElement.scrollHeight - innerHeight;
    if (bar) bar.style.setProperty('--p', max > 0 ? (y / max).toFixed(4) : 0);
    if (!reduce) parallax.forEach((el) => { el.style.transform = `translate3d(0, ${y * parseFloat(el.dataset.parallax)}px, 0)`; });
  };
  window.addEventListener('scroll', () => { if (!ticking) { ticking = true; requestAnimationFrame(onScroll); } }, { passive: true });
  onScroll();

  // Reveal on scroll with stagger
  const reveals = document.querySelectorAll('.reveal, .reveal-img');
  document.querySelectorAll('.impact-stats .reveal').forEach((el, i) => el.style.setProperty('--d', `${i * 110}ms`));
  document.querySelectorAll('.project-grid .reveal').forEach((el, i) => el.style.setProperty('--d', `${(i % 2) * 140}ms`));
  if ('IntersectionObserver' in window && !reduce) {
    const io = new IntersectionObserver((entries) => entries.forEach((e) => {
      if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
    }), { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    reveals.forEach((el) => io.observe(el));
  } else reveals.forEach((el) => el.classList.add('in'));

  // Count up numbers
  const counters = document.querySelectorAll('[data-count]');
  const runCount = (el) => {
    const target = +el.dataset.count; const start = performance.now(); const dur = 1600;
    const step = (t) => { const k = Math.min(1, (t - start) / dur); const v = Math.round(target * (1 - Math.pow(1 - k, 4))); el.textContent = v.toLocaleString('en-US'); if (k < 1) requestAnimationFrame(step); };
    reduce ? (el.textContent = target.toLocaleString('en-US')) : requestAnimationFrame(step);
  };
  if ('IntersectionObserver' in window) {
    const co = new IntersectionObserver((entries) => entries.forEach((e) => { if (e.isIntersecting) { runCount(e.target); co.unobserve(e.target); } }), { threshold: 0.6 });
    counters.forEach((el) => co.observe(el));
  } else counters.forEach(runCount);

  // Tabs
  document.querySelectorAll('[data-tabs]').forEach((group) => {
    const kind = group.dataset.tabs;
    group.addEventListener('click', (event) => {
      const button = event.target.closest('button[data-target]');
      if (!button || !group.contains(button)) return;
      group.querySelectorAll('button').forEach((item) => {
        const active = item === button;
        item.classList.toggle('is-active', active);
        item.setAttribute('aria-pressed', String(active));
      });
      if (kind === 'mind' || kind === 'dm') {
        document.querySelectorAll(`[data-${kind}-panel]`).forEach((panel) => {
          const active = panel.dataset[`${kind}Panel`] === button.dataset.target;
          panel.hidden = !active;
          panel.classList.toggle('is-active', active);
        });
        const main = group.parentElement.querySelector('.dm-main'); if (main) main.scrollTop = 0;
      }
      if (kind === 'ucla') {
        const content = {
          question: ['SIGNATURES OF EARLY EMERGENCE AND DIVERGENCE', 'Understanding why similar risks lead to different developmental paths.'],
          methods: ['MULTIPLE SIGNALS, ONE HUMAN STORY', 'Neurocognition, physiology, digital phenotyping, and longitudinal data.'],
          impact: ['EARLIER INSIGHT. BETTER SUPPORT.', 'Finding patterns that may inform more personalized intervention.']
        };
        document.querySelector('[data-ucla-heading]').textContent = content[button.dataset.target][0];
        document.querySelector('[data-ucla-copy]').textContent = content[button.dataset.target][1];
      }
    });
  });

  // DonorMozo demo: live feed + booking calendar
  const feed = document.querySelector('[data-dm-feed]');
  const totalEl = document.querySelector('[data-dm-total]');
  if (feed && totalEl) {
    const samples = [['VN', 'Diwali seva', 'One-time · card', 151], ['PR', 'General donation', 'Recurring · ACH', 51], ['KS', 'Priest services', 'Booking · card', 201], ['MJ', 'Annadanam fund', 'Recurring · card', 108], ['LT', 'Youth program', 'One-time · wallet', 75]];
    let total = 12480, i = 0;
    const tick = () => {
      if (document.hidden) return;
      const [av, name, meta, amt] = samples[i++ % samples.length];
      const li = document.createElement('li'); li.className = 'new';
      li.innerHTML = `<span class="dm-av">${av}</span><div><b>${name}</b><small>${meta}</small></div><em>$${amt}</em>`;
      feed.prepend(li); if (feed.children.length > 4) feed.lastElementChild.remove();
      total += amt; totalEl.textContent = total.toLocaleString('en-US');
    };
    if (!reduce) setInterval(tick, 3200);
  }
  const cal = document.querySelector('[data-dm-cal]');
  const sheet = document.querySelector('[data-dm-sheet]');
  if (cal && sheet) {
    const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    const dates = [5, 6, 7, 8, 9, 10, 11];
    const times = ['7:00 AM', '10:00 AM', '1:00 PM', '6:00 PM'];
    const short = ['7a', '10a', '1p', '6p'];
    const services = [['Archana', '$21', '20 min'], ['Satyanarayan Puja', '$151', '90 min'], ['Community hall', '$250', '4 hrs']];
    const bookings = new Map([[2, ['Satyanarayan Puja', 'R. Kumar']], [9, ['Archana', 'S. Patel']], [19, ['Community hall', 'Youth program']]]);
    const count = document.querySelector('[data-dm-booked]');
    let selected = null, service = 0;
    days.forEach((d, i) => { const h = document.createElement('span'); h.className = 'dm-day'; h.innerHTML = `${d[0]}<b>${dates[i]}</b>`; cal.appendChild(h); });
    const slots = [];
    for (let r = 0; r < 4; r++) for (let c = 0; c < 7; c++) {
      const n = r * 7 + c; const b = document.createElement('button');
      b.type = 'button'; b.className = 'dm-slot'; b.textContent = short[r]; b.dataset.n = n;
      b.setAttribute('aria-label', `${days[c]} Oct ${dates[c]}, ${times[r]}`);
      cal.appendChild(b); slots[n] = b;
    }
    const label = (n) => `${days[n % 7]}, Oct ${dates[n % 7]} · ${times[Math.floor(n / 7)]}`;
    const paint = () => {
      slots.forEach((b, n) => {
        const bk = bookings.has(n);
        b.classList.toggle('booked', bk); b.classList.toggle('sel', n === selected);
        b.setAttribute('aria-pressed', String(n === selected));
        b.setAttribute('aria-label', `${label(n)}, ${bk ? 'booked' : 'open'}`);
      });
      count.textContent = `${bookings.size} booked`;
    };
    const render = () => {
      if (selected === null) { sheet.innerHTML = '<p class="dm-sheet-empty">Select an open slot to start a booking, or a booked slot to see its details.</p>'; return; }
      if (bookings.has(selected)) {
        const [svc, who] = bookings.get(selected);
        sheet.innerHTML = `<div class="dm-sheet-head"><small>BOOKED</small><b>${label(selected)}</b></div><p class="dm-sheet-line"><span>${svc}</span><span>${who}</span></p><div class="dm-sheet-actions"><button type="button" class="dm-btn ghost" data-act="cancel">Cancel booking</button><button type="button" class="dm-btn" data-act="close">Done</button></div>`;
        return;
      }
      sheet.innerHTML = `<div class="dm-sheet-head"><small>NEW BOOKING</small><b>${label(selected)}</b></div>
        <div class="dm-services" role="radiogroup" aria-label="Choose a service">${services.map(([n, p, t], i) => `<button type="button" role="radio" aria-checked="${i === service}" class="${i === service ? 'on' : ''}" data-svc="${i}"><span>${n}</span><small>${t} · ${p}</small></button>`).join('')}</div>
        <div class="dm-sheet-actions"><button type="button" class="dm-btn ghost" data-act="close">Back</button><button type="button" class="dm-btn" data-act="confirm">Confirm · ${services[service][1]}</button></div>`;
    };
    cal.addEventListener('click', (e) => {
      const b = e.target.closest('.dm-slot'); if (!b) return;
      const n = +b.dataset.n; selected = selected === n ? null : n; service = 0; paint(); render();
      const main = cal.closest('.dm-main'); if (main && selected !== null) main.scrollTo({ top: main.scrollTop + sheet.getBoundingClientRect().top - main.getBoundingClientRect().top - 12, behavior: reduce ? 'auto' : 'smooth' });
    });
    sheet.addEventListener('click', (e) => {
      const s = e.target.closest('[data-svc]'); if (s) { service = +s.dataset.svc; render(); return; }
      const a = e.target.closest('[data-act]'); if (!a) return;
      const act = a.dataset.act;
      if (act === 'confirm') {
        const n = selected; bookings.set(n, [services[service][0], 'You (demo)']); selected = null; paint();
        slots[n].classList.add('pop'); setTimeout(() => slots[n].classList.remove('pop'), 700);
        sheet.innerHTML = `<p class="dm-sheet-ok"><span aria-hidden="true">✓</span> ${services[service][0]} booked for ${label(n)}. A confirmation would go to the devotee.</p>`;
        return;
      }
      if (act === 'cancel') { bookings.delete(selected); }
      selected = null; paint(); render();
    });
    paint();
  }
  document.querySelectorAll('.dm-flow li').forEach((li, i) => li.style.setProperty('--i', i));

  // Contact form
  const form = document.querySelector('#contact-form');
  const status = document.querySelector('#form-status');
  if (form) form.addEventListener('submit', async (event) => {
    event.preventDefault();
    if (!form.reportValidity()) return;
    const submit = form.querySelector('button[type="submit"]');
    submit.disabled = true;
    status.textContent = 'Sending your message...';
    status.dataset.state = 'pending';
    try {
      const response = await fetch(form.dataset.ajax || form.action, { method: 'POST', body: new FormData(form), headers: { Accept: 'application/json' } });
      const result = await response.json();
      if (!response.ok || result.success === false || result.success === 'false') throw new Error(result.message || 'The form service could not accept the message.');
      form.reset();
      status.textContent = 'Message submitted. Thank you for reaching out!';
      status.dataset.state = 'success';
    } catch (error) {
      status.innerHTML = 'Could not send right now. Please <a href="mailto:adube08@ucla.edu">email me directly</a> instead.';
      status.dataset.state = 'error';
    } finally { submit.disabled = false; }
  });
})();
