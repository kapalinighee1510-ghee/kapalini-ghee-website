# Kapalini website

A responsive, static Next.js storefront preview for Kapalini Shudh Desi Ghee. The build exports to `out/` for Netlify.

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Build and deploy to Netlify

```bash
npm run typecheck
npm run build
```

Netlify can import this repository directly. `netlify.toml` uses `npm run build` and publishes `out/`. Set `NEXT_PUBLIC_SITE_URL` to the final production domain once approved. If unset, Netlify's build URL is used for canonical links and the sitemap. Rebuild after changing the domain.

The contact form is prepared for Netlify Forms. After the first Netlify deploy, enable or verify form detection and submit a test enquiry. Delivery has not been verified in a deployed environment.

## Product and contact details

- Available packs: 450 ml and 900 ml boxes.
- Phone: 92204 28942.
- Address shown on the supplied document: I-1-11A, Sohn Rewari Road, Dharuhera, Rewari, Haryana. Confirm the printed road spelling and full postal address with the client before using it for shipping or legal documents.
- No amount is displayed or calculated. The selection list is for enquiries; online checkout is inactive.

## Before accepting online orders

- Review `src/data/site.ts` if the approved pack sizes, contact details, product description, or FAQs change.
- Add the approved domain in Netlify's environment settings as `NEXT_PUBLIC_SITE_URL`.
- Connect and test a payment/order provider before enabling checkout. The current enquiry list is local to the browser and has no payment processing.
- Review packaging claims, legal details, delivery and returns policies with the client before a public commerce launch.

## Assets

The three client images are copied into `public/images/kapalini/` with descriptive names. The original uploads are preserved locally in `source-assets/Images/` and ignored by Git to avoid duplicate assets.
