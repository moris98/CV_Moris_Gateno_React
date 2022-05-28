import yahalom from "./media/yahalom.png";
const MilitaryService = () => {
  return (
    <div id="militaryService" class="jumbotron">
      <div class="jumbotron-info">
        <br />
        <h1>Military Service:</h1>
        <p>
          <p>
            <ul>
              <li>
                <b>Combat Commander</b>
              </li>
              <li>Elite Unit of The Combat Engineering Corps, YAHALOM</li>
            </ul>
          </p>
          <img class="logos" src={yahalom} />
        </p>
        <p>
          <ul>
            <li>Combat Fighter and team commander (2017-2020).</li>
            <li>
              Took part in the operation 'Northern Shield' as the commander of
              my team.
            </li>
          </ul>
        </p>
      </div>
    </div>
  );
};
export default MilitaryService;
