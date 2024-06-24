type Player = {
    id: number
    name: string
    team: string
    pts: number
    expected: number
    price: number
    active: boolean
    pos: pos
}

type pos = "GK" | "DEF" | "MID" | "FWD" 