This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

# Steps i took when installing:
- [x] ```npx create-next-app@latest .```
- [x] ```npm i prisma --save-dev```
- [x] ```npx prisma init --datasource-provider sqlite```
- [x] Fix model in ```/prisma/schema.prisma```
- [x] migrate ```npx prisma migrate dev init``` 


If you want to:
- [] fix strikethrough when done, or change backgroundcolor on that item (https://stackoverflow.com/questions/65784357/tailwindcss-change-label-when-radio-button-checked)


# What to do:
- [ ] Create new Model (prisma table) for Users
- [ ] Add NextAuth to login with Gmail

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

 
## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
