/* ==========================================================================
   Mariel Fang — Portfolio Interactions
   - Certificate / credential viewer modal
   - Smooth, interactive nav active-state while scrolling (Elaine Yu style)
   ========================================================================== */

// ---- Certificate viewer modal ----------------------------------------
function showCertViewer(title, issuer, credId, desc, date, badge) {
  var v = document.getElementById('certViewerPage');
  if (!v) return;
  document.getElementById('cvTitle').textContent = title;
  document.getElementById('cvIssuer').textContent = issuer;
  document.getElementById('cvId').textContent = credId;
  document.getElementById('cvDesc').textContent = desc;
  document.getElementById('cvDate').textContent = date || 'Verified';
  document.getElementById('cvBadge').textContent = badge || 'Verified Credential';
  v.style.display = 'block';
  document.body.style.overflow = 'hidden';
  v.scrollTo(0, 0);
}

function hideCertViewer() {
  var v = document.getElementById('certViewerPage');
  if (v) v.style.display = 'none';
  document.body.style.overflow = '';
}

window.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') hideCertViewer();
});

// ---- Flip cards in "Explore the Work" ---------------------------------
// Click anywhere on a flip-card to rotate it and reveal the back face;
// click again (anywhere on the card, or the explicit "Back" button) to
// rotate it back to the front. Links/buttons inside the back face call
// event.stopPropagation() in their own onclick so they don't also trigger
// a flip when the visitor meant to follow the link instead.
function toggleFlip(cardEl) {
  if (!cardEl || !cardEl.classList) return;
  cardEl.classList.toggle('is-flipped');
}

// ---- Jump straight to a project's detail block from a work tile -------
function goToProjectDetail(anchorId) {
  var el = document.getElementById(anchorId);
  if (!el) return;
  el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  el.classList.add('ring-4', 'ring-cobalt/40');
  setTimeout(function () {
    el.classList.remove('ring-4', 'ring-cobalt/40');
  }, 1200);
}

// ---- Highlight active nav link while scrolling ------------------------
document.addEventListener('DOMContentLoaded', function () {
  var sections = document.querySelectorAll('main section[id]');
  var navLinks = document.querySelectorAll('header nav a[href^="#"]');

  function onScroll() {
    var current = '';
    sections.forEach(function (section) {
      var rect = section.getBoundingClientRect();
      if (rect.top <= 140 && rect.bottom >= 140) {
        current = section.id;
      }
    });
    navLinks.forEach(function (link) {
      var isActive = link.getAttribute('href') === '#' + current;
      link.classList.toggle('bg-cobalt', isActive);
      link.classList.toggle('text-white', isActive);
    });
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
});
