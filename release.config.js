module.exports = {
  "release": {
    "branches": ["master", { "name": "beta", "prerelease": true }]
  },
  plugins: [
    "@semantic-release/commit-analyzer",
    "@semantic-release/release-notes-generator",
    "@semantic-release/changelog",
    [
      "semantic-release-github-pullrequest", {
      "assets": ["CHANGELOG.md"],
      "baseRef": "master"
    }
    ],
    [
      "@semantic-release/npm",
      {
        tarballDir: "release",
      },
    ],
    [
      "@semantic-release/github",
      {
        assets: "release/*.tgz",
      },
    ],
  ],
  preset: "angular",
};
