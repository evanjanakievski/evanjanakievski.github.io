import Image from "next/image";

export const metadata = {
  title: "Articulated Robot",
  description: "3 Degree of Freedom Articulated Robot",
};

export default function RoboticArm() {
  return (
    <div className="max-w-screen-lg mx-auto p-8 flex flex-col">
      <h1 className="text-5xl">Articulated Robot</h1>
      <h2 className="text-lg">In Development</h2>
      <h3 className="text-md">Skills and Technologies</h3>
      <p className="text-sm">
        SolidWorks, Project Planning, Mechanical Design, Arduino, Servos, C++
      </p>
      <br />
      <div className="flex justify-center">
        <Image src="/project-assets/robotic-arm/roboticArmBuild1.jpg" alt="Assembled payload" width={300} height={200} />
      </div>
      <div className="flex justify-center">
        <p>
          Assembled articulated arm
        </p>
      </div>
      <ul className="list-disc list-inside">
        <li>
          Designed a 3 degrees of freedom articulated robot in SolidWorks with one 
          servo mounted at the base and two used for the joints
        </li>
        <li>
          Programmed the arm to mimic the movements of the user’s hand, using 
          computer vision to recognize when a user specified hand gesture is 
          displayed
        </li>
        <li>
          Used inverse kinematics to convert the location of the user’s hand 
          and size of the bounding box from the camera to angles and PWM values 
          for the servos to mimic, moving the arm’s position to a specific 
          location
        </li>
        <li>
          Wired the servo motors to an Arduino Uno using a PCA9685 PWM motor 
          controller board and used I2C communication to send data from the camera
        </li>
      </ul>
      <br />
      <div>
        <p>
          Goal: design a 3 degree-of-freedom articulated robot that could mimic the
          user's hand movements
        </p>
        <br />
        <p>
          This project was started during my first semester of university. I wanted 
          to challenge myself with a project that required mechanical design and 
          programming. An articulated robot was something that came to mind and I 
          began researching electronics and how to wire it all together.
        </p>
        <br />
        <p>
          The articulated robot was designed in SolidWorks. I printed it out of PLA filament
          and assembled using appropriate fasteners. Servo motors were integrated into the 
          design as a direct drive for each degree of freedom. The 3D printed parts were 
          designed with weight saving holes to assist the motors with having the required 
          torque.  
        </p>
        <p>
          An Arduino Uno R4 was used as the microcontroller for the project. A servo motor 
          driver board was used to control the communication between the Arduino and the servos 
          using PWM. I2C protocal was used for communication between the Arduino and a computer 
          vision sensor. Using the sensor I was able to program the articulated robot to follow the 
          movements of the user's hand by training it to recognize a specific user gesture, which 
          indicates that the user wants the robot to mimic their movement. The bounding box that 
          is drawn around the user's hand is converted to a point in 3D space by using the position
          of the box and the size of the box. The x-location and y-location of the bounding box
          translated to a point on a 2D plane, but the height of the bounding box was correlated to 
          how close the user's hand was to the camera. This allowed for a depth value to be calculated 
          for the robot by using the max reach of the robot as the bounding box taking up the 
          camera's entire FOV, and a height of 1 pixel as being directly on top of the robot. These values
          allowed the robot to stay within a tolerance of about 85% of joint 2's range as outside of this 
          range could cause issues with moments and over torquing the motor. Inverse kinematics was 
          used to calculate ideal angles and PWM values for the motors, based on the values from the 
          bounding box. 
        </p>
      </div>
      <br/>
      <div>
        <div className="flex justify-center">
          <video width="320" height="240" controls>
            <source
              src="/project-assets/robotic-arm/arm1TestVid.mov"
              type="video/mp4"
            />
          </video>
          
        </div>
        <p>
          This video demonstrates the use of a specific gesture to inform the robot to follow the 
          user's movements and it also shows the robot following the vertical movements of the user's 
          hand.
        </p>
      </div>
      <br/>
      <div>
        
      </div>
    </div>
  );
}
