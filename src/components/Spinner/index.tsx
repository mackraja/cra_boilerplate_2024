import { Container, StyledSpinner } from "./styled.components";

interface SpinnerProps {
  zIndex?: string;
}

const Spinner = ({ zIndex }: SpinnerProps) => (
  <Container zIndex={zIndex}>
    <StyledSpinner />
  </Container>
);
export default Spinner;
