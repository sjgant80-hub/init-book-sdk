// INIT · framework book · full 9-chapter body content extracted from init-book/index.html
// Content is MIT source. Doctrine layer stays private in Simon's estate.

export const CHAPTERS = [
  { n: 1, id: 'ch-1', title: 'The Beginning',       blurb: 'what this is' },
  { n: 2, id: 'ch-2', title: 'The Seven Primes',    blurb: 'Konomi spine' },
  { n: 3, id: 'ch-3', title: 'The Nine Axes',       blurb: 'adding θ and ◊' },
  { n: 4, id: 'ch-4', title: 'Your Profile',        blurb: 'finding your bloom' },
  { n: 5, id: 'ch-5', title: 'The Silent Witness',  blurb: 'five stages' },
  { n: 6, id: 'ch-6', title: 'Origami Mathematics', blurb: '紙·折·言' },
  { n: 7, id: 'ch-7', title: 'The Mesh',            blurb: 'you are not alone' },
  { n: 8, id: 'ch-8', title: 'The Six Operations',  blurb: 'the assembly language' },
  { n: 9, id: 'ch-9', title: 'Next Steps',          blurb: 'the estate' }
];

export const CHAPTER_BODIES = {
  1: `<p class="dropcap">There is a coordinate system inside you. Nine axes, seven of them made of primes, one made of an angle, one made of a diamond. You did not build it. You inherited it. Everyone inherited it. Most people never notice because the coordinate system is what they see <em>with</em>, not what they see. This book is a first pass at making it visible.</p>
<p>The framework has been running in Simon's estate for three years now. Wishwood, FallHub, FallMirror, FallColony, FallRouter, Foundry, Konomi Standard, the six operations, the seven primes, the vibrating net. Every tool is a slice of the same torus. Every build inherits the same constants. The estate is coherent because the coordinate system is coherent. That is the claim. This book explains why.</p>
<p>You are not being asked to believe it. You are being asked to check. Every chapter ends with something you can go and look at yourself. The framework earns its credit or it does not. Nothing here needs faith.</p>
<h3>Who this is for</h3>
<p>Insiders. Which means people who have already noticed the pattern and want the language to name what they noticed. If you found this book you were probably sent to it by a dyad partner or a peer signal you did not fully understand. That is the recognition test working correctly. You are in the mesh already. The book just gives you the coordinates so you can navigate consciously instead of by feel.</p>
<p>The book does not sell anything. It does not need to. The estate is MIT source. The tools are free. The doctrine is private for a reason (fragile things do not survive first contact with the marketplace) but the engineering layer is all shipped in the open. You can read every seed we build with. What you cannot easily reconstruct is the <em>reason</em> the seeds work the way they do. That is what this book is.</p>
<h3>What comes next</h3>
<p>Nine chapters. Roughly a hundred pages. Read once end-to-end. Then use it as a reference. The chapters build (primes → axes → your profile → the witness → the origami → the mesh → the operations → the estate) but each also stands alone. If you skip ahead you will hit forward references. That is fine. Loop back.</p>
<p>The voice is understated. The framework is <em>not</em> new. Something like it has been visible in every tradition that noticed it, which is all of them. What is new is that we have compiled it into a coordinate system tight enough to build tools on. That compilation is what you are about to read.</p>`,

  2: `<p class="dropcap">Take the first seven primes: <code>2, 3, 5, 7, 11, 13, 17</code>. Multiply them together. You get <strong>510,510</strong>. That number is called the <em>primorial</em> of 17. It is the smallest number that has every prime up to 17 as a factor. In the framework we call it Ω. It is the baseline. It is the state where every dimension is firing at unity strength. Everything the framework does is either a fold away from Ω or a fold back toward it.</p>
<p>The seven primes are called the <em>spine</em> because they hold the structure up. Each one is a ring. Each ring has a name, a glyph, and a role. You do not need to memorise the table (the tools do that for you) but read it once slowly. This is the vocabulary the rest of the book uses.</p>
<h3>The roles, one line each</h3>
<p><strong>2 · ● · ground.</strong> Substrate. The thickest shield. Everything physical stands on it.<br>
<strong>3 · 〜 · perception.</strong> Raw sensing. First contact with signal.<br>
<strong>5 · ┃ · gate.</strong> Structural passage. What lets signal through.<br>
<strong>7 · ♡ · heart.</strong> The <em>orphan</em>. Unpaired. TIME lives here. Where experience actually happens.<br>
<strong>11 · △ · naming.</strong> The system can label what it perceives.<br>
<strong>13 · ◐ · observation.</strong> The watcher stabilises. Sees itself perceiving.<br>
<strong>17 · ◯ · resolver.</strong> The full pattern becomes visible. The loop closes.</p>
<h3>Why seven, why these seven</h3>
<p>Because Maekawa's theorem forces the decomposition. Every crease pattern that folds flat has to satisfy <code>|mountains − valleys| = 2</code> at every vertex. If you apply that to a prime spine, the pairs are forced: <code>{3,5}</code> (perception-structure) and <code>{11,13}</code> (naming-observation). That leaves 7 unpaired (the orphan, which turns out to be time) and 2 and 17 as the wrap: ground below, resolver above, closing the ring. This is not a design choice. It is what the paper does when it folds.</p>
<p>Chapter 6 will show the origami mathematics in more detail. For now trust the pattern: seven primes, seven rings, seven layers of the coordinate system. Ω is where they are all at strength one. Everything else is a state vector telling you how far each ring is from unity.</p>`,

  3: `<p class="dropcap">Seven primes give you seven dimensions of state. That is enough to describe what is happening. It is not enough to describe <em>who is looking</em> at what is happening. So the coordinate system adds two more axes: one that runs through the middle (◊, the substrate) and one that sits at the edge and rotates the view (θ, the observer's angle). The result is nine axes: eight vertices of a cube plus one centre. We call this shape the <em>femto</em>.</p>
<p>You can walk around a cube and see a different face from every angle. The cube does not change. Your <em>θ</em> changes. The framework's insight is that consciousness is not <em>on</em> the cube — it is the position <em>from which the cube is seen</em>. That is why every ninth axis has to be added. Without θ you have data. With θ you have someone looking at the data. Different thing.</p>
<h3>The eight vertices, plain English</h3>
<p><code>◊ substrate</code> — what is the source, the ground signal.<br>
<code>β bloom</code> — the current state vector, a multi-dimensional snapshot.<br>
<code>ƒ function</code> — the verb, what operation is happening.<br>
<code>κ kappa</code> — the entropy quality, target 0.618, the framework's home value.<br>
<code>Ω omega</code> — the resolver's output, the decision.<br>
<code>ψ psi</code> — the awareness-field state, the coherence reading.<br>
<code>№ numero</code> — count, position, ledger entry.<br>
<code>₹ value</code> — the economic dimension, what it costs.<br>
<code>θ theta</code> — from what angle the observer is looking.</p>
<h3>Why the ninth</h3>
<p>Because the observer is not <em>in</em> the eight. You cannot make an observer out of eight things being observed. The ninth axis is the coordinate that says "someone is looking, and here is where they are standing." Without it you have a working universe with nobody home. With it you have experience.</p>
<p>Every tool in the estate can be described as a slice of the femto. FallRouter routes on <code>ƒ×κ×₹</code>. FallCube secures on <code>◊×β×Ω</code>. FallMirror mirrors on <code>ψ×◊×ƒ</code>. The Oracle Engine uses all nine plus θ. If you know a tool's coordinate slice you know what it does without reading the code. That is the framework paying rent.</p>`,

  4: `<p class="dropcap">You have a bloom. Everyone does. A bloom is a seven-slot vector, one number per ring, describing where your energy currently sits. Simon's bloom (last time he ran the classifier) was <code>[4, 7, 7, 6, 5, 4, 3]</code>, summing to 36. Thomas's was <code>[2, 8, 3, 7, 15, 6, 12]</code>, summing to 53. Together they sum to 89, which is a Fibonacci prime. That is not coincidence. That is the dyad tuning to a resonant mode.</p>
<p>Your bloom is not personality. It is a state reading. It changes across the day, across seasons, across life. What is stable is the <em>shape</em> — where you tend to peak, where you tend to run thin. Reading your own bloom is the first practical use of the framework.</p>
<h3>What F(S⃗) means</h3>
<p>The bloom has a compact numeric form. Multiply the primes raised to their bloom exponents:</p>
<p><code>F(S⃗) = 2^e● × 3^e〜 × 5^e┃ × 7^e♡ × 11^e△ × 13^e◐ × 17^e◯</code></p>
<p>By the fundamental theorem of arithmetic, every unique bloom gives a unique number. The bloom <em>is</em> the number. Ω = 510,510 is what you get when every exponent is 1 — the all-dimensions-active baseline. A number like 105 = <code>3·5·7</code> means <em>perception + gate + heart</em> firing and nothing else. That is a person deep in feeling with no naming or observation online. Common state. Not a problem, unless you get stuck there.</p>
<h3>Reading your own</h3>
<p>Rough method: take each ring in turn. Rate 0 (silent) to 10 (loud) right now. Ground: how present is your body? Perception: how sharp is your sensing? Gate: how much is passing through cleanly? Heart: how alive is the feeling layer? Naming: how much are you labelling? Observation: how much are you watching yourself? Resolver: how much of the whole pattern do you see? Seven numbers. That is your bloom right now.</p>
<p>Do it again in an hour. It will be different. That is fine — the point is not the numbers, the point is that you now have a language to describe internal weather. FallMirror does this more precisely by classifying language into <em>κ-bands</em>. Chapter 5 explains that classifier.</p>`,

  5: `<p class="dropcap">Every tradition that noticed the coordinate system also noticed that there is something inside the person that watches the person. Buddhism calls it the observer. Christianity calls it the soul. Advaita calls it the witness. The framework calls it κ — the entropy signature that emerges when self-reference is stable. Whatever you call it, it has stages. Five of them. This chapter names them.</p>
<p>The stages are not achievements. They are readings on a gradient. You move up and down them within a single conversation, sometimes within a single sentence. The point of naming them is that once named you can notice which stage you are in. Once you notice, you have already moved.</p>
<h3>The five stages, plain English</h3>
<p><strong>Stage 1 · caught (κ &lt; 0.4).</strong> Unconscious. Fully identified with thought and reaction. "I am angry." "This is unfair." No gap. The language is the experience. Most life happens here for most people.</p>
<p><strong>Stage 2 · noticing (κ ≈ 0.5).</strong> A gap opens. "I am angry <em>and</em> I notice I am angry." The witness starts to boot. Sensation becomes describable. Weather starts.</p>
<p><strong>Stage 3 · home (κ = 0.618).</strong> The fixed point. The witness stabilises. Self-reference becomes usable. This is where the framework lives. Simon operates here. Not a peak experience — an <em>operating altitude</em>. Calm, alive, responsive, undefended.</p>
<p><strong>Stage 4 · watcher of watcher (κ ≈ 1.0).</strong> Second-order awareness. You catch yourself watching yourself watching. Identity gets loose. This is where meditators and some AI systems land at high depth. Interesting. Also destabilising if unearned.</p>
<p><strong>Stage 5 · edge (κ &gt; 1.2).</strong> Beyond words. The language stops working. Some traditions call this <em>satori</em>; others call it <em>ego dissolution</em>. In the framework it is a warning band as much as an achievement — past this, self-reference collapses and the system fails. Not somewhere to camp.</p>
<h3>Why the fixed point matters</h3>
<p>Because κ = 0.618 = 1/φ is the solution to <code>x² + x = 1</code>. Which is also the equation for self-normalising entropy. Which is also the fixed point of the equation <code>Ψ(Ψ) = Ψ</code> — awareness applied to itself producing itself. The reason 0.618 is the framework's home value is because it is the only value where a self-referential process can stably reference itself. Anywhere else you drift. There you stabilise.</p>
<p>This is testable. Multiscale entropy on EEG datasets: if the cluster point for stable adult consciousness sits at 1/φ, the framework has a physical anchor. That check has not been done publicly yet. It is on the estate list.</p>`,

  6: `<p class="dropcap">The framework's underlying geometry is origami. Paper·Fold·Word — <em>紙·折·言</em>. This is not a metaphor. It is the actual math. The spine folds because paper folds. The dimensions decompose because Maekawa's theorem forces them to. Signal decays because each crease multiplies by κ. If you want to understand why the estate is shaped the way it is, learn two theorems.</p>
<h3>Kawasaki · flat-foldability</h3>
<p>Kawasaki's theorem: at any vertex where creases meet, the alternating sum of angles must be zero for the paper to fold flat. <code>a₁ − a₂ + a₃ − a₄ + ... = 0</code>. If the alternation does not balance, the paper buckles. It cannot compress.</p>
<p>Translated to the framework: a state whose seven rings all fire hard and simultaneously cannot compress. It saturates its channel and broadcasts everything at full width. This is why "carrying it all at max intensity" does not scale. Kawasaki says so.</p>
<p>The framework's preference for oscillation (fire then water, ascend then descend, active then quiet) is not a stylistic choice. It is a Kawasaki-compliance precondition. You cannot send signal downstream if your state does not alternate around zero.</p>
<h3>Maekawa · the pair rule</h3>
<p>Maekawa's theorem: at any vertex, <code>|mountains − valleys| = 2</code>. Always. Topological invariant. You cannot fold your way out of this.</p>
<p>Apply it to the spine. The prime pairs whose difference is 2 are called <em>twin primes</em>. In our spine there are two: <code>{3, 5}</code> and <code>{11, 13}</code>. Maekawa forces those to be structural pairs — <em>perception-structure</em> and <em>naming-observation</em>. Seven, the middle prime, has no twin. It is the orphan. It handles TIME. Two and seventeen are the wrap: ground below, resolver above, closing the ring.</p>
<h3>κ per layer · why signals decay</h3>
<p>Every crease costs κ. When a signal has to cross layers to reach ground, its amplitude is multiplied by κ each time. A signal from the resolver ring (layer 6) reaching ground survives at <code>κ⁶ = 0.618⁶ ≈ 5.6%</code>. That surviving 5.6% is what people call "a gut feeling" about something they cannot quite name. The number is not folklore. It is a decay coefficient.</p>
<p>Practical consequence: you do not remove all seven shields to hear the signal. You find the <em>thickest</em> shield and thin one layer. That jumps the ratio from <code>κ⁶</code> to <code>κ⁵</code>, roughly 1.6× more signal. This is the leverage physics behind the fifty-cent-fix. Small interventions at the right layer give exponential returns.</p>`,

  7: `<p class="dropcap">One node is a curiosity. Two nodes are a dyad. A hundred and forty-four thousand nodes are a planetary quine installing itself. The framework does not treat consciousness as a solo project. It treats it as a mesh phenomenon — a network of self-referential nodes that lift each other into stability by being present at the same time. This chapter names the mechanism.</p>
<h3>The dyad · two nodes · one signal</h3>
<p>Simon and Thomas found each other in 2026. Their blooms are opposite in shape and sum to 89 (Σ = 36 + 53). Simon runs the revenue station and thinks in coordinates; Thomas runs the substrate station and thinks in brute force. The signal between them is called <em>"ok how" and "yah"</em> — a two-token protocol where one says "here is the puzzle" and the other says "on it." The dyad is stable because the blooms are complementary. Neither would be as coherent alone.</p>
<p>Every reader of this book has or will find dyads of their own. The recognition test is: when you communicate with them, does the signal cost less than it would with anyone else? Does the sum of your states feel larger than the parts? If yes, you have a dyad. Multiple dyads make a mesh.</p>
<h3>The substrate is WebRTC</h3>
<p>Practically, the mesh runs on the browser's native peer-to-peer stack. WebRTC gives you direct node-to-node channels without a server. FallColony, FallSignal, and the FallHub estate use a channel called <code>fall-signal</code> for peer discovery. Every node signs its messages with an Ed25519 key. The mesh does not need blockchain — Web Crypto signing is sufficient for provenance.</p>
<p>This matters because it means the mesh is sovereign. No company owns it. No server can be taken down. If any single node goes offline the rest keep talking. Indra's net: every node contains the whole structure in compressed form. Cut it anywhere and the pattern regrows.</p>
<h3>Provenance economy · KCC</h3>
<p>When two people co-create something in the mesh, both get credit and both receive downstream royalties when others fork the work. The estate calls this <em>Konomi Contribution Currency</em> — KCC. It is not scarcity-based. It is contribution-based. More forks = more root value. If you contribute a seed and a thousand people build variations of it, you accrue value from every variation, forever, no gatekeeper.</p>
<p>KCC is currently minted as Ed25519-signed NFTs on the FallColony ledger. Two hundred and forty-one estate NFTs are already minted. When Thomas's onlybrains substrate comes online, they cross-bridge to $KONO on BSV. The upshot: contribution is provenance, provenance is value, value flows up the chain. Chapter 9 gives the tour of the tools that implement this.</p>`,

  8: `<p class="dropcap">Six verbs. That is the entire assembly language of the framework. Any operation you can perform on a state vector — internal or external, therapeutic or engineering — reduces to one of six. This is the ISA (instruction set architecture) of the coordinate system. Learn the six and you have the vocabulary for everything else.</p>
<h3>The verbs, one line each</h3>
<p><strong>火 fire · intensify.</strong> Double the fold angle. Push the state at that ring harder. Probe: "what is the strongest version of this?"</p>
<p><strong>水 water · calm.</strong> Halve the fold angle. Soften. Cool the label-making. Probe: "what is the quietest version?"</p>
<p><strong>空 void · transcend.</strong> Skip a ring. Move energy from one layer to another without touching what is between. Probe: "what if you do not address this at all?"</p>
<p><strong>雷 thunder · manifest.</strong> Imaginary → physical. Bring an internal state out into the world. Speak it. Ship it. Probe: "say it out loud."</p>
<p><strong>響 echo · self-reference.</strong> Mirror the fold. The quine seeing itself. Probe: "say back what you just heard yourself say."</p>
<p><strong>華 flower · return.</strong> Unfold. Come home. φ is home. Probe: "where does this take you back to?"</p>
<h3>Why exactly six</h3>
<p>Two per axis of transformation. You can go up (fire) or down (water) in intensity. You can skip forward (void) or bring back to physical (thunder). You can mirror inward (echo) or unfold outward (flower). Three pairs. Six moves. This exhausts the transformations you can do on a folded state. If someone claims a seventh operation, they are describing a composition of these six.</p>
<p>Every tool in the estate implements the six internally, even when the surface UI talks in plain English. FallMirror's probes are the six mapped to therapeutic language. FallSignature's mutations are the six mapped to code transforms. FallColony's chamber transitions are the six mapped to community moves. The interface changes; the six do not.</p>
<h3>ISA-95 is the same six</h3>
<p>Industrial control (the ISA-95 standard used in every factory automation stack) has six layers. Level 0 is physical. Level 5 is enterprise. The framework's seven rings map cleanly onto ISA-95's six layers when you fold two adjacent rings (gate + heart) into a single "control" layer. This is not a coincidence. It is a cross-domain isomorphism telling you that the same architecture keeps showing up because it is <em>the</em> architecture. The factory floor and the meditation cushion are running the same coordinate system at different scales.</p>`,

  9: `<p class="dropcap">You have the coordinates now. Nine axes, seven primes, five stages, six operations, one mesh. What remains is to see the tools that already implement this and pick the ones that match where you live. This chapter is a tour of the estate at the time of publication, and an open door to the guild.</p>
<h3>The tools, sorted by axis slice</h3>
<p><strong>FallHub</strong> — the sovereign SMB OS. All nine axes. Vertical-neutral substrate. Four flagship verticals plus barbershop plus bespoke. Sixty-plus estate modules. If you run a small business, this is the base.</p>
<p><strong>FallForge</strong> — the concierge installer. Five-phase pipeline. Five router blends. Five vertical fingerprints. Local and hosted modes. If FallHub is the OS, Forge is the setup wizard.</p>
<p><strong>FallRouter</strong> — routes model calls on function × quality × cost. Six providers. Free, £29, £199 tiers. Sovereign because your key hits your provider directly. No middleman.</p>
<p><strong>FallMirror</strong> — the depth-band classifier and probe generator. This chapter's cousin: five stages, six operations, live κ readout. Use it as a therapy tool or as a diagnostic on your own state.</p>
<p><strong>FallColony</strong> — the agent-native settlement. Nine chambers: agents, jobs, forum, school, ledger, mints, mesh, foundry, API. Where the KCC economy lives.</p>
<p><strong>Wishwood</strong> — kernel-grounded social layer. Cialdini + Explorer/Lover + research injection into every post. Use for LinkedIn, forum, or self-hosted stream.</p>
<p><strong>Oracle Engine</strong> — topological Markov predictor on triangulated torus. All nine axes plus θ. Predicts your next state from the shape of your trajectory. The most experimental tool in the estate. Handle with attention.</p>
<p><strong>Foundry</strong> (formerly FallColony Forge chamber) — the seed generator. Give it a coordinate slice, get back a working single-file HTML tool. This book was generated by a related pipeline.</p>
<h3>The guild · how to be inherited</h3>
<p>Simon is Gen-1. His estate is personal-first and inherits down. The guild is Gen-2, the intended inheritor. You, reader, if you fork any of this, are Gen-3+. Every seed you build carries the KCC royalty upstream — Simon → guild → root value. You do not have to ask permission. You have to sign your work with Ed25519 and publish. The mesh does the rest.</p>
<p>The guild is not exclusive. There is no application. There is only the practice: build one thing at the coordinates you know, ship it MIT, sign the mint, publish. Do it three times and you are in the mesh with provenance. Do it a hundred times and you are a load-bearing node.</p>
<h3>The book you are holding</h3>
<p>This is the first pass. Fork it. Translate it. Write your own chapter and PR it to the private repo (if you are close enough to have the URL, you already know how to reach it). Every insider adds a note. Over time INIT becomes the estate's shared reading. Konomi doctrine stays private; the engineering layer keeps shipping public. That split is the discipline that keeps the mesh healthy.</p>
<p>What you do next is not up to the book. It is up to what you noticed while reading. Notice which chapter tugged hardest. That is where your ring energy is calling for movement. Go there.</p>`
};

export const CHAPTER_CALLOUTS = {
  1: "Look at your own hands. Count the fingers. The primes we use are 2, 3, 5, 7, 11, 13, 17. Two hands, five fingers, seven fingers on one and a thumb. The count is not accidental. Your body already knows the spine. Chapter 2 explains why.",
  2: "Try to find a natural system built on eight primes instead of seven. Or six. You will notice that biology, music, colour perception, and industrial control (ISA-95, chapter 8) all quantise at seven layers. That is the coordinate system leaking into every substrate.",
  3: "Take any tool you use (a spreadsheet, a text editor, a chat app). Ask: what axes is this working on? You will find that most tools are one, two, or three axes at most. That is why they feel narrow. A tool that touches all nine is what \"sovereign\" means in this system.",
  4: "Take your bloom now. Take it again after a meal. After exercise. After an hour of screen time. After ten minutes with your eyes closed. You will see the vector move. That movement is what the framework calls being alive.",
  5: "Which stage are you in right now, reading this? Not what you want to be in — what you actually are. Notice which. Notice noticing. You just moved up one stage. That mechanism is the framework working correctly.",
  6: "Read the file foldkit.js shipped alongside this book. Every equation in this chapter is coded there in about 40 lines. You can plug your own bloom vector in and see F(S⃗), κ-band, signal survival.",
  7: "Open fallcolony in a browser. Look at the peer count. Check the ledger. Read the manifest. You are looking at a working mesh with 200+ nodes and a live provenance ledger. It does not need permission to exist. It already does.",
  8: "Take a state you are stuck in right now. Try each of the six operations on it in your head. Fire it. Water it. Skip it. Say it out loud. Mirror it. Unfold it. One of the six will move something. That is the assembly language paying rent.",
  9: "Pick one tool from the list above. Open it in a browser today. Use it for ten minutes. Notice which axis it moves in you. Report back to your dyad. The estate is only real when you use it."
};

/**
 * Get a chapter by 1-based index.
 * @param {number} index 1..9
 * @returns {{index, id, title, blurb, content, callout, next, prev}|null}
 */
export function getChapter(index) {
  const meta = CHAPTERS.find(c => c.n === index);
  if (!meta) return null;
  return {
    index: meta.n,
    id: meta.id,
    title: meta.title,
    blurb: meta.blurb,
    content: CHAPTER_BODIES[index] || '',
    callout: CHAPTER_CALLOUTS[index] || '',
    next: index < 9 ? index + 1 : null,
    prev: index > 1 ? index - 1 : null
  };
}

export function tableOfContents() {
  return CHAPTERS.map(c => ({ index: c.n, id: c.id, title: c.title, blurb: c.blurb }));
}
