export class Preloader extends Phaser.Scene {
    constructor() {
        super('Preloader');
    }

    preload() {
        this.load.setPath('assets');

        // Load general assets
        this.load.image('bg', 'bg.png');

        // --- NEW: Load the new player character frames ---
        this.load.image('girl_down_1', 'splitani_girl_walk_down_1.png');
        this.load.image('girl_down_2', 'splitani_girl_walk_down_2.png');
        this.load.image('girl_up_1', 'splitani_girl_walk_up_1.png');
        this.load.image('girl_up_2', 'splitani_girl_walk_up_2.png');
        this.load.image('girl_side_1', 'splitani_girl_walk_side_1.png');
        this.load.image('girl_side_2', 'splitani_girl_walk_side_2.png');
    }

    create() {
        // --- NEW: Create animations from the individual frames ---

        // Idle animation (uses the first 'down' frame)
        this.anims.create({
            key: 'girl-idle',
            frames: [{ key: 'girl_down_1' }],
            frameRate: 1
        });

        // Walk down animation
        this.anims.create({
            key: 'girl-walk-down',
            frames: [{ key: 'girl_down_1' }, { key: 'girl_down_2' }],
            frameRate: 6,
            repeat: -1
        });

        // Walk up animation
        this.anims.create({
            key: 'girl-walk-up',
            frames: [{ key: 'girl_up_1' }, { key: 'girl_up_2' }],
            frameRate: 6,
            repeat: -1
        });
        
        // Walk side animation (for left/right)
        this.anims.create({
            key: 'girl-walk-side',
            frames: [{ key: 'girl_side_1' }, { key: 'girl_side_2' }],
            frameRate: 6,
            repeat: -1
        });

        //  Move to the MainMenu scene
        this.scene.start('MainMenu');
    }
}