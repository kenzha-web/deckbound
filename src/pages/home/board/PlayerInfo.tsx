import type { IHero, TPlayer } from '../../../store/game/game.types.ts';

interface Props {
    player: Omit<IHero, 'deck'>;
    typePlayer: TPlayer;
}

export function PlayerInfo({ player }: Props) {
    return (
        <div className="absolute left-3 bottom-10">
            <h1>Player</h1>
            <p>HP: {player.health}</p>
            <p>Mana: {player.mana}</p>
        </div>
    );
}
