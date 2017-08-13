var canvas   = document.getElementById("canvas"),
    canvas2  = document.getElementById("canvas2"),
    canvas3  = document.getElementById("canvas3"),
    ctx  = canvas.getContext("2d"),
    ctx2 = canvas2.getContext("2d"),
    ctx3 = canvas3.getContext("2d"),

    // Image
    BgBack   = new Image,
    BgBack2	 = new Image,
    BgFrontA = new Image,
    BgFrontB = new Image,
    BgFrontC = new Image,
    BgMidA   = new Image,
    BgMidB   = new Image,
    BgMidC   = new Image,
    BgSupA   = new Image,
    BgSupB   = new Image,
    BgSupC   = new Image,
    Dragon   = new Image,
    Coin     = new Image;
    ObsBtA   = new Image;
    ObsBtB   = new Image;
    ObsTpA   = new Image;
    ObsTpB   = new Image;

    BgBack.src = 'background/bg_back_A.png';
    BgBack2.src = 'background/bg_back_B.png';
    BgFrontA.src = 'background/bg_front_ground_A.png';
    BgFrontB.src = 'background/bg_front_ground_B.png';
    BgFrontC.src = 'background/bg_front_ground_C.png';
    BgMidA.src = 'background/bg_middle_A.png';
    BgMidB.src = 'background/bg_middle_B.png';
    BgMidC.src = 'background/bg_middle_C.png';
    BgSupA.src = 'background/bg_superfront_A.png';
    BgSupB.src = 'background/bg_superfront_B.png';
    BgSupC.src = 'background/bg_superfront_C.png';
    Dragon.src = 'dragon.png';
    Coin.src   = 'spinning_coin_gold.png';
    ObsBtA.src = 'obstacle/obs_btm_A.png';
    ObsBtB.src = 'obstacle/obs_btm_B.png';
    ObsTpA.src = 'obstacle/obs_top_A.png';
    ObsTpB.src = 'obstacle/obs_top_B.png';


    window.onload = function () {


    	// Draw Background scrolling loop
        function drawLayerOne() {
            // ctx.drawImage(BgBack, 0, 0);
            var Bx = 0,
            	Bx2 = 800,
            	GlAx = 0,
            	GlBx = 800,
            	GlCx = 1600,
                BtBx = 240,
                BtAx = 1500,
                TpAx = 700,
                TpBx = 1400;

            setInterval(function () {
            	Bx -= 0.5;
            	Bx2 -= 0.5;
            	GlAx -= 2;
            	GlBx -= 2;
            	GlCx -= 2;

                BtBx -= 2;
                BtAx -= 2;
                TpAx -= 2;
                TpBx -= 2;

            	if (Bx == 0) {
            		Bx2 = 800;
            	}
        		if (Bx2 == 0) {
        			Bx = 800;
        		}

            	if (GlCx == 0) {
            		GlAx = 800;
            		GlBx = 1600;
            	}

            	if (GlAx == 0) {
            		GlBx = 800;
            		GlCx = 1600;
            	}

                if (BtAx == 0) {
                    BtBx = 800;
                }
                if (BtBx == 0) {
                    BtAx = 800;
                }
                if (TpAx == 0) {
                    TpBx = 800;
                }
                if (TpBx == 0) {
                    TpAx = 800;
                }

            	ctx.clearRect(0, 0, canvas.width, canvas.height);
            	ctx.drawImage(BgBack, Bx, 0);
            	ctx.drawImage(BgBack2, Bx2, 0);
                ctx.drawImage(BgMidA, GlAx, 0);
                ctx.drawImage(BgMidB, GlBx, 0);
                ctx.drawImage(BgMidC, GlCx, 0);
            	ctx.drawImage(BgFrontA, GlAx, 0);
            	ctx.drawImage(BgFrontB, GlBx, 0);
            	ctx.drawImage(BgFrontC, GlCx, 0);

                ctx.drawImage(ObsBtB, BtBx, 275);
                ctx.drawImage(ObsBtA, BtAx, 220);
                ctx.drawImage(ObsTpA, TpAx, 20);
                ctx.drawImage(ObsTpB, TpBx, 20);

	            ctx.drawImage(BgSupA, GlAx, 0);
	            ctx.drawImage(BgSupB, GlBx, 0);
	            ctx.drawImage(BgSupC, GlCx, 0);

            });
        };

        // Draw Loop Image of Dragon
        function dragonLayer() {
            var Dx = 0,
                Dy = 0,
                // Arrow Keys to Controll Dragon
                Dty = 200;
                Dtx = 100;

                document.addEventListener('keydown', event => {
                    if (event.keyCode === 37) {
                        Dtx-=5;
                    }
                    else if (event.keyCode === 39) {
                        Dtx+=5;
                    }
                    else if (event.keyCode === 40) {
                        Dty+=5;
                    }
                    else if (event.keyCode === 38) {
                        Dty-=5;
                    }
                });

            setInterval(function () {dragon()}, 50);

            function dragon() {
            	Dx += 260;

               if (Dx == 1560) {
                    Dx = 0;

                    if (Dy == 0) {
                        Dy = 260;
                    }
                    else if (Dy == 260) {
                        Dy = 0;
                    }
               }


                ctx2.clearRect(0, 0, canvas2.width, canvas2.height);
                ctx2.drawImage(Dragon, Dx, Dy, 250, 250, Dtx, Dty, 100, 100);

            }


        };


        // Add Text Score To the Game
        function gameScore() {
        	var score = 0,
        		life  = 3;

        	setInterval(function () {
        		score++;
        		ctx3.clearRect(0, 0, canvas3.width, canvas3.height);
	        	ctx3.font = "25px Arial";
	        	ctx3.fillStyle = "white";
	        	ctx3.fillText("Life : " + life,10,50);
	        	ctx3.fillText("Score : " + score,100,50);
        	}, 100);

    		
        }


        // Run function
        drawLayerOne();
        dragonLayer();

		gameScore();

    };


