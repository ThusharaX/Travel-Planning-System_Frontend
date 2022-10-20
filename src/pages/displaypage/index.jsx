import React from "react";
import "../displaypage/displaypage.css";

const Displaypage = () => {
	return (
		<>
			<h1 className="mt-5 text-4xl text-center">Display page</h1>
			<div className="card1">
				<div class=" mx-auto lg:max-w-5xl mt-3">
					<div class="max-w-5xl mx-auto px-5 mb-3">
						<div class="mt-4 grid grid-cols-1  gap-x-6  lg:grid-cols-3 xl:gap-x-8">
							<div class="max-w-xl bg-white rounded-lg border border-gray-200 shadow-md White:bg-gray-800 white:border-gray-700">
								<a href="#">
									<center>
										<h1>Package name</h1>
										<br></br>
										<img
											src="https://mdbootstrap.com//img/Photos/Square/1.jpg"
											class="max-w-full h-48 rounded-full"
											alt="step3"
										/>
									</center>
								</a>
								<div class="p-5">
									<a href="#"></a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="card2">
				<div class="flex items-center justify-left min-h-screen">
					{" "}
					<div class="rounded-xl border p-5 shadow-md w-9/12 bg-white">
						<div class="flex w-full items-center justify-between border-b pb-3">
							<div class="flex items-center space-x-3">
								<div class="text-lg font-bold text-slate-700">Package name</div>
							</div>
							<div class="flex items-center space-x-8"></div>
						</div>

						<div class="mt-4 mb-6">
							<div class="mb-3 text-xl font-bold">Nulla sed leo tempus, feugiat velit vel, rhoncus neque?</div>
							<div class="text-sm text-neutral-600">
								Aliquam a tristique sapien, nec bibendum urna. Maecenas convallis dignissim turpis, non suscipit mauris
								interdum at. Morbi sed gravida nisl, a pharetra nulla. Etiam tincidunt turpis leo, ut mollis ipsum
								consectetur quis. Etiam faucibus est risus, ac condimentum mauris consequat nec. Curabitur eget feugiat
								massa
							</div>
						</div>

						<div>
							<div class="flex items-center justify-between text-slate-500"></div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Displaypage;
