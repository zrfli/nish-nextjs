"use client";

import BaseCarousel from "@/components/(base)/(custom)/carousel";
import QuickAccess from "@/components/(base)/(custom)/quickacess";
import Announcements from "@/components/(base)/(content)/announcements";
import News from "@/components/(base)/(content)/news";
import Apply from "@/components/(base)/(custom)/apply";
import Events from "@/components/(base)/(content)/events";
import Research from "@/components/(base)/(content)/research";
import Achievements from "@/components/(base)/(content)/achievements";
import Application from "@/components/(base)/(custom)/application";
import Brands from "@/components/(base)/(custom)/brands";

export default function HomeContainer() {
  return <>
          <BaseCarousel />
          <QuickAccess />
          <Application />
          <Announcements />
          <News />
          <Apply />
          <Events />
          <Research />
          <Brands />
          <Achievements />
        </> 
}