import { ExampleCode } from '../../types/ExampleCode'

export class ExampleCodeSnippet implements ExampleCode {
  constructor(
    public title: string,
    public explanation: string,
    public code: string
  ) {}
  renderCodeSnippet(): string {
    return `<h3>${this.title}</h3><p>${this.explanation}</p><pre><code>${this.code}</code></pre>`
  }
}