const Home = () => {
	return (
		<div className="home w-full my-24 text-center relative">
		<div className="content flex flex-col justify-center items-center">
		<div className="promo my-6">
		<p className="w-fit text-orangeish bg-orange-100 px-4 rounded-3xl py-1 text-sm font-semibold">No.1 Jobhunt website</p>
		</div>
		<div className="title font-bold text-7xl mb-8">
		<p>
		Search, Apply & 
		</p>
		<p className="mt-3">
		Get Your <span className="text-secondary">Dream Job</span>
		</p>
		</div>
		<div className="description px-10 text-sm">
		<p>But I must explain to you how all this mistaken idea  of denouncing pleasure <br/ > and praising pain  was born  and I will give you a </p>
		</div>
		<div className="buttons flex justify-center gap-2 mt-8 items-center">
		<button className="btn-primary">Browse Jobs</button>
		<div className="btn-secondary">Browse Jobs</div>
		</div>
		</div>
		</div>
		);
};

export default Home;
