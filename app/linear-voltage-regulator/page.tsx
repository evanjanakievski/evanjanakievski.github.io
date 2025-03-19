import Image from "next/image";

export const metadata = {
  title: "Linear Voltage Regulator",
  description: "Linear voltage regulator for powering 3V3 components on UAV",
};

export default function PegasusCabin() {
  return (
    <div className="max-w-screen-lg mx-auto p-8 flex flex-col">
      <h1 className="text-5xl">Linear Voltage Regulator</h1>
      <h2 className="text-lg">Aug 2024—Sept 2024</h2>
      <h2 className="text-lg">Student Design Team Project</h2>
      <h3 className="text-lg">Skills and Technologies:</h3>
      <p className="text-sm">
        Altium, circuits
      </p>
      <br />
      <ul className="list-disc list-inside">
        <li>
          Designed a 2-layer linear voltage regulator PCB to drop down 5V to 3V3 for use with 
          a UAV, powering onboard electronics
        </li>
        <li>
          Used an LDO integrated circuit, input and output capcitors, and feedback 
          resistors to maintain steady voltage supply
        </li>
        <li>
          Included status LEDs to indicate if correct voltage is being supplied and outputted
        </li>
      </ul>
      <br />
      <div>
        <p>
          I completed this project to learn more about PCB design and challenge myself to explore 
          another area of engineering. This was my first PCB I have designed and I am really intrigued
          and wanting to push myself to design another more complicated one that will include embedded 
          programming. Below are images of the shcematic and PCB layout. After receiving feedback from 
          more experienced students, some things I would adjust are ensuring there are no accdiental antennas 
          from the ground pour and adding more vias ensuring better ground connection. I would also try 
          to use board space more efficiently as I feel there is a lot of extra space.
        </p>
        <br />
        <div className="flex justify-center">
          <Image src="/project-assets/linear-voltage-regulator/linear-voltage-regulator-schematic.png" alt="Schematic of PCB" width={500} height={400} />
        </div>
        <div className="flex justify-center">
          <p>
            Figure 1: Schematic of the PCB
          </p>
        </div>
        <br />
        <div className="flex justify-center">
          <Image src="/project-assets/linear-voltage-regulator/linear-voltage-regulator-pcb-layout.png" alt="Layout of PCB" width={400} height={200} />
        </div>
        <div className="flex justify-center">
          <p>
            Figure 2: Layout of components
          </p>
        </div>
        <br />
        <div className="flex justify-center">
          <Image src="/project-assets/linear-voltage-regulator/linear-voltage-regulator-3d-square.png" alt="3D of PCB" width={400} height={200} />
        </div>
        <div className="flex justify-center">
          <p>
            Figure 3: 3D image of PCB
          </p>
        </div>
      </div>
    </div>
  );
}
