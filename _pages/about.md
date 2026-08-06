---
layout: default
title: Tongji MRL
permalink: /
description: Tongji MRL is a multidisciplinary marine robotics team from Tongji University developing autonomous surface and aerial systems for the 2026 Maritime RobotX Challenge.
immersive_hero: true
---

{% assign hero = site.data.home.hero %}
{% assign hero_image_base = hero.background | remove: '.jpg' | remove: '.jpeg' | remove: '.png' %}

<div class="home-page">
  <section class="home-hero{% if hero.use_background_image %} has-background-image{% endif %}" aria-labelledby="home-hero-title">
    {% if hero.use_background_image %}
      <picture class="home-hero-media">
        <source
          srcset="{{ hero_image_base | relative_url }}-480.webp 480w, {{ hero_image_base | relative_url }}-800.webp 800w, {{ hero_image_base | relative_url }}-1400.webp 1400w"
          sizes="100vw"
          type="image/webp"
        >
        <img src="{{ hero.background | relative_url }}" alt="{{ hero.background_alt }}" width="1400" height="933" loading="eager">
      </picture>
      <div class="home-hero-overlay"></div>
    {% endif %}
    <div class="home-hero-content">
      <p class="home-hero-eyebrow">{{ hero.introduction }}</p>
      <h1 id="home-hero-title">{{ hero.title }}</h1>
      <p class="home-hero-subtitle">{{ hero.subtitle }}</p>
      <p class="home-hero-event">{{ hero.event }}</p>
      <nav class="home-hero-links" aria-label="Featured pages">
        <a href="{{ '/people/' | relative_url }}">About Us</a>
        <a href="{{ '/robot-x/' | relative_url }}">RobotX 2026</a>
        <a href="{{ '/robot-x/#mission-tasks' | relative_url }}">Mission Tasks</a>
        <a href="{{ '/media/' | relative_url }}">Media</a>
        <a href="{{ '/join-us/' | relative_url }}">Join Us</a>
      </nav>
    </div>
    <a class="home-scroll-cue" href="#home-content" data-scroll-to-home aria-label="Scroll to the Tongji MRL introduction">
      <span>Explore</span>
      <i class="fa-solid fa-chevron-down" aria-hidden="true"></i>
    </a>
  </section>

  <div id="home-content" class="home-content">
    <section class="home-section home-reveal" aria-labelledby="home-introduction-title">
      <p class="home-section-kicker">Team Introduction</p>
      <h2 id="home-introduction-title">Autonomous systems across surface and air</h2>
      <p>Tongji MRL is a multidisciplinary student team from Tongji University developing autonomous marine robotic systems for the 2026 Maritime RobotX Challenge. Our current development spans surface and aerial platforms.</p>
      <a class="home-text-link" href="{{ '/people/' | relative_url }}">Meet the team <span aria-hidden="true">→</span></a>
    </section>

    <section class="home-section home-reveal" aria-labelledby="home-systems-title">
      <p class="home-section-kicker">Robotic Systems</p>
      <h2 id="home-systems-title">USV and UAV</h2>
      <div class="home-summary-grid home-systems-grid">
        {% for system in site.data.systems %}
          <article class="home-summary-card">
            <span>{{ system.abbreviation }}</span>
            <h3>{{ system.name }}</h3>
            <p>{{ system.role }}</p>
          </article>
        {% endfor %}
      </div>
      <a class="home-text-link" href="{{ '/robot-x/#robotic-systems' | relative_url }}">Explore the systems <span aria-hidden="true">→</span></a>
    </section>

    <section class="home-section home-reveal" aria-labelledby="home-missions-title">
      <p class="home-section-kicker">Mission Focus</p>
      <h2 id="home-missions-title">Mission Tasks 1, 3 and 4</h2>
      <div class="home-summary-grid">
        {% for mission in site.data.missions %}
          <article class="home-summary-card">
            <span>{{ mission.status }}</span>
            <h3>{{ mission.short_title }}</h3>
            <p>{{ mission.title | remove_first: mission.short_title | remove_first: 'Mission ' | remove_first: ' — ' }}</p>
          </article>
        {% endfor %}
      </div>
      <a class="home-text-link" href="{{ '/robot-x/#mission-tasks' | relative_url }}">View mission preparation <span aria-hidden="true">→</span></a>
    </section>

    <section class="home-section home-reveal" aria-labelledby="home-updates-title">
      <p class="home-section-kicker">Latest Testing / Updates</p>
      <h2 id="home-updates-title">Development records</h2>
      {% assign verified_tests = site.data.tests | where: 'verified', true %}
      {% if verified_tests.size > 0 %}
        <div class="test-grid">
          {% for test in verified_tests limit: 2 %}
            {% include test-record.liquid test=test %}
          {% endfor %}
        </div>
      {% else %}
        <p>Testing records will be published after internal verification. Team updates will be published on the news page.</p>
      {% endif %}
      <div class="home-link-row">
        <a class="home-text-link" href="{{ '/robot-x/#testing' | relative_url }}">Testing records <span aria-hidden="true">→</span></a>
        <a class="home-text-link" href="{{ '/news/' | relative_url }}">Team news <span aria-hidden="true">→</span></a>
      </div>
    </section>

    <section class="home-section home-reveal" aria-labelledby="home-sponsors-title">
      <p class="home-section-kicker">Sponsors</p>
      <h2 id="home-sponsors-title">Supporting our work</h2>
      {% if site.data.sponsors and site.data.sponsors.size > 0 %}
        <div class="sponsor-grid">
          {% for sponsor in site.data.sponsors %}
            <a class="sponsor-card" href="{{ sponsor.url }}" target="_blank" rel="noopener noreferrer">
              {% include figure.liquid path=sponsor.logo alt=sponsor.alt class="img-fluid" %}
              <strong>{{ sponsor.name }}</strong>
              {% if sponsor.level %}<span>{{ sponsor.level }}</span>{% endif %}
            </a>
          {% endfor %}
        </div>
      {% else %}
        <p>We appreciate the organizations and individuals who support our work. Sponsor information will be published after confirmation.</p>
      {% endif %}
    </section>

  </div>
</div>
