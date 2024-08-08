import { Drone } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <header className="bg-blue-600 text-white p-4">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center">
            <Drone className="h-8 w-8 mr-2" />
            <h1 className="text-2xl font-bold">Drone Farm</h1>
          </div>
          <nav>
            <ul className="flex space-x-4">
              <li><a href="#about" className="hover:underline">About</a></li>
              <li><a href="#services" className="hover:underline">Services</a></li>
              <li><a href="#contact" className="hover:underline">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="flex-grow container mx-auto px-4 py-8">
        <section id="about" className="mb-12">
          <h2 className="text-3xl font-bold mb-4">About Our Drone Farm</h2>
          <p className="text-lg text-gray-700">
            Welcome to Drone Farm, where we cultivate the future of aerial technology. Our state-of-the-art facility houses a diverse fleet of drones for various applications, from agriculture to cinematography.
          </p>
        </section>

        <section id="services" className="mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Services</h2>
          <ul className="list-disc list-inside text-lg text-gray-700">
            <li>Aerial Photography and Videography</li>
            <li>Precision Agriculture</li>
            <li>Surveying and Mapping</li>
            <li>Drone Pilot Training</li>
            <li>Custom Drone Solutions</li>
          </ul>
        </section>

        <section id="contact" className="mb-12">
          <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
          <p className="text-lg text-gray-700">
            Interested in our services or want to learn more? Reach out to us at:
          </p>
          <p className="text-lg text-blue-600">contact@dronefarm.com</p>
        </section>
      </main>

      <footer className="bg-gray-800 text-white p-4">
        <div className="container mx-auto text-center">
          <p>&copy; 2023 Drone Farm. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
