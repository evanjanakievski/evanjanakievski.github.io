export const metadata = {
  title: "Fixed-Wing Airframe",
  description: "Designing of Airframe and Integration of Fixed-Wing",
};

export default function FixedWingAirframe() {
  return (
    <div className="max-w-screen-lg mx-auto p-8 flex flex-col">
      <h1 className="text-5xl">Fixed-Wing Airframe</h1>
      <h2 className="text-lg">June 2024 -- November 2024</h2>
      <h2 className="text-lg">Student Design Team Project</h2>
      <h3 className="text-md">Skills and Technologies</h3>
      <p className="text-sm">
        SolidWorks, FEA, Ansys Fluent, Machining, Project Management, Integration
      </p>
      <br />
      <ul className="list-disc list-inside">
        <li>
          Designed an airframe to support a 5 kg, 1.7 meter wingspan fixed‐wing 
          plane capable of changing wings and empennages for research and 
          development, analyzing different airfoils, chord lengths, and control 
          surfaces
        </li>
        <li>
          Conducted FEA simulations, validating results with hand‐calculations 
          for the wing spars and tail spar
        </li>
        <li>
          Designed cases for electronics including ELRS receivers, a video 
          transmitter, an ESC, and a rangefinder and desgined a mounting
          bracket for the motor and FPV camera
        </li>
        <li>
          Organized a calculator to assist team members with design decisions 
          regarding motor selection, angle of attack, aspect ratio, stall speed, 
          and many other flight characteristics as well as determining geometries 
          of control surfaces based off necessary moment arms for the plane’s 
          geometries
        </li>
        <li>
          Machined parts on a mill and a lathe and used a waterjet to cut out 
          sheet metal parts allowing for quick assembly
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
