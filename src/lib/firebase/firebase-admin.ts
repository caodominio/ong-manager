import "server-only"
import { type SessionCookieOptions, getAuth } from "firebase-admin/auth"
import { initializeApp, getApps, cert, type ServiceAccount } from "firebase-admin/app"
import { envServerSchema } from "@/types/env-schema"
import { getSession } from "../session"
import type { UserRoles } from "@/models/user.model"

export const adminService: ServiceAccount = {
	projectId: envServerSchema.projectId,
	clientEmail: envServerSchema.firebaseAdminClientEmail,
	privateKey: envServerSchema.firebaseAdminPrivateKey,
}
export const firebaseApp =
	getApps().find(it => it.name === "firebase-admin-app") ||
	initializeApp(
		{
			credential: cert(adminService),
		},
		"firebase-admin-app",
	)
export const auth = getAuth(firebaseApp)

export async function isUserAuthenticated(session: string | undefined = undefined) {
	const _session = session ?? (await getSession())
	if (!_session) return false
	try {
		const isRevoked = await auth.verifySessionCookie(_session, true)
		return !!isRevoked
	} catch (error) {
		return false
	}
}

export async function getCurrentUser() {
	const session = await getSession()
	if (!(await isUserAuthenticated(session))) {
		return null
	}

	const decodedIdToken = await auth.verifySessionCookie(session!)
	const currentUser = await auth.getUser(decodedIdToken.uid)

	return { user: currentUser, role: decodedIdToken.role as UserRoles }
}

export function createSessionCookie(idToken: string, sessionCookieOptions: SessionCookieOptions) {
	return auth.createSessionCookie(idToken, sessionCookieOptions)
}

export async function revokeAllSessions(session: string) {
	const decodedIdToken = await auth.verifySessionCookie(session)

	return await auth.revokeRefreshTokens(decodedIdToken.sub)
}