/* globals Phaser:false */
// create BasicGame Class
BasicGame = {
    //orientated: false;
    
};

// create Game function in BasicGame
BasicGame.Game = function (game) {
};

// set Game function prototype
BasicGame.Game.prototype = {

    init: function () {
        // set up input max pointers
        this.input.maxPointers = 1;
        // set up stage disable visibility change
        this.stage.disableVisibilityChange = true;
        // Set up the scaling method used by the ScaleManager
        // Valid values for scaleMode are:
        // * EXACT_FIT
        // * NO_SCALE
        // * SHOW_ALL
        // * RESIZE
        // See http://docs.phaser.io/Phaser.ScaleManager.html for full document
        this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        this.scale.fullScreenScaleMode = Phaser.ScaleManager.SHOW_ALL;
        // If you wish to align your game in the middle of the page then you can
        // set this value to true. It will place a re-calculated margin-left
        // pixel value onto the canvas element which is updated on orientation /
        // resizing events. It doesn't care about any other DOM element that may
        // be on the page, it literally just sets the margin.
        this.scale.pageAlignHorizontally = true;
        this.scale.pageAlignVertically = true;
        // Force the orientation in landscape or portrait.
        // * Set first to true to force landscape. 
        // * Set second to true to force portrait.
        this.scale.forceOrientation(false, true);
        // Sets the callback that will be called when the window resize event
        // occurs, or if set the parent container changes dimensions. Use this 
        // to handle responsive game layout options. Note that the callback will
        // only be called if the ScaleManager.scaleMode is set to RESIZE.
        this.scale.setResizeCallback(this.gameResized, this);
        // Set screen size automatically based on the scaleMode. This is only
        // needed if ScaleMode is not set to RESIZE.
        this.scale.updateLayout(true);
        // Re-calculate scale mode and update screen size. This only applies if
        // ScaleMode is not set to RESIZE.
        this.scale.refresh();

    },
    

    preload: function () {

        // Here we load the assets required for our preloader (in this case a 
        // background and a loading bar)
        this.load.image('logo', 'img/phaser.png');
        
        this.load.image('meth', 'img/eth.png');
        this.load.image('score', 'img/score.png');
        this.load.image('highscore', 'img/highscore.png');
        this.load.atlasJSONHash('m', 'img/eyes.png', 'img/eyes.json');
        
        /*this.load.image('picture0', 'img/number/0.png');
        this.load.image('picture1', 'img/number/3.png');
        this.load.image('picture2', 'img/number/5.png');
        this.load.image('picture3', 'img/number/2.png');
        this.load.image('picture4', 'img/number/4.png');
        this.load.image('picture5', 'img/number/25.png');
        this.load.image('picture6', 'img/number/8.png');
        //kategori jawaban 2
        this.load.image('picture7', 'img/number/9.png');
        this.load.image('picture8', 'img/number/6.png');
        this.load.image('picture9', 'img/number/31.png');
        this.load.image('picture10', 'img/number/19.png');
        this.load.image('picture11', 'img/number/23.png');
        this.load.image('picture12', 'img/number/55.png');
        this.load.image('picture13', 'img/number/15.png');
        this.load.image('picture14', 'img/number/16.png');
        this.load.image('picture15', 'img/number/12.png');
        //kategori jawaban 3
        this.load.image('picture16', 'img/number/50.png');
        this.load.image('picture17', 'img/number/21.png');
        this.load.image('picture18', 'img/number/32.png');
        this.load.image('picture19', 'img/number/13.png');
        this.load.image('picture20', 'img/number/24.png');
        this.load.image('picture21', 'img/number/10.png');
        this.load.image('picture22', 'img/number/26.png');
        this.load.image('picture23', 'img/number/29.png');
        this.load.image('picture24', 'img/number/30.png');
        //kategori jawaban 4
        this.load.image('picture25', 'img/number/11.png');
        this.load.image('picture26', 'img/number/22.png');
        this.load.image('picture27', 'img/number/33.png');
        this.load.image('picture28', 'img/number/34.png');
        this.load.image('picture29', 'img/number/36.png');
        this.load.image('picture30', 'img/number/40.png');
        this.load.image('picture31', 'img/number/61.png');
        this.load.image('picture32', 'img/number/20.png');
        this.load.image('picture33', 'img/number/51.png');
        //kategori jawaban 5
        this.load.image('picture34', 'img/number/14.png');
        this.load.image('picture35', 'img/number/59.png');
        this.load.image('picture36', 'img/number/41.png');
        this.load.image('picture37', 'img/number/62.png');
        this.load.image('picture38', 'img/number/77.png');
        this.load.image('picture39', 'img/number/68.png');
        this.load.image('picture40', 'img/number/70.png');
        this.load.image('picture41', 'img/number/71.png');
        this.load.image('picture42', 'img/number/75.png');
        //kategori jawaban 6
        this.load.image('picture43', 'img/number/67.png');
        this.load.image('picture44', 'img/number/80.png');
        this.load.image('picture45', 'img/number/99.png');
        this.load.image('picture46', 'img/number/100.png');
        this.load.image('picture47', 'img/number/175.png');
        this.load.image('picture48', 'img/number/128.png');
        this.load.image('picture49', 'img/number/179.png');
        this.load.image('picture50', 'img/number/130.png');
        this.load.image('picture51', 'img/number/138.png');
        //kategori jawaban 7
        this.load.image('picture52', 'img/number/54.png');
        this.load.image('picture53', 'img/number/144.png');
        this.load.image('picture54', 'img/number/160.png');
        this.load.image('picture55', 'img/number/123.png');
        this.load.image('picture56', 'img/number/176.png');
        this.load.image('picture57', 'img/number/178.png');
        this.load.image('picture58', 'img/number/129.png');
        this.load.image('picture59', 'img/number/200.png');
        this.load.image('picture60', 'img/number/290.png');*/
    },

    create: function () {
        // Add logo to the center of the stage
        this.logo = this.add.sprite(
            this.world.centerX, // (centerX, centerY) is the center coordination
            this.world.centerY,
            'logo');
        // Set the anchor to the center of the sprite
        this.logo.anchor.setTo(0.5, 0.5);
        this.logo.scale.set(0.5, 0.5);
        this.logo.inputEnabled = true;
        this.logo.events.onInputDown.add(this.mainMenu, this);

    },
    
    update: function(){
      
        this.state.start('menu');
    },

    mainMenu: function(){
        this.state.start('menu');
    },
    
    gameResized: function (width, height) {

        // This could be handy if you need to do any extra processing if the 
        // game resizes. A resize could happen if for example swapping 
        // orientation on a device or resizing the browser window. Note that 
        // this callback is only really useful if you use a ScaleMode of RESIZE 
        // and place it inside your main game state.

    },
    
    enterIncorrectOrientation: function () {

        BasicGame.orientated = false;

        document.getElementById('orientation').style.display = 'block';

    },

    leaveIncorrectOrientation: function () {

        BasicGame.orientated = true;

        document.getElementById('orientation').style.display = 'none';

    }

};