import data from "./data.json"


export async function GET() {
	return new Response(
		JSON.stringify(data), {
			headers: {
				"Access-Control-Allow-Origin": "*"
			}
		})
}