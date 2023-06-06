import { Container } from "./styles"

export function Button({ label, onClick }) {
  return (
    <Container onClick={onClick}>
      {label}
    </Container>
  )
}
