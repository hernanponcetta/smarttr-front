import React from "react";
import LocationMarker from "./icons/LocationMarker";

const descriptionChop = (description) => {
  if (description.length > 45) {
    return description.substr(0, 45) + "...";
  }
  return description;
};

const stringMatched = (description, matched_substring) => {
  const head = description.substr(0, matched_substring.offset);
  const term = description.substr(
    matched_substring.offset,
    matched_substring.length + 1
  );
  const tail = description.substr(
    matched_substring.offset + 1 + matched_substring.length
  );
  return { head, term, tail };
};

const PlaceItem = ({ description, matched_substring }) => {
  description = descriptionChop(description);
  const { head, term, tail } = stringMatched(description, matched_substring);
  return (
    <div className="text-xs text-gray-600 py-2 hover:bg-gray-100 flex">
      <LocationMarker />
      <div className="self-center px-1">
        {head} <span className="font-bold text-gray-800">{term}</span> {tail}
      </div>
    </div>
  );
};

export default PlaceItem;