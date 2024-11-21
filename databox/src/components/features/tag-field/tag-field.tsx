import { Tag, TagInput } from "emblor";
import React from "react";
import { Control } from "react-hook-form";
type TagsFieldProps = {
  name: string;
  control: Control;
};

export const TagsField: React.FC<TagsFieldProps> = ({}: TagsFieldProps) => {
  const [tags, setTags] = React.useState<Tag[]>([]);
  const [activeTagIndex, setActiveTagIndex] = React.useState<number | null>(
    null
  );
  const availableTags = [
    { id: "tag1", text: "tag1" },
    { id: "tag2", text: "tag2" },
    { id: "tag3", text: "tag3" },
  ]; // Add your tags here

  return (
    <TagInput
      placeholder="new tag"
      tags={tags}
      setTags={(newTags) => {
        setTags(newTags);
      }}
      activeTagIndex={activeTagIndex}
      setActiveTagIndex={setActiveTagIndex}
      styleClasses={{
        input: "w-full sm:max-w-[350px]",
      }}
      autocompleteOptions={availableTags}
      enableAutocomplete={true}
    />
  );
};
