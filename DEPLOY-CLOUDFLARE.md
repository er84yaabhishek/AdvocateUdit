# Cloudflare Pages deploy guide

Static Nuxt site. Hosting free, private repo allowed, custom domain + HTTPS free.

## Project settings (Cloudflare dashboard)

| Setting | Value |
| --- | --- |
| Framework preset | Nuxt |
| Build command | `npm run generate` |
| Build output directory | `.output/public` |
| Root directory | `/` (default) |

## Environment variables

Add these under **Settings → Environment variables** (Production):

| Name | Value |
| --- | --- |
| `NODE_VERSION` | `22` |
| `NUXT_APP_BASE_URL` | `/` |
| `NUXT_PUBLIC_SITE_URL` | `https://advocateudit.soft84ya.shop/` |

`NUXT_APP_BASE_URL` must be `/` because the site is served from the root of the subdomain.

## DNS record (GoDaddy)

GitHub will not be used anymore. Point the subdomain at Cloudflare Pages.

| Type | Name | Value | TTL |
| --- | --- | --- | --- |
| CNAME | `advocateudit` | `advocateudit.pages.dev` | 600 / 1 hour |

Notes:

- `Name` field me sirf `advocateudit` daalein (GoDaddy khud `.soft84ya.shop` jod deta hai).
- `advocateudit.pages.dev` — ye Cloudflare project banane ke baad milega. Agar project ka naam alag rakha, to wahi `*.pages.dev` hostname use karein.
- Apex/root (`@`) ko na chhedein — woh abhi doosre server par ja raha hai.
- Purani `www` / A record jo `72.60.220.126` par ja rahi hai, use hata dein agar subdomain ke liye zarurat na ho.

## Order of steps

1. Cloudflare account banao (Free plan).
2. **Workers & Pages → Create → Pages → Connect to Git** → repo `AdvocateUdit` choose karo. Private repo ke liye GitHub App ko access do.
3. Build settings upar wale values se bharo, environment variables add karo.
4. Deploy hone do — `https://<project-name>.pages.dev` par site live hogi.
5. **Custom domains → Set up a custom domain** → `advocateudit.soft84ya.shop` daalo.
6. Cloudflare jo DNS record bataye (CNAME `advocateudit` → `<project>.pages.dev`) wo GoDaddy me add karo.
7. Ye wala GoDaddy record delete karo agar exist karta hai: `advocateudit` → koi purana IP.
8. 5-30 minute me SSL certificate issue ho jayega, site HTTPS par chalne lagegi.

## Verify

```bash
curl -I https://advocateudit.soft84ya.shop/
# HTTP/2 200
```

## GitHub Pages cleanup (optional)

GitHub Pages is repo ke liye ab zarurat nahi:

- Repo → Settings → Pages → custom domain khali hai (already cleared).
- Chahein to `.github/workflows/deploy.yml` delete kar dein, taaki push par double deploy na ho.
- Repo → Settings → General → **Change visibility → Make private**.
