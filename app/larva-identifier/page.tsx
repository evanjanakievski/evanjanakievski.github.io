import Image from "next/image";

export const metadata = {
  title: "Larva Identifier",
  description: "Machine learning for crab larva identification",
};

export default function LarvaIdentifier() {
  return (
    <div className="max-w-screen-lg mx-auto p-8 flex flex-col">
          <h1 className="text-5xl">Larva Identifier</h1>
          <h2 className="text-lg">June 2022—Jan 2023</h2>
          <h3 className="text-lg">Skills and Technologies:</h3>
          <p className="text-sm">
            Python, Tensorflow, Project Planning
          </p>
          <br />
          <div className="flex justify-center">
            <Image src="/project-assets/larva-identifier/larvaIdentifierCard.jpg" alt="Megalopa crab larva" width={300} height={300} />
          </div>
          <div className="flex justify-center">
            <p>
              Photo of a crab larva in the megalopa stage, that was collected in from the Puger Sound.
            </p>
          </div>
          <ul className="list-disc list-inside">
            <li>
              Built an image classification model that identifies two crab larva stages with 90% accuracy
            </li>
            <li>
              Trained the model with TensorFlow Keras on a self‐made database using over 400 images
            </li>
            <li>
              Recognized in 2 science and engineering fairs with presentations to panels of judges reflecting 
              on the engineering process and the successes and failures
            </li>
          </ul>
          <br />
          <div>
            <p>
              As my research project for my Marine Chemistry course, a four-year research course I participated 
              in during high school, I pursued my interest in artificial intelligence by creating an image 
              classification model for crab larvae. There are two stages of crab larvae, megalopa and zoea. My 
              goal was to be able to distinguish the two types using a model that I trained using photographs 
              of larva from the Puget Sound in Washington.
            </p>
            <br />
            <h2 className="text-3xl">Collection of Carb Larvae</h2>
            <p>
              Crab larvae were collected at Point Defiance Marina using a light trap that a previous study had 
              constructed. I brought the crab larvae back to my high school to photograph them with a dissection 
              microscope on 2x power with a Moticam camera. Placing a singular live larva on a depression slide 
              allowed it to be photographed. Five to ten pictures were taken of each larva in different positions 
              and rotations of the organism. A total of 175 photographs of each type of larva were taken and 
              cropped into a square to center the organism.
            </p>
            <br />
          </div>
          <div>
            <h2 className="text-3xl">Creating and Training the Neural Network</h2>
            <p>
              Using 350 images taken of the larvae, each was named with either megalopae or zoeae in the filename 
              and stored in the corresponding directory. To create a larger sample size, data augmentation was 
              performed. The data augmentation used was flipping the image, rotating the image, zooming into the 
              image, and changing the contrast of the image. The images were adjusted to a ratio of 300 x 300 pixels.  
            </p>
            <p>
              To train the convolutional neural network, Python, Tensorflow, and CUDA (Compute Unified Device 
              Architecture) were used. An AMD Ryzen 7 5800X 8-core 3.8 GHz and a NVIDIA GeForce RTX 3070 Ti 8GB 
              GDDR6X were the hardware components used to train the model. A Sequential Keras model was used 
              consisting of four convolution blocks. A total of 100 epochs. with a batch size of 16 images, training 
              was conducted for image classification. A train-test split validation test was used, 80% of the images 
              were used for training and 20% were used for validation.
            </p>
            <br />
          </div>
          <div>
            <h2 className="text-3xl">Discussion</h2>
            <p>
              Looking at the resulting graphs, training was proven to be successful, however some heavy oscillation 
              in the graphs suggested overfitting. The accuracy ended around 0.9, which for my first machine learning 
              project, I was very happy with. There are many things I would approach differently if I attempted 
              this project today. Learning slightly more about something that interested me a lot was the major 
              goal of this project.
            </p>
            <p>
              There were many obstacles that arose, so I had to learn how to overcome these challenges. Collecting 
              the larvae had many challenges, such as difficulties with the trap working and the camera not 
              photographing the larvae properly. Programming something of this caliber was immense and a major 
              challenge for me. I made slight adjustments to my project as it went on, to make sure my final goal 
              was still accomplished.
            </p>
            <p>
              This project was culminated by me entering two engineering fairs. At these competitions I received 
              multiple awards, including 2nd Place in Robotics and Intelligent Machines at Washington State Science 
              and Engineering Fair, Excellence in Science and Engineering from the Office of Naval Research, and the 
              NOAA Taking the Pulse of the Planet Award.
            </p>
            <br/>
            <p>
              I also gave a presentation at my school as part of the senior symposium for the course this was a part of. If you are interested in listening to my presentation, here is the video:
            </p>
          </div>
          <div className="flex justify-center">
            <iframe width="80%" height="500"
              src="https://www.youtube.com/embed/8vXXy61q70U?start=8315">
            </iframe>
          </div>        
          <div className="flex justify-center">
            <p>
              If there are any errors with the video playing, my presentation begins at the 2:18:50 mark.
            </p>
          </div>
        </div>
  )
}