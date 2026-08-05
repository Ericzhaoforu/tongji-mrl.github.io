---
layout: page
permalink: /people/
title: About Us
description: Meet the students and supervisor behind Tongji MRL.
nav: true
nav_order: 7
---

<div class="people-hero">
  <div class="people-copy">
    <p>Tongji MRL is a multidisciplinary student team from Tongji University developing autonomous marine robotic systems for the 2026 Maritime RobotX Challenge.</p>
    <p>Our current development spans surface, underwater and aerial platforms.</p>
  </div>
  <div class="people-hero-media">
    {% include figure.liquid path="assets/img/TJMRL.jpg" alt="Tongji MRL team at Tongji University" class="img-fluid rounded" loading="eager" %}
  </div>
</div>

## Team Members

<p class="team-interaction-note">Select a member card to view confirmed profile details. Names shown with a muted background indicate auxiliary participation in that subgroup.</p>

<div class="team-structure">
  <div class="team-leadership">
    {% for member in site.data.team.members %}
      {% if member.leadership %}
        {% include team-member-trigger.liquid member=member variant="leadership" %}
      {% endif %}
    {% endfor %}
  </div>

  <div class="team-groups">
    <section class="team-unit hardware">
      <h3>Hardware Group</h3>
      {% include team-subgroup.liquid subgroup="Control" title="Hardware — Control" %}
      {% include team-subgroup.liquid subgroup="Mechanics" title="Hardware — Mechanics" %}
    </section>

    <section class="team-unit software">
      <h3>Software Group</h3>
      {% include team-subgroup.liquid subgroup="Perception" title="Software — Perception" %}
      {% include team-subgroup.liquid subgroup="Planning" title="Software — Planning" %}
    </section>

    <section class="team-unit outreach">
      <h3>Outreach Group</h3>
      {% include team-subgroup.liquid subgroup="Outreach" %}
    </section>

  </div>
</div>

{% for member in site.data.team.members %}
{% include member-dialog.liquid member=member %}
{% endfor %}

## Video Showcase

<div class="video-showcase">
  <h3>Team Demonstration Video</h3>
  <p>A verified team demonstration video will be published here when available.</p>
  <div class="video-placeholder">Media in preparation</div>
</div>
