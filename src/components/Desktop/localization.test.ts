import assert from 'node:assert/strict'
import { test } from 'node:test'

import { shouldTranslateDesktopToPtBr } from './localization.ts'

test('translates desktop labels for all pt-BR routes and preserves English elsewhere', () => {
    assert.equal(shouldTranslateDesktopToPtBr({ pathname: '/pt-br' }), true)
    assert.equal(shouldTranslateDesktopToPtBr({ pathname: '/pt-br/product-analytics' }), true)
    assert.equal(shouldTranslateDesktopToPtBr({ pathname: '/pt-br/session-replay' }), true)
    assert.equal(shouldTranslateDesktopToPtBr({ pathname: '/pt-br/feature-flags' }), true)
    assert.equal(shouldTranslateDesktopToPtBr({ pathname: '/pt-br/experiments' }), true)
    assert.equal(shouldTranslateDesktopToPtBr({ pathname: '/' }), false)
    assert.equal(shouldTranslateDesktopToPtBr({ pathname: '/product-analytics' }), false)
    assert.equal(shouldTranslateDesktopToPtBr({ pathname: '/ko' }), false)
    assert.equal(shouldTranslateDesktopToPtBr({ pathname: '/koala' }), false)
    assert.equal(shouldTranslateDesktopToPtBr({ pathname: '/pt-brasil' }), false)
})
