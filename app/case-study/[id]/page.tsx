"use client";

import Layout from "@/components/layout/Layout";
import Contact2 from "@/components/sections/Contact";
import Static2 from "@/components/sections/Static";
import SuccessStoryDetails from "@/components/sections/SuccessStoryDetails";
import { caseStudies } from "@/data/case-studies-data";

export default function CaseStudyPage() {
    const story = caseStudies.find(
        (item) => item.id === "manufacturing-service-time-cut"
    );

    // Optional: Handle case where no story is found
    if (!story) {
        return (
            <Layout headerStyle={2} footerStyle={2}>
                <div className="text-center py-20 text-red-600">
                    Case study not found.
                </div>
                <Static2 />
                <Contact2 />
            </Layout>
        );
    }

    return (
        <Layout headerStyle={2} footerStyle={2}>
            <SuccessStoryDetails story={story} />
            <Static2 />
            <Contact2 />
        </Layout>
    );
}
