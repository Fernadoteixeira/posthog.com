import assert from 'node:assert/strict'
import { test } from 'node:test'

import { shouldTranslateDesktopToPtBr } from './localization.ts'

test('only translates desktop labels for the bare pt-BR homepage location', () => {
    assert.equal(shouldTranslateDesktopToPtBr({ pathname: '/pt-br', search: '', hash: '' }), true)
    assert.equal(shouldTranslateDesktopToPtBr({ pathname: '/pt-br/foo', search: '', hash: '' }), false)
    assert.equal(shouldTranslateDesktopToPtBr({ pathname: '/pt-brasil', search: '', hash: '' }), false)
    assert.equal(shouldTranslateDesktopToPtBr({ pathname: '/pt-br', search: '?source=x', hash: '' }), false)
    assert.equal(shouldTranslateDesktopToPtBr({ pathname: '/pt-br', search: '', hash: '#section' }), false)
})
