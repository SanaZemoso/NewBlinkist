import { styled } from "@mui/styles";

export interface BookDetailsProps {
  header: React.ReactNode;
  footer?: React.ReactNode;
  body?: React.ReactNode;
}

let BodyComponent = styled("div")({
  position: "relative",
  left: 300,
});

let FooterComponent = styled("div")({
    position: 'relative',
    top: 250
})

export const BookDetails = (props: BookDetailsProps) => {
  let { header, footer, body } = props;
  return (
    <>
      {header}
      <BodyComponent>{body}</BodyComponent>
      <FooterComponent>{footer}</FooterComponent>
    </>
  );
};
