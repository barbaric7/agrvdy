export class MainMenu extends Phaser.Scene {
    constructor() {
        super('MainMenu');
    }

    create() {
        // 1. Add the background image
        let bg = this.add.image(400, 225, 'bg');
        bg.setDisplaySize(800, 450);

        // 2. Add the semi-transparent overlay (the "masking layer")
        // A black rectangle with 60% opacity
        this.add.rectangle(400, 225, 800, 450, 0x000000, 0.6);

        // --- 3. Add the Buttons ---

        // Define a reusable style for the button text
        const buttonStyle = {
            fontFamily: 'Arial Black',
            fontSize: '38px',
            color: '#ffffff',
            stroke: '#000000',
            strokeThickness: 8,
            align: 'center'
        };

        // Play Button
        const playButton = this.add.text(400, 180, 'Play', buttonStyle).setOrigin(0.5);
        playButton.setInteractive(); // Make the text clickable

        // Play Button actions
        playButton.on('pointerover', () => {
            playButton.setStyle({ fill: '#bbf7d0' }); // Hover color
        });
        playButton.on('pointerout', () => {
            playButton.setStyle({ fill: '#ffffff' }); // Default color
        });
        playButton.on('pointerdown', () => {
            this.scene.start('Game'); // Start the main game scene on click
        });

        // Options Button
        const optionsButton = this.add.text(400, 260, 'Options', buttonStyle).setOrigin(0.5);
        optionsButton.setInteractive();

        // Options Button actions
        optionsButton.on('pointerover', () => {
            optionsButton.setStyle({ fill: '#bbf7d0' });
        });
        optionsButton.on('pointerout', () => {
            optionsButton.setStyle({ fill: '#ffffff' });
        });
        optionsButton.on('pointerdown', () => {
            console.log('Options button clicked!'); // Placeholder action
        });

        // Settings Button
        const settingsButton = this.add.text(400, 340, 'Settings', buttonStyle).setOrigin(0.5);
        settingsButton.setInteractive();

        // Settings Button actions
        settingsButton.on('pointerover', () => {
            settingsButton.setStyle({ fill: '#bbf7d0' });
        });
        settingsButton.on('pointerout', () => {
            settingsButton.setStyle({ fill: '#ffffff' });
        });
        settingsButton.on('pointerdown', () => {
            console.log('Settings button clicked!'); // Placeholder action
        });
    }
}