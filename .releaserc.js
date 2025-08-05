module.exports = {
  branches: [
    "main",
    { name: "rc", prerelease: true }
  ],
  plugins: [
    "@semantic-release/commit-analyzer",
    "@semantic-release/release-notes-generator",
    ["@semantic-release/changelog", {
      changelogFile: "CHANGELOG.md"
    }],
    ["@semantic-release/git", {
      assets: ["CHANGELOG.md", "src/version.h"],
      message: "chore(release): ${nextRelease.version} [skip ci]"
    }],
    "@semantic-release/github"
  ]
};
