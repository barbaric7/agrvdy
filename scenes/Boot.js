export class Boot extends Phaser.Scene
{
    constructor ()
    {
        super('Boot');
    }

    preload ()
    {


        this.load.image('bg', 'assets/bg.png');
    }

    create ()
    {
        this.scene.start('Preloader');
    }
}
