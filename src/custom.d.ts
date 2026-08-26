import type { PostHog } from './types/posthog'

declare module '*.svg' {
    const content: React.HTMLImageElement
    export default content
}
declare module '*.png' {
    const content: React.HTMLImageElement
    export default content
}

declare module '@reach/router' {
    export interface WindowLocation extends Location {
        state?: unknown
    }
    export function useLocation(): WindowLocation
    export function useNavigate(): (to: string, options?: { replace?: boolean; state?: unknown }) => Promise<void>
    export interface LocationContext {
        location: WindowLocation
        navigate: (to: string, options?: { replace?: boolean; state?: unknown }) => Promise<void>
    }
    export const Location: React.FC<{
        children: (context: LocationContext) => React.ReactNode
    }>
    export interface RouterProps {
        children?: React.ReactNode
        basepath?: string
        primary?: boolean
    }
    export const Router: React.FC<RouterProps>
    export interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
        to?: string
        replace?: boolean
        state?: unknown
    }
    export const Link: React.FC<LinkProps>
    export interface MatchProps {
        path: string
        children: (props: { match: null | Record<string, string> }) => React.ReactNode
    }
    export const Match: React.FC<MatchProps>
    export const Redirect: React.FC<{ to: string; noThrow?: boolean }>
    export const isRedirect: (error: unknown) => boolean
    export const redirectTo: (uri: string) => void
}

declare module 'node:assert/strict' {
    import assert from 'assert'
    export * from 'assert'
    export default assert
}

declare module 'node:test' {
    export interface TestContext {
        skip: (message?: string) => void
        todo: (message?: string) => void
    }
    export type TestFn = (t?: TestContext) => void | Promise<void>
    export function test(name: string, fn?: TestFn): void | Promise<void>
    export function describe(name: string, fn: () => void): void
    export function it(name: string, fn?: TestFn): void | Promise<void>
    export default test
}

declare global {
    interface Window {
        __setPreferredTheme: (theme: string) => void
        __theme: string
        __onThemeChange: (theme: string) => void
        posthog: PostHog | undefined
    }
}
