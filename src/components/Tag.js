import React, { useState, useEffect } from 'react';
import { Input } from 'reactstrap';

export default function Tag({ selectedTags, teamTags}) {
  const [ tags, setTags ] = useState(teamTags || []);

  useEffect(() => {
    setTags(teamTags || []);
  }, [ teamTags ]);

  const removeTags = (indexToRemove) => {
    setTags([...tags.filter((_, index) => index !== indexToRemove)]);
  }

  const addTags = (e) => {
    if (e.target.value !== "") {
      setTags([...tags, e.target.value]);
      selectedTags([...tags, e.target.value]);
      e.target.value = "";
    }
  };

  return (
    <div className="tags-input">
      <ul id="tags">
        { tags?.map((tag, index) => (
          <li key={ index } className="tag">
            <span className="tag-title">{ tag }</span>
            <span className="tag-close-icon"
              onClick={() => removeTags(index)}
              >
                X
            </span>
          </li>
        ))}
      </ul>
      <Input
        type="text"
        onKeyUp={ (e) => e.key === "Enter" ? addTags(e) : null }
      />
    </div>
  );
}
