import 'bootstrap/dist/css/bootstrap.min.css';

const Skill = ({skill}) => {
	const style = {
		width: skill.expertise + '%',
		color: 'white !important',
		padding: '10px'
	}
	return (
		<div
			className="progress"
			role="progressbar"
			aria-label="Info example"
			aria-valuenow={skill.expertise}
			aria-valuemin="0"
			aria-valuemax="100"
			style={{marginBottom: '10px', height: '30px'}}
		>
			<div class="progress-bar bg-info text-dark" style={style}>
				{skill.title} ~ {skill.expertise}%
			</div>
		</div>
	);
};

export default Skill;
