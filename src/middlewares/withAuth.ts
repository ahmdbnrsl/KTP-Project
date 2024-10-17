import {
    NextMiddleware,
    NextRequest,
    NextFetchEvent,
    NextResponse,
} from 'next/server';
import { getToken } from 'next-auth/jwt';

const authPage: Array<string> = ['/login', '/signup'];

export default function withAuth(
    middleware: NextMiddleware,
    requireAuth: string[] = []
) {
    return async (req: NextRequest, next: NextFetchEvent) => {
        const pathName = req.nextUrl.pathname;
        const token = await getToken({
            req,
            secret: process.env.SECRET_TOKEN,
        });

        if (!token && !authPage.includes(pathName)) {
            if (requireAuth.includes(pathName)) {
                const url = new URL('/login', req.url);
                url.searchParams.set('callbackUrl', encodeURI(req.url));
                return NextResponse.redirect(url);
            }
        }

        if (token) {
            if (requireAuth.includes(pathName)) {
                if (authPage.includes(pathName)) {
                    return NextResponse.redirect(
                        new URL('/dashboard', req.url)
                    );
                }
            }
        }

        if (pathName === '/api/secret') {
            const authHeader = req.headers.get('Authorization');

            if (!authHeader || !authHeader.startsWith('Bearer ')) {
                return new NextResponse('Unauthorized', { status: 401 });
            }

            const token = authHeader.split(' ')[1];
            const isValidToken = token === process.env.BEARER_TOKEN;

            if (!isValidToken) {
                return new NextResponse('Unauthorized', { status: 401 });
            }
        }
        return middleware(req, next);
    };
}
