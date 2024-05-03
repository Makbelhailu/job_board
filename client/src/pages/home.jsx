import fb from "../assets/fb.svg";
import amazon from "../assets/amazon.svg";
import figma from "../assets/figma.svg";
import google from "../assets/google.svg";
import linkedin from "../assets/linkedin.svg";
import microsoft from "../assets/microsoft.svg";
import reactIcon from "../assets/react.svg";

const Home = () => {
	return (
		<div className="home w-full my-24 text-center relative">
			<div className="icons">
				<div className="absolute icon left-96 top-0 bg-white shadow-md">
					<img src={fb} alt="facebook icon" className="w-5 h-5" />
				</div>
				<div className="absolute icon left-32 top-40 bg-white shadow-md">
					<img src={amazon} alt="amazon icon" className="w-5 h-5" />
				</div>
				<div className="absolute icon left-96 top-64 shadow-md">
					<img src={figma} alt="figma icon" className="w-5 h-5" />
				</div>
				<div className="absolute icon right-72 top-12 bg-white shadow-md">
					<img src={google} alt="google icon" className="w-5 h-5" />
				</div>
				<div className="absolute icon right-36 top-32 bg-white shadow-md">
					<img src={linkedin} alt="linkedin icon" className="w-5 h-5" />
				</div>
				<div className="absolute icon right-80 top-80 bg-white shadow-md">
					<img src={microsoft} alt="microsoft icon" className="w-5 h-5" />
				</div>
				</div>
			<div className="content flex flex-col justify-center items-center">
				<div className="promo my-6">
					<p className="w-fit text-orangeish bg-orange-100 px-4 rounded-3xl py-1 text-xs font-semibold">
					No.1 Job Board website
					</p>
				</div>
				<div className="title font-bold text-7xl mb-8">
					<p>Search, Apply & </p>
					<p className="mt-3">
					Get Your <span className="text-secondary">Dream Job</span>
					</p>
				</div>
			<div className="description px-10 text-sm ">
				<p>But I must explain to you how all this mistaken idea  of denouncing pleasure <br/ > and praising pain  was born  and I will give you a </p>
			</div>
			<div className="buttons flex justify-center gap-10 mt-8 items-center">
				<button className="btn-primary px-4 py-3">Browse Jobs</button>
				<div className="felx flex justify-between items-center gap-5 cursor-pointer">
					<div className="play-button relative rounded-full bg-secondary w-10 h-10 flex justify-center items-center">
						<div className="play"></div>
					</div>
					<div className="text"><span>How it works?</span></div>
				</div>
			</div>
		</div>
		</div>
		);
};

export default Home;
