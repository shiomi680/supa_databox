import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select";
import { Revision } from "@/lib/crud/revision";
type RevisionSelectProps = {
  selected: Revision | undefined;
  revisions: Revision[];
  onChange: (revision: Revision) => void;
};

export const RevisionSelect: React.FC<RevisionSelectProps> = ({
  selected,
  revisions,
  onChange,
}) => {
  const handleChange = (value: string | undefined) => {
    if (value) {
      const revision = revisions.find((r) => r.Id === value);
      if (revision) {
        onChange(revision);
      }
    }
  };
  return (
    <div>
      <Select value={selected?.Id ?? undefined} onValueChange={handleChange}>
        <SelectTrigger>
          {selected?.RevisionDate} : {selected?.Description}
        </SelectTrigger>
        <SelectContent>
          {revisions?.map((revision) => (
            <SelectItem key={revision.Id} value={revision.Id}>
              {revision.RevisionDate} : {revision.Description}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};
