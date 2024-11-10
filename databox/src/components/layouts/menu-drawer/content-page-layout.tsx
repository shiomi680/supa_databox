import { AddToast } from "@/components/features/add-toast/add-toast";

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
  return <div style={{ marginBottom: "20px" }}>{children}</div>;
};

export const ContentFileLayout = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return <div style={{ marginTop: "20px" }}>{children}</div>;
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
