import assert from 'node:assert/strict'
import { test } from 'node:test'

import { translatePtBr } from './_translations.ts'

test('translates the pt-BR homepage desktop labels', () => {
    const labels = {
        Home: 'Início',
        'Self-driving product': 'Produto autônomo',
        'Context warehouse': 'Armazém de contexto',
        Pricing: 'Preços',
        Docs: 'Documentação',
        Demo: 'Demonstração',
        'Talk to a human': 'Fale com uma pessoa',
        'About us': 'Sobre nós',
        Changelog: 'Registro de alterações',
        'Company handbook': 'Manual da empresa',
        Store: 'Loja',
        Careers: 'Carreiras',
        Trash: 'Lixeira',
    }

    for (const [source, translation] of Object.entries(labels)) {
        assert.equal(translatePtBr(source), translation)
    }
})

test('translates product analytics terms in pt-BR', () => {
    const productTerms = {
        'Product analytics': 'Análise de produto',
        'Session replay': 'Gravação de sessão',
        'Feature flags': 'Feature flags',
        'A/B testing': 'Testes A/B',
        Funnels: 'Funis',
        'User paths': 'Caminhos de usuários',
        Retention: 'Retenção',
        Cohorts: 'Coortes',
        Autocapture: 'Captura automática',
        Trends: 'Tendências',
        Dashboards: 'Painéis',
    }

    for (const [source, translation] of Object.entries(productTerms)) {
        assert.equal(translatePtBr(source), translation)
    }
})

test('preserves strings outside the pt-BR homepage translation catalog', () => {
    assert.equal(translatePtBr('English-only shared navigation'), 'English-only shared navigation')
})
