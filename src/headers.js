import { Headers } from 'node-fetch'
export { Headers } from 'node-fetch'
export function headers__new(init) {
  return new Headers(init)
}
export {
	headers__new as headers_,
	headers__new as _headers,
}