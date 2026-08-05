---
layout: page
permalink: /robot-x/
title: RobotX 2026
description: Systems, missions and testing progress for the 2026 Maritime RobotX Challenge.
---

<p class="page-lead">Systems, missions and testing progress for the 2026 Maritime RobotX Challenge.</p>

## Competition Overview

Tongji MRL is a multidisciplinary student team from Tongji University developing autonomous marine robotic systems for the 2026 Maritime RobotX Challenge. Our current development spans surface, underwater and aerial platforms. The current mission focus is Mission Task 1, Mission Task 3 and Mission Task 4.

<nav class="section-actions" aria-label="RobotX page sections">
  <a class="btn btn-outline-primary" href="#robotic-systems">Robotic Systems</a>
  <a class="btn btn-outline-primary" href="#mission-tasks">Mission Tasks</a>
  <a class="btn btn-outline-primary" href="#testing">Testing</a>
</nav>

## Robotic Systems {#robotic-systems}

<div class="system-grid">
  {% for system in site.data.systems %}
    <article class="system-card">
      {% if system.image %}
        {% include figure.liquid path=system.image alt=system.name class="img-fluid rounded" %}
      {% else %}
        <div class="system-image-placeholder" role="img" aria-label="{{ system.name }} image in preparation">Image in preparation</div>
      {% endif %}
      <span class="team-card-kicker">{{ system.abbreviation }}</span>
      <h3>{{ system.name }}</h3>
      <dl class="system-details">
        <div><dt>Role</dt><dd>{{ system.role }}</dd></div>
        <div><dt>Current Status</dt><dd>{{ system.status }}</dd></div>
        <div><dt>Related Missions</dt><dd>{{ system.related_missions | join: ', ' }}</dd></div>
      </dl>
      <p>{{ system.description }}</p>
    </article>
  {% endfor %}
</div>

## Mission Tasks {#mission-tasks}

{% for mission in site.data.missions %}
  <article class="mission-card" id="{{ mission.id }}">
    <header class="mission-header">
      <span class="mission-status">{{ mission.status }}</span>
      <h3>{{ mission.title }}</h3>
    </header>
    <div class="mission-sections">
      <section>
        <h4>Overview</h4>
        <p>{{ mission.overview }}</p>
        <ul>
          {% for highlight in mission.highlights %}<li>{{ highlight }}</li>{% endfor %}
        </ul>
      </section>
      <section>
        <h4>Systems Involved</h4>
        <p>{{ mission.systems | join: ', ' }}</p>
      </section>
    </div>
    <div class="mission-development-status">
      <div class="mission-status-labels">
        <span>Our Approach</span>
        <span>Current Progress</span>
        <span>Testing and Media</span>
      </div>
      <p>{{ mission.development_note }}</p>
    </div>
  </article>
{% endfor %}

## Testing {#testing}

{% assign verified_tests = site.data.tests | where: "verified", true %}

### Simulation Testing

{% assign simulation_tests = verified_tests | where: "type", "simulation" %}
{% if simulation_tests.size > 0 %}
  <div class="test-grid">
    {% for test in simulation_tests %}
      {% include test-record.liquid test=test %}
    {% endfor %}
  </div>
{% else %}
<div class="compact-empty-state">Testing records will be published after internal verification.</div>
{% endif %}

### Field / Water / Air Testing

{% assign field_tests = verified_tests | where: "type", "field" %}
{% if field_tests.size > 0 %}
  <div class="test-grid">
    {% for test in field_tests %}
      {% include test-record.liquid test=test %}
    {% endfor %}
  </div>
{% else %}
<div class="compact-empty-state">Testing records will be published after internal verification.</div>
{% endif %}
