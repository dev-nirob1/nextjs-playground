import Image from "next/image";

export default function Services() {

  const services = [
    {
      id: 1,
      title: "Web Development",
      description: "We build fast, responsive, and modern websites using the latest technologies.",
      image: "/bird.jpeg",
    },
    {
      id: 2,
      title: "UI/UX Design",
      description: "Clean and user-friendly design that enhances user experience and engagement.",
      image: "/bird-1.jpeg",
    },
    {
      id: 3,
      title: "E-commerce Solutions",
      description: "Complete online store setup with secure payment and smooth user flow.",
      image: "/bird-2.jpg",
    },
    {
      id: 4,
      title: "SEO Optimization",
      description: "Improve your website ranking and visibility on search engines.",
      image: "/bird-3.jpg",
    },
    {
      id: 5,
      title: "Mobile App Development",
      description: "Cross-platform mobile apps with high performance and great UI.",
      image: "/bird-4.jpg",
    },
    {
      id: 6,
      title: "Maintenance & Support",
      description: "Ongoing support and maintenance to keep your website up-to-date.",
      image: "/bird-5.jpg",
    },
  ];

  return <div className="container mx-auto py-8">
    <div className="grid grid-cols-3 gap-6">
      {services.map((service) => (
        <div className="p-2 rounded-lg bg-gray-200" key={service.id}>
          <div className=" h-72 w-full">
            <Image
              src={service.image}
              alt={service.title}
              width={500}
              height={300}
              className="w-full h-full object-cover rounded-t-lg"
            />
          </div>
          <h2 className="text-xl font-bold mt-4">{service.title}</h2>
          <p className="mt-2 text-gray-600">{service.description}</p>
        </div>
      ))}
    </div>

  </div>
}
