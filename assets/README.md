# How to add your own assets — step by step

This file is a tutorial. Each section below is a separate, self-contained
task. You do **not** need to touch any code for any of these — just upload
the file to the exact folder and filename listed, and the website will
pick it up automatically.

All of this happens on GitHub.com, in your browser, inside your
`portofolio-mariel` repository.

---

## Tutorial 1 — Upload your hero photo

**Goal:** replace the placeholder person icon on the homepage with your real photo.

**Steps:**
1. Go to your repository on GitHub: `https://github.com/iyelljelly/portofolio-mariel`
2. Click into the `assets` folder, then click into the `img` folder.
3. Click the **Add file** button (top right of the file list), then choose **Upload files**.
4. Drag your photo in, or click "choose your files" and select it from your computer.
5. **Rename the file** (there's a small rename field under the thumbnail once it's uploaded) so it's exactly: `mariel-hero.jpg`
   - If your photo is a `.png` or `.jpeg`, that's fine — just tell Kiro the exact file extension you used, since the code needs to match it exactly.
6. Scroll down, write a short commit message like "Add hero photo", and click **Commit changes**.
7. Come back here and tell Kiro: "I uploaded mariel-hero.jpg" — Kiro will update the one line of code that displays it and push the change.

---

## Tutorial 2 — Upload your CV

**Goal:** make the "Download CV" button on the homepage actually download your real CV.

**Steps:**
1. On GitHub, go into the `assets` folder, then into the `cv` folder.
2. Click **Add file → Upload files**.
3. Upload your CV file.
4. Rename it to exactly: `Mariel-Fang-CV.pdf`
5. Commit the change (same as Tutorial 1, step 6).
6. That's it — no code change needed, since the button already points at this exact filename and path.

---

## Tutorial 3 — Upload project screenshots (TITU, Un-Loop, Wise, Beyond the Gear)

**Goal:** replace the dashed "Project Spec" placeholder boxes inside each project's
detail section with your real screenshots.

**Steps:**
1. On GitHub, go into `assets` → `img`.
2. Click **Add file → Upload files** and upload each screenshot.
3. Suggested filenames (so Kiro can find them quickly when you ask):
   - `beyond-the-gear.png` (or .jpg) — the Torch/Progressio poster
   - `titu.png` — the TITU phone mockups image
   - `unloop.png` — the Un-Loop phone mockups image
   - `wise.png` — if/when you have a Wise screenshot
4. Commit the change.
5. Tell Kiro which filename goes with which project (e.g. "I uploaded
   titu.png for the TITU project") — Kiro will swap it into the matching
   placeholder box and push the change.

---

## Tutorial 4 — Upload certificate scans

**Goal:** replace the "Certificate Scan Placeholder" boxes in the Certificates
& Credentials section with your real certificate images.

**Steps:**
1. On GitHub, go into `assets` → `img` → `certs`.
2. Click **Add file → Upload files** and upload each certificate scan.
3. Suggested filenames:
   - `sis-excellence-award.png`
   - `himsisfo-film-2026.png`
   - `progressio-firstimerz.png`
   - `iofestival-2026.png`
   - `aws-cloud-foundations.png`
   - `isfest-wise.png`
4. Commit the change.
5. Tell Kiro which filename matches which certificate card — Kiro will wire
   it in.

---

## Tutorial 5 — Add your custom cursor images (the "flip card" cursors)

**Goal:** make the mouse cursor change into your own custom image —
one image while hovering a project card, a different image while
hovering the "← Back" button on a flipped card.

**Steps:**
1. On GitHub, go into `assets`, then click **Add file → New folder**,
   and name the new folder `cursors`. (If this folder already exists
   because Kiro created it, just open it instead.)
2. Inside `assets/cursors/`, click **Add file → Upload files**.
3. Upload your two cursor images with these **exact filenames**:
   - `view-cursor.png` — shown while hovering a project card
   - `back-cursor.png` — shown while hovering the "← Back" button
4. Tips for the images themselves:
   - PNG format, with a transparent background, works best.
   - Keep them small — around 32×32 to 64×64 pixels. A huge image file
     will make the cursor feel slow to appear.
5. Commit the change.
6. That's it — **no code change needed**. The site's CSS already looks
   for exactly these two filenames in exactly this folder, so the cursor
   will update itself as soon as the files exist. If a file is missing,
   browsers just fall back to the normal pointer arrow, so nothing breaks
   in the meantime.

---

## Tutorial 6 — Swap the "About" skill icons for real logo images

**Goal:** replace the generic Material Symbols icons (Excel, Oracle, etc.)
in the About section with real brand logo images.

**Steps:**
1. On GitHub, go into `assets` → `icons`.
2. Click **Add file → Upload files** and upload each logo (Excel, Oracle,
   whatever programming language icon, database icon, UI/UX icon).
3. Suggested filenames: `excel.png`, `oracle.png`, `programming.png`,
   `database.png`, `uiux.png`.
4. Commit the change.
5. Tell Kiro which filename matches which skill tile — Kiro will swap
   the icon markup for an `<img>` tag pointing at your file.

---

### A quick note on how "Add file → Upload files" works on GitHub

- You can drag-and-drop multiple files at once into the upload box.
- Right after uploading, GitHub shows each file with an editable filename
  field — use that to fix the name *before* you commit, so you don't have
  to rename it in a second step later.
- The green **Commit changes** button at the bottom of the page is what
  actually saves the file into the repository. Nothing is saved until you
  click that.
- You can always come back and re-upload a file with the same name to
  replace it later.
