import { Container } from "./styles"

export function Input({ value }) {
  return (
    <Container>
        <input type="number" disabled value={value}/>
    </Container>
  )
}
