export const InfoItem = ({
  title,
  value,
}: {
  title: string;
  value?: string;
}) => {
  return (
    <div className="flex flex-col sm:flex-row sm:justify-between py-4 border-b border-border last:border-b-0">
      <dt className="text-sm font-medium text-muted-foreground mb-1 sm:mb-0">
        {title}
      </dt>
      <dd className="text-sm text-foreground font-semibold">{value}</dd>
    </div>
  );
};
