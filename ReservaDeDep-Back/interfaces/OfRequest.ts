import { Request } from "express"
export interface OfRequest extends Request {
	isAuthenticated?: boolean
}
