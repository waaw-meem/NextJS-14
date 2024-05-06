import Card from '@/app/components/card'
import Link from 'next/link'
import React from 'react'

function Notifiction() {
  return (
    <div>
     <Card> Notification
     <Link href='/complexdashboard/archived'>Archived</Link>
     </Card>

    </div>
  )
}

export default Notifiction
