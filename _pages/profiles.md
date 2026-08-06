---
layout: page
permalink: /people/
title: About Us
description: Meet the students and supervisor behind Tongji MRL.
nav: true
nav_order: 7
---

<main class="team-about-page">
  <section class="team-intro-section about-section-reveal">
    <div class="team-intro__content">
      <p class="section-label">About Tongji MRL</p>
      <h1>About Us</h1>
      <p>Tongji MRL is a multidisciplinary student team from Tongji University developing autonomous marine robotic systems for the 2026 Maritime RobotX Challenge.</p>
      <p>Our current development spans surface and aerial platforms.</p>
    </div>

    <figure class="team-photo-slot">
      {% if site.data.about.team_photo %}
        <img
          src="{{ site.data.about.team_photo | relative_url }}"
          alt="{{ site.data.about.team_photo_alt }}"
          width="1600"
          height="1000"
          loading="eager"
        >
      {% else %}
        <div class="team-photo-placeholder" role="img" aria-label="Team photo in preparation">
          <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
            <rect x="3" y="4" width="18" height="16" rx="2"></rect>
            <circle cx="8.5" cy="9" r="1.5"></circle>
            <path d="m4 17 5-5 3.5 3.5 2-2L20 19"></path>
          </svg>
          <span>Team photo in preparation</span>
        </div>
      {% endif %}
    </figure>

  </section>

  <section class="section-panel leadership-section about-section-reveal" aria-labelledby="leadership-title">
    <header class="section-heading">
      <p class="section-label">Team Structure</p>
      <h2 id="leadership-title">Leadership</h2>
      <p class="team-interaction-note">Select a member card to view confirmed profile details. Names shown with a muted background indicate auxiliary participation in that subgroup.</p>
    </header>
    <div class="team-leadership leadership-grid">
      {% for member in site.data.team.members %}
        {% if member.leadership %}
          {% include team-member-trigger.liquid member=member variant="leadership" %}
        {% endif %}
      {% endfor %}
    </div>
  </section>

  <section class="section-panel hardware-section about-section-reveal" aria-labelledby="hardware-title">
    <header class="section-heading">
      <p class="section-label">Engineering</p>
      <h2 id="hardware-title">Hardware Group</h2>
    </header>
    <div class="subgroup-stack">
      {% include team-subgroup.liquid subgroup="Control" title="Hardware — Control" %}
      {% include team-subgroup.liquid subgroup="Mechanics" title="Hardware — Mechanics" %}
    </div>
  </section>

  <section class="section-panel software-section about-section-reveal" aria-labelledby="software-title">
    <header class="section-heading">
      <p class="section-label">Autonomy</p>
      <h2 id="software-title">Software Group</h2>
    </header>
    <div class="subgroup-stack">
      {% include team-subgroup.liquid subgroup="Perception" title="Software — Perception" %}
      {% include team-subgroup.liquid subgroup="Planning" title="Software — Planning" %}
    </div>
  </section>

  <section class="section-panel outreach-section about-section-reveal" aria-labelledby="outreach-title">
    <header class="section-heading">
      <p class="section-label">Communication</p>
      <h2 id="outreach-title">Outreach Group</h2>
    </header>
    <div class="subgroup-stack">
      {% include team-subgroup.liquid subgroup="Outreach" %}
    </div>
  </section>

  <section class="section-panel video-section about-section-reveal" aria-labelledby="video-title">
    <header class="section-heading">
      <p class="section-label">Media</p>
      <h2 id="video-title">Video Showcase</h2>
    </header>
    <div class="video-showcase">
      <h3>Team Demonstration Video</h3>
      <p>A verified team demonstration video will be published here when available.</p>
      <div class="video-placeholder">Media in preparation</div>
    </div>
  </section>

{% for member in site.data.team.members %}
{% include member-dialog.liquid member=member %}
{% endfor %}
</main>
