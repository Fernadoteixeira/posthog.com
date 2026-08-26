// Node executes this CommonJS test directly.
/* eslint-disable @typescript-eslint/no-var-requires */
const assert = require('node:assert/strict')
const fs = require('node:fs')
const path = require('node:path')
const test = require('node:test')

const source = fs.readFileSync(path.join(__dirname, 'SuggestionList.tsx'), 'utf8')
const englishFallbackBranch = source.match(/if \(item\.kind === 'english-fallback'\) \{(?<branch>[\s\S]*?)\n {16}\}/)
    ?.groups?.branch

test('renders the English-search fallback in Brazilian Portuguese', () => {
    assert.ok(englishFallbackBranch)
    assert.match(englishFallbackBranch, /Nenhum resultado em português\./)
    assert.match(englishFallbackBranch, /Pesquisar em inglês/)
    assert.match(englishFallbackBranch, /SuggestionHint action="pesquisar" preposition="para" alwaysVisible/)
    assert.match(englishFallbackBranch, /min-w-0 flex-1 text-\[15px\] text-primary/)
    assert.match(englishFallbackBranch, /whitespace-nowrap font-semibold/)
    assert.doesNotMatch(englishFallbackBranch, /truncate/)
    assert.doesNotMatch(englishFallbackBranch, /No results in Portuguese|Search in English instead|action="search"/)
})

test('retains the English hint wording for other suggestions', () => {
    assert.match(source, /preposition = 'to'/)
})

test('can render the fallback keyboard hint below the container breakpoint', () => {
    assert.match(source, /const alwaysVisibleHintClass = 'ml-auto shrink-0 text-xs text-secondary'/)
    assert.match(source, /alwaysVisible \? alwaysVisibleHintClass : hintClass/)
})
