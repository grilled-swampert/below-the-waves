import React, { useState } from "react";
import "./workPage.css";
import { Header } from "../../components/Header";
import workBackground from "../../assets/gifs/anime-quarium.gif";
import Footer from "../../components/footer/Footer";

// Sample images for each title (replace with actual paths)
const images = {
  "Coral Reef Restoration": "path/to/coral_reef_image.jpg",
  "Marine Debris Cleanup": "path/to/marine_debris_image.jpg",
  "Sustainable Fishing": "path/to/sustainable_fishing_image.jpg",
  "Ocean Acidification Research": "path/to/ocean_acidification_image.jpg",
  "Sea Turtle Protection": "path/to/sea_turtle_image.jpg",
  "Mangrove Reforestation": "path/to/mangrove_reforestation_image.jpg",
  "Whale Migration Tracking": "path/to/whale_migration_image.jpg",
  "Plastic Pollution Prevention": "path/to/plastic_pollution_image.jpg",
  "Seagrass Meadow Conservation": "path/to/seagrass_conservation_image.jpg",
  "Marine Protected Areas": "path/to/marine_protected_areas_image.jpg",
  "Shark Conservation": "path/to/shark_conservation_image.jpg",
  "Deep-Sea Ecosystem Study": "path/to/deep_sea_ecosystem_image.jpg",
};

// Detailed information about each title
const details = {
  "Coral Reef Restoration": {
    description: `Coral reefs are vital marine ecosystems that support approximately 25% of all marine species. 
    Our restoration efforts focus on multiple approaches:
    • Coral fragment cultivation and transplantation
    • Disease prevention and treatment
    • Water quality improvement
    • Temperature resilience research
    
    Current projects have successfully restored over 25,000 square meters of reef habitat, with a survival rate of 85% for transplanted corals. Our innovative "coral gardening" technique has shown promising results in accelerating reef recovery.
    
    Recent breakthroughs include the development of heat-resistant coral strains and the implementation of 3D-printed reef structures to support coral growth.`,
    images: [
      "/api/placeholder/800/600",
      "/api/placeholder/800/600",
      "/api/placeholder/800/600"
    ],
    keyStats: [
      "Support 25% of marine species",
      "85% survival rate in transplants",
      "25,000m² restored to date"
    ]
  },
  "Marine Debris Cleanup": {
    description: `Marine debris poses a critical threat to ocean ecosystems, with over 8 million tons of plastic entering our oceans annually. 
    Our comprehensive cleanup approach includes:
    • Regular coastal cleanup operations
    • Deep-sea debris removal
    • Microplastic filtration systems
    • Community engagement programs
    
    Through our initiatives, we've removed over 500,000 pounds of debris from marine environments and engaged 100,000+ volunteers worldwide. Our innovative floating debris collection systems have been deployed in major ocean gyres.
    
    We've also implemented advanced recycling programs that convert collected marine plastic into sustainable products, creating a circular economy model.`,
    images: [
      "/api/placeholder/800/600",
      "/api/placeholder/800/600",
      "/api/placeholder/800/600"
    ],
    keyStats: [
      "500,000+ lbs debris removed",
      "100,000+ volunteers engaged",
      "85% recycling rate"
    ]
  },
  "Sustainable Fishing": {
    description: `Sustainable fishing practices are crucial for maintaining healthy ocean ecosystems while supporting local communities. 
    Our program focuses on:
    • Implementation of quota systems
    • Development of selective fishing gear
    • Training in sustainable practices
    • Market support for sustainable seafood
    
    We've helped transition 150+ fishing communities to sustainable practices, protecting both marine life and livelihoods. Our program has resulted in a 30% increase in local fish stocks and a 45% increase in fishing community incomes.
    
    Advanced tracking systems and AI-powered monitoring help ensure compliance with sustainable fishing guidelines while protecting endangered species.`,
    images: [
      "/api/placeholder/800/600",
      "/api/placeholder/800/600",
      "/api/placeholder/800/600"
    ],
    keyStats: [
      "150+ communities supported",
      "30% increase in fish stocks",
      "45% higher income for fishers"
    ]
  },
  "Ocean Acidification Research": {
    description: `Ocean acidification is a critical threat to marine ecosystems, caused by increasing CO2 absorption in our oceans. 
    Our research program encompasses:
    • Long-term pH monitoring networks
    • Impact studies on marine organisms
    • Development of adaptation strategies
    • Policy advocacy and public education
    
    We maintain a network of 200+ monitoring stations worldwide, providing real-time data on ocean chemistry changes. Our research has identified several species of coral and shellfish that show promising adaptation capabilities.
    
    Recent breakthroughs include the development of local restoration techniques that can help buffer pH changes in critical marine habitats.`,
    images: [
      "/api/placeholder/800/600",
      "/api/placeholder/800/600",
      "/api/placeholder/800/600"
    ],
    keyStats: [
      "200+ monitoring stations",
      "15-year continuous data series",
      "50+ published research papers"
    ]
  },
  "Sea Turtle Protection": {
    description: `Sea turtles face numerous threats including habitat loss, poaching, and climate change. 
    Our protection program includes:
    • Nesting beach conservation
    • Satellite tracking programs
    • Rescue and rehabilitation
    • Anti-poaching initiatives
    
    We've protected over 1,000 nesting sites and successfully rehabilitated 500+ injured turtles. Our satellite tracking program has revealed crucial information about migration patterns and feeding grounds.
    
    Educational outreach has reduced poaching incidents by 75% in protected areas, while our artificial intelligence-based monitoring system helps predict and protect nesting activities.`,
    images: [
      "/api/placeholder/800/600",
      "/api/placeholder/800/600",
      "/api/placeholder/800/600"
    ],
    keyStats: [
      "1,000+ nesting sites protected",
      "500+ turtles rehabilitated",
      "75% reduction in poaching"
    ]
  },
  "Mangrove Reforestation": {
    description: `Mangrove forests are crucial coastal ecosystems that provide storm protection and carbon sequestration. 
    Our reforestation efforts include:
    • Community-based planting programs
    • Hydrological restoration
    • Carbon credit initiatives
    • Local economic development
    
    We've successfully restored 10,000+ hectares of mangrove forest, working with local communities to ensure long-term sustainability. Our projects have created new economic opportunities through sustainable harvest of mangrove products.
    
    Advanced drone technology and satellite mapping help us identify optimal restoration sites and monitor forest health.`,
    images: [
      "/api/placeholder/800/600",
      "/api/placeholder/800/600",
      "/api/placeholder/800/600"
    ],
    keyStats: [
      "10,000+ hectares restored",
      "500,000 tons CO2 sequestered",
      "1,000+ community jobs created"
    ]
  },
  "Whale Migration Tracking": {
    description: `Understanding whale migration patterns is crucial for their conservation and the health of marine ecosystems. 
    Our tracking program features:
    • Satellite tagging operations
    • Acoustic monitoring networks
    • DNA analysis studies
    • Ship strike prevention systems
    
    We've successfully tracked over 500 whales across 15 species, leading to the establishment of new marine protected areas and shipping lane modifications.
    
    Our real-time whale alert system has reduced ship strikes by 90% in major shipping lanes, while our acoustic monitoring has revealed previously unknown breeding grounds.`,
    images: [
      "/api/placeholder/800/600",
      "/api/placeholder/800/600",
      "/api/placeholder/800/600"
    ],
    keyStats: [
      "500+ whales tracked",
      "90% reduction in ship strikes",
      "15 species studied"
    ]
  },
  "Plastic Pollution Prevention": {
    description: `Preventing plastic pollution requires a multi-faceted approach addressing both sources and existing pollution. 
    Our program encompasses:
    • Source reduction initiatives
    • Alternative materials research
    • Policy advocacy
    • Educational campaigns
    
    We've helped implement plastic reduction policies in 50+ cities and developed innovative alternatives to single-use plastics. Our microplastic filtration technology has been adopted by 100+ wastewater treatment facilities.
    
    Recent innovations include biodegradable packaging alternatives and improved recycling technologies.`,
    images: [
      "/api/placeholder/800/600",
      "/api/placeholder/800/600",
      "/api/placeholder/800/600"
    ],
    keyStats: [
      "50+ cities implementing policies",
      "70% reduction in target areas",
      "1M+ students educated"
    ]
  },
  "Seagrass Meadow Conservation": {
    description: `Seagrass meadows are vital carbon sinks and nursery grounds for marine life. 
    Our conservation efforts include:
    • Habitat mapping and monitoring
    • Restoration projects
    • Water quality improvement
    • Boat impact mitigation
    
    We've protected and restored 5,000+ acres of seagrass habitat, supporting diverse marine life and storing significant amounts of carbon. Our innovative transplanting techniques have achieved a 75% survival rate.
    
    Advanced underwater imaging systems help us monitor meadow health and identify areas requiring intervention.`,
    images: [
      "/api/placeholder/800/600",
      "/api/placeholder/800/600",
      "/api/placeholder/800/600"
    ],
    keyStats: [
      "5,000+ acres protected",
      "75% transplant survival rate",
      "200,000 tons CO2 stored"
    ]
  },
  "Marine Protected Areas": {
    description: `Marine Protected Areas (MPAs) are crucial tools for ocean conservation and biodiversity protection. 
    Our MPA program includes:
    • Scientific assessment and planning
    • Enforcement support
    • Community co-management
    • Economic impact studies
    
    We've helped establish and manage 25+ MPAs covering over 50,000 square kilometers of ocean. Our community-based management approach has shown remarkable success in maintaining both ecosystem health and local livelihoods.
    
    Innovative monitoring systems using AI and drone technology help ensure effective protection of these vital areas.`,
    images: [
      "/api/placeholder/800/600",
      "/api/placeholder/800/600",
      "/api/placeholder/800/600"
    ],
    keyStats: [
      "25+ MPAs established",
      "50,000 km² protected",
      "200% increase in fish biomass"
    ]
  },
  "Shark Conservation": {
    description: `Sharks are crucial for maintaining healthy ocean ecosystems but face numerous threats. 
    Our conservation program includes:
    • Anti-finning initiatives
    • Population monitoring
    • Habitat protection
    • Public education campaigns
    
    We've helped secure protection for 15 shark species and established shark sanctuaries covering 500,000 square kilometers of ocean. Our research has revealed critical breeding grounds and migration routes.
    
    Advanced tracking technology and DNA analysis help us better understand and protect these magnificent creatures.`,
    images: [
      "/api/placeholder/800/600",
      "/api/placeholder/800/600",
      "/api/placeholder/800/600"
    ],
    keyStats: [
      "15 species protected",
      "500,000 km² sanctuary area",
      "80% reduction in finning"
    ]
  },
  "Deep-Sea Ecosystem Study": {
    description: `Deep-sea ecosystems remain largely unexplored yet face increasing threats from human activities. 
    Our research program includes:
    • ROV exploration missions
    • Biodiversity surveys
    • Impact assessment studies
    • Conservation planning
    
    We've discovered 100+ new species and documented numerous deep-sea habitats. Our research has led to the protection of several vulnerable seamount ecosystems and hydrothermal vent communities.
    
    Advanced submersible technology and environmental DNA analysis help us better understand these remote ecosystems.`,
    images: [
      "/api/placeholder/800/600",
      "/api/placeholder/800/600",
      "/api/placeholder/800/600"
    ],
    keyStats: [
      "100+ new species discovered",
      "50+ seamounts studied",
      "3,000m maximum depth surveyed"
    ]
  }
};

const WorkPage = () => {
  const [clickedTitle, setClickedTitle] = useState(null);  // Store clicked title

  const oceanConservationTitles = [
    "Coral Reef Restoration",
    "Marine Debris Cleanup",
    "Sustainable Fishing",
    "Ocean Acidification Research",
    "Sea Turtle Protection",
    "Mangrove Reforestation",
    "Whale Migration Tracking",
    "Plastic Pollution Prevention",
    "Seagrass Meadow Conservation",
    "Marine Protected Areas",
    "Shark Conservation",
    "Deep-Sea Ecosystem Study"
  ];

  const handleClick = (title) => {
    setClickedTitle(title);  // Set the clicked title
  };

  return (
    <div className="screen-grid">
      <Header />
      <div className="work-container">
        <img
          src={workBackground}
          alt="Work Background"
          className="work-background"
        />
        <div className="card">
          {oceanConservationTitles.map((title, index) => (
            <p key={index} onClick={() => handleClick(title)}>
              <span>{title}</span>
            </p>
          ))}
        </div>
        {clickedTitle && (
          <div className="fetch-status">
            <h3>{clickedTitle}</h3>
            <img src={details[clickedTitle].image} alt={clickedTitle} />
            <p>{details[clickedTitle].description}</p>
          </div>
        )}
        <Footer />
      </div>
    </div>
  );
};

export default WorkPage;
