    var textSizeSlider;

    var textColorButton;

    var textColorButton2;

    var textColorButton3;

    var inp;

    var currentLeg = 0;

    var radio;

    var currentBone = "Tibia";
     
    function setup() {
      createCanvas(400, 400);

      //serial
      //serial = new p5.SerialPort();
      //serial.on('data', serialEvent);
      //serial.on('error', serialError);
      //serial.open(portName);
     
      // create a slider (min, max, default value)
      textSizeSlider = createSlider(10, 170, 90);
      textSizeSlider.position(25, 25);

      // create clear button
      textColorButton = createButton('-');
      textColorButton.position(225, 25);
      textColorButton.mousePressed(decreaseLeg); 

      //text box
      //inp = createInput(''+currentLeg);
      //inp.position(350, 25);
      //inp.input(myInputEvent);

      textColorButton2 = createButton('+');
      textColorButton2.position(425, 25);
      textColorButton2.mousePressed(increaseLeg); 

      radio = createRadio('name');
      radio.option("tibia");
      radio.option("femur");
      radio.option("coxa");
      radio.position(550, 25);

      textColorButton3 = createButton('X');
      textColorButton3.position(825, 25);
      textColorButton3.mousePressed(setLeg); 
    }
     
    function draw() 
    {
      background(255);
      
      // display text
      noStroke();
      fill(100);
      textAlign(CENTER);
      textFont("Georgia");
      //textSize(textSizeSlider.value()); 
      var val = radio.value();
      if (val) currentBone = val;
      text("Leg: " + currentLeg + ", Bone: " + currentBone + ", Position: " + textSizeSlider.value(), 150, 100); 
      text('Leg '+currentLeg, 350, 25);
      port.write(textSizeSlider.value()+'!');
    }

    function decreaseLeg(){
      if (currentLeg > 0)
        currentLeg = currentLeg - 1;
      else 
        currentLeg = 5;
    }

    function increaseLeg(){
      if (currentLeg < 5)
        currentLeg = currentLeg + 1;
      else 
        currentLeg = 0;
    }

    function setLeg(){
      // port.write(textSizeSlider.value()+'!', function(err) {
      //   if (err) {
      //     return console.log('Error on write: ', err.message);
      //   }
      //   console.log('message written');
      // });
      console.log('X clicked');
    }