/**
 * This file contains type definitions for most of the entities in the system
 */

export interface LoginPayload {
	email: string
	password: string
	remember?: boolean
}
