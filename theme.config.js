export default {
  repository: 'https://github.com/styxlab/next-cms-ghost', // project repo
  docsRepository: 'https://docs.jamify.org', // docs repo
  branch: 'master', // branch of docs
  path: '/', // path of docs
  titleSuffix: ' – Jamify',
  nextLinks: true,
  prevLinks: true,
  search: true,
  customSearch: null, // customizable, you can use algolia for example
  darkMode: true,
  footer: true,
  footerText: 'MIT 2020 © Jamify.',
  footerEditOnGitHubLink: true, // will link to the docs repo
  logo: (
    <>
      <span>
        <b>Jamify Documentation</b>
      </span>
    </>
  ),
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta
        name="description"
        content="Jamify docs for next-cms-ghost: Publish flaring fast sites with Next.js and Ghost CMS."
      />
      <meta name="og:title" content="Jamify Documentation" />
    </>
  ),
}
