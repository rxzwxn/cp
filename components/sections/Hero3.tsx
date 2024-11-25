
import Marquee from "react-fast-marquee";
import Link from "next/link"

export default function Hero3() {
	return (
		<>
			<section className="section-hero-3 position-relative fix section-padding">
				<div className="container">
					<div className="row align-items-center position-relative">
						<div className="col-lg-7 position-relative z-1 mb-lg-0 pb-10 mb-">
							<div className="text-start mb-lg-0 mb-5">
							
								<div className="d-flex align-items-center">
									<h1 className="ds-1 my-3 me-4 lh-1">Welcome to</h1>
									
								</div>
								<h1 className="ds-1 lh-1 m-0"style={{color :"#ff5733"}}>Cosmic Pulse Technologies.</h1>
								
								<p className="fs-5 text-900 my-6">
								Explore technology solutions with Cosmic Pulse <br />
								-- empowering innovation and possibilities
								</p>
								<Link href="#" className="btn btn-gradient mt-8"  >
									Get Free Quote
									<svg className="ms-2" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
										<path className="stroke-white" d="M17.25 15.25V6.75H8.75" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
										<path className="stroke-white" d="M17 7L6.75 17.25" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
									</svg>
								</Link>
								
							</div>
						</div>
						<div className="col-lg-7 position-xl-absolute mb-lg-10 top-50 end-0 translate-middle-lg-y z-0">
							<div className="row">
								<div className="col-6 align-self-end">
									<div className="border-5 border-white border rounded-4  mb-4 d-block d-xl-none">
										<img className="rounded-4" src="/assets/imgs/hero-3/img-soft.png" alt="infinia" />
									</div>
									<div className="border-5 border-white border rounded-4">
										<img className="rounded-4" src="/assets/imgs/hero-3/img-ai.png" alt="infinia" />
									</div>
								</div>
								<div className="col-6 align-self-end">
									<div className="border-5 border-white border rounded-4 mb-4">
										<img className="rounded-4" src="/assets/imgs/hero-3/img-web.png" alt="infinia" />
									</div>
									<div className="border-5 border-white border rounded-4">
										<img className="rounded-4" src="/assets/imgs/hero-3/img-soft-1.png" alt="infinia" />
									</div>
								</div>
							</div>
							
							<div className="position-absolute top-50 start-50 translate-middle">
								<div className="ellipse-primary" />
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}
