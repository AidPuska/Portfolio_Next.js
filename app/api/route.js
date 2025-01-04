export async function GET(request) {
  console.log("REQUEST aid: ", request.headers.get('x-forwarded-for'))
  let headers = Object.fromEntries(request.headers);
  return Response.json({ headers })
}