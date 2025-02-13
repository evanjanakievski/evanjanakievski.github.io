import Image from "next/image";

export const metadata = {
  title: "UAV Payload",
  description: "Design and Analysis of UAV Payload",
};

export default function PegasusCabin() {
  return (
    <div className="max-w-screen-lg mx-auto p-8 flex flex-col">
      <h1 className="text-5xl">UAV Payload</h1>
      <h2 className="text-lg">October 2023 -- March 2024</h2>
      <h2 className="text-lg">Student Design Team Project</h2>
      <h3 className="text-md">Skills and Technologies</h3>
      <p className="text-sm">
        SolidWorks, Ansys Fluent, Composite Layups, Project Management, 3D Printing, Machining
      </p>
      <br />
      <ul className="list-disc list-inside">
        <li>
          Designed an urban air mobility drone’s payload structure in SolidWorks 
          to be capable of carrying 4 passengers and additional cargo while 
          maintaining a lightweight and aerodynamic frame using carbon fiber 
          plates, carbon fiber tubes, and PEEK inserts
        </li>
        <li>
          Executed CFD simulations in Ansys Fluent, using a variety of CAD 
          designs to influence design decisions of the cabin shape, adjusting 
          the angles of attack to replicate the many different flying angles of 
          the drone, from 15 degrees to 45 degrees
        </li>
        <li>
          Designed a mounting system to allow service to be done to the cabin 
          or drone with more accessibility and less time wasted, while mounting 
          to existing geometry on the drone’s frame that was designed and 
          constructed before the payload requirements from competition
        </li>
      </ul>
      <br />
      <div className="flex justify-center">
        <Image src="/project-assets/cabin/WARG_Cabin_1.JPG" alt="Assembled payload" width={300} height={200} />
      </div>
      <div className="flex justify-center">
        <p>
          Assembled cabin payload
        </p>
      </div>
      <div>
        <p>
          This project was a part of a student design team's entry for the 2024 
          Aerial Evolution Association of Canada's student competition. The challenge
          for 2024 was to design an urban air mobility vehicle designed for efficiency. 
          The payload was deisgned to meet the requirement of carrying 4 passengers, 
          barbie dolls, and their respective luggage.
          To complete this project, a light weight and rigid frame was designed out of 
          carbon fiber panels and tubes, tapped PEEK inserts, and 3D prints. This can be 
          seen in the image below. 
        </p>
        <div className="flex justify-center">
          <Image src="/project-assets/cabin/WARG_Cabin_3.png" alt="CAD of payload" width={300} height={200} />
        </div>
        <div className="flex justify-center">
          <p>
            CAD of payload
          </p>
        </div>
        <br />
        <p>
          Designed for efficiency, CFD was used to optimize the external aero panels 
          that were on the payload. However, one constraint was the requirement to mount 
          seamlessly with the quadcopter frame, which was designed prior to the competition
          requirements. Because of this, the payload was not as optimized as possible, but 
          a drag coefficient of 1.14 was found while flying at an angle of 15 degrees. 
        </p>
        <br />
        <p>
          While completing CFD trials, many different angles were used to mimic the various 
          flight angles of the quadcopter as well as interchanging various designs for the 
          shape of the cabin. The initial shape was prioritized for horizontal travel, but 
          would push air up into the bottom plate of the carbon fiber causing more drag. For 
          the final designs, the payload front and back were designed to be flush with 
          the quadcopter's walls. The shape of the panel was not able to be as optimized due 
          to the requirement of being as tall as the barbie's seated height and the geometry 
          limitations of carbon fiber.
        </p>
        <br />
        <div className="flex justify-center">
          <Image src="/project-assets/cabin/WARG_Cabin_4.png" alt="Original design of payload" width={300} height={200} />
        </div>
        <div className="flex justify-center">
        <p>
          Original shape of payload
        </p>
        </div>
        <div className="flex justify-center">
          <Image src="/project-assets/cabin/WARG_Cabin_Panel.png" alt="CAD of final payload" width={300} height={200} />
        </div>
        <div className="flex justify-center">
        <p>
          Final shape of payload
        </p>
        </div>
        <p>
          Following the completion of the aeropanels' design, integration with the other aspects 
          of the payload was necessary. Seats for the passengers was added as well as a luggage 
          rack printed out of light weight PLA. The door cut out was made to allow the inside 
          of the payload to be accessed while mounted on the drone, but also to meet the realism 
          requirement from the competition.
        </p>
        <br />
        <div className="flex justify-center">
          <Image src="/project-assets/cabin/WARG_Cabin_2.jpg" alt="Payload mounted to quadcopter" width={300} height={200} />
        </div>
        <div className="flex justify-center">
        <p>
          Payload mounted to the quadcopter
        </p>
        </div>
      </div>
    </div>
  );
}
