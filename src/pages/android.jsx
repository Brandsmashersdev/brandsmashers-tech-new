import React from "react";
import AndroidHeroSection from "@/components/HireDevelopers/Android/AndroidHeroSection";
import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer/footer";
import ServiceGrid from "@/components/HireDevelopers/Android/ServiceGrid";

export default function android() {
    return (
        <>
            <Navbar/>
            <AndroidHeroSection/>
            <ServiceGrid/>
            <Footer/>
        </>
    );
}