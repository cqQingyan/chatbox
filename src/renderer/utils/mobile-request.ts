// Mobile request support removed
export async function handleMobileRequest(
  url: string,
  method: string,
  headers: Headers,
  body?: RequestInit['body'],
  signal?: AbortSignal
): Promise<Response> {
  return new Response(null, { status: 400, statusText: 'Mobile request not supported' })
}
