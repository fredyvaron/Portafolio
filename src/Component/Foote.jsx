import React from 'react'
import { Footer } from 'flowbite-react'
function Foote() {
  return (
    <div>
      <Footer container={true}>
  <Footer.Copyright
    href="#"
    by="fredy Alberto Varon™"
    year={2022}
  />
  <Footer.LinkGroup>
    <Footer.Link href="#">
      About
    </Footer.Link>

    <Footer.Link href="#">
      Contact
    </Footer.Link>
  </Footer.LinkGroup>
</Footer>
    </div>
  )
}

export default Foote