---
title: "Known Issues"
redirect_from:
  - /guides/KNOWN-ISSUES
  - /guides/knownissues
  - /guides/knownIssues
---

- ts-jest: some wierd behavior on ts-jest (only) leads to type errors
- ts-node: never run `ts-node --transpile-only` (seems like ts-node will not fix it)
- typegoose dosnt work with classes that have the same name [{% include gitissue repo="hasezoey" num=23 %}, {% include gitissue repo="hasezoey" num=24 %}]