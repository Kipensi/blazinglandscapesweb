PImage buffer1;
PImage buffer2;

void Setup(){
    size(600,400);
    buffer1 = createImage(width, height, RGB)
    buffer2 = createImage(width, height, RGB)
    
    buffer1.loadPixels();
    for (int x = 0; x < width; x++) {
    int y = height-1;
    int index = x + y * width;
    buffer1.pixels[index] = color(255);
    }
buffer1.updatePixels();
}
void draw(){
    background(0);
    image(buffer1,0,0);
    for (int y = 1; x < width-1; x++){
        for(int y = 1; y < height-1; y++){

            
        }


    }
}