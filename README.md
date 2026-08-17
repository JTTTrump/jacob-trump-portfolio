# Jacob Trump Portfolio

A responsive, six-panel portfolio built with Next.js and prepared for GitHub + Vercel.

## Local development

Requirements: Node.js 20.9 or newer.

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Production check

```bash
npm run build
npm start
```

## Lacquer artwork

Place the approved decorative WebP files in `public/assets/lacquer/`:

- `sun-branch-top-right.webp`
- `mountain-lacquer-bottom-left.webp`
- `corner-lacquer-top-right.webp`
- `corner-lacquer-bottom-right.webp`
- `gold-branch-top-right.webp`
- `lacquer-sweep-bottom-left.webp`
- `small-corner-bottom-right.webp`
- `small-corner-top-right.webp`

The layouts already reference these exact paths. The files are decorative; all navigation, text, controls, and placeholders remain semantic HTML.

## Deploy to Vercel

1. Create a GitHub repository and push this project.
2. In Vercel, choose **Add New → Project** and import that repository.
3. Keep the detected framework as **Next.js** and the default build settings.
4. Select **Deploy**.

No environment variables or databases are required.
