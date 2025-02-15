import { localStorageToken } from '@/shared/local-storage/token';
import { NextRequest, NextResponse } from 'next/server';

export function middleware(req: NextRequest) {
	const token = localStorageToken.getAccessToken();
	if (!token) {
		return NextResponse.redirect(new URL('/login', req.url));
	}

	return NextResponse.next();
}

export const config = {
	matcher: ['/profile/*'],
};
