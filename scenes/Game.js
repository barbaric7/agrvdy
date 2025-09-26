export class Game extends Phaser.Scene {
    constructor() {
        super('Game');
        
        this.player = null;
        this.cursors = null;
    }

    create() {
        this.add.image(400, 225, 'bg').setDisplaySize(800, 450);

        this.player = this.physics.add.sprite(400, 200, 'girl_down_1');
        this.player.setCollideWorldBounds(true);

        this.cursors = this.input.keyboard.createCursorKeys();
    }

    update() {
        const speed = 160;
        this.player.setVelocity(0);

        if (this.cursors.left.isDown) {
            this.player.setVelocityX(-speed);
        } else if (this.cursors.right.isDown) {
            this.player.setVelocityX(speed);
        }

        if (this.cursors.up.isDown) {
            this.player.setVelocityY(-speed);
        } else if (this.cursors.down.isDown) {
            this.player.setVelocityY(speed);
        }

        if (this.cursors.left.isDown) {
            this.player.setFlipX(false);
            this.player.anims.play('girl-walk-side', true);
        } else if (this.cursors.right.isDown) {
            this.player.setFlipX(true); 
            this.player.anims.play('girl-walk-side', true);
        } else if (this.cursors.up.isDown) {
            this.player.anims.play('girl-walk-up', true);
        } else if (this.cursors.down.isDown) {
            this.player.anims.play('girl-walk-down', true);
        } else {
            this.player.anims.play('girl-idle');
        }
    }
}