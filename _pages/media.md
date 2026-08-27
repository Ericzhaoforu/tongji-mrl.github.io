---
layout: page
permalink: /media/
title: Inside Tongji MRL
kicker: Field Notes / Workshop Views
description: Build, test, observe and iterate — selected moments from Tongji MRL's RobotX preparation.
---

{% assign showcase_media = site.data.media | where: 'verified', true | where: 'showcase', true %}
{% assign usv_media = showcase_media | where: 'showcase_group', 'usv' | sort: 'showcase_order' %}
{% assign uav_media = showcase_media | where: 'showcase_group', 'uav' | sort: 'showcase_order' %}

<div class="media-wall-page" data-media-wall>
  <nav class="media-section-nav" aria-label="Media page sections">
    <a href="#platforms">Platforms</a>
    <a href="#usv-media">USV Media</a>
    <a href="#uav-media">UAV Media</a>
  </nav>

  <section class="media-platforms" id="platforms" aria-labelledby="platforms-title">
    <header class="media-section-intro">
      <p class="media-section-kicker">Our Platforms</p>
      <h2 id="platforms-title">Meet the fleet</h2>
      <p>Two complementary robotic platforms anchor our work across water and air.</p>
    </header>

    <div class="media-platform-grid">
      {% for system in site.data.systems %}
        <article class="media-platform-card" data-media-reveal style="--platform-position: {{ system.media_object_position | default: 'center' }}; --platform-scale: {{ system.media_scale | default: 1 }};">
          <div class="media-platform-visual">
            {% include figure.liquid path=system.image alt=system.image_alt class="media-platform-image" sizes="(max-width: 699px) 100vw, 50vw" %}
          </div>
          <div class="media-platform-copy">
            <span>{{ system.abbreviation }}</span>
            <h3>{{ system.name }}</h3>
            <p>{{ system.media_description }}</p>
            <a href="{{ '/robot-x/' | relative_url }}#{{ system.id }}">{{ system.media_link_label }} <i class="fa-solid fa-arrow-right" aria-hidden="true"></i></a>
          </div>
        </article>
      {% endfor %}
    </div>

  </section>

{% include media-showcase.liquid id="usv-media" kicker="USV Field Notes" title="USV Media" description="Surface-platform testing, assembly and electronics preparation." items=usv_media %}
{% include media-showcase.liquid id="uav-media" kicker="UAV Field Notes" title="UAV Media" description="Aerial-platform testing and development records. More verified media will be added as it becomes available." items=uav_media %}
</div>

<dialog class="media-viewer" data-media-viewer aria-labelledby="media-viewer-title">
  <div class="media-viewer-panel">
    <button type="button" class="media-viewer-close" data-media-close aria-label="Close video"><i class="fa-solid fa-xmark" aria-hidden="true"></i></button>
    <div class="media-viewer-stage" data-media-stage></div>
    <div class="media-viewer-copy">
      <p data-media-viewer-category></p>
      <h2 id="media-viewer-title" data-media-viewer-title></h2>
    </div>
  </div>
</dialog>
