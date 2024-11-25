import Layout from "@/components/layout/Layout"
import Cta2 from "@/components/sections/Cta2"
import Faqs3 from "@/components/sections/Faqs3"
import Features6 from "@/components/sections/Features6"
import Hero3 from "@/components/sections/Hero3"
import Services2 from "@/components/sections/Services2"
import Static2 from "@/components/sections/Static2"
export default function Home() {

	return (
		<>

			<Layout headerStyle={1} footerStyle={1}>
				<Hero3 />
				<Services2 />
			
				<Cta2 />
				<Static2 />
				
				<Features6 />
				
				{/* <Pricing3 /> */}
				<Faqs3 />
				
				



			</Layout>
		</>
	)
}