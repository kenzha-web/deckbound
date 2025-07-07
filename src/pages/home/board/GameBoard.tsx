import { useGameStore } from '../../../store/game/game.store.ts';

export function GameBoard() {
    const { player, opponent } = useGameStore();

    return (
        <div>
            <div>
                <div>
                    <h1>Opponent</h1>
                    <p>HP: {opponent.health}</p>
                    <p>Mana: {opponent.mana}</p>
                </div>

                <div>
                    {opponent.deck
                        .filter((card) => !card.isOnBoard)
                        .slice(0, 5)
                        .map((card) => (
                            <button
                                className="h-60 w-44 bg-yellow-300 shadow inline-block mx-1 rounded-lg"
                                key={card.id}
                            />
                        ))}
                </div>

                <div>
                    <h1>Player</h1>
                    <p>HP: {player.health}</p>
                    <p>Mana: {player.mana}</p>
                </div>
            </div>
        </div>
    );
}
