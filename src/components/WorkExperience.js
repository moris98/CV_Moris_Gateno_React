import behalflogo from "./media/Behalf-logo.svg";
const WorkExperience = () => {
  return (
    <div id="workExperience" class="jumbotron">
      <div class="jumbotron-info">
        <br />
        <h1>Work Experience:</h1>
        <p>
          <p>
            <ul>
              <li>
                <b>Technical Support Engineer</b>
              </li>

              <li>Behalf, Israel</li>
            </ul>
          </p>
          <a href="https://www.behalf.com/" target="_blank">
            <img class="logos" src={behalflogo} />
          </a>
        </p>
        <p>
          <ul class="ulDots">
            <li>
              Work directly with Development, Finance, Customer Success and Risk
              teams in order to resolve complex technical problems.
            </li>
            <li>
              Maintain ownership of system and customers issues using Salesforce
              and Monday ticket creation through its complete resolution.
            </li>
          </ul>
        </p>
      </div>
    </div>
  );
};
export default WorkExperience;
