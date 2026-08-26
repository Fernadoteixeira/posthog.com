import assert from 'node:assert/strict'
import { test } from 'node:test'
import { getCookieBannerContent } from './cookieBannerData.ts'

test('returns English GDPR cookie banner content by default', () => {
    const content = getCookieBannerContent(false)
    assert.equal(content.title, 'Legally-required cookie banner')
    assert.equal(content.actionLabel, 'Close')
    assert.ok(content.tooltipTrigger)
    assert.ok(content.imageSrc)
})

test('returns Brazilian Portuguese LGPD cookie banner content for pt-BR routes', () => {
    const content = getCookieBannerContent(true)
    assert.equal(content.title, 'Aviso legal de cookies (LGPD)')
    assert.equal(content.actionLabel, 'Fechar')
    assert.ok(content.paragraph2.includes('LGPD'))
})
