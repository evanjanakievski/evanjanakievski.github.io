export default function FixedWingAirframe() {
  return (
    <div className="max-w-screen-lg mx-auto p-8 flex flex-col">
      <h1 className="text-5xl">Fixed-Wing Airframe</h1>
      <h2 className="text-lg">June 2024 -- November 2024</h2>
      <h2 className="text-lg">Student Design Team Project</h2>
      <h3 className="text-md">Skills and Technologies</h3>
      <p className="text-sm">
        SolidWorks, Project Planning, Mechanical Design, Arduino, Servos, C++
      </p>
      <br />
      <ul className="list-disc list-inside">
        <li>
          Designed a 4 degrees of freedom robotic arm in SolidWorks with servos
          mounted at the base, used for two joints, and to change the angle of
          the claw
        </li>
        <li>
          Programmed the arm to mimic the movements of the user’s hand using a
          HuskyLens ‐ AI Sensor using computer vision
        </li>
        <li>
          Wired the servo motors to an Arduino Uno using a PCA9685 PWM motor
          controller board powered by 5 volts and 10 amps
        </li>
      </ul>
      <br />
      <div className="flex justify-center">
        <video width="320" height="240" controls>
          <source
            src="/project-assets/robotic-arm/arm1TestVid.mov"
            type="video/mp4"
          />
        </video>
      </div>
    </div>
  );
}
