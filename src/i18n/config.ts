export const locales = ['es', 'en'] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'es';

export function isLocale(value: string | undefined): value is Locale {
    return locales.includes(value as Locale);
}

export function getLocale(value: string | undefined): Locale {
    return isLocale(value) ? value : defaultLocale;
}

export function localizePath(locale: Locale, path = '/'): string {
    const normalizedPath = path
        ? path.startsWith('/')
            ? path
            : `/${path}`
        : '/';

    if (locale === defaultLocale) {
        return normalizedPath;
    }

    return normalizedPath === '/' ? `/${locale}` : `/${locale}${normalizedPath}`;
}

export function stripLocaleFromPath(pathname: string): string {
    for (const locale of locales) {
        const localePrefix = `/${locale}`;

        if (pathname === localePrefix) {
            return '/';
        }

        if (pathname.startsWith(`${localePrefix}/`)) {
            return pathname.slice(localePrefix.length);
        }
    }

    return pathname || '/';
}

export function getSwitchLocalePath(locale: Locale, pathname: string): string {
    return localizePath(locale, stripLocaleFromPath(pathname));
}
