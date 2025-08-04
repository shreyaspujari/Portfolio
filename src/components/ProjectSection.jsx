import { ArrowRight, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Dynamicall Encrypted Key Exchange Protocol",
    description:
      "DEKX is a dynamic, cryptography-based vehicle access system that replaces static keys with one-time encrypted credentials. Built using NodeMCU and a mobile app, it offers secure, scalable, and lightweight authentication for modern vehicles.",
    image: "/projects/project1.png",
    tags: [
      "Arduino",
      " Python",
      " NodeMCU",
      " Cryptography",
      " Cybersecurity and Cyber Defense",
      " DEKXProtocol",
    ],
    gitHubURL: "https://github.com/DeeptimaanB/CyberSec-Project",
  },
  {
    id: 2,
    title: "Document Clustering and Semantic Search on Stack Overflow Data",
    description:
      "An intelligent search engine for Stack Overflow questions using sentence embeddings and clustering algorithms to enable topic-aware question discovery and retrieval.Built with Sentence-BERT, KMeans/DBSCAN/HDBSCAN, and Flask for interactive visualizations and tag-based semantic search.",
    image: "/projects/project2.png",
    tags: [
      " Semantic Search",
      " Sentence Transformers",
      " StackOverflowData",
      " FlaskApp",
      " Interactive Visualization",
      " NLP",
    ],
    gitHubURL:
      "https://github.com/shreyaspujari/DocumentClustering_Stackoverflow",
  },
  {
    id: 3,
    title: "Custom Key Management System Drive (KMS)",
    description:
      "A Flask-based Key Management System that encrypts data using AES and SHA-256, mimicking AWS KMS with support for master and user-defined keys. Designed for secure data encryption, retrieval, and two-level protection in storage applications.",
    image: "/projects/project3.png",
    tags: [
      " Key Management System",
      " Python",
      " Encryption",
      " SHA256",
      " PythonFlask",
      " AWS KMS",
      "SecureUploadDownload",
    ],
  },
];

export const ProjectSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="conatiner mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Fetaured <span className="text-primary"> Projects</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here is a list of some of the projects that I have worked on, I have
          had a good time working on them and hopefully you find these
          interesting too.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg-grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6 ">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                <p className="text--muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.gitHubURL}
                      className="text-foreground/80 hover:text-primary transition-colors duration-300 "
                      target="_blank"
                    >
                      <Github size={20}></Github>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12 ">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            href="https://github.com//shreyaspujari"
            target="_blank"
          >
            Check my GitHub <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
