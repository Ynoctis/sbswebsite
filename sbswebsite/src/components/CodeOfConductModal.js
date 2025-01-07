// CodeOfConductModal.js
import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const CodeOfConductModal = ({ showModal, handleClose }) => {
    return (
        <Modal show={showModal} onHide={handleClose} size='xl'>
            <Modal.Header closeButton>
                <Modal.Title>Code of Conduct</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {/* Include your Code of Conduct document content here */}
                <h1 style={{ textAlign: 'center' }}>SUNNYBROOK SOCCER LEAGUE</h1>
                <h3 style={{ textAlign: 'center' }}>PLAYER CODE OF CONDUCT</h3>
                <h6>A.	All players, including waiting and new list players, must pay in full before playing. No refunds will be issued.</h6>
                <h6>B.	Players must obey team captains in matters of playing position, substitution, referee respect, and temporary transfers to opponent team in case of player shortages. Any player not following their captain&lsquo;s instructions will be reported to the executive and possibly have their membership cancelled without refund. </h6>
                <h6>C.	Any player who exits the field during game time without the expressed approval of their captain(s) is subject to disciplinary action, including, but not limited to, one or more game suspensions. </h6>
                <h6>D.	Any player who quits or abandons their team or does not play in of the 3 consecutive games without notifying of their captains, is subject to disciplinary action, including possibly having their membership cancelled without refund. </h6>
                <h6>E.	Referee abuse, the use of foul or abusive action or language toward a referee, will not be tolerated. Players will be respectful and always follow the referee’s instructions and decisions. </h6>
                <h6>F.	Slide tackles are not allowed in our league and an indirect free kick is the result. If it is aggressive, is repetitive or is a foul, then a direct free kick is given to the opponents and a yellow card to the transgressor. Sliding for the ball where there is no opponent close is not a slide tackle. This rule does not a apply where a goalkeeper is sliding to capture the ball with their hands. The referee’s judgement and decision are final.</h6>
                <h6>G.	Two (2) Yellow Cards: after two yellow cards, a minimum one game suspension (possibly more pending disciplinary committee/Executive decision). Yellow cards issued during the regular season do not carry over into the playoffs.</h6>
                <h6>H.	Four (4) Yellow Cards over the course of a single season: an automatic suspension for the rest of the season. Only the team captain(s) may appeal to the disciplinary committee/Executive.</h6>
                <h6>I.	If a red card is issued to a player, the referee will generate the report, after the game, and give it to the disciplinary committee for further action. </h6>
                <h6>J.	First (1st) Red Card: minimum one game suspension (possibly more pending disciplinary committee decision) </h6>
                <h6>K.	Second (2nd) Red Card: automatic suspension for the rest of the season without refund. Only the team captain(s) may appeal to the disciplinary committee.</h6>
                <h6>L.	If a player is yellow carded by the referee, their captains are asked to automatically remove that player from the field for a minimum of 5 minutes. A substitute player can be sent in for replacement. </h6>
                <h6>M.	Fighting will result in a one-year suspension pending a review by the disciplinary committee. The committee has the right to increase or decrease the penalty based on the events and level of participation of the participants. </h6>
                <h6>N.	The discipline committee can at its own discretion act on any potential infringement of the rules and/or game regardless of whether a card was issued by the referee. </h6>
                <h6 style={{fontWeight: 'bold'}}>All infractions of the above Code of Conduct will be reviewed by the Disciplinary Committee/Executive</h6>

            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default CodeOfConductModal;
