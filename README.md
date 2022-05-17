This is a reproduction of [prismicio/prismic-toolbar issue #66](https://github.com/prismicio/prismic-toolbar/issues/66).

1. Clone the repository and create a new Prismic repository.

   ```
   npx prismic-cli@latest theme --theme-url https://github.com/angeloashmore/prismic-toolbar-issue-66-repro
   ```

1. Install dependencies and start the server.

   ```sh
   cd prismic-toolbar-issue-66-repro
   npm i
   npm run dev
   ```

1. In the Prismic repo, create a page to preview. The repository will include a basic Page Custom Type.

1. Preview the document.

1. While keeping the preview window open, create a new window with the same URL. You should see the preview session in both windows.

1. In one of the windows, close the preview session via the Prismic Toolbar's "x" button.

The window where the preview session was closed should now be in an infinite reload. This will continue until the window that was _not_ used to close the preview session (i.e. the one that still has the Prismic Toolbar visible) is closed.
