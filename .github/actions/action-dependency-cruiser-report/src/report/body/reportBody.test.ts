import { describe, it, expect } from 'vitest';

import { reportBody } from './reportBody';

describe('reportBody', () => {
  it('should return body comment', () => {
    const options = {
      owner: 'octocat',
      repo: 'hello-world',
      issueNumber: 1,
      workingDirectory: 'src',
      sha: '8ef39983ce21a9c80821addbeb63bfe4d4068f9a',
      mermaidText: 'flowchart LR\n\nA ---> B',
      cmdText:
        'yarn -s depcruise --output-type mermaid --config .dependency-cruiser.js dist/index.js src/options.ts',
    };
    const expected = `<!-- This comment was generated by dependency-cruiser-report-action. id: 793d8403dad1436f27f87c9ec99a41239c663150857545f16267c67caf0731f1 -->
# Visualize dependencies of changed files.

\`\`\`mermaid
flowchart LR

A ---> B
\`\`\`

Report generated by dependency-cruiser-report-action with commit: 8ef39983ce21a9c80821addbeb63bfe4d4068f9a

---

working directory: \`src\`

<details>
<summary>execute command</summary>

\`\`\`
yarn -s depcruise --output-type mermaid --config .dependency-cruiser.js dist/index.js src/options.ts
\`\`\`

</details>
`;
    expect(reportBody(options)).toBe(expected);
  });

  it('should return the message `No output was found`', () => {
    const options = {
      owner: 'octocat',
      repo: 'hello-world',
      issueNumber: 1,
      workingDirectory: 'src',
      sha: '8ef39983ce21a9c80821addbeb63bfe4d4068f9a',
      mermaidText: 'flowchart LR\n\n\n\n',
      cmdText:
        'yarn -s depcruise --output-type mermaid --config .dependency-cruiser.js docs',
    };
    const expected = `<!-- This comment was generated by dependency-cruiser-report-action. id: 793d8403dad1436f27f87c9ec99a41239c663150857545f16267c67caf0731f1 -->
# Visualize dependencies of changed files.

No outputs was found.

Report generated by dependency-cruiser-report-action with commit: 8ef39983ce21a9c80821addbeb63bfe4d4068f9a

---

working directory: \`src\`

<details>
<summary>execute command</summary>

\`\`\`
yarn -s depcruise --output-type mermaid --config .dependency-cruiser.js docs
\`\`\`

</details>
`;
    expect(reportBody(options)).toBe(expected);
  });
});
