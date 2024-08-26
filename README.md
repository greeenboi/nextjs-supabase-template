# NextJs 14 + Supabase SWR Starter Template

This is a starter template for Next.js 14 and Supabase with SWR.

## Getting Started

First, get this project by installing it:

-   npm:
    ```bash
    npx create-next-app --example https://github.com/greeenboi/nextjs-supabase-template <YOUR_APP_NAME>
    ```
-   pnpm:

    ```bash
    pnpm dlx create-next-app --example https://github.com/greeenboi/nextjs-supabase-template <YOUR_APP_NAME>

    ```

## Environment Variables

Create a `.env.local` file in the root of the project and add the following environment variables:

```text
NEXT_PUBLIC_SUPABASE_URL=https://<your_supabase_url>.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=<your_supabase_anon_key>
```

## Running the Development Server

```bash
npm run dev
# or
pnpm run dev

```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Features

The repository includes the following features:

-   Supabase authentication ( [SWR](https://supabase.com/docs/guides/auth/server-side/nextjs) )
-   [Shadcn UI](https://supabase.com/docs/guides/auth/server-side/nextjs) for styling ( sonner has been setup too )
-   [SWR](https://swr.vercel.app/) for data fetching
-   [prettier](https://prettier.io/) for code formatting
-   [eslint](https://eslint.org/) for code linting
-   [husky](https://typicode.github.io/husky/#/) for pre-commit hooks ( goto #husky for more info )
-   [react-transition-progress](https://github.com/vercel/react-transition-progress) for page transition loader

## Husky

Husky is a tool that can prevent bad `git commit`, `git push`, and more. It can be used to run scripts (like linting, tests, etc.) before committing or pushing code.

This repository uses Husky to run `eslint` and `prettier` before committing code. If there are any errors, Husky will prevent the commit.

To Use Husky:

```bash
    git add -A
    git commit -m "Your commit message"
```

And Husky will run the `pre-commit` script before committing the code.

> To disable husky, remove the `lint-staged` field from the `package.json` file and delete the `.husky` folder.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

> made with 💖 by [greeenboi](https://github.com/greeenboi)
