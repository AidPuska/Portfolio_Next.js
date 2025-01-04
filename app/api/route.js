export async function GET(request) {
  console.log("REQUEST aid: ", request.headers.get('x-forwarded-for'))
  const ip = request.headers.get('x-forwarded-for')
  return Response.json({ ip })
}