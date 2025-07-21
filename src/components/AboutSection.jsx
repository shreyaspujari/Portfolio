import { Briefcase, Code, User } from "lucide-react"


export const AboutSection = () =>{
    return <section id="about" className="py-24 px-4 relative"> 
    
    <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            About <span className="text-primary">Me</span>
        </h2>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
            <h3 className="text-xl font-semibold">Passionate Cloud & Cybersecurity Practitioner | AI & Data Science Enthusiast | Builder of Secure Intelligent Systems</h3>
            <p className="text-muted-foreground">
                I'm Shreyas Nitin Pujari, a Master’s graduate in Computer Science from the University of Colorado, Denver, with a strong passion for cloud infrastructure, cybersecurity, artificial intelligence, and data science.
                Throughout my academic and professional journey, I’ve cultivated a well-balanced blend of theoretical knowledge and hands-on experience. My work spans across diverse domains—from developing scalable cloud-based IPAM solutions at Infoblox, to building intelligent conversational agents and process automation tools at Schneider Electric, and most recently, leading labs in cryptography and cyber defense as a Teaching Assistant.
            </p>
            <p className="text-muted-foreground">
                I take pride in solving real-world problems with practical, secure, and innovative solutions. Projects like DEKX (a dynamic encrypted key exchange protocol) and a custom-built key management system reflect my drive to build systems that are not only functional but secure by design. My interest in machine learning and NLP is evident through my work on semantic clustering of Stack Overflow data, where I combined unsupervised learning with web development to enhance information retrieval.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                <a href="#contact" className="cosmic-button">Get in Touch</a>
                <a href="/public/ShreyasNitinPujari_Resume.pdf" download className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300">Download Resume</a>
            </div>
        </div>
        <div className="grid grid-cols-1 gap-6 gap-6">
            <div className="gradient-border p-6 card-hover">
                <div className="flex items-start gap-4">
                    <div className="p-3 rounded-full bg-primary/10">
                        <Code className="h-6 w-6 text-primary"/>
                    </div>
                    <div className="text-left">
                        <h4 className="font-semibold text-lg"> Backend Development </h4>
                        <p className="text-muted-foreground">I specialize in building secure, scalable backend systems using Python, C#, and cloud-native tools. From RESTful APIs to infrastructure automation, I write clean, modular code that powers real-world applications with reliability and efficiency.</p>
                    </div>
                </div>
            </div>
            <div className="gradient-border p-6 card-hover">
                <div className="flex items-start gap-4">
                    <div className="p-3 rounded-full bg-primary/10">
                    <User className="h-6 w-6 text-primary"/>
                    </div>
                    <div className="text-left">
                        <h4 className="font-semibold text-lg"> User Experience & Interaction </h4>
                        <p className="text-muted-foreground">I design intuitive, user-focused solutions—from intelligent chatbots to interactive dashboards—that make technology easy and engaging. My goal is to bridge functionality and simplicity, delivering smooth, impactful digital experiences.</p>
                    </div>
                </div>
            </div>
            <div className="gradient-border p-6 card-hover">
                <div className="flex items-start gap-4">
                    <div className="p-3 rounded-full bg-primary/10">
                        <Briefcase className="h-6 w-6 text-primary"/>
                    </div>
                    <div className="text-left">
                        <h4 className="font-semibold text-lg"> Work Experience </h4>
                        <p className="text-muted-foreground">At Infoblox, I engineered automated IPAM workflows, deployed DNS configurations on AWS, and built cloud infrastructure solutions using Python and vRealize. At Schneider Electric, I developed enterprise-grade chatbots and conversational AI tools, integrating NLP and Power BI to streamline workflows and enhance internal user experience.</p>
                    </div>
                </div>
            </div>
        </div>
        <div>
        </div>
    </div>

    </div>

    </section>
}