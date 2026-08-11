# Storyboard: Partner-Subsite-Screencast ("5-Minuten-Setup")

**Ziel:** 20–30 Sekunden, Loop-fähig, ohne Ton verständlich (Untertitel/
On-Screen-Text Pflicht, viele Besucher schauen Landingpage-Videos stumm).
Platzierung: `/partner`-Subsite, vermutlich in oder direkt unter der
Hero-Sektion (`partner/index.html`, aktuell `<h1>VOXIL Legal als
zusätzliches, wiederkehrendes Servicegeschäft für Ihre Kanzlei-Kunden.</h1>`).

**Zielgruppe/POV:** Der IT-Systemhaus-Techniker, nicht die Kanzlei selbst —
konsistent mit der bestehenden Partner-Seite ("Die Kundenbeziehung bleibt bei
Ihnen", "First-Level-Support & Wartung bei Ihnen").

**Kernbotschaft:** Lizenzvergabe ist kein Spezialwissen-Akt, sondern ein
kurzer, bereits jetzt so existierender Workflow (Installer ausführen,
Lizenzdatei an einen festen Pfad kopieren, App neu starten) — siehe
`voxil-legal/docs/partner-handbuch.md`, Abschnitt 2–3, als Quelle der
Wahrheit für das, was im Video gezeigt werden darf. Explizit **kein**
In-App-Lizenz-Import-Dialog vorhanden — das Video soll das nicht
vortäuschen, sondern den echten (unkomplizierten) manuellen Kopiervorgang
zeigen.

**Zeitraffer-Hinweis:** Installation und Ollama-Modell-Setup dauern in
Realität länger als ihr Bildschirmanteil im Video — diese Abschnitte laufen
sichtbar beschleunigt (Zeitraffer-Optik, z. B. schneller Fortschrittsbalken
+ dezenter "⏩"-Hinweis im Bild), damit "5 Minuten" ehrlich als
"überschaubarer Aufwand", nicht als "Video zeigt Echtzeit" verstanden wird.

---

## Szenen

**Szene 1 — Hook (0:00–0:04)**
Bild: Techniker-Schreibtisch, zwei Monitore, auf einem läuft ein
Ticket-/Kunden-System (grob angedeutet, kein reales Tool zeigen), auf dem
anderen wird der VOXIL-Installer gestartet.
On-Screen-Text: *"Neue Kanzlei. Neue Lizenz. 5 Minuten."*
Voiceover (optional, falls vertont): *"Ihr nächster Kanzlei-Kunde will
loslegen — bei VOXIL ist das schneller erledigt, als der Kaffee kalt wird."*

**Szene 2 — Installation (0:04–0:09, Zeitraffer)**
Bild: Installer-Fortschrittsbalken läuft sichtbar beschleunigt durch,
Desktop-Icon erscheint.
On-Screen-Text: *"Installer starten."*

**Szene 3 — Automatisches KI-Setup (0:09–0:14, Zeitraffer)**
Bild: Onboarding-Dialog mit Ollama-/Modell-Fortschrittsbalken (siehe
`ollama-setup.js`-Onboarding-UI), läuft im Zeitraffer durch.
On-Screen-Text: *"Lokale KI richtet sich von selbst ein — keine
Cloud, kein manuelles Modell-Tuning."*

**Szene 4 — Lizenz zuweisen (0:14–0:21, Echtzeit-Anteil des Videos)**
Bild: Dateimanager-Fenster, `.voxlic`-Datei wird per Kopieren/Einfügen in
den `voxil-suite`-Ordner im Benutzerprofil gelegt (ehrlich exakt wie in der
Praxis, kein beschönigter Drag&Drop-Import). Danach VOXIL-Fenster: App wird
neu gestartet.
On-Screen-Text: *"Lizenzdatei rein. App neu starten. Fertig."*

**Szene 5 — Startklar (0:21–0:26)**
Bild: VOXIL Einstellungen → Lizenz-Status zeigt gültige Lizenz (grüner
Status), Schnitt zu einer kurz angespielten Aktenansicht (Diktat-Button,
PDF-Viewer) — die Kanzlei ist einsatzbereit.
On-Screen-Text: *"Kanzlei ist startklar. Support bleibt bei Ihnen."*

**Szene 6 — Abspann/CTA (0:26–0:30)**
Bild: VOXIL-Logo + Platzhalter für Systemhaus-Co-Branding, ruhiger
Hintergrund.
On-Screen-Text: *"Werden Sie VOXIL Solution Partner."* + Partner-Subsite-URL
als Text (kein anklickbarer Link nötig, da Video).
Voiceover (falls vertont): *"Wiederkehrende Marge. Volle Kundenhoheit. Ihr
Geschäft."*

---

## Offene Punkte für die Umsetzung (nicht Teil dieses Konzepts)

- Ob mit oder ohne gesprochenes Voiceover: beide Textvarianten oben stehen
  bereit, Entscheidung liegt beim tatsächlichen Videodreh/-schnitt.
- Bildmaterial: Screen-Recording aus einer echten (Test-)Installation nötig
  für Szene 2–5, um keine Fake-UI zu zeigen.
- Cutdown-Optionen für Social-Media-Formate (9:16 statt 16:9) sind hier
  bewusst nicht mitgeplant — separater Auftrag, falls gewünscht.
