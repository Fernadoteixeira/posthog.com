// Node executes this CommonJS test directly.
/* eslint-disable @typescript-eslint/no-var-requires */
const assert = require('node:assert/strict')
const test = require('node:test')

const algoliaConfig = require('./algoliaConfig')

const transformer = algoliaConfig.options.queries[0].transformer

const contentNode = ({ id, path, title }) => ({
    id,
    fields: { pageViews: 42, slug: path },
    frontmatter: { title },
    headings: [{ value: `${title} heading`, depth: 2 }],
    rawBody: `${title} body`,
    excerpt: `${title} excerpt`,
    isFuture: false,
    slug: path,
})

test('adds locales to records without changing their routes or fields', () => {
    const records = transformer({
        data: {
            pages: {
                nodes: [
                    { id: 'english-page', path: '/product-analytics', contentId: 'english-content' },
                    { id: 'korean-page', path: '/ko/newsletter/example', contentId: 'korean-content' },
                    { id: 'brazilian-page', path: '/pt-br/product-analytics', contentId: 'brazilian-content' },
                ],
            },
            content: {
                nodes: [
                    contentNode({ id: 'english-content', path: '/product-analytics', title: 'Product analytics' }),
                    contentNode({ id: 'korean-content', path: '/ko/newsletter/example', title: 'Korean newsletter' }),
                    contentNode({
                        id: 'brazilian-content',
                        path: '/pt-br/product-analytics',
                        title: 'Product analytics',
                    }),
                ],
            },
            tools: { nodes: [] },
            teams: { nodes: [] },
        },
    })
    const recordsByPath = new Map(records.map((record) => [record.fields.slug, record]))

    for (const { path, locale, slug } of [
        { path: '/product-analytics', locale: 'en', slug: 'product-analytics' },
        { path: '/ko/newsletter/example', locale: 'ko', slug: 'ko/newsletter/example' },
        { path: '/pt-br/product-analytics', locale: 'pt-BR', slug: 'pt-br/product-analytics' },
    ]) {
        const record = recordsByPath.get(path)

        assert.equal(record.locale, locale)
        assert.equal(record.slug, slug)
        assert.deepEqual(record.fields, { pageViews: 42, slug: path })
    }
})

test('keeps type and locale faceting enabled', () => {
    assert.deepEqual(algoliaConfig.options.settings.attributesForFaceting, ['type', 'locale'])
})
