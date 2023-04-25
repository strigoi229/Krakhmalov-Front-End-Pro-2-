import React from "react";

export default function Smile(props) {

return (
    <li className="item">
            <img src={props.name} alt="smile"></img>
            <button
              className="button"
              onClick={() =>  props.countVotes(props.id) }
            >
               Vote (votes: {(props.smiles).map(smile => {
                if (props.id === smile.id) {
                    return smile.votes;
                  } else {
                    return null;
                  }
              })} )

            </button>
          </li>
)
}