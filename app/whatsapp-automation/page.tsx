import Layout from "@/components/layout/Layout";
import Blog from "@/components/sections/BlogSection";
import Contact from "@/components/sections/Contact";
import Coporation from "@/components/sections/Coporation";
import Education from "@/components/sections/Education";
import Experience from "@/components/sections/Experience";
import Home from "@/components/sections/Home";
import Projects from "@/components/sections/Projects";
import Service from "@/components/sections/Service";
import Skills from "@/components/sections/Skills";
import Static from "@/components/sections/Static";
import Testimonial from "@/components/sections/Testimonials";
import Hero from "@/components/whatsapp-automation/Hero";
import WhatsappAutomationLandingPageForm from "@/components/whatsapp-automation/LandingPageForm";
import "../whatsapp-automation.css";
import { getAllPosts } from "@/util/getAllBlogs";

export default async function HomePage() {
    const posts = getAllPosts();
    return (
        <>
            <Layout headerStyle={2} footerStyle={2} isNavLinks={false}>
                <Hero />
                <Static />
                <Service />
                <Testimonial />
                {/* <Coporation /> */}
                {/* <Experience /> */}
                {/* <Education />
                <Projects />
                <Skills /> */}

                <WhatsappAutomationLandingPageForm />
            </Layout>
        </>
    );
}
