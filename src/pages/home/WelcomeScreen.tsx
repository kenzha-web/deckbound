import { Button } from '@/components/ui/button/Button.tsx';
import { useGameStore } from '@/store/game/game.store.ts';
import { Heading } from '@/components/ui/heading/Heading.tsx';

function WelcomeScreen() {
    const { startGame } = useGameStore();

    return (
        <div className="flex items-center justify-center flex-col gap-4 h-screen">
            <Heading>DECKBOUND</Heading>
            <Button variant="primary" onClick={startGame}>
                Start game
            </Button>
        </div>
    );
}

export default WelcomeScreen;
