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
    createPlatform(250, 635, 200, 20, "hotpink"); // hotpink for the finished platform
    createPlatform(650, 635, 200, 20, "purple"); // pruple for the finished platform
    createPlatform(1065, 635, 200, 20, "red"); // red for the finished platform
    createPlatform(450, 515, 200, 20, "blue"); // blue for the finished platform
    createPlatform(860, 515, 200, 20, "green"); // green for the finished platform
    createPlatform(250, 400, 200, 20, "orange"); // orange for the finished platform
    createPlatform(650, 400, 200, 20, "yellow"); // yellow for the finished platform
    createPlatform(1065, 400, 200, 20, "cyan"); // cyan for the finished platform

    // TODO 3 - Create Collectables
    //createCollectable("database", 335, 550, 0.5, 0.7);
    //createCollectable("diamond", 950, 550, 0.5, 0.7);
    //creatCollectable("grace", 630, 700, 0.5, 0.7);
    //createCollectable("kennedi", 300, 550, 0.5, 0.7);
    //createCollectable("steve", 650, 550, 0.5, 0.7);

    createCollectable("database", 335, 550, 0.5, 0.7);
    createCollectable("diamond", 735, 550, 0.5, 0.7);
    createCollectable("steve", 1150, 450, 0.5, 0.7);
    createCollectable("kennedi", 550, 250, 0.5, 0.7);
    createCollectable("database", 950, 250, 0.5, 0.7);
    createCollectable("steve", 350, 350, 0.5, 0.7);
    createCollectable("kennedi", 1150, 350, 0.5, 0.7);
    // TODO 4 - Create Cannons
    createCannon("left", 300, 950);
    createCannon("left", 550, 950);
    createCannon("top", 600, 1050);
    createCannon("top", 1000, 1050);

    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});


//Update platformer