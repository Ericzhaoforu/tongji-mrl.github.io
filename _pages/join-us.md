---
layout: page
permalink: /join-us/
title: Join Us
description: Areas where students can contribute to Tongji MRL.
---

Tongji MRL brings together students interested in marine robotics and multidisciplinary engineering. Recruitment details and the official contact channel are still being prepared.

<div class="join-grid">
  <article class="system-card"><h2>Mechanical</h2><p>Mechanical design, fabrication and integration work.</p></article>
  <article class="system-card"><h2>Electrical / Hardware</h2><p>Electrical systems, hardware integration and platform support.</p></article>
  <article class="system-card"><h2>Software</h2><p>Software development for autonomous robotic systems.</p></article>
  <article class="system-card"><h2>Planning</h2><p>Mission planning, autonomy and multi-system coordination.</p></article>
  <article class="system-card"><h2>Publicity / Outreach</h2><p>Documentation, media, communication and team outreach.</p></article>
</div>

## How to Join

<section class="join-contact-panel" aria-labelledby="how-to-join-title">
  <h3 id="how-to-join-title">Prepare to join the team</h3>
  <ol>
    <li>Choose the contribution area that best matches your interests.</li>
    <li>Prepare a short introduction and a summary of relevant experience.</li>
    <li>Use the official application channel when it is published here.</li>
  </ol>
  {% if site.join_contact.url %}
    <a class="btn btn-primary" href="{{ site.join_contact.url }}">{{ site.join_contact.label }}</a>
  {% else %}
    <span class="btn btn-outline-primary join-contact-disabled" aria-disabled="true">{{ site.join_contact.label }}</span>
  {% endif %}
  <p class="join-contact-note">{{ site.join_contact.note }}</p>
</section>
