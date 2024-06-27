
export default async function getPlayers() {
    const response = await fetch('http://127.0.0.1:5000/api/players')
    return response.json() as Promise<Player[]>
}