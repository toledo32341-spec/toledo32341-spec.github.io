$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
     toggleGrid();


    // TODO 2 - Create Platforms
createPlatform(350, 735, 200, 20, "hotpink"); // hotpink for the finished platform
  createPlatform(700, 735, 200, 20, "purple"); // pruple for the finished platform 
    createPlatform(700, 735, 200, 20, "red"); // red for the finished platform
      createPlatform(650, 500, 200, 20, "blue"); // blue for the finished platform 
        createPlatform(950, 500, 200, 20, "green"); // green for the finished platform 
          createPlatform(350, 350, 200, 20, "orange"); // orange for the finished platform 
            createPlatform(700, 350, 200, 20, "yellow"); // yellow for the finished platform 
              createPlatform(1050, 350, 200, 20, "cyan"); // cyan for the finished platform 


    // TODO 3 - Create Collectables
createCollectables("database", 335, 550, 0.5, 0.7);  
  createCollectables("diamond", 950, 550, 0.5, 0.7); 
    creatCollectables("grace", 630, 700, 0.5, 0.7); 
      createCollectables("kennedi", 300, 550, 0.5, 0.7);
        createCollectables("steve", 650, 550, 0.5, 0.7);  


    
    // TODO 4 - Create Cannons
createCannon("left", 0, 450,);   
  createCannon("left", 0, 225,);
    createCannon("top", 850, 0); 
      createCannon("top", 550, 0); 
        createCannon("right", 1400, 225); 
          createCannon("right", 1400, 450,); 
    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
