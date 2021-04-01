import Link from 'next/link'
import React from 'react'

export default function DogHandler() {
  return (
    <div className={`content`}>
      <h1>DOG HANDLERS</h1>
      <p>We have trained <Link href="/dogs"><a>dogs</a></Link> and handlers that can provide an interim or long-term security presence to your business or grounds. Our highly trained dogs respond immediately to commands and provide a visual deterrent against any person attempting to commit crime at any premises. We have dogs capable of searching for drugs, people, firearms and explosives. We can also provide a handler if entry is being gained to premises with dogs running free.</p>
    </div>
  )
}