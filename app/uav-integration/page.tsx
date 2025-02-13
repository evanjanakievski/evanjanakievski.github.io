export const metadata = {
  title: "UAV Integration",
  description: "Configuring Hardware for Quadcopters",
};

export default function UAVIntegration() {
  return (
    <div className="max-w-screen-lg mx-auto p-8 flex flex-col">
      <h1 className="text-5xl">UAV Integration</h1>
      <h2 className="text-lg">May 2024 -- Present</h2>
      <h2 className="text-lg">Student Design Team</h2>
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
