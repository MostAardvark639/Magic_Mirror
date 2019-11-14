let capture
let tracker
let mouth = [44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 44]
let inner_mouth = [58, 59, 60, 61, 58]
let face = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 22, 21, 20, 19, 0, 1]
let left_eyebrow = [19, 20, 21, 22, 19]
let left_eye = [23, 66, 26, 65, 25, 64, 24, 63, 23]
let right_eye = [30, 69, 31, 70, 28, 67, 29, 68, 30]
let glasses_PNG
let hair_PNG
let stars
let left_horn
let right_horn
let horns_display

// let face_width

//let face_left_x = positions[1][0]
// let face_left_y = positions[1][1]
// let face_right_x = positions[13][0]
// let face_right_y = positions[13][1]
//let mouth_x1
// let mouth_y1
// let mouth_x1 = dist(positions[mouth[0][0]], positions[mouth[0][0]], positions[mouth[6][6]], positions[mouth[6][6]])
//let mouth_y1 = dist(positions[mouth[3][3]], positions[mouth[3][3]], positions[mouth[9][9]], positions[mouth[9][9]])
function preload() {
    glasses_PNG = loadImage('glasses_PNG.png')
    hair_PNG = loadImage('hair_PNG.png')
    stars = loadImage('stars.jpeg')
    left_horn = loadImage('left_horn.png')
    right_horn = loadImage('right_horn.png')
}


function setup() {


    createCanvas(windowWidth, windowHeight)
    capture = createCapture(VIDEO)
    capture.size(windowWidth, windowHeight)
    capture.hide()
    background(0) 
    //textureWrap(MIRROR)

    tracker = new clm.tracker()
    tracker.init()
    tracker.start(capture.elt)    

}


function draw() {    

    background(0)
    image(stars, 0, 0, windowWidth, windowHeight)
    //image(capture, 0, 0, capture.width, capture.height)

    let positions = tracker.getCurrentPosition()

    noStroke()
    fill(255)

    let i = 0
    while (i < positions.length) {

    ellipse(positions[i][0], positions[i][1], 4, 4)
   // text(i, positions[i][0], positions[i][1])

        i += 1
    }

    if (positions.length > 0) {
let l_eye_x = positions[27][0]
let l_eye_y = positions[27][1]
let r_eye_x = positions[32][0]
let r_eye_y = positions[32][1]
let face_left_x = positions[1][0]
let face_left_y = positions[1][1]
let face_right_x = positions[13][0]
let face_right_y = positions[13][1]
let face_width = dist(face_left_x, face_left_y, face_right_x, face_right_y)
//hair vars
let l_temple_x = positions[0][0]
let l_temple_y = positions[0][1]
let r_temple_x = positions[14][0]
let r_temple_y = positions[14][1]
let hair_width = dist(l_temple_x, l_temple_y, r_temple_x, r_temple_y)

//HORNS
let l_horn_x = positions[0][0]
let l_horn_y = positions[0][1]
let r_horn_x = positions[0][0]
let r_horn_y = positions[0][1]
//let 
  // print(face_width)
           


        //HORNS left & right
       
        //LEFT HORN
        let ratio_left_horn = left_horn.height / left_horn.width
        let w3 = face_width
        let h3 = w3 * ratio_left_horn
        
        push()
        if (horns_display = true) {
            image(left_horn, positions[19][0] - face_width / 1.7, positions[19][1] - 80, w3 * 3, h3 * 2)
        }
        pop()

        //RIGHT HORN
        let ratio_right_horn = right_horn.height / right_horn.width
        let w4 = face_width
        let h4 = w4 * ratio_right_horn
        image(right_horn, positions[15][0] - face_width / 5, positions[15][1] - 80, w4 * 3, h4 * 2)

        //face 
            push()
            strokeWeight(5)
            stroke(0, 255, 0)
            fill(120, 120, 120)
            beginShape()
            let f=0 ;

            while (f < face.length) {

                vertex(positions[face[f]][0], positions[face[f]][1])

                f++
            }
            endShape()
            pop()

            //HAIR 
            let ratio_hair = hair_PNG.height / hair_PNG.width 
            let w2 = hair_width
            let h2 = w2 * ratio_hair
            image(hair_PNG, positions[19][0] - w2 / 4.5, positions[19][1] - h2 * .5 , hair_width * 5, h2 * 3)


            //LEFT EYE (my right eye)
            push()
          
            strokeWeight(5)
            stroke(0, 255, 0)
            //fill(120, 120, 120)
            beginShape()
            let le=0 ;

            while (le < left_eye.length) {

                vertex(positions[left_eye[le]][0], positions[left_eye[le]][1])

                le++
            }
            endShape()
            pop()

        //RIGHT EYE (my left eye)
            push()
            strokeWeight(5)
            stroke(0, 255, 0)

            //fill(120, 120, 120)
            beginShape()
            let re=0 ;

            while (re < right_eye.length) {

                vertex(positions[right_eye[re]][0], positions[right_eye[re]][1])

                re++
            }
            endShape()
            pop()

        //Iris's
            push()
            fill(255, 0, 0)
            ellipse(positions[27][0], positions[27][1], 20, 20)
            ellipse(positions[32][0], positions[32][1], 20, 20)
            pop()
            push()
            strokeWeight(4)
            stroke(0)
            point(positions[27][0], positions[27][1])
            point(positions[32][0], positions[32][1])
            pop()




        //outer mouth
        push()
        stroke(0, 255, 0)
        strokeWeight(2)
        stroke
        fill(240)
        beginShape()
        let v=0 ;
        
        while (v < mouth.length) {
          
             vertex(positions[mouth[v]][0], positions[mouth[v]][1]);
             
             v++
       }
        endShape()
        pop()


        // //Glasses image(img, x, y, [width], [height]) make the glasses scale to the face
        // let ratio_glasses = glasses_PNG.height / glasses_PNG.width
        // let w = face_width
        // let h = w * ratio_glasses
        // image(glasses_PNG, positions[33][0] - w/2, positions[33][1] - h/2.2, w, h)


        //LOOKING AROUND
        // measure distances between features
        let noseX = positions[62][0]
        let noseY = positions[62][1]

        let leftNostrilX = positions[43][0]
        let leftNostrilY = positions[43][1]

        let rightNostrilX = positions[42][0]
        let rightNostrilY = positions[42][1]

        let distanceLeft = dist(noseX, noseY, leftNostrilX, leftNostrilY) 
        let distanceRight = dist(noseX, noseY, rightNostrilX, rightNostrilY)

        if (distanceLeft > distanceRight) {
            print('facing right')
            horns_display == true 
        } else {
            print('facing left')
        }

}
}



