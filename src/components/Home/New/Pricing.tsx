import React from 'react'
import useProducts from 'hooks/useProducts'
import useProduct from 'hooks/useProduct'
import OSTable from 'components/OSTable'
import { IconArrowUpRight } from '@posthog/icons'
import { Link } from 'gatsby'
import OSButton from 'components/OSButton'

type TranslateFn = (value: string) => string
const identity: TranslateFn = (value) => value

const productsToShow = ['product_analytics', 'feature_flags', 'session_replay', 'data_warehouse']

function numberToWords(num: number, locale: string, translate: TranslateFn): string {
    if (num >= 1_000_000) {
        return `${num / 1_000_000} ${translate('million')}`
    } else if (num >= 1_000) {
        return num.toLocaleString(locale)
    }
    return num.toString()
}

export default function Pricing({ translate = identity, locale = 'en' }: { translate?: TranslateFn; locale?: string }) {
    const { products: initialProducts } = useProducts()
    const products = initialProducts.filter((product) => productsToShow.includes(product.handle))
    const formatUsage = (product: (typeof products)[number]) =>
        `${numberToWords(product.freeLimit, locale, translate)} ${translate(`${product.unit}s/mo`)}`

    const columns = [
        { name: '', width: '50px', align: 'center' as const },
        { name: translate('Product'), width: 'minmax(200px,1fr)', align: 'left' as const },
        { name: translate('Free tier'), width: 'minmax(200px,1fr)', align: 'left' as const },
        {
            name: translate('Pricing (decreases with volume)'),
            width: 'minmax(200px,2fr)',
            align: 'left' as const,
        },
    ]

    const rows = products.map((product, index) => ({
        cells: [
            { content: index + 1 },
            {
                content: (
                    <Link to={`/${product.slug}`} state={{ newWindow: true }} className="flex items-center space-x-1">
                        <product.Icon className={`inline-block size-4 text-${product.color}`} />
                        <span>{product.name}</span>
                    </Link>
                ),
            },
            { content: formatUsage(product) },
            {
                content: (
                    <span>
                        ${product.startsAt.length <= 3 ? Number(product.startsAt).toFixed(2) : product.startsAt}/
                        {product.unit}
                    </span>
                ),
            },
        ],
    }))

    return (
        <div>
            {/* Small container: Stacked card layout */}
            <div className="flex flex-col gap-4 @2xl:hidden mb-4">
                {products.map((product, index) => (
                    <div key={product.handle} className="border border-primary">
                        <div className="bg-input px-3 py-2 border-b border-primary">
                            <Link
                                to={`/${product.slug}`}
                                state={{ newWindow: true }}
                                className="flex items-center gap-1.5 font-bold text-sm"
                            >
                                <span>{index + 1}.</span>
                                <product.Icon className={`inline-block size-4 text-${product.color}`} />
                                <span>{product.name}</span>
                            </Link>
                        </div>
                        <div className="px-3 py-2 text-sm space-y-1">
                            <div>
                                <span className="text-muted">{translate('Free tier:')}</span> {formatUsage(product)}
                            </div>
                            <div>
                                <span className="text-muted">{translate('Pricing:')}</span> $
                                {product.startsAt.length <= 3 ? Number(product.startsAt).toFixed(2) : product.startsAt}/
                                {translate(product.unit)}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Larger container: Table layout */}
            <div className="hidden @2xl:block">
                <OSTable columns={columns} rows={rows} className="mb-4" />
            </div>
        </div>
    )
}
