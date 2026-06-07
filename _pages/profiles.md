---
layout: page
permalink: /people/
title: About Us
description: Tongji MRL Team
nav: true
nav_order: 7
---

<div class="people-hero">
  <div class="people-copy">
    <h1>About Us</h1>
    <p>
      Representing Tongji University, Team MRL is a group of young innovators focused on the intersection of Robotics, ML, and Maritime Engineering. Our 2026 RobotX project leverages ROS2-based architectures and PX4 flight stacks to achieve high-level autonomy in USVs. We are committed to solving real-world maritime challenges through cutting-edge research and hands-on engineering excellence.
    </p>
  </div>
  <div class="people-hero-media">
    <img src="/assets/img/TJMRL.jpg" alt="Team MRL">
  </div>
</div>

---

## Team Members

<style>
  .people-hero {
    display: flex;
    align-items: center;
    gap: 40px;
    margin-bottom: 50px;
  }

  .people-copy {
    flex: 1;
  }

  .people-copy h1 {
    margin-bottom: 20px;
    font-size: 3em;
  }

  .people-copy p {
    color: #334155;
    font-size: 1.1em;
    line-height: 1.8;
  }

  .people-hero-media {
    flex: 0 0 300px;
  }

  .people-hero-media img {
    width: 100%;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }

  .team-structure {
    display: grid;
    gap: 24px;
    margin-top: 30px;
  }

  .team-leadership {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 16px;
  }

  .team-card,
  .team-unit {
    border: 1px solid #d8dee6;
    border-radius: 8px;
    background: #fff;
    box-shadow: 0 2px 10px rgba(27, 39, 51, 0.08);
    overflow: hidden;
  }

  .team-card {
    display: grid;
    justify-items: center;
    align-content: start;
    padding: 20px 16px;
    text-align: center;
  }

  .team-card.supervisor {
    background: #547bc8;
    color: #fff;
  }

  .team-card.coordinator {
    background: #eee7ff;
  }

  .team-card h3,
  .team-unit h3 {
    margin: 0;
    color: #1f2937;
    font-size: 1.15rem;
  }

  .team-card.supervisor h3,
  .team-card.supervisor .team-role {
    color: #fff;
  }

  .team-role {
    margin: 6px 0 0;
    color: #475569;
    font-size: 0.95rem;
    opacity: 0.9;
  }

  .member-photo {
    width: 76px;
    height: 76px;
    border-radius: 50%;
    object-fit: cover;
    border: 3px solid rgba(255, 255, 255, 0.72);
    box-shadow: 0 2px 8px rgba(27, 39, 51, 0.16);
    margin-bottom: 12px;
  }

  .team-card.coordinator .member-photo,
  .member-list .member-photo {
    border-color: #fff;
  }

  .team-groups {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    align-items: stretch;
    gap: 18px;
  }

  .team-unit {
    display: flex;
    flex-direction: column;
  }

  .team-unit h3 {
    padding: 14px 16px;
    text-align: center;
    border-bottom: 1px solid #d8dee6;
  }

  .team-unit.hardware h3 {
    background: #fff3cf;
  }

  .team-unit.software h3 {
    background: #dde5fb;
  }

  .team-unit.outreach h3 {
    background: #dff2e5;
  }

  .team-subgroup {
    padding: 16px;
  }

  .team-subgroup + .team-subgroup {
    border-top: 1px solid #edf0f3;
  }

  .team-unit.outreach .team-subgroup {
    display: flex;
    flex: 1;
    align-items: flex-start;
  }

  .team-unit.outreach .member-list {
    width: 100%;
  }

  .team-subgroup h4 {
    margin: 0 0 12px;
    color: #334155;
    font-size: 1rem;
  }

  .member-list {
    display: grid;
    gap: 8px;
    margin: 0;
    padding: 0;
    list-style: none;
  }

  .member-list li {
    display: grid;
    grid-template-columns: 48px minmax(0, 1fr) auto;
    align-items: center;
    gap: 10px;
    min-height: 64px;
    padding: 8px 10px;
    border: 1px solid #e4e8ee;
    border-radius: 6px;
    background: #fff;
  }

  .member-list .member-photo {
    width: 48px;
    height: 48px;
    margin: 0;
    border-width: 2px;
  }

  .member-list .support {
    color: #5d6670;
    background: #f5f6f8;
  }

  .member-name {
    min-width: 0;
    color: #1f2937;
    font-weight: 600;
  }

  .member-role {
    flex: 0 0 auto;
    color: #4f3f85;
    font-size: 0.88rem;
    font-weight: 600;
  }

  .team-note {
    margin: 0;
    color: #6b7280;
    font-size: 0.95rem;
  }

  .video-showcase {
    margin-top: 30px;
    padding: 60px 20px;
    border-radius: 10px;
    background-color: #f0f0f0;
    text-align: center;
  }

  .video-showcase h3 {
    color: #1f2937;
  }

  .video-showcase-copy {
    margin: 20px 0;
    color: #666;
  }

  .video-placeholder {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    max-width: 800px;
    margin: 0 auto;
    border-radius: 8px;
    aspect-ratio: 16 / 9;
    background-color: #e0e0e0;
  }

  .video-placeholder p {
    color: #666;
  }

  html[data-theme="dark"] .people-copy p {
    color: #d7e6f3;
  }

  html[data-theme="dark"] .team-card,
  html[data-theme="dark"] .team-unit,
  html[data-theme="dark"] .member-list li,
  html[data-theme="dark"] .video-showcase,
  html[data-theme="dark"] .video-placeholder {
    color: #1f2937;
  }

  html[data-theme="dark"] .team-card.coordinator h3,
  html[data-theme="dark"] .team-card.coordinator .team-role,
  html[data-theme="dark"] .team-unit h3,
  html[data-theme="dark"] .team-subgroup h4,
  html[data-theme="dark"] .member-name,
  html[data-theme="dark"] .video-showcase h3,
  html[data-theme="dark"] .video-showcase-copy,
  html[data-theme="dark"] .video-placeholder p {
    color: #1f2937;
  }

  html[data-theme="dark"] .member-list .support .member-name {
    color: #4b5563;
  }

  html[data-theme="dark"] .member-role {
    color: #4f3f85;
  }

  html[data-theme="dark"] .team-note {
    color: #b7c7d8;
  }

  @media (max-width: 900px) {
    .people-hero {
      flex-direction: column;
      align-items: stretch;
    }

    .people-hero-media {
      flex-basis: auto;
      max-width: 360px;
    }

    .team-leadership,
    .team-groups {
      grid-template-columns: 1fr;
    }
  }
</style>

<div class="team-structure">
  <div class="team-leadership">
    <div class="team-card supervisor">
      <img class="member-photo" src="/assets/img/team/Kun_Cao.jpg" alt="Kun Cao">
      <h3>Kun Cao</h3>
      <p class="team-role">Supervisor</p>
    </div>
    <div class="team-card coordinator">
      <img class="member-photo" src="/assets/img/team/Jiayan_Zhao.jpg" alt="Jiayan Zhao">
      <h3>Jiayan Zhao</h3>
      <p class="team-role">Team Leader</p>
    </div>
    <div class="team-card coordinator">
      <img class="member-photo" src="/assets/img/team/Yi_Wang.jpg" alt="Yi Wang">
      <h3>Yi Wang</h3>
      <p class="team-role">Deputy Team Leader</p>
    </div>
  </div>

  <div class="team-groups">
    <div class="team-unit hardware">
      <h3>Hardware Group</h3>
      <div class="team-subgroup">
        <h4>Hardware - Control</h4>
        <ul class="member-list">
          <li><img class="member-photo" src="/assets/img/team/Hongye_Ma.jpg" alt="Hongye Ma"><span class="member-name">Hongye Ma</span><span class="member-role">Leader</span></li>
          <li><img class="member-photo" src="/assets/img/team/Zhanpeng_Qu.jpg" alt="Zhanpeng Qu"><span class="member-name">Zhanpeng Qu</span></li>
        </ul>
      </div>
      <div class="team-subgroup">
        <h4>Hardware - Mechanics</h4>
        <ul class="member-list">
          <li><img class="member-photo" src="/assets/img/team/Yi_Pang.jpg" alt="Yi Pang"><span class="member-name">Yi Pang</span><span class="member-role">Leader</span></li>
        </ul>
      </div>
    </div>

    <div class="team-unit software">
      <h3>Software Group</h3>
      <div class="team-subgroup">
        <h4>Software - Perception</h4>
        <ul class="member-list">
          <li><img class="member-photo" src="/assets/img/team/Xuanyu_Yang.jpg" alt="Xuanyu Yang"><span class="member-name">Xuanyu Yang</span><span class="member-role">Leader</span></li>
          <li class="support"><img class="member-photo" src="/assets/img/team/Yuhan_Li.jpg" alt="Yuhan Li"><span class="member-name">Yuhan Li</span></li>
        </ul>
      </div>
      <div class="team-subgroup">
        <h4>Software - Planning</h4>
        <ul class="member-list">
          <li><img class="member-photo" src="/assets/img/team/Ci_Song.jpg" alt="Ci Song"><span class="member-name">Ci Song</span><span class="member-role">Leader</span></li>
          <li><img class="member-photo" src="/assets/img/team/Yaxin_Shao.jpg" alt="Yaxin Shao"><span class="member-name">Yaxin Shao</span></li>
          <li><img class="member-photo" src="/assets/img/team/Yunhuan_Cai.jpg" alt="Yunhuan Cai"><span class="member-name">Yunhuan Cai</span></li>
          <li class="support"><img class="member-photo" src="/assets/img/team/Zhanpeng_Qu.jpg" alt="Zhanpeng Qu"><span class="member-name">Zhanpeng Qu</span></li>
          <li class="support"><img class="member-photo" src="/assets/img/team/Cailin_Yang.jpg" alt="Cailin Yang"><span class="member-name">Cailin Yang</span></li>
        </ul>
      </div>
    </div>

    <div class="team-unit outreach">
      <h3>Outreach Group</h3>
      <div class="team-subgroup">
        <ul class="member-list">
          <li><img class="member-photo" src="/assets/img/team/Cailin_Yang.jpg" alt="Cailin Yang"><span class="member-name">Cailin Yang</span><span class="member-role">Leader</span></li>
          <li><img class="member-photo" src="/assets/img/team/Yuhan_Li.jpg" alt="Yuhan Li"><span class="member-name">Yuhan Li</span></li>
        </ul>
      </div>
    </div>

  </div>

  <p class="team-note">Names shown in gray indicate auxiliary participation in that subgroup.</p>
</div>

---

## Video Showcase

<div class="video-showcase">
  <h3>Team Demonstration Video</h3>
  <p class="video-showcase-copy">Video content coming soon</p>
  <!-- Video embed location - can use {% include video.liquid path="video-path" %} or iframe to add videos later -->
  <div class="video-placeholder">
    <p>Video placeholder (16:9 aspect ratio)</p>
  </div>
</div>
