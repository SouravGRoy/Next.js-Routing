import Card from '@/components/card'
import React from 'react'
import Link from 'next/link'

export default function ArchivedNotifications() {
  return (
    <Card>
     <div>Archived Notifications</div> 
     <Link href={"/complex-dashboard/archived"}>Default</Link>
    </Card>
  )
}
