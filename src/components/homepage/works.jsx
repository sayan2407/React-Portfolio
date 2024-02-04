import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";
import INFO from "../../data/user";


const Works = () => {
	const work = INFO.works;
	console.log(work);
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Work"
				body={
					<div className="works-body">
						{work.map((item) => {
							return (
								<div key={item.companyName} className="work">
									<img
										src={item.companyLogo}
										alt={item.companyName}
										className="work-image"
									/>
									<div className="work-title">
										{item.companyName}
									</div>
									<div className="work-subtitle">
										{item.designation}
									</div>
									<div className="work-duration">
										{item.start} - {item.end}
									</div>
								</div>
							);
						})}
					</div>
				}
			/>
		</div>
	);
};

export default Works;
