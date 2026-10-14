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

## Replace before accepting real orders

- Edit `src/data/site.ts` for approved pack sizes, prices, product description, and FAQs. Set `pricingIsDemo` to `false` once values are verified and remove preview wording from the UI.
- Add verified business contact details to `src/app/contact/page.tsx` and the footer.
- Add the approved domain in Netlify's environment settings as `NEXT_PUBLIC_SITE_URL`.
- Connect and test a payment/order provider before enabling checkout. The current cart is a local preview with no payment processing.
- Review packaging claims, legal details, delivery and returns policies with the client before a public commerce launch.

## Assets

The three client images are copied into `public/images/kapalini/` with descriptive names. The original uploads are preserved locally in `source-assets/Images/` and ignored by Git to avoid duplicate assets.
