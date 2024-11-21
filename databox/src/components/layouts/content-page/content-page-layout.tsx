import { AddToast } from "@/components/features/add-toast/add-toast";
import { Card, CardContent } from "@/components/ui/card";
export const ContentPageLayout = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return <AddToast>{children}</AddToast>;
};

export const ContentRevisionLayout = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return <div style={{ marginBottom: "40px" }}>{children}</div>;
};

export const ContentFormLayout = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <Card style={{ marginTop: "20px" }}>
      <div style={{ padding: "20px" }}>
        <CardContent>{children}</CardContent>
      </div>
    </Card>
  );
};

export const ContentFileLayout = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return <div style={{ margin: "20px 0" }}>{children}</div>;
};

export const ContentSubmitLayout = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <div style={{ marginTop: "20px", display: "flex", alignItems: "center" }}>
      {children}
    </div>
  );
};
