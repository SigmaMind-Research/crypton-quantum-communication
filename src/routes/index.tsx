import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400;1,500;1,600&family=Inter:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap",
      },
    ],
    scripts: [{ src: "https://cdn.tailwindcss.com" }],
  }),
  component: Index,
});

const HTML = `
<style>
  :root { --sage:#DCEFE6; --lime:#D2FF3C; --ink:#111111; --deep:#0A2F1D; }
  html,body{background:#fff;color:var(--ink);}
  body{font-family:'Inter',ui-sans-serif,system-ui,sans-serif;-webkit-font-smoothing:antialiased;}
  .font-display{font-family:'Playfair Display',ui-serif,Georgia,serif;letter-spacing:-0.02em;}
  .font-mono{font-family:'JetBrains Mono',ui-monospace,SFMono-Regular,monospace;}
  .hairline{border-color:rgba(17,17,17,0.12);}
  .hairline-dark{border-color:rgba(255,255,255,0.14);}
  .rule{height:1px;background:rgba(17,17,17,0.12);}
  .kbd{font-family:'JetBrains Mono',monospace;font-size:10.5px;letter-spacing:0.14em;text-transform:uppercase;color:#111;}
  .kbd-dim{color:rgba(17,17,17,0.55);}
  .card-hover{transition:transform .5s cubic-bezier(.2,.7,.2,1), box-shadow .5s;}
  .card-hover:hover{transform:translateY(-4px);box-shadow:0 30px 60px -30px rgba(10,47,29,.25);}
  .fade-up{opacity:0;transform:translateY(18px);transition:opacity .9s ease, transform .9s cubic-bezier(.2,.7,.2,1);}
  .fade-up.in{opacity:1;transform:none;}
  .dot{width:6px;height:6px;border-radius:9999px;background:var(--lime);display:inline-block;box-shadow:0 0 0 4px rgba(210,255,60,0.18);}
  .lime-underline{background-image:linear-gradient(transparent 62%, rgba(210,255,60,.75) 62%, rgba(210,255,60,.75) 92%, transparent 92%);}
  .grid-bg{background-image:linear-gradient(rgba(17,17,17,.05) 1px,transparent 1px),linear-gradient(90deg,rgba(17,17,17,.05) 1px,transparent 1px);background-size:56px 56px;}
  .arrow-y{width:1px;background:rgba(17,17,17,.35);position:relative;}
  .arrow-y:after{content:"";position:absolute;left:-3.5px;bottom:-1px;width:8px;height:8px;border-right:1px solid rgba(17,17,17,.6);border-bottom:1px solid rgba(17,17,17,.6);transform:rotate(45deg);}
  .btn-primary{background:var(--ink);color:#fff;}
  .btn-primary:hover{background:#000;}
  .btn-ghost{border:1px solid rgba(17,17,17,.2);}
  .btn-ghost:hover{background:#f5f5f2;}
  .chip{border:1px solid rgba(17,17,17,.15);border-radius:9999px;padding:6px 12px;font-size:11px;letter-spacing:.14em;text-transform:uppercase;font-family:'JetBrains Mono',monospace;}
  .chip-dark{border-color:rgba(255,255,255,.18);color:rgba(255,255,255,.85);}
  input,select{font-family:inherit;}
  .role-btn.active{background:#111;color:#fff;border-color:#111;}
  ::selection{background:var(--lime);color:#111;}
</style>

<!-- NAV -->
<header class="sticky top-0 z-40 backdrop-blur bg-white/85 border-b hairline">
  <div class="max-w-[1280px] mx-auto px-6 lg:px-10 h-16 flex items-center justify-between">
    <a href="#" class="font-display text-[22px] tracking-tight">crypton<span class="text-[#D2FF3C]">.</span></a>
    <div class="hidden md:flex items-center gap-6 text-[11px] font-mono uppercase tracking-[0.16em] text-[#111]">
      <span class="flex items-center gap-2"><span class="dot"></span>Protocol v1.0</span>
      <span class="h-3 w-px bg-black/15"></span>
      <span class="kbd-dim kbd">Bare-metal validated</span>
    </div>
    <a href="#waitlist" class="btn-primary rounded-full px-4 py-2 text-[12px] font-medium tracking-wide inline-flex items-center gap-2">Join Waitlist <span aria-hidden>→</span></a>
  </div>
</header>

<main class="max-w-[1280px] mx-auto px-6 lg:px-10">

  <!-- HERO -->
  <section class="pt-16 lg:pt-24 pb-20 lg:pb-28 grid lg:grid-cols-12 gap-10 lg:gap-14 items-end">
    <div class="lg:col-span-7 fade-up">
      <div class="kbd mb-8 flex items-center gap-3">
        <span class="inline-block w-6 h-px bg-black/50"></span>
        Post-Quantum Secure Communication Platform
      </div>
      <h1 class="font-display text-[44px] sm:text-[64px] lg:text-[88px] leading-[0.98] text-[#111]">
        Zero packet<br/>fragmentation.<br/>
        <span class="italic text-black/70">Over any</span> <span class="italic lime-underline">infrastructure.</span>
      </h1>
      <p class="mt-8 max-w-[560px] text-[17px] leading-[1.6] text-black/70">
        CRYPTON replaces legacy secure transport with a post-quantum communication protocol — and deploys seamlessly through a drop-in hardware proxy for existing infrastructure.
      </p>
      <div class="mt-10 flex flex-wrap items-center gap-3">
        <a href="#waitlist" class="btn-primary rounded-full px-6 py-3.5 text-sm font-medium inline-flex items-center gap-2">Join Waitlist <span>→</span></a>
        <a href="#protocol" class="btn-ghost rounded-full px-6 py-3.5 text-sm font-medium inline-flex items-center gap-2">Read Whitepaper</a>
      </div>
      <dl class="mt-14 grid grid-cols-3 max-w-[520px] gap-8 border-t hairline pt-6">
        <div><dt class="kbd kbd-dim">Handshake</dt><dd class="font-display text-2xl mt-1">1 RTT</dd></div>
        <div><dt class="kbd kbd-dim">Footprint</dt><dd class="font-display text-2xl mt-1">120 KB</dd></div>
        <div><dt class="kbd kbd-dim">Runs</dt><dd class="font-display text-2xl mt-1">1000+</dd></div>
      </dl>
    </div>

    <!-- Editorial collage -->
    <div class="lg:col-span-5 fade-up">
      <div class="relative h-[520px] sm:h-[560px]">
        <!-- FIG 01 -->
        <figure class="absolute top-0 left-0 w-[62%] rounded-[24px] border hairline bg-white p-5 card-hover">
          <div class="flex items-center justify-between text-[10.5px] font-mono uppercase tracking-[0.18em] text-black/50">
            <span>FIG 01</span><span>SAT / L-BAND</span>
          </div>
          <svg viewBox="0 0 220 140" class="mt-3 w-full h-[150px]" fill="none" stroke="#111" stroke-width="1">
            <circle cx="110" cy="72" r="10" fill="#111"/>
            <path d="M60 72 A50 50 0 0 1 160 72" stroke-dasharray="2 4"/>
            <path d="M40 72 A70 70 0 0 1 180 72" stroke-dasharray="2 4" opacity=".6"/>
            <path d="M20 72 A90 90 0 0 1 200 72" stroke-dasharray="2 4" opacity=".3"/>
            <path d="M110 82 L60 130 M110 82 L160 130 M110 82 L110 138"/>
            <path d="M40 130 L180 130"/>
            <circle cx="60" cy="130" r="3" fill="#111"/>
            <circle cx="160" cy="130" r="3" fill="#111"/>
            <circle cx="110" cy="138" r="3" fill="#111"/>
          </svg>
          <figcaption class="mt-2 font-display italic text-[15px]">Satellite Communications</figcaption>
        </figure>

        <!-- FIG 02 -->
        <figure class="absolute top-[32%] right-0 w-[54%] rounded-[24px] bg-[#0A2F1D] text-white p-5 card-hover">
          <div class="flex items-center justify-between text-[10.5px] font-mono uppercase tracking-[0.18em] text-white/60">
            <span>FIG 02</span><span>MODBUS / OPC-UA</span>
          </div>
          <svg viewBox="0 0 200 130" class="mt-3 w-full h-[130px]" fill="none" stroke="#D2FF3C" stroke-width="1">
            <rect x="20" y="30" width="30" height="20" />
            <rect x="20" y="60" width="30" height="20" />
            <rect x="20" y="90" width="30" height="20" />
            <rect x="150" y="55" width="34" height="30" />
            <path d="M50 40 L150 68 M50 70 L150 70 M50 100 L150 72" stroke-dasharray="2 3"/>
            <circle cx="167" cy="70" r="3" fill="#D2FF3C"/>
          </svg>
          <figcaption class="mt-2 font-display italic text-[15px] text-white">Industrial IoT</figcaption>
        </figure>

        <!-- FIG 03 -->
        <figure class="absolute bottom-[8%] left-[6%] w-[48%] rounded-[24px] border hairline bg-[#DCEFE6] p-5 card-hover">
          <div class="flex items-center justify-between text-[10.5px] font-mono uppercase tracking-[0.18em] text-black/55">
            <span>FIG 03</span><span>GRID / SCADA</span>
          </div>
          <svg viewBox="0 0 180 110" class="mt-3 w-full h-[110px]" fill="none" stroke="#111" stroke-width="1">
            <path d="M20 90 L60 30 L100 90 L140 30 L170 90"/>
            <path d="M20 90 L170 90"/>
            <path d="M60 30 L60 20 M100 90 L100 20 M140 30 L140 20"/>
            <circle cx="60" cy="20" r="2" fill="#111"/>
            <circle cx="100" cy="20" r="2" fill="#111"/>
            <circle cx="140" cy="20" r="2" fill="#111"/>
          </svg>
          <figcaption class="mt-2 font-display italic text-[15px]">Critical Infrastructure</figcaption>
        </figure>

        <!-- FIG 04 -->
        <figure class="absolute bottom-0 right-[4%] w-[42%] rounded-[24px] border hairline bg-white p-5 card-hover">
          <div class="flex items-center justify-between text-[10.5px] font-mono uppercase tracking-[0.18em] text-black/55">
            <span>FIG 04</span><span>MIL-STD</span>
          </div>
          <svg viewBox="0 0 160 100" class="mt-3 w-full h-[100px]" fill="none" stroke="#111" stroke-width="1">
            <polygon points="80,15 140,50 80,85 20,50"/>
            <path d="M80 15 L80 85 M20 50 L140 50"/>
            <circle cx="80" cy="50" r="4" fill="#111"/>
          </svg>
          <figcaption class="mt-2 font-display italic text-[15px]">Defense Networks</figcaption>
        </figure>
      </div>
    </div>
  </section>

  <!-- SECTION 1: The Problem -->
  <section class="py-24 border-t hairline fade-up">
    <div class="grid lg:grid-cols-12 gap-10">
      <div class="lg:col-span-5">
        <div class="kbd kbd-dim">§ 01 — The Problem</div>
        <h2 class="font-display text-[40px] sm:text-[52px] leading-[1.02] mt-6">
          Quantum migration<br/>isn't only a<br/><span class="italic">cryptography</span> problem.
        </h2>
        <p class="mt-6 max-w-[440px] text-black/65 text-[16px] leading-[1.6]">
          Naïve PQ migration multiplies certificate size, breaks MTU assumptions, and cascades through the transport layer. What begins as a key-exchange upgrade ends as an infrastructure overhaul.
        </p>
      </div>
      <div class="lg:col-span-7">
        <div class="rounded-[24px] border hairline p-8 lg:p-10 bg-white">
          <div class="kbd kbd-dim mb-6">Current migration path</div>
          <ol class="space-y-0">
            ${[
              ["01","Large certificates","+8–14 KB per identity"],
              ["02","Larger handshakes","Multi-flight negotiation"],
              ["03","Packet fragmentation","MTU exceeded on link"],
              ["04","Retransmissions","Reliability degrades"],
              ["05","Higher latency","P99 balloons under load"],
              ["06","Deployment complexity","Every stack must change"],
            ].map(([n,t,d])=>`
              <li class="grid grid-cols-[48px_1fr_auto] items-center py-4 border-t hairline first:border-t-0">
                <span class="kbd kbd-dim">${n}</span>
                <span class="font-display text-[22px] leading-none">${t}</span>
                <span class="text-[12px] font-mono uppercase tracking-[0.14em] text-black/55">${d}</span>
              </li>`).join("")}
          </ol>
        </div>
      </div>
    </div>
  </section>

  <!-- SECTION 2: Meet CRYPTON Protocol -->
  <section id="protocol" class="py-24 border-t hairline fade-up">
    <div class="flex flex-wrap items-end justify-between gap-6 mb-14">
      <div class="max-w-[620px]">
        <div class="kbd kbd-dim">§ 02 — Core Technology</div>
        <h2 class="font-display text-[40px] sm:text-[56px] leading-[1.02] mt-6">
          Meet <span class="italic">CRYPTON</span> Protocol.
        </h2>
        <p class="mt-6 text-black/70 text-[17px] leading-[1.6]">
          A post-quantum secure transport protocol built from the ground up to replace TLS in constrained networks. Purpose-designed for satellites, embedded devices, and industrial links where every byte and round-trip matters.
        </p>
      </div>
      <span class="chip">The core innovation</span>
    </div>

    <div class="grid lg:grid-cols-12 gap-8">
      <!-- Stack diagram -->
      <div class="lg:col-span-5 rounded-[24px] bg-[#DCEFE6] p-8 lg:p-10">
        <div class="kbd kbd-dim mb-6">Stack position</div>
        <div class="space-y-3">
          ${[
            ["Applications","HTTP · MQTT · CoAP · Custom"],
            ["CRYPTON Protocol","Post-quantum secure transport"],
            ["TCP / UDP","Reliable / datagram"],
            ["Network","IP · L2 links"],
          ].map(([t,d],i)=>`
            <div class="rounded-2xl bg-white p-4 flex items-center justify-between ${i===1?'ring-2 ring-[#0A2F1D]':''}">
              <div>
                <div class="font-display text-[19px] leading-tight">${t}</div>
                <div class="kbd kbd-dim mt-1">${d}</div>
              </div>
              ${i===1?'<span class="chip" style="border-color:#0A2F1D;color:#0A2F1D">Core</span>':''}
            </div>
            ${i<3?'<div class="h-6 flex justify-center"><div class="arrow-y h-full"></div></div>':''}
          `).join("")}
        </div>
      </div>

      <!-- Feature cards -->
      <div class="lg:col-span-7 grid sm:grid-cols-2 gap-4">
        ${[
          ["Binary Framing","Deterministic, zero-copy record layout. No ambiguous parsing states."],
          ["Identity Cache","Peer identities pinned once, elided from subsequent flights."],
          ["Raw Public Keys","No X.509 chains. Direct key attestation, kilobytes saved."],
          ["1 RTT Handshake","Application data flows on the first round-trip. No warm-up."],
          ["Session Resumption","0-RTT resumption with replay-safe binding to prior transcript."],
          ["Transcript Binding","Every flight cryptographically committed. Downgrade-proof by construction."],
        ].map(([t,d],i)=>`
          <div class="rounded-[20px] border hairline p-6 bg-white card-hover">
            <div class="flex items-center justify-between">
              <span class="kbd kbd-dim">FEAT / ${String(i+1).padStart(2,'0')}</span>
              <span class="w-2 h-2 rounded-full bg-[#D2FF3C]"></span>
            </div>
            <div class="font-display text-[22px] mt-4">${t}</div>
            <p class="mt-2 text-[14px] text-black/65 leading-relaxed">${d}</p>
          </div>`).join("")}
      </div>
    </div>
  </section>

  <!-- SECTION 3: Benchmarks -->
  <section class="py-24 border-t hairline fade-up">
    <div class="flex items-end justify-between mb-10">
      <div>
        <div class="kbd kbd-dim">§ 03 — Benchmarks</div>
        <h2 class="font-display text-[40px] sm:text-[52px] leading-[1.02] mt-6">The numbers.</h2>
      </div>
      <span class="chip hidden md:inline-block">Measured, not modeled</span>
    </div>
    <div class="rounded-[24px] bg-[#0A2F1D] text-white p-6 lg:p-10">
      <div class="grid grid-cols-2 lg:grid-cols-5 divide-y lg:divide-y-0 lg:divide-x divide-white/10">
        ${[
          ["1","RTT","Handshake"],
          ["120 KB","","Memory footprint"],
          ["1.5 KB","","Compact ClientHello"],
          ["1000+","","Validated runs"],
          ["ESP32","","Bare-metal tested"],
        ].map(([n,u,l])=>`
          <div class="p-6 lg:p-8">
            <div class="kbd" style="color:rgba(255,255,255,.55)">${l}</div>
            <div class="font-display text-[52px] lg:text-[64px] leading-none mt-4">${n}<span class="text-[#D2FF3C]">${u?" "+u:""}</span></div>
          </div>`).join("")}
      </div>
    </div>
  </section>

  <!-- SECTION 4: Proxy -->
  <section class="py-24 border-t hairline fade-up">
    <div class="grid lg:grid-cols-12 gap-12 items-start">
      <div class="lg:col-span-5">
        <div class="kbd kbd-dim">§ 04 — Deployment</div>
        <h2 class="font-display text-[40px] sm:text-[56px] leading-[1.02] mt-6">
          Migration without<br/>replacing<br/><span class="italic">infrastructure.</span>
        </h2>
        <p class="mt-6 text-black/70 text-[17px] leading-[1.6]">
          Not every network can replace TLS overnight. For brownfield infrastructure, <b>CRYPTON Proxy</b> enables post-quantum migration without modifying existing software or applications.
        </p>
        <div class="mt-8 space-y-3">
          ${[
            ["Legacy Network","Untouched applications, existing stacks"],
            ["CRYPTON Proxy","Drop-in 1U appliance · line-rate"],
            ["Quantum-Safe Communication","End-to-end post-quantum transport"],
          ].map(([t,d],i)=>`
            <div class="flex items-start gap-4">
              <span class="kbd kbd-dim mt-2 w-10">${String(i+1).padStart(2,'0')}</span>
              <div class="flex-1 rounded-2xl border hairline p-4">
                <div class="font-display text-[19px]">${t}</div>
                <div class="text-[13px] text-black/60 mt-1">${d}</div>
              </div>
            </div>
            ${i<2?'<div class="ml-14 h-4 arrow-y"></div>':''}
          `).join("")}
        </div>
      </div>

      <!-- Hardware renders -->
      <div class="lg:col-span-7 space-y-6">
        <figure class="rounded-[24px] bg-[#DCEFE6] p-8 lg:p-10">
          <div class="flex items-center justify-between kbd kbd-dim mb-6">
            <span>FIG · Front</span><span>CRYPTON PROXY · 1U</span>
          </div>
          <!-- Front view -->
          <svg viewBox="0 0 700 160" class="w-full h-auto" fill="none" stroke="#111" stroke-width="1">
            <rect x="10" y="20" width="680" height="120" rx="10" fill="#0A2F1D"/>
            <rect x="24" y="34" width="652" height="92" rx="6" stroke="#D2FF3C" stroke-opacity=".2"/>
            <circle cx="52" cy="80" r="14" fill="none" stroke="#D2FF3C"/>
            <circle cx="52" cy="80" r="3" fill="#D2FF3C"/>
            <text x="52" y="118" fill="#D2FF3C" font-family="JetBrains Mono" font-size="8" text-anchor="middle" opacity=".8">PWR</text>
            <g stroke="#D2FF3C" stroke-opacity=".7">
              <circle cx="110" cy="80" r="2"/><circle cx="122" cy="80" r="2"/><circle cx="134" cy="80" r="2"/><circle cx="146" cy="80" r="2"/>
            </g>
            <text x="128" y="118" fill="#D2FF3C" font-family="JetBrains Mono" font-size="8" text-anchor="middle" opacity=".6">STATUS</text>
            <g fill="none" stroke="#D2FF3C" stroke-opacity=".55">
              ${[0,1,2,3,4,5,6,7].map(i=>`<rect x="${200+i*44}" y="66" width="34" height="28" rx="2"/><path d="M${205+i*44} 74 h24 M${205+i*44} 82 h24"/>`).join("")}
            </g>
            <text x="332" y="118" fill="#D2FF3C" font-family="JetBrains Mono" font-size="8" text-anchor="middle" opacity=".6">8× SFP+ · 10G</text>
            <rect x="580" y="60" width="90" height="40" rx="3" stroke="#D2FF3C" stroke-opacity=".7"/>
            <text x="625" y="84" fill="#D2FF3C" font-family="JetBrains Mono" font-size="9" text-anchor="middle" opacity=".8">CRYPTON</text>
            <text x="625" y="118" fill="#D2FF3C" font-family="JetBrains Mono" font-size="7" text-anchor="middle" opacity=".55">MODEL C-1</text>
          </svg>
        </figure>
        <figure class="rounded-[24px] border hairline p-8 lg:p-10 bg-white">
          <div class="flex items-center justify-between kbd kbd-dim mb-6">
            <span>FIG · Rear</span><span>I/O · POWER · MGMT</span>
          </div>
          <!-- Rear view -->
          <svg viewBox="0 0 700 160" class="w-full h-auto" fill="none" stroke="#111" stroke-width="1">
            <rect x="10" y="20" width="680" height="120" rx="10" fill="#fff"/>
            <g>
              <rect x="30" y="50" width="80" height="60" rx="3"/>
              <path d="M30 60 h80 M30 100 h80"/>
              <text x="70" y="130" font-family="JetBrains Mono" font-size="8" text-anchor="middle" fill="#111" opacity=".6">FAN A</text>
              <rect x="120" y="50" width="80" height="60" rx="3"/>
              <path d="M120 60 h80 M120 100 h80"/>
              <text x="160" y="130" font-family="JetBrains Mono" font-size="8" text-anchor="middle" fill="#111" opacity=".6">FAN B</text>
            </g>
            <g>
              <rect x="230" y="60" width="60" height="40" rx="2"/>
              <path d="M240 74 h40 M240 86 h40"/>
              <text x="260" y="130" font-family="JetBrains Mono" font-size="8" text-anchor="middle" fill="#111" opacity=".6">MGMT</text>
              <rect x="300" y="60" width="60" height="40" rx="2"/>
              <text x="330" y="86" font-family="JetBrains Mono" font-size="9" text-anchor="middle" fill="#111">USB-C</text>
              <text x="330" y="130" font-family="JetBrains Mono" font-size="8" text-anchor="middle" fill="#111" opacity=".6">CONSOLE</text>
            </g>
            <g>
              <rect x="380" y="55" width="130" height="50" rx="2"/>
              <path d="M395 80 h100"/>
              <circle cx="410" cy="80" r="4"/><circle cx="445" cy="80" r="4"/><circle cx="480" cy="80" r="4"/>
              <text x="445" y="130" font-family="JetBrains Mono" font-size="8" text-anchor="middle" fill="#111" opacity=".6">HSM · TAMPER</text>
            </g>
            <g>
              <rect x="530" y="50" width="70" height="60" rx="3"/>
              <path d="M545 65 h40 M545 75 h40 M545 85 h40 M545 95 h40"/>
              <text x="565" y="130" font-family="JetBrains Mono" font-size="8" text-anchor="middle" fill="#111" opacity=".6">PSU 1</text>
              <rect x="605" y="50" width="70" height="60" rx="3"/>
              <path d="M620 65 h40 M620 75 h40 M620 85 h40 M620 95 h40"/>
              <text x="640" y="130" font-family="JetBrains Mono" font-size="8" text-anchor="middle" fill="#111" opacity=".6">PSU 2</text>
            </g>
          </svg>
        </figure>
      </div>
    </div>
  </section>

  <!-- SECTION 5: Migration paths -->
  <section class="py-24 border-t hairline fade-up">
    <div class="max-w-[720px]">
      <div class="kbd kbd-dim">§ 05 — Migration Path</div>
      <h2 class="font-display text-[40px] sm:text-[56px] leading-[1.02] mt-6">
        Choose your <span class="italic">migration path.</span>
      </h2>
      <p class="mt-6 text-black/65 text-[16px] leading-[1.6] max-w-[560px]">
        Two paths, one platform. Both converge on end-to-end post-quantum communication.
      </p>
    </div>

    <div class="mt-12 grid lg:grid-cols-2 gap-6">
      <div class="rounded-[24px] p-8 lg:p-10 bg-white border hairline card-hover">
        <div class="flex items-center justify-between">
          <span class="chip">GREENFIELD</span>
          <span class="kbd kbd-dim">PATH A</span>
        </div>
        <h3 class="font-display text-[34px] mt-6">Native <span class="italic">CRYPTON Protocol</span></h3>
        <p class="mt-3 text-black/65 text-[15px]">Embed the protocol directly into new products and platforms. Maximum efficiency, smallest footprint.</p>
        <ul class="mt-8 space-y-2 text-[15px]">
          ${["Satellite OEMs","IoT Devices","Embedded Systems","Defense Platforms","New Infrastructure"].map(x=>`<li class="flex items-center gap-3 border-t hairline pt-2 first:border-t-0 first:pt-0"><span class="w-1.5 h-1.5 rounded-full bg-[#111]"></span>${x}</li>`).join("")}
        </ul>
      </div>

      <div class="rounded-[24px] p-8 lg:p-10 bg-[#0A2F1D] text-white card-hover">
        <div class="flex items-center justify-between">
          <span class="chip chip-dark">BROWNFIELD</span>
          <span class="kbd" style="color:rgba(255,255,255,.55)">PATH B</span>
        </div>
        <h3 class="font-display text-[34px] mt-6">CRYPTON <span class="italic">Proxy</span></h3>
        <p class="mt-3 text-white/70 text-[15px]">Drop-in appliance for networks that can't rewrite the stack. Post-quantum without code changes.</p>
        <ul class="mt-8 space-y-2 text-[15px]">
          ${["Utilities","Factories","Ground Stations","Enterprise Networks","Existing Infrastructure"].map(x=>`<li class="flex items-center gap-3 border-t hairline-dark pt-2 first:border-t-0 first:pt-0"><span class="w-1.5 h-1.5 rounded-full bg-[#D2FF3C]"></span>${x}</li>`).join("")}
        </ul>
      </div>
    </div>

    <!-- Converge -->
    <div class="mt-10 grid grid-cols-[1fr_auto_1fr] items-center gap-6">
      <div class="h-px bg-black/20"></div>
      <div class="rounded-full bg-[#D2FF3C] text-[#111] px-6 py-3 font-mono text-[11px] tracking-[0.18em] uppercase">Quantum-Safe Communication</div>
      <div class="h-px bg-black/20"></div>
    </div>
  </section>

  <!-- SECTION 6: Deployments -->
  <section class="py-24 border-t hairline fade-up">
    <div class="flex items-end justify-between mb-10">
      <div>
        <div class="kbd kbd-dim">§ 06 — Supported Deployments</div>
        <h2 class="font-display text-[40px] sm:text-[52px] leading-[1.02] mt-6">Environments in production trial.</h2>
      </div>
    </div>
    <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
      ${[
        ["Satellite", `<svg viewBox="0 0 60 60" class="w-10 h-10" fill="none" stroke="currentColor" stroke-width="1"><rect x="26" y="26" width="8" height="8"/><rect x="10" y="20" width="12" height="20"/><rect x="38" y="20" width="12" height="20"/><path d="M30 10 v14 M20 8 l10 8 l10 -8" stroke-linecap="round"/></svg>`],
        ["Industrial IoT", `<svg viewBox="0 0 60 60" class="w-10 h-10" fill="none" stroke="currentColor" stroke-width="1"><rect x="8" y="8" width="16" height="16"/><rect x="36" y="8" width="16" height="16"/><rect x="8" y="36" width="16" height="16"/><rect x="36" y="36" width="16" height="16"/><path d="M24 16 h12 M24 44 h12 M16 24 v12 M44 24 v12"/></svg>`],
        ["Critical Infrastructure", `<svg viewBox="0 0 60 60" class="w-10 h-10" fill="none" stroke="currentColor" stroke-width="1"><path d="M6 50 L18 20 L30 50 L42 20 L54 50 M6 50 h48"/></svg>`],
        ["Defense", `<svg viewBox="0 0 60 60" class="w-10 h-10" fill="none" stroke="currentColor" stroke-width="1"><polygon points="30,6 52,20 52,40 30,54 8,40 8,20"/><path d="M30 6 v48 M8 20 L52 40 M52 20 L8 40"/></svg>`],
        ["Maritime", `<svg viewBox="0 0 60 60" class="w-10 h-10" fill="none" stroke="currentColor" stroke-width="1"><path d="M30 8 v34 M12 42 h36 l-4 8 h-28 z M30 14 l14 22 h-28 z"/></svg>`],
        ["Energy", `<svg viewBox="0 0 60 60" class="w-10 h-10" fill="none" stroke="currentColor" stroke-width="1"><path d="M32 6 L14 34 h14 L22 54 L46 26 h-14 z"/></svg>`],
        ["Smart Manufacturing", `<svg viewBox="0 0 60 60" class="w-10 h-10" fill="none" stroke="currentColor" stroke-width="1"><path d="M6 50 h48 M10 50 V30 l10 6 V26 l10 6 V22 l10 6 V50"/></svg>`],
        ["Ground Stations", `<svg viewBox="0 0 60 60" class="w-10 h-10" fill="none" stroke="currentColor" stroke-width="1"><path d="M8 50 L30 12 L52 50 z M18 50 v-8 h24 v8 M30 12 v-6"/></svg>`],
      ].map(([t,svg])=>`
        <div class="rounded-[20px] border hairline p-6 bg-white card-hover">
          <div class="text-[#111]">${svg}</div>
          <div class="mt-6 font-display text-[20px]">${t}</div>
          <div class="mt-1 kbd kbd-dim">Field trial</div>
        </div>`).join("")}
    </div>
  </section>

  <!-- SECTION 7: Waitlist -->
  <section id="waitlist" class="py-24 fade-up">
    <div class="rounded-[28px] bg-[#DCEFE6] p-8 lg:p-16">
      <div class="grid lg:grid-cols-12 gap-10">
        <div class="lg:col-span-6">
          <span class="chip bg-white">● Registration Open</span>
          <h2 class="font-display text-[44px] sm:text-[64px] leading-[1.02] mt-6">
            Protocol <span class="italic">validated.</span><br/>
            Pilot onboarding<br/>has begun.
          </h2>
          <p class="mt-6 max-w-[520px] text-black/70 text-[16px] leading-[1.65]">
            CRYPTON has completed protocol validation and embedded benchmarking. We're onboarding a limited cohort of organizations evaluating post-quantum migration across satellite, industrial, defense, and critical infrastructure environments.
          </p>
          <dl class="mt-10 grid grid-cols-3 gap-6 border-t hairline pt-6 max-w-[520px]">
            <div><dt class="kbd kbd-dim">First cohort</dt><dd class="font-display text-[22px] mt-1">Q3 · 2026</dd></div>
            <div><dt class="kbd kbd-dim">Cadence</dt><dd class="font-display text-[22px] mt-1">5 / week</dd></div>
            <div><dt class="kbd kbd-dim">Program</dt><dd class="font-display text-[22px] mt-1">Pilot</dd></div>
          </dl>
        </div>

        <form class="lg:col-span-6 bg-white rounded-[24px] p-8 lg:p-10" onsubmit="event.preventDefault(); this.querySelector('button[type=submit]').innerText='Reserved ✓';">
          <div class="kbd kbd-dim">Reserve your pilot spot</div>
          <div class="mt-4">
            <label class="kbd kbd-dim">Role</label>
            <div class="mt-2 flex flex-wrap gap-2" id="roles">
              ${["Network Architect","Infrastructure Engineer","CISO","Researcher","Systems Integrator","Defense Program"].map((r,i)=>`
                <button type="button" data-role class="role-btn ${i===0?'active':''} rounded-full border hairline px-3.5 py-1.5 text-[12px] font-medium">${r}</button>
              `).join("")}
            </div>
          </div>
          <div class="grid sm:grid-cols-2 gap-4 mt-6">
            <label class="block">
              <span class="kbd kbd-dim">Name</span>
              <input required type="text" class="mt-2 w-full border-b hairline bg-transparent py-2 outline-none focus:border-[#111]" placeholder="Ada Lovelace"/>
            </label>
            <label class="block">
              <span class="kbd kbd-dim">Company</span>
              <input required type="text" class="mt-2 w-full border-b hairline bg-transparent py-2 outline-none focus:border-[#111]" placeholder="Analytical Engines"/>
            </label>
            <label class="block sm:col-span-2">
              <span class="kbd kbd-dim">Business Email</span>
              <input required type="email" class="mt-2 w-full border-b hairline bg-transparent py-2 outline-none focus:border-[#111]" placeholder="ada@company.com"/>
            </label>
          </div>
          <button type="submit" class="btn-primary rounded-full px-6 py-3.5 mt-8 text-sm font-medium inline-flex items-center gap-2">Reserve Pilot Spot <span>→</span></button>
          <div class="mt-6 flex flex-wrap gap-4 kbd kbd-dim">
            <span>First cohort</span><span>·</span><span>5 organizations / week</span><span>·</span><span>Q3 2026</span>
          </div>
        </form>
      </div>
    </div>
  </section>
</main>

<!-- FOOTER -->
<footer class="border-t hairline mt-8">
  <div class="max-w-[1280px] mx-auto px-6 lg:px-10 py-16 grid lg:grid-cols-12 gap-10">
    <div class="lg:col-span-5">
      <div class="font-display text-[48px] leading-none">crypton<span class="text-[#D2FF3C]">.</span></div>
      <p class="mt-4 max-w-[380px] text-black/60 text-[15px]">The Post-Quantum Secure Communication Platform. Protocol and proxy. Engineered for infrastructure that has to work.</p>
    </div>
    <div class="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
      <div>
        <div class="kbd kbd-dim mb-4">Technology</div>
        <ul class="space-y-2 text-[14px]">
          <li><a href="#" class="hover:underline">Technical Whitepaper</a></li>
          <li><a href="#" class="hover:underline">Architecture</a></li>
          <li><a href="#" class="hover:underline">GitHub</a></li>
        </ul>
      </div>
      <div>
        <div class="kbd kbd-dim mb-4">Company</div>
        <ul class="space-y-2 text-[14px]">
          <li><a href="#" class="hover:underline">Documentation</a></li>
          <li><a href="#" class="hover:underline">Contact</a></li>
          <li><a href="#" class="hover:underline">Privacy</a></li>
        </ul>
      </div>
      <div>
        <div class="kbd kbd-dim mb-4">Status</div>
        <ul class="space-y-2 text-[14px]">
          <li class="flex items-center gap-2"><span class="dot"></span>Protocol v1.0</li>
          <li class="text-black/60">Bare-metal validated</li>
          <li class="text-black/60">Pilot cohort · Q3 2026</li>
        </ul>
      </div>
    </div>
  </div>
  <div class="border-t hairline">
    <div class="max-w-[1280px] mx-auto px-6 lg:px-10 py-6 flex flex-wrap justify-between kbd kbd-dim gap-4">
      <span>© CRYPTON Systems · All rights reserved</span>
      <span>Made for infrastructure that outlives us</span>
    </div>
  </div>
</footer>
`;

function Index() {
  useEffect(() => {
    // Fade-up observer
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.08 },
    );
    document.querySelectorAll(".fade-up").forEach((el) => io.observe(el));

    // Role selector
    const onClick = (ev: Event) => {
      const t = ev.target as HTMLElement;
      if (t.matches("[data-role]")) {
        document.querySelectorAll("[data-role]").forEach((b) => b.classList.remove("active"));
        t.classList.add("active");
      }
    };
    document.addEventListener("click", onClick);
    return () => {
      io.disconnect();
      document.removeEventListener("click", onClick);
    };
  }, []);

  return <div dangerouslySetInnerHTML={{ __html: HTML }} />;
}
