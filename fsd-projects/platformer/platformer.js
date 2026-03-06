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
    createPlatform(250, 610, 200, 20, "hotpink"); // hotpink for the finished platform
    createPlatform(650, 610, 200, 20, "purple"); // pruple for the finished platform
    createPlatform(1050, 610, 200, 20, "red"); // red for the finished platform
    createPlatform(450, 500, 200, 20, "blue"); // blue for the finished platform
    createPlatform(850, 500, 200, 20, "green"); // green for the finished platform
    createPlatform(650, 365, 200, 20, "orange"); // orange for the finished platform
    createPlatform(250, 365, 200, 20, "yellow"); // yellow for the finished platform
    createPlatform(1050, 365, 200, 20, "cyan"); // cyan for the finished platform

    // TODO 3 - Create Collectables
    createCollectable("database", 310, 530, 3.5);
    createCollectable("diamond", 1150, 530, 3.5);
    createCollectable("grace", 335, 310, 3.5);
    createCollectable("kennedi", 750, 310, 3.5);
    createCollectable("steve", 1150, 310, 3.5);

    // TODO 4 - Create Cannons
    createCannon("left", 500, 1100);
    createCannon("left", 250, 1100);
    createCannon("top", 600, 1150);
    createCannon("top", 1050, 1150);
    createCannon("right", 1050, 225);
    createCannon("right", 1400, 450);

    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
