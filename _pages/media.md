---
layout: page
permalink: /media/
title: Media
description: Verified photos and videos from Tongji MRL activities and RobotX 2026 preparation.
---

<p class="page-lead">Verified Tongji MRL photos and videos. Categories without confirmed material remain clearly marked as in preparation.</p>

{% assign media_categories = "Robot Assembly|Field Tests|Team Activities|Design Process" | split: "|" %}
{% assign verified_media = site.data.media | where: "verified", true %}

<div class="media-sections">
  {% for category in media_categories %}
    <section class="media-section">
      <h2>{{ category }}</h2>
      {% assign category_items = verified_media | where: "category", category %}
      {% if category_items.size > 0 %}
        <div class="media-grid">
          {% for item in category_items %}
            <article class="media-card">
              {% if item.image %}
                {% include figure.liquid path=item.image alt=item.alt class="img-fluid rounded" %}
              {% endif %}
              {% if item.video %}
                <div class="responsive-video">
                  {% include video.liquid path=item.video poster=item.poster title=item.title alt=item.alt preload="metadata" controls=true playsinline=true %}
                </div>
              {% endif %}
              <h3>{{ item.title }}</h3>
              {% if item.date %}<p class="media-category">{{ item.date }}</p>{% endif %}
              {% if item.description %}<p>{{ item.description }}</p>{% endif %}
            </article>
          {% endfor %}
        </div>
      {% else %}
        <div class="compact-empty-state">Media pending verification.</div>
      {% endif %}
    </section>
  {% endfor %}
</div>
