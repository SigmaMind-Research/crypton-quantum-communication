import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "CRYPTON. | Post-Quantum Communication" },
      {
        name: "description",
        content:
          "Post-quantum secure communication platform with zero packet fragmentation over existing infrastructure.",
      },
      { property: "og:type", content: "website" },
      { property: "og:title", content: "CRYPTON. | Post-Quantum Communication" },
      {
        property: "og:description",
        content:
          "Post-quantum secure communication platform with zero packet fragmentation over existing infrastructure.",
      },
      { property: "og:image", content: "/public.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "CRYPTON. | Post-Quantum Communication" },
      {
        name: "twitter:description",
        content:
          "Post-quantum secure communication platform with zero packet fragmentation over existing infrastructure.",
      },
      { name: "twitter:image", content: "/public.png" },
    ],
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
  <div class="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-10 h-16 flex items-center justify-between relative">
    <a href="#" class="font-display text-[22px] tracking-tight inline-flex items-center w-full md:w-auto">
      <img src="/logo.png" alt="Crypton logo" class="h-12 sm:h-14 md:h-16 w-auto" />
      <span class="ml-auto md:ml-0">CRYPTON<span class="text-[#D2FF3C]">.</span></span>
      <sub class="hidden md:inline ml-1 text-[10px] align-sub opacity-80">(krip-ton)</sub>
    </a>
    <div class="md:hidden absolute left-[58%] -translate-x-1/2 flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-[0.14em] text-[#111] pointer-events-none">
      <span class="dot"></span>
      <span>Protocol v1.0</span>
    </div>
    <div class="hidden md:flex items-center gap-6 text-[11px] font-mono uppercase tracking-[0.16em] text-[#111]">
      <span class="flex items-center gap-2"><span class="dot"></span>Protocol v1.0</span>
      <span class="h-3 w-px bg-black/15"></span>
      <span class="kbd-dim kbd">Bare-metal validated</span>
    </div>
    <a href="#waitlist" class="hidden md:inline-flex btn-primary rounded-full px-4 py-2 text-[12px] font-medium tracking-wide items-center gap-2">Join Waitlist <span aria-hidden>→</span></a>
  </div>
</header>

<main class="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-10">

  <!-- HERO -->
  <section class="pt-12 sm:pt-16 lg:pt-24 pb-14 sm:pb-20 lg:pb-28 grid lg:grid-cols-12 gap-8 lg:gap-14 items-end">
    <div class="lg:col-span-7 fade-up">
      <div class="kbd mb-8 flex items-center gap-3">
        Post-Quantum Secure Communication Platform
      </div>
      <h1 class="font-display text-[36px] sm:text-[56px] lg:text-[88px] leading-[0.98] text-[#111]">
        Zero packet<br/>fragmentation.<br/>
        <span class="italic text-black/70">Over any</span> <span class="italic lime-underline">infrastructure.</span>
      </h1>
      <p class="mt-6 sm:mt-8 max-w-[560px] text-[15px] sm:text-[17px] leading-[1.6] text-black/70">
        CRYPTON replaces legacy secure transport with a post-quantum communication protocol — and deploys seamlessly through a drop-in hardware proxy for existing infrastructure.
      </p>
      <div class="mt-8 sm:mt-10 flex flex-wrap items-center gap-2.5 sm:gap-3">
        <a href="#waitlist" class="btn-primary rounded-full px-5 sm:px-6 py-3 text-sm font-medium inline-flex items-center gap-2">Join Waitlist <span>→</span></a>
        <a href="#protocol" class="btn-ghost rounded-full px-5 sm:px-6 py-3 text-sm font-medium inline-flex items-center gap-2">Read Whitepaper</a>
      </div>
    </div>

    <!-- Editorial collage -->
    <div class="lg:col-span-5 fade-up">
      <div class="relative h-[430px] sm:h-[560px]">
        <!-- FIG 01 -->
        <figure class="absolute top-0 left-0 w-[62%] rounded-[20px] sm:rounded-[24px] border hairline bg-white p-3.5 sm:p-5 card-hover">
          <div class="flex items-center justify-between text-[10.5px] font-mono uppercase tracking-[0.18em] text-black/50">
            <span>SATCOM / L-BAND</span>
          </div>
          <svg viewBox="0 0 220 140" class="mt-2 sm:mt-3 w-full h-[110px] sm:h-[150px]" fill="none" stroke="#111" stroke-width="1">
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
          <figcaption class="mt-1.5 sm:mt-2 font-display italic text-[13px] sm:text-[15px]">Satellite Communications</figcaption>
        </figure>

        <!-- FIG 02 -->
        <figure class="absolute top-[32%] right-0 w-[54%] rounded-[20px] sm:rounded-[24px] bg-[#0A2F1D] text-white p-3.5 sm:p-5 card-hover">
          <div class="flex items-center justify-between text-[10.5px] font-mono uppercase tracking-[0.18em] text-white/60">
            <span>MODBUS / OPC-UA</span>
          </div>
          <svg viewBox="0 0 200 130" class="mt-2 sm:mt-3 w-full h-[95px] sm:h-[130px]" fill="none" stroke="#D2FF3C" stroke-width="1">
            <rect x="20" y="30" width="30" height="20" />
            <rect x="20" y="60" width="30" height="20" />
            <rect x="20" y="90" width="30" height="20" />
            <rect x="150" y="55" width="34" height="30" />
            <path d="M50 40 L150 68 M50 70 L150 70 M50 100 L150 72" stroke-dasharray="2 3"/>
            <circle cx="167" cy="70" r="3" fill="#D2FF3C"/>
          </svg>
          <figcaption class="mt-1.5 sm:mt-2 font-display italic text-[13px] sm:text-[15px] text-white">Industrial IoT</figcaption>
        </figure>

        <!-- FIG 03 -->
        <figure class="absolute bottom-[8%] left-[6%] w-[48%] rounded-[20px] sm:rounded-[24px] border hairline bg-[#DCEFE6] p-3.5 sm:p-5 card-hover">
          <div class="flex items-center justify-between text-[10.5px] font-mono uppercase tracking-[0.18em] text-black/55">
            <span>GRID / SCADA</span>
          </div>
          <svg viewBox="0 0 180 110" class="mt-2 sm:mt-3 w-full h-[84px] sm:h-[110px]" fill="none" stroke="#111" stroke-width="1">
            <path d="M20 90 L60 30 L100 90 L140 30 L170 90"/>
            <path d="M20 90 L170 90"/>
            <path d="M60 30 L60 20 M100 90 L100 20 M140 30 L140 20"/>
            <circle cx="60" cy="20" r="2" fill="#111"/>
            <circle cx="100" cy="20" r="2" fill="#111"/>
            <circle cx="140" cy="20" r="2" fill="#111"/>
          </svg>
          <figcaption class="mt-1.5 sm:mt-2 font-display italic text-[13px] sm:text-[15px]">Critical Infrastructure</figcaption>
        </figure>

        <!-- FIG 04 -->
        <figure class="absolute bottom-0 right-[4%] w-[42%] rounded-[20px] sm:rounded-[24px] border hairline bg-white p-3.5 sm:p-5 card-hover">
          <div class="flex items-center justify-between text-[10.5px] font-mono uppercase tracking-[0.18em] text-black/55">
            <span>MIL-STD</span>
          </div>
          <svg viewBox="0 0 160 100" class="mt-2 sm:mt-3 w-full h-[76px] sm:h-[100px]" fill="none" stroke="#111" stroke-width="1">
            <polygon points="80,15 140,50 80,85 20,50"/>
            <path d="M80 15 L80 85 M20 50 L140 50"/>
            <circle cx="80" cy="50" r="4" fill="#111"/>
          </svg>
          <figcaption class="mt-1.5 sm:mt-2 font-display italic text-[13px] sm:text-[15px]">Defense Networks</figcaption>
        </figure>
      </div>
    </div>
  </section>

  <!-- SECTION 1: The Problem -->
  <section class="py-16 sm:py-24 border-t hairline fade-up">
    <div class="grid lg:grid-cols-12 gap-8 sm:gap-10">
      <div class="lg:col-span-5">
        <div class="kbd kbd-dim">§ 01 — The Problem</div>
        <h2 class="font-display text-[32px] sm:text-[52px] leading-[1.02] mt-5 sm:mt-6">
          Quantum migration<br/>isn't only a<br/><span class="italic">cryptography</span> problem.
        </h2>
        <p class="mt-5 sm:mt-6 max-w-[440px] text-black/65 text-[15px] sm:text-[16px] leading-[1.6]">
          Naïve PQ migration multiplies certificate size, breaks MTU assumptions, and cascades through the transport layer. What begins as a key-exchange upgrade ends as an infrastructure overhaul.
        </p>
      </div>
      <div class="lg:col-span-7">
        <div class="rounded-[24px] border hairline p-4 sm:p-6 lg:p-10 bg-white">
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
              <li class="grid grid-cols-[36px_1fr] sm:grid-cols-[48px_1fr_auto] items-start sm:items-center py-3 sm:py-4 gap-y-1 border-t hairline first:border-t-0">
                <span class="kbd kbd-dim">${n}</span>
                <span class="font-display text-[18px] sm:text-[22px] leading-tight sm:leading-none">${t}</span>
                <span class="col-span-2 sm:col-span-1 sm:justify-self-end text-[10px] sm:text-[12px] font-mono uppercase tracking-[0.12em] sm:tracking-[0.14em] text-black/55">${d}</span>
              </li>`).join("")}
          </ol>
        </div>
      </div>
    </div>
  </section>

  <!-- SECTION 2: Meet CRYPTON Protocol -->
  <section id="protocol" class="py-16 sm:py-24 border-t hairline fade-up">
    <div class="flex flex-wrap items-end justify-between gap-4 sm:gap-6 mb-10 sm:mb-14">
      <div class="max-w-[620px]">
        <div class="kbd kbd-dim">§ 02 — Core Technology</div>
        <h2 class="font-display text-[32px] sm:text-[56px] leading-[1.02] mt-5 sm:mt-6">
          Meet <span class="italic">CRYPTON</span> Protocol.
        </h2>
        <p class="mt-5 sm:mt-6 text-black/70 text-[15px] sm:text-[17px] leading-[1.6]">
          A post-quantum secure transport protocol built from the ground up to replace TLS in constrained networks. Purpose-designed for satellites, embedded devices, and industrial links where every byte and round-trip matters.
        </p>
      </div>
      <span class="chip">The core innovation</span>
    </div>

    <div class="grid lg:grid-cols-12 gap-8">
      <!-- Stack diagram -->
      <div class="lg:col-span-5 rounded-[24px] bg-[#DCEFE6] p-4 sm:p-6 lg:p-10">
        <div class="kbd kbd-dim mb-6">Stack position</div>
        <div class="space-y-3">
          ${[
            ["Applications","HTTP · MQTT · CoAP · Custom"],
            ["CRYPTON Protocol","Post-quantum secure transport"],
            ["TCP / UDP","Reliable / datagram"],
            ["Network","IP · L2 links"],
          ].map(([t,d],i)=>`
            <div class="rounded-2xl bg-white p-3.5 sm:p-4 flex items-center justify-between ${i===1?'ring-2 ring-[#0A2F1D]':''}">
              <div>
                <div class="font-display text-[17px] sm:text-[19px] leading-tight">${t}</div>
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
          <div class="rounded-[20px] border hairline p-4 sm:p-6 bg-white card-hover">
            <div class="flex items-center justify-between">
              <span class="kbd kbd-dim">FEAT / ${String(i+1).padStart(2,'0')}</span>
              <span class="w-2 h-2 rounded-full bg-[#D2FF3C]"></span>
            </div>
            <div class="font-display text-[20px] sm:text-[22px] mt-3 sm:mt-4">${t}</div>
            <p class="mt-2 text-[13px] sm:text-[14px] text-black/65 leading-relaxed">${d}</p>
          </div>`).join("")}
      </div>
    </div>
  </section>

  <!-- SECTION 3: Benchmarks -->
  <section class="py-16 sm:py-24 border-t hairline fade-up">
    <div class="flex flex-wrap items-end justify-between gap-4 mb-10">
      <div>
        <div class="kbd kbd-dim">§ 03 — Benchmarks</div>
        <h2 class="font-display text-[32px] sm:text-[52px] leading-[1.02] mt-5 sm:mt-6">The numbers.</h2>
      </div>
      <div class="flex items-center gap-2">
        <button type="button" data-bench-tab data-target="esp32" class="role-btn active rounded-full border hairline px-3.5 py-1.5 text-[12px] font-medium">ESP32</button>
        <button type="button" data-bench-tab data-target="desktop" class="role-btn rounded-full border hairline px-3.5 py-1.5 text-[12px] font-medium">Desktop</button>
        <span class="chip hidden md:inline-block">Measured, not modeled</span>
      </div>
    </div>

    <div data-bench-panel="esp32" class="rounded-[24px] bg-[#0A2F1D] text-white p-6 lg:p-10">
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 divide-y sm:divide-y-0 sm:divide-x-0 lg:divide-x divide-white/10">
        ${[
          ["1","RTT","Handshake"],
          ["120 KB","","Memory footprint"],
          ["1.5 KB","","Compact handshake"],
          ["1M+","","Validated runs"],
          ["ESP32","","Bare-metal tested"],
        ].map(([n,u,l])=>`
          <div class="p-5 lg:p-7">
            <div class="kbd" style="color:rgba(255,255,255,.55)">${l}</div>
            <div class="font-display text-[42px] lg:text-[56px] leading-none mt-3">${n}<span class="text-[#D2FF3C]">${u?" "+u:""}</span></div>
          </div>`).join("")}
      </div>
    </div>

    <div data-bench-panel="desktop" class="hidden rounded-[24px] bg-[#0A2F1D] text-white p-6 lg:p-10">
      <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4">
        ${[
          ["2.243 ms","Avg handshake"],
          ["3.213 / 3.828 ms","p95 / p99"],
          ["783.6 B","Avg ServerHello"],
          ["0%","Failures"],
        ].map(([n,l])=>`
          <div class="rounded-2xl border border-white/15 p-4 lg:p-5">
            <div class="kbd" style="color:rgba(255,255,255,.55)">${l}</div>
            <div class="font-display text-[34px] lg:text-[42px] leading-none mt-3">${n}</div>
          </div>`).join("")}
      </div>
      <div class="mt-6 rounded-2xl bg-white/5 border border-white/15 p-4 lg:p-5">
        <div class="kbd" style="color:rgba(255,255,255,.65)">vs TLS 1.3 + PQC (X25519MLKEM768)</div>
        <div class="mt-3 grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
          ${[
            ["-81.59%","Avg handshake time"],
            ["-38.54%","ServerHello size"],
            ["-72.84%","p95 latency"],
            ["-75.06%","p99 latency"],
          ].map(([v,l])=>`
            <div class="rounded-xl border border-white/10 p-3">
              <div class="font-display text-[28px] leading-none text-[#D2FF3C]">${v}</div>
              <div class="text-[12px] text-white/70 mt-1">${l}</div>
            </div>
          `).join("")}
        </div>
        <p class="mt-4 text-[12px] text-white/65">Desktop run profile: Falcon-512, 1000 runs (1 full + 999 resumed), Jul 1 benchmark artifacts.</p>
      </div>
    </div>
  </section>

  <!-- SECTION 4: Software + Hardware Proxy -->
  <section class="py-16 sm:py-24 border-t hairline fade-up">
    <div class="kbd kbd-dim">§ 04 — Deployment</div>
    <h2 class="font-display text-[32px] sm:text-[56px] leading-[1.02] mt-5 sm:mt-6">
      One proxy.<br/>Two deployment<br/><span class="italic">forms.</span>
    </h2>
    <p class="mt-5 max-w-[700px] text-black/70 text-[15px] sm:text-[17px] leading-[1.6]">
      Choose a software proxy for flexible host and cloud deployments, or a dedicated hardware proxy for predictable line-rate protection at the network edge.
    </p>

    <div class="mt-12 space-y-8 sm:space-y-10">
      <!-- Software proxy row -->
      <div class="grid lg:grid-cols-12 gap-6 lg:gap-10 items-center">
        <div class="lg:col-span-5 rounded-[24px] border hairline bg-white p-5 sm:p-8 lg:p-10">
          <div class="flex items-center justify-between">
            <span class="chip">SOFTWARE</span>
            <span class="kbd kbd-dim">HOST · CLOUD · CONTAINER</span>
          </div>
          <h3 class="font-display text-[30px] sm:text-[40px] leading-tight mt-5">CRYPTON <span class="italic">Software Proxy</span></h3>
          <p class="mt-4 text-black/65 text-[15px] leading-relaxed">
            Run the proxy as a Linux daemon, VM, or container. Protect existing applications without changing the application layer.
          </p>
          <div class="mt-6 grid sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3 gap-2 text-[12px] text-black/65">
            <div class="rounded-xl border hairline p-3">Linux daemon</div>
            <div class="rounded-xl border hairline p-3">Container ready</div>
            <div class="rounded-xl border hairline p-3">No app rewrite</div>
          </div>
        </div>
        <figure class="lg:col-span-7 rounded-[24px] bg-[#0A2F1D] p-4 sm:p-6 lg:p-8">
          <img src="/crypton-proxy.png" alt="Crypton software proxy architecture" class="w-full h-auto max-h-[360px] object-contain mx-auto rounded-2xl border border-white/15" />
        </figure>
      </div>

      <!-- Hardware proxy row -->
      <div class="grid lg:grid-cols-12 gap-6 lg:gap-10 items-center">
        <div class="lg:col-span-5 rounded-[24px] bg-[#0A2F1D] text-white p-5 sm:p-8 lg:p-10">
          <div class="flex items-center justify-between">
            <span class="chip chip-dark">HARDWARE</span>
            <span class="kbd" style="color:rgba(255,255,255,.55)">1U EDGE APPLIANCE</span>
          </div>
          <h3 class="font-display text-[30px] sm:text-[40px] leading-tight mt-5">CRYPTON <span class="italic">Hardware Proxy</span></h3>
          <p class="mt-4 text-white/70 text-[15px] leading-relaxed">
            A dedicated 1U appliance for predictable line-rate protection at the network edge, with no changes to existing software or applications.
          </p>
          <div class="mt-6 space-y-2 text-[13px] text-white/70">
            ${["Drop-in brownfield deployment","Dedicated line-rate processing","Front and rear service access"].map(x=>`<div class="flex items-center gap-3 border-t hairline-dark pt-2"><span class="w-1.5 h-1.5 rounded-full bg-[#D2FF3C]"></span>${x}</div>`).join("")}
          </div>
        </div>
        <figure class="lg:col-span-7 rounded-[24px] bg-[#DCEFE6] p-4 sm:p-6 lg:p-8">
          <img src="/full.png" alt="Crypton hardware proxy full view" class="w-full h-auto max-h-[360px] object-contain mx-auto rounded-2xl" />
        </figure>
      </div>

      <!-- Hardware front and rear views -->
      <div class="grid lg:grid-cols-12 gap-6 lg:gap-10 items-start">
        <div class="lg:col-span-5">
          <div class="kbd kbd-dim">Hardware views</div>
          <p class="mt-3 text-black/60 text-[14px] leading-relaxed max-w-[360px]">Inspect the appliance front panel and rear I/O, power, and management interfaces.</p>
        </div>
        <div class="lg:col-span-7 grid sm:grid-cols-2 gap-4">
          <figure class="rounded-[24px] bg-[#DCEFE6] p-4 sm:p-5">
            <div class="kbd kbd-dim mb-4">FRONT VIEW</div>
            <img src="/front.png" alt="Crypton hardware proxy front view" class="w-full h-auto rounded-lg" />
          </figure>
          <figure class="rounded-[24px] border hairline bg-white p-4 sm:p-5">
            <div class="kbd kbd-dim mb-4">REAR VIEW · I/O · POWER · MGMT</div>
            <img src="/rear.png" alt="Crypton hardware proxy rear view" class="w-full h-auto rounded-lg" />
          </figure>
        </div>
      </div>
    </div>
  </section>

  <!-- SECTION 5: Migration paths -->
  <section class="py-16 sm:py-24 border-t hairline fade-up">
    <div class="max-w-[720px]">
      <div class="kbd kbd-dim">§ 05 — Migration Path</div>
      <h2 class="font-display text-[32px] sm:text-[56px] leading-[1.02] mt-5 sm:mt-6">
        Choose your <span class="italic">migration path.</span>
      </h2>
      <p class="mt-5 sm:mt-6 text-black/65 text-[15px] sm:text-[16px] leading-[1.6] max-w-[560px]">
        Three products, one platform. Protocol, proxy, and open-source migration intelligence for end-to-end post-quantum adoption.
      </p>
    </div>

    <div class="mt-12 grid lg:grid-cols-3 gap-6">
      <div class="rounded-[24px] p-5 sm:p-8 lg:p-10 bg-white border hairline card-hover">
        <div class="flex items-center justify-between">
          <span class="chip">GREENFIELD</span>
          <span class="kbd kbd-dim">PATH A</span>
        </div>
        <h3 class="font-display text-[30px] sm:text-[34px] mt-5 sm:mt-6">Native <span class="italic">CRYPTON Protocol</span></h3>
        <p class="mt-3 text-black/65 text-[15px]">Embed the protocol directly into new products and platforms. Maximum efficiency, smallest footprint.</p>
        <ul class="mt-8 space-y-2 text-[15px]">
          ${["Satellite OEMs","IoT Devices","Embedded Systems","Defense Platforms","New Infrastructure"].map(x=>`<li class="flex items-center gap-3 border-t hairline pt-2 first:border-t-0 first:pt-0"><span class="w-1.5 h-1.5 rounded-full bg-[#111]"></span>${x}</li>`).join("")}
        </ul>
      </div>

      <div class="rounded-[24px] p-5 sm:p-8 lg:p-10 bg-[#0A2F1D] text-white card-hover">
        <div class="flex items-center justify-between">
          <span class="chip chip-dark">BROWNFIELD</span>
          <span class="kbd" style="color:rgba(255,255,255,.55)">PATH B</span>
        </div>
        <h3 class="font-display text-[30px] sm:text-[34px] mt-5 sm:mt-6">CRYPTON <span class="italic">Proxy</span></h3>
        <p class="mt-3 text-white/70 text-[15px]">Two deployment forms for brownfield networks: software flexibility or dedicated hardware at the edge.</p>
        <div class="mt-8 grid sm:grid-cols-2 gap-3">
          <div class="rounded-2xl border border-white/15 p-4">
            <div class="kbd" style="color:rgba(255,255,255,.55)">SOFTWARE</div>
            <div class="font-display text-[20px] mt-2">Software Proxy</div>
            <div class="text-[12px] text-white/65 mt-1">Host, VM, or container deployment.</div>
          </div>
          <div class="rounded-2xl border border-white/15 p-4">
            <div class="kbd" style="color:rgba(255,255,255,.55)">HARDWARE</div>
            <div class="font-display text-[20px] mt-2">Hardware Proxy</div>
            <div class="text-[12px] text-white/65 mt-1">Dedicated 1U line-rate appliance.</div>
          </div>
        </div>
        <ul class="mt-6 space-y-2 text-[15px]">
          ${["Utilities","Factories","Ground Stations","Enterprise Networks","Existing Infrastructure"].map(x=>`<li class="flex items-center gap-3 border-t hairline-dark pt-2 first:border-t-0 first:pt-0"><span class="w-1.5 h-1.5 rounded-full bg-[#D2FF3C]"></span>${x}</li>`).join("")}
        </ul>
      </div>

      <div class="rounded-[24px] p-5 sm:p-8 lg:p-10 bg-[#F6F8FA] border hairline card-hover">
        <div class="flex items-center justify-between">
          <span class="chip">OPEN SOURCE</span>
          <span class="kbd kbd-dim">PRODUCT C</span>
        </div>
        <h3 class="font-display text-[30px] sm:text-[34px] mt-5 sm:mt-6">Crypton <span class="italic">Sweep</span></h3>
        <p class="mt-3 text-black/65 text-[15px]">Open-source network cipher scanner and post-quantum migration intelligence tool for cryptographic exposure mapping.</p>
        <ul class="mt-8 space-y-2 text-[15px]">
          ${[
            "Discovers reachable services and cryptographic exposure",
            "Imports/exports CycloneDX SBOM/CBOM inventories",
            "Builds risk findings, migration priorities, and knowledge graphs",
            "Generates self-contained HTML reports",
          ].map(x=>`<li class="flex items-center gap-3 border-t hairline pt-2 first:border-t-0 first:pt-0"><span class="w-1.5 h-1.5 rounded-full bg-[#111]"></span>${x}</li>`).join("")}
        </ul>
        <div class="mt-8 flex flex-wrap gap-3">
          <a href="https://github.com/Gulshan-gaur/crypton-sweep" target="_blank" rel="noreferrer" class="btn-ghost rounded-full px-4 py-2 text-[12px] font-medium tracking-wide inline-flex items-center gap-2">GitHub <span aria-hidden>↗</span></a>
          <a href="https://crates.io/crates/crypton-sweep" target="_blank" rel="noreferrer" class="btn-ghost rounded-full px-4 py-2 text-[12px] font-medium tracking-wide inline-flex items-center gap-2">crates.io <span aria-hidden>↗</span></a>
        </div>
      </div>
    </div>

    <!-- Converge -->
    <div class="mt-10 grid grid-cols-1 sm:grid-cols-[1fr_auto_1fr] items-center gap-4 sm:gap-6">
      <div class="hidden sm:block h-px bg-black/20"></div>
      <div class="rounded-full bg-[#D2FF3C] text-[#111] px-4 sm:px-6 py-3 font-mono text-[10px] sm:text-[11px] tracking-[0.14em] sm:tracking-[0.18em] uppercase text-center">Quantum-Safe Communication</div>
      <div class="hidden sm:block h-px bg-black/20"></div>
    </div>
  </section>

  <!-- SECTION 6: Deployments -->
  <section class="py-16 sm:py-24 border-t hairline fade-up">
    <div class="flex items-end justify-between mb-10">
      <div>
        <div class="kbd kbd-dim">§ 06 — Supported Deployments</div>
        <h2 class="font-display text-[32px] sm:text-[52px] leading-[1.02] mt-5 sm:mt-6">Environments in production trial.</h2>
      </div>
    </div>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
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
        <div class="rounded-[20px] border hairline p-4 sm:p-6 bg-white card-hover">
          <div class="text-[#111]">${svg}</div>
          <div class="mt-4 sm:mt-6 font-display text-[18px] sm:text-[20px]">${t}</div>
          <div class="mt-1 kbd kbd-dim">Field trial</div>
        </div>`).join("")}
    </div>
  </section>

  <!-- SECTION 7: Waitlist -->
  <section id="waitlist" class="py-16 sm:py-24 fade-up">
    <div class="rounded-[28px] bg-[#DCEFE6] p-4 sm:p-8 lg:p-16">
      <div class="grid lg:grid-cols-12 gap-8 sm:gap-10">
        <div class="lg:col-span-6">
          <span class="chip bg-white">● Registration Open</span>
          <h2 class="font-display text-[34px] sm:text-[64px] leading-[1.02] mt-5 sm:mt-6">
            Protocol <span class="italic">validated.</span><br/>
            Pilot onboarding<br/>has begun.
          </h2>
          <p class="mt-5 sm:mt-6 max-w-[520px] text-black/70 text-[15px] sm:text-[16px] leading-[1.65]">
            CRYPTON has completed protocol validation and embedded benchmarking. We're onboarding a limited cohort of organizations evaluating post-quantum migration across satellite, industrial, defense, and critical infrastructure environments.
          </p>
          <!-- <dl class="mt-10 grid grid-cols-3 gap-6 border-t hairline pt-6 max-w-[520px]">
            <div><dt class="kbd kbd-dim">First cohort</dt><dd class="font-display text-[22px] mt-1">Q3 · 2026</dd></div>
            <div><dt class="kbd kbd-dim">Cadence</dt><dd class="font-display text-[22px] mt-1">5 / week</dd></div>
            <div><dt class="kbd kbd-dim">Program</dt><dd class="font-display text-[22px] mt-1">Pilot</dd></div>
          </dl> -->
        </div>

        <form id="pilot-form" class="lg:col-span-6 bg-white rounded-[24px] p-4 sm:p-8 lg:p-10">
          <div class="kbd kbd-dim">Reserve your pilot spot</div>
          <div class="mt-4">
            <label class="kbd kbd-dim">Role</label>
            <div class="mt-2 flex flex-wrap gap-2" id="roles">
              ${["Network Architect","Infrastructure Engineer","CISO","Researcher","Systems Integrator","Defense Program","Other"].map((r,i)=>`
                <button type="button" data-role class="role-btn ${i===0?'active':''} rounded-full border hairline px-3.5 py-1.5 text-[12px] font-medium">${r}</button>
              `).join("")}
            </div>
            <input type="hidden" name="role" id="role-value" value="Network Architect" />
            <label id="role-other-wrap" class="hidden mt-4 block">
              <span class="kbd kbd-dim">Other role</span>
              <input id="role-other-input" name="role_other" type="text" class="mt-2 w-full border-b hairline bg-transparent py-2 outline-none focus:border-[#111]" placeholder="Your role"/>
            </label>
          </div>
          <div class="grid sm:grid-cols-2 gap-4 mt-6">
            <label class="block">
              <span class="kbd kbd-dim">Name</span>
              <input required name="name" type="text" class="mt-2 w-full border-b hairline bg-transparent py-2 outline-none focus:border-[#111]" placeholder="Ada Lovelace"/>
            </label>
            <label class="block">
              <span class="kbd kbd-dim">Company</span>
              <input required name="company" type="text" class="mt-2 w-full border-b hairline bg-transparent py-2 outline-none focus:border-[#111]" placeholder="Analytical Engines"/>
            </label>
            <label class="block sm:col-span-2">
              <span class="kbd kbd-dim">Business Email</span>
              <input required name="email" type="email" class="mt-2 w-full border-b hairline bg-transparent py-2 outline-none focus:border-[#111]" placeholder="ada@company.com"/>
            </label>
          </div>
          <button type="submit" class="btn-primary rounded-full px-6 py-3.5 mt-8 text-sm font-medium inline-flex items-center gap-2">Reserve Pilot Spot <span>→</span></button>
          <div id="pilot-form-status" class="mt-3 text-[13px] text-black/60"></div>
          <div class="mt-6 flex flex-wrap gap-4 kbd kbd-dim">
          </div>
        </form>
      </div>
    </div>
  </section>
</main>

<!-- FOOTER -->
<footer class="border-t hairline mt-8">
  <div class="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-10 py-12 sm:py-16 grid lg:grid-cols-12 gap-8 sm:gap-10">
    <div class="lg:col-span-5">
      <div class="font-display text-[38px] sm:text-[48px] leading-none">CRYPTON<span class="text-[#D2FF3C]">.</span></div>
      <p class="mt-4 max-w-[380px] text-black/60 text-[15px]">The Post-Quantum Secure Communication Platform. Protocol and proxy. Engineered for infrastructure that has to work.</p>
    </div>
    <div class="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
      <div>
        <div class="kbd kbd-dim mb-4">Technology</div>
        <ul class="space-y-2 text-[14px]">
          <li><a href="#" class="hover:underline">Architecture</a></li>
          <li><a href="https://github.com/Gulshan-gaur/crypton-sweep" target="_blank" rel="noreferrer" class="hover:underline">GitHub</a></li>
        </ul>
      </div>
      <div>
        <div class="kbd kbd-dim mb-4">Company</div>
        <ul class="space-y-2 text-[14px]">
          <li><a href="#" class="hover:underline">Documentation</a></li>
          <li><a href="mailto:support-crypton@sigmamind.xyz" class="hover:underline">Support</a></li>
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
    <div class="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-10 py-6 flex flex-wrap justify-between kbd kbd-dim gap-4">
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
    const form = document.getElementById("pilot-form") as HTMLFormElement | null;
    const roleValue = document.getElementById("role-value") as HTMLInputElement | null;
    const roleOtherWrap = document.getElementById("role-other-wrap") as HTMLElement | null;
    const roleOtherInput = document.getElementById("role-other-input") as HTMLInputElement | null;
    const statusEl = document.getElementById("pilot-form-status") as HTMLElement | null;
    const submitBtn = form?.querySelector('button[type="submit"]') as HTMLButtonElement | null;

    const setRole = (role: string) => {
      if (roleValue) roleValue.value = role;
      const isOther = role === "Other";
      if (roleOtherWrap) roleOtherWrap.classList.toggle("hidden", !isOther);
      if (roleOtherInput) {
        roleOtherInput.required = isOther;
        if (!isOther) roleOtherInput.value = "";
      }
    };

    const activeRoleBtn = document.querySelector("[data-role].active") as HTMLButtonElement | null;
    if (activeRoleBtn) setRole(activeRoleBtn.textContent?.trim() ?? "Network Architect");

    const onClick = (ev: Event) => {
      const t = ev.target as HTMLElement;
      const roleBtn = t.closest("[data-role]") as HTMLButtonElement | null;
      if (roleBtn) {
        document.querySelectorAll("[data-role]").forEach((b) => b.classList.remove("active"));
        roleBtn.classList.add("active");
        setRole(roleBtn.textContent?.trim() ?? "Network Architect");
      }
      const benchBtn = t.closest("[data-bench-tab]") as HTMLElement | null;
      if (benchBtn) {
        const target = benchBtn.getAttribute("data-target");
        document.querySelectorAll("[data-bench-tab]").forEach((b) => b.classList.remove("active"));
        benchBtn.classList.add("active");
        document.querySelectorAll("[data-bench-panel]").forEach((p) => p.classList.add("hidden"));
        if (target) {
          document.querySelector(`[data-bench-panel="${target}"]`)?.classList.remove("hidden");
        }
      }
    };

    const onSubmit = async (ev: Event) => {
      ev.preventDefault();
      if (!form || !submitBtn || !statusEl || !roleValue) return;

      const formData = new FormData(form);
      const name = String(formData.get("name") ?? "").trim();
      const company = String(formData.get("company") ?? "").trim();
      const email = String(formData.get("email") ?? "").trim();
      const selectedRole = roleValue.value.trim();
      const otherRole = roleOtherInput?.value.trim() ?? "";
      const role = selectedRole === "Other" ? otherRole : selectedRole;

      if (!role) {
        statusEl.textContent = "Please enter your role.";
        statusEl.className = "mt-3 text-[13px] text-red-600";
        return;
      }
      submitBtn.disabled = true;
      submitBtn.innerText = "Submitting...";
      statusEl.textContent = "";

      try {
        const payload = {
          name,
          company,
          email,
          role,
          submittedAt: new Date().toISOString(),
          source: window.location.href,
        };

        const response = await fetch("/api/pilot-reserve", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });

        if (!response.ok) throw new Error(`Request failed: ${response.status}`);

        form.reset();
        document.querySelectorAll("[data-role]").forEach((b) => b.classList.remove("active"));
        const firstRole = document.querySelector("[data-role]") as HTMLButtonElement | null;
        if (firstRole) {
          firstRole.classList.add("active");
          setRole(firstRole.textContent?.trim() ?? "Network Architect");
        }
        submitBtn.innerText = "Reserved ✓";
        statusEl.textContent = "Thanks. Your pilot request was submitted.";
        statusEl.className = "mt-3 text-[13px] text-emerald-700";
      } catch {
        submitBtn.innerText = "Reserve Pilot Spot";
        statusEl.textContent = "Submission failed. Please try again.";
        statusEl.className = "mt-3 text-[13px] text-red-600";
      } finally {
        submitBtn.disabled = false;
      }
    };

    document.addEventListener("click", onClick);
    form?.addEventListener("submit", onSubmit);
    return () => {
      io.disconnect();
      document.removeEventListener("click", onClick);
      form?.removeEventListener("submit", onSubmit);
    };
  }, []);

  return <div dangerouslySetInnerHTML={{ __html: HTML }} />;
}
