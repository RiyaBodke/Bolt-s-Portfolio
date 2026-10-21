<div align="center">

<img src="Frontend/public/bolt/bolt-happy.webp" width="190" alt="Bolt, a baby robot with a vintage-TV head, smiling">

# Bolt's Fix-It-All
### Good toys, brighter tomorrow.

A 1990s toy repair shop you can walk into.
Built for **haX Baby's First Website** · Track 2, an original character

**[Step inside →](https://YOUR-SITE.vercel.app)** &nbsp;·&nbsp; [Watch the tour](https://YOUR-VIDEO-LINK)

</div>

<!-- Add a screenshot or GIF here:  ![The storefront](Images/screenshot-storefront.png) -->

---

## Hello, I'm Bolt

> *"Hold still. This won't hurt. (Probably.)"*

I used to stand on the counter of a toy shop and wave. That was my whole job.

Then the shop closed, and I was left on the shelf, a bit broken. The toys that were left behind gave me
their spare parts: a spring from one, a gear from another. While they put me back together, I got nosy and
looked inside them. That's how I learned how everything works.

Now I run the shop. **They fixed me, so I fix everyone else.**

<table align="center">
  <tr>
    <td align="center"><img src="Frontend/public/bolt/bolt-surprised.webp" width="110" alt="Bolt surprised"><br><sub>a customer!</sub></td>
    <td align="center"><img src="Frontend/public/bolt/bolt-confused.webp" width="110" alt="Bolt confused"><br><sub>diagnosing</sub></td>
    <td align="center"><img src="Frontend/public/bolt/bolt-gigglish.webp" width="110" alt="Bolt giggling"><br><sub>"stop, that tickles"</sub></td>
    <td align="center"><img src="Frontend/public/bolt/bolt-sleepy.webp" width="110" alt="Bolt sleepy"><br><sub>resting his eyes</sub></td>
  </tr>
</table>

## Take a look around

The whole website is the shop. Walk in, and everything you see is something you can touch.

| In the shop | What happens |
|---|---|
| **The door** | Step through it and the bell rings |
| **The workbench** | Meet Bolt. Tap him, ring the bell, or leave him alone and he'll nod off |
| **The TV** | Plays Bolt's story, in four short scenes |
| **The repair rules** | Diagnose, repair, test, deliver |
| **The tool wall** | Six imaginary tools, and what Bolt thinks of each |
| **The repair bench** | Three toys, three tickets, three small stories |
| **The counter** | Leave a note in the guestbook |

<!-- Prune this table to what actually shipped. -->

## A sample repair ticket

```
REPAIR TICKET #001
─────────────────────────────────────────────
Toy        The Tin Carousel
Client     Mrs. Kulkarni, a grandmother
Problem    It stopped playing her wedding song
Diagnosis  One bent comb tooth, one gummed-up spring
Fix        Straightened, cleaned, one drop of oil
Test       Played three times. Passed on the second.
Status     DELIVERED ✔
─────────────────────────────────────────────
Bolt says: "That tooth was only having a difficult day."
```

Every project in the shop is one of Bolt's imaginary repairs, told like this.

## Under the hood

React + Vite · plain CSS · the Web Audio API (no audio files, and a mute button that is always there) ·
Fraunces, Fredoka and Caveat · deployed on Vercel

```bash
cd Frontend
npm install
npm run dev      # http://localhost:5173
npm run build
```

Needs Node 20.19+ or 22.12+. All of Bolt's words live in `Frontend/src/shopData.js`, so changing a
story doesn't touch the layout.

## Good to know

- 🧸 **The guestbook is a local demo.** Notes stay in your own browser and are never sent anywhere, and the page says so.
- 🎨 **Art:** Bolt and the shop scenes were generated with **[NAME THE AI TOOL]**, then cropped, cut out and optimised by me.
- 💻 **Code:** written with help from Claude (Anthropic), then tested and edited by me.
- 🔍 **There is one hidden Easter egg.** I won't say where.
- 📱 Built mobile-first, keyboard friendly, and it respects reduced-motion settings.

Everything here was made during the hackathon, 17 to 19 October 2026.

---

<div align="center">

Made by **Riya Bodke** · [GitHub](https://github.com/YOUR-USERNAME) · [LinkedIn](https://www.linkedin.com/in/YOUR-PROFILE)
<br><sub>MIT licensed. Come back whenever something needs fixing.</sub>

</div>
