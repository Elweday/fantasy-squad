type Player = {
    id: number;
    name: string;
    team: string;
    points: number;
    expected: number;
    price: number;
    active: boolean?;
    pos: pos?;
}

type pos = "GK" | "DEF" | "MID" | "FWD" 