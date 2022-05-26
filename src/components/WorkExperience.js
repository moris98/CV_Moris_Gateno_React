import behalflogo from'./media/Behalf-logo.svg'
const WorkExperience= () => {
    return (
        <div id="workExperience" class="jumbotron">
            <div class="jumbotron-info">
                <br></br>
                <h1>Work Experience:</h1>
                <p>
                    <b>Technical Support Engineer</b>
                    <br></br>
                    Behalf, Israel
                    <br></br><br></br>
                    <a href="https://www.behalf.com/"><img class="logos" src={behalflogo}></img></a>
                    <br></br><br></br>
                <ul>
                    <li>Work directly with Development, Finance, Customer Success and Risk teams in order to resolve complex
                        technical problems.</li>
                    <li>Maintain ownership of system and customers issues using Salesforce and Monday ticket creation
                        through its complete resolution.</li>
                </ul>
                </p>
            </div>
        </div>
    );
}
export default WorkExperience