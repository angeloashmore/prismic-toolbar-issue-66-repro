This is a reproduction of [prismicio/prismic-toolbar issue #66](https://github.com/prismicio/prismic-toolbar/issues/66).

1. Clone the repository and create a new Prismic repository.

   ```
   npx prismic-cli@latest theme --theme-url https://github.com/angeloashmore/prismic-toolbar-issue-66-repro --conf sm.json
   ```

1. Start Slice Machine and push the Page Custom Type.

1. Start the server.

   ```sh
   cd prismic-toolbar-issue-66-repro
   npm run dev
   ```

1. Open the Prismic repo by navigating to <http://localhost:3000/admin> and add a Preview URL for `http://localhost:3000/api/preview`.

1. Creaet and publish a page to preview.

1. Edit the document and preview it.

1. While keeping the preview window open, create a new window with the same URL. You should see the preview session in both windows.

1. In one of the windows, close the preview session via the Prismic Toolbar's "x" button.

The window where the preview session was closed should now be in an infinite reload. This will continue until the window that was _not_ used to close the preview session (i.e. the one that still has the Prismic Toolbar visible) is closed.
