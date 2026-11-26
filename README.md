# Udit Chaurasia, Advocate — Website

Criminal defence lawyer, District & Sessions Court, Meerut.

Built with **Nuxt 3 + TypeScript + Tailwind CSS v4**. Static site — GitHub Pages par free host hoti hai, koi server ya domain ki zarurat nahi.

## Pages

| Route | Content |
| --- | --- |
| `/` | Intro, practice areas, FAQs, chamber info |
| `/about` | Profile, approach, professional details |
| `/practice-areas` | Saare practice areas + document checklist |
| `/contact` | Phone, WhatsApp, email, map, timings |

## Local development

```bash
npm install
npm run dev      # http://localhost:3000
npm run generate # static build -> .output/public
npm run preview  # build ka local preview
```

## Content edit kahan karein

Saara personal data **`data/site.ts`** me hai — naam, phone, WhatsApp number, email, address, enrolment number, experience, practice areas aur FAQs. Sirf usi file me values badlo, poori site update ho jayegi.

Jo values abhi placeholder hain (deploy se pehle replace karein):

- `phone` — WhatsApp format me, country code ke saath, bina `+` (e.g. `919876543210`)
- `phoneDisplay` — screen par dikhne wala number
- `email`
- `address.line1` / `address.line2` / `mapQuery`
- `enrolment` — Bar Council enrolment number
- `experience`

Pages ke andar English text bhi hai (`pages/*.vue`) — chahe to Hindi/Hinglish mix rakh sakte hain.

## GitHub Pages deploy (free)

1. GitHub par naya repo banao, e.g. `advocate`. Public rakho.
2. Code push karo:

   ```bash
   git init
   git add .
   git commit -m "Initial site"
   git branch -M main
   git remote add origin https://github.com/<username>/advocate.git
   git push -u origin main
   ```

3. Repo → **Settings → Pages → Build and deployment → Source: GitHub Actions** select karo.
4. Push hone par `.github/workflows/deploy.yml` khud build aur deploy karega (Actions tab me progress dikhega).
5. Site URL: `https://<username>.github.io/advocate/`

Repo ka naam `<username>.github.io` ho to URL root ban jayega (`https://<username>.github.io/`) — workflow base path khud handle karta hai.

### Custom domain baad me

Domain kharido, repo → Settings → Pages → Custom domain me daalo, aur DNS me CNAME add karo. Code me kuch change nahi karna.

## Custom domain lagana (step by step)

1. Domain kharido (e.g. `uditchaurasia.in`) — kisi bhi registrar se. `.in` domain India me sasta rehta hai, `.com` option bhi hai.
2. Repo → **Settings → Secrets and variables → Actions → Variables tab → New repository variable**
   - Name: `CUSTOM_DOMAIN`
   - Value: `uditchaurasia.in` (bina `https://` aur bina trailing slash)
3. Registrar ke DNS panel me records add karo:

   | Type | Name | Value |
   | --- | --- | --- |
   | A | `@` | `185.199.108.153` |
   | A | `@` | `185.199.109.153` |
   | A | `@` | `185.199.110.153` |
   | A | `@` | `185.199.111.153` |
   | CNAME | `www` | `er84yaabhishek.github.io` |

   (Apex ke liye `ALIAS`/`ANAME` support ho to `@` → `er84yaabhishek.github.io` bhi chalega.)
4. Repo → **Settings → Pages → Custom domain** me domain daal kar Save karo. `Enforce HTTPS` tick kar do (certificate 5-30 min me aa jata hai).
5. `main` par koi bhi push karo — workflow khud base path root kar dega, `CNAME` file bhi bana dega, aur site domain par serve hone lagegi.

Domain change/downgrade karna ho to sirf `CUSTOM_DOMAIN` variable delete kar dena — site wapas `github.io` URL par chalne lagegi.

## Design notes

- Palette: ink navy, cream, brass — professional legal look
- Fonts: Fraunces (headings) + Inter (body), self-hosted via `@fontsource`
- Icons: `@lucide/vue`
- Mobile-first, keyboard accessible, `prefers-reduced-motion` respected

## Important — Bar Council compliance

Bar Council of India Rules (Rule 36) ke tahat advocate advertising/solicitation allowed nahi hai. Isliye site me:

- Koi testimonial, "best lawyer", "guaranteed bail", success-rate ya client results nahi hain
- Sirf professional profile, practice areas aur contact details hain
- Footer me disclaimer hai: informational only, not legal advice or solicitation

Naya content add karte waqt isi tone me rakhein. (Ye general note hai, legal advice nahi.)

## SEO

- Har page ka apna `<title>`, description aur canonical URL
- `Attorney` schema.org JSON-LD (`app.vue`)
- Prerendered HTML — content page load se pehle hi HTML me hota hai
- `robots.txt` included
