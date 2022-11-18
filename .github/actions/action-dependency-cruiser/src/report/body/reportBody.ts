import { uniqueTag } from './uniqueTag'

type Params = {
  owner: string
  repo: string
  issueNumber: number
  sha: string
  cmdText: string
  mermaidText: string
  workingDirectory: string
}

const NO_OUTPUT_TEXT = 'flowchart LR\n\n\n\n'

const renderMarmeidText = (text: string) => {
  if (text === NO_OUTPUT_TEXT) {
    return 'No outputs was found.'
  }

  return `\`\`\`mermaid
${text}
\`\`\``
}

export const reportBody = (params: Params) => {
  const url = 'https://github.com/MH4GF/dependency-cruiser-report-action'

  return `${uniqueTag({
    owner: params.owner,
    repo: params.repo,
    issueNumber: params.issueNumber,
    workingDirectory: params.workingDirectory,
  })}
# dependency-cruiser report

visualize dependenices of changed files.

${renderMarmeidText(params.mermaidText)}

Report generated by <a href="${url}">dependency-cruiser report action</a> ${params.sha}

---

working directory: \`${params.workingDirectory}\`

<details>
<summary>execute command</summary>

\`\`\`
${params.cmdText}
\`\`\`

</details>
`
}