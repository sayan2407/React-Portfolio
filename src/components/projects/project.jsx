import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { faWordpressSimple, faReact } from '@fortawesome/free-brands-svg-icons';


import "./styles/project.css";

const Project = (props) => {
	const { tech, title, description, linkText, link } = props;
	console.log('logo ', tech);

	return (
		<React.Fragment>
			<div className="project">
				<Link to={link}>
					<div className="project-container">
						<div className="project-logo">
							{

								tech === 'react' ? (
									<FontAwesomeIcon icon={faReact} style={{width: '30px', height: 'auto'}} />
								) : (
									<FontAwesomeIcon icon={faWordpressSimple} style={{width: '30px', height: 'auto'}} />
								)
							}
							
						</div>
						<div className="project-title">{title}</div>
						<div className="project-description">{description}</div>
						<div className="project-link">
							<div className="project-link-icon">
								<FontAwesomeIcon icon={faLink} />
							</div>

							<div className="project-link-text">{linkText}</div>
						</div>
					</div>
				</Link>
			</div>
		</React.Fragment>
	);
};

export default Project;
