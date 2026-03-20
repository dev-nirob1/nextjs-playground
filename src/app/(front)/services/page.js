import Image from "next/image";

export default function Services() {

  const services = [
    {
      id: 1,
      title: "Web Development",
      description: "We build fast, responsive, and modern websites using the latest technologies.",
      image: "/images/web-dev.jpg",
    },
    {
      id: 2,
      title: "UI/UX Design",
      description: "Clean and user-friendly design that enhances user experience and engagement.",
      image: "/images/ui-ux.jpg",
    },
    {
      id: 3,
      title: "E-commerce Solutions",
      description: "Complete online store setup with secure payment and smooth user flow.",
      image: "/images/ecommerce.jpg",
    },
    {
      id: 4,
      title: "SEO Optimization",
      description: "Improve your website ranking and visibility on search engines.",
      image: "/images/seo.jpg",
    },
    {
      id: 5,
      title: "Mobile App Development",
      description: "Cross-platform mobile apps with high performance and great UI.",
      image: "/images/mobile-app.jpg",
    },
    {
      id: 6,
      title: "Maintenance & Support",
      description: "Ongoing support and maintenance to keep your website up-to-date.",
      image: "/images/support.jpg",
    },
  ];

  return <div className="container mx-auto py-8">
    <div className="grid grid-cols-3 gap-6">
      {services.map((service) => (
        <div className="p-2 rounded-lg bg-gray-200" key={service.id}>
          <div>
            <Image
              src={service.image}
              alt={service.title}
              width={500}
              height={300}
            />
          </div>
          <h2 className="text-xl font-bold mt-4">{service.title}</h2>
          <p className="mt-2 text-gray-600">{service.description}</p>
        </div>
      ))}
    </div>

  </div>
}
