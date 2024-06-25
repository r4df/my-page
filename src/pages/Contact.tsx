import React from 'react'
import Header from '../components/header/Header.tsx'
import Footer from '../components/footer/Footer.tsx'
import Container from 'react-bootstrap/Container'
export default function Contact() {
  return (
    <div>
      <Header />

      <Container>
        <main>
          <Container className="bg-body-tertiary m-3 p-5 rounded-3">
            <h1>Lorem Ipsum</h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </p>
          </Container>
        </main>
        <aside></aside>
      </Container>

      <Footer />
    </div>
  )
}
