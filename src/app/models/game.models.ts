export interface Player{
    id: number;
    name: string;
    role: 'spy'|'citizen';
    isRoleViewed: boolean;
}

export interface GameConfig{
    spyCount: number;
    timeLimit: number;
}

