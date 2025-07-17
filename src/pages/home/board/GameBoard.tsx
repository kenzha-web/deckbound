import { useGameStore } from '../../../store/game/game.store.ts';
import { PlayerInfo } from './PlayerInfo.tsx';
import { HandCard } from './hand-card/HandCard.tsx';
import { getStyleRotation } from './hand-card/get-style-rotation.ts';

export function GameBoard() {
    const { player, opponent, playCard } = useGameStore();

    return (
        <div className="relative h-screen w-full">
            <div>
                <PlayerInfo player={opponent} typePlayer="opponent" />

                <div className="flex items-center justify-center">
                    {opponent.deck
                        .filter((card) => !card.isOnBoard)
                        .slice(0, 6)
                        .map((card, index, array) => (
                            <HandCard
                                card={card}
                                style={getStyleRotation(index, array.length, false)}
                                key={card.id}
                                onClick={() => playCard(card.id)}
                                isHided
                            />
                        ))}
                </div>

                <section>
                    <div className="h-56">
                        {opponent.deck
                            .filter((card) => card.isOnBoard)
                            .map((card) => (
                                <button className="h-60 w-44 shadow inline-block mx-1 rounded-lg" key={card.id}>
                                    <img alt={card.name} src={card.imageUrl} />
                                </button>
                            ))}
                    </div>

                    <hr />

                    <div className="h-56">
                        {player.deck
                            .filter((card) => card.isOnBoard)
                            .map((card) => (
                                <button className="h-60 w-44 shadow inline-block mx-1 rounded-lg" key={card.id}>
                                    <img alt={card.name} src={card.imageUrl} draggable="false" />
                                </button>
                            ))}
                    </div>
                </section>

                <PlayerInfo player={player} typePlayer="player" />

                <div className="-bottom-14 relative flex items-center justify-center">
                    {player.deck
                        .filter((card) => !card.isOnBoard)
                        .slice(0, 6)
                        .map((card, index, array) => (
                            <HandCard
                                card={card}
                                style={getStyleRotation(index, array.length, true)}
                                key={card.id}
                                onClick={() => playCard(card.id)}
                            />
                        ))}
                </div>
            </div>
        </div>
    );
}
